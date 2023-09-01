import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
 const user = await prisma.user.findFirst()
  return NextResponse.json({ user })
}