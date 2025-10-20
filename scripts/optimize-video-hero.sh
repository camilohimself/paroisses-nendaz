#!/bin/bash

# Script d'optimisation vidéo hero pour le web
# Réduit 184MB ProRes → 8MB MP4 optimisés

set -e

SOURCE="/Users/camilorivera/WORKSPACE-OSOM/PROJETS-EXTERNES/PAROISSES_NENDAZ/media-siteweb/video/VIDEO-HERO-PAROISSE.mov"
OUTPUT_DIR="$(pwd)/public/videos"

echo "🎬 Optimisation vidéo hero..."
echo "📂 Source: $SOURCE (184MB)"
echo "📂 Output: $OUTPUT_DIR"
echo ""

# Créer dossier de sortie
mkdir -p "$OUTPUT_DIR"

# 1. Version DESKTOP - 1280x720, 2000kbps, ~6.5MB
echo "🖥️  Génération version DESKTOP (1280x720, 2000kbps)..."
ffmpeg -i "$SOURCE" \
  -vf "scale=1280:720" \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -b:v 2000k \
  -maxrate 2500k \
  -bufsize 5000k \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  -y \
  "$OUTPUT_DIR/hero-desktop.mp4"

echo "✅ Desktop généré: $(ls -lh $OUTPUT_DIR/hero-desktop.mp4 | awk '{print $5}')"

# 2. Version MOBILE - 854x480, 1000kbps, ~3.3MB
echo ""
echo "📱 Génération version MOBILE (854x480, 1000kbps)..."
ffmpeg -i "$SOURCE" \
  -vf "scale=854:480" \
  -c:v libx264 \
  -preset slow \
  -crf 30 \
  -b:v 1000k \
  -maxrate 1200k \
  -bufsize 2000k \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  -y \
  "$OUTPUT_DIR/hero-mobile.mp4"

echo "✅ Mobile généré: $(ls -lh $OUTPUT_DIR/hero-mobile.mp4 | awk '{print $5}')"

# 3. Poster image (fallback + preview)
echo ""
echo "🖼️  Extraction poster image (frame 5s)..."
ffmpeg -i "$SOURCE" \
  -ss 00:00:05 \
  -vframes 1 \
  -vf "scale=1280:720" \
  -q:v 2 \
  -y \
  "$OUTPUT_DIR/hero-poster.jpg"

echo "✅ Poster généré: $(ls -lh $OUTPUT_DIR/hero-poster.jpg | awk '{print $5}')"

# Statistiques finales
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ OPTIMISATION TERMINÉE !"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 Fichiers générés:"
ls -lh "$OUTPUT_DIR" | tail -n +2 | awk '{print "  " $9 ": " $5}'
echo ""

DESKTOP_SIZE=$(stat -f%z "$OUTPUT_DIR/hero-desktop.mp4")
MOBILE_SIZE=$(stat -f%z "$OUTPUT_DIR/hero-mobile.mp4")
POSTER_SIZE=$(stat -f%z "$OUTPUT_DIR/hero-poster.jpg")
SOURCE_SIZE=184000000  # 184MB

REDUCTION=$((100 - (DESKTOP_SIZE * 100 / SOURCE_SIZE)))

echo "📉 Réduction poids:"
echo "  Desktop: 184MB → $(ls -lh $OUTPUT_DIR/hero-desktop.mp4 | awk '{print $5}') (-$REDUCTION%)"
echo "  Mobile:  184MB → $(ls -lh $OUTPUT_DIR/hero-mobile.mp4 | awk '{print $5}')"
echo ""
echo "🎯 Prêt pour intégration web !"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
