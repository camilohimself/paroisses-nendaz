import { getServerSession } from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { PrismaAdapter } from '@auth/prisma-adapter'
// import { prisma } from '@/lib/prisma'
// import bcrypt from 'bcryptjs'
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma), // Disabled until database is configured
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Auth désactivée — à configurer avec une base de données
        // Voir: https://next-auth.js.org/providers/credentials
        console.warn('Auth: credentials provider not configured — returning null')
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt' as const
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/error'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!
        session.user.role = token.role as string
      }
      return session
    }
  }
}

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