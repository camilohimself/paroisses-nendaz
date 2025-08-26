import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function getAuthSession() {
  return await getServerSession(authOptions)
}

export function isAdmin(userRole?: string) {
  return userRole === 'ADMIN'
}

export function canEdit(userRole?: string) {
  return userRole === 'ADMIN' || userRole === 'EDITOR'
}

export function canContribute(userRole?: string) {
  return userRole === 'ADMIN' || userRole === 'EDITOR' || userRole === 'CONTRIBUTOR'
}