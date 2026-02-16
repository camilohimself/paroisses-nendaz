/**
 * Script de parsing du CSV saints enrichis → TypeScript
 * Usage: npx tsx scripts/parse-saints-csv.ts
 * Génère lib/saints-enrichis-data.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const CSV_PATH = join(__dirname, '../docs/data/saints-2026-complet.csv');
const OUTPUT_PATH = join(__dirname, '../lib/saints-enrichis-data.ts');

interface CsvRow {
  date: string;
  jour: string;
  rang: number;
  nom: string;
  description: string;
  priere: string;
}

function parseDate(dateStr: string): string {
  // "16/02/2026" → "02-16"
  const [day, month] = dateStr.split('/');
  return `${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

function escapeString(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

const csv = readFileSync(CSV_PATH, 'utf-8');
const lines = csv.split('\n').filter((l) => l.trim());

// Skip header
const rows: CsvRow[] = [];
for (let i = 1; i < lines.length; i++) {
  const parts = lines[i].split(';');
  if (parts.length < 6) continue;
  rows.push({
    date: parts[0],
    jour: parts[1],
    rang: parseInt(parts[2], 10),
    nom: parts[3],
    description: parts[4],
    priere: parts[5],
  });
}

// Group by date key (MM-DD)
const grouped = new Map<string, CsvRow[]>();
for (const row of rows) {
  const key = parseDate(row.date);
  if (!grouped.has(key)) grouped.set(key, []);
  grouped.get(key)!.push(row);
}

// Sort each group by rang
for (const [, saints] of grouped) {
  saints.sort((a, b) => a.rang - b.rang);
}

// Generate TypeScript
const sortedKeys = [...grouped.keys()].sort();

let output = `/**
 * Saints enrichis 2026 — Données validées par le curé
 * Généré automatiquement depuis docs/data/saints-2026-complet.csv
 * ${rows.length} entrées, ${sortedKeys.length} jours (16 fév — 31 déc 2026)
 *
 * Ne pas modifier manuellement — relancer le script :
 * npx tsx scripts/parse-saints-csv.ts
 */

export interface SaintEnrichi {
  rang: number;
  nom: string;
  description: string;
  priere: string;
}

/**
 * Clé: "MM-DD" → tableau de saints triés par rang
 * Rang 1 = saint principal, rang 2-3 = secondaires
 */
export const SAINTS_ENRICHIS_2026: Record<string, SaintEnrichi[]> = {\n`;

// Group keys by month for readability
let currentMonth = '';
for (const key of sortedKeys) {
  const month = key.split('-')[0];
  if (month !== currentMonth) {
    const monthNames: Record<string, string> = {
      '01': 'JANVIER', '02': 'FÉVRIER', '03': 'MARS', '04': 'AVRIL',
      '05': 'MAI', '06': 'JUIN', '07': 'JUILLET', '08': 'AOÛT',
      '09': 'SEPTEMBRE', '10': 'OCTOBRE', '11': 'NOVEMBRE', '12': 'DÉCEMBRE',
    };
    if (currentMonth) output += '\n';
    output += `  // ========== ${monthNames[month]} ==========\n`;
    currentMonth = month;
  }

  const saints = grouped.get(key)!;
  output += `  '${key}': [\n`;
  for (const s of saints) {
    output += `    { rang: ${s.rang}, nom: '${escapeString(s.nom)}', description: '${escapeString(s.description)}', priere: '${escapeString(s.priere)}' },\n`;
  }
  output += `  ],\n`;
}

output += `};\n`;

writeFileSync(OUTPUT_PATH, output, 'utf-8');
console.log(`Généré: ${OUTPUT_PATH}`);
console.log(`${rows.length} saints, ${sortedKeys.length} jours`);
