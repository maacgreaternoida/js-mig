import { NextRequest, NextResponse } from 'next/server';
import { createSessionToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'change-me';
  if (!email || !password) {
    return NextResponse.json({ message: 'Missing credentials' }, { status: 400 });
  }
  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const expiresMs = Date.now() + 1000 * 60 * 60 * 8; // 8 hours
  const token = createSessionToken({ email, exp: expiresMs });
  const res = NextResponse.json({ ok: true });
  res.cookies.set('admin_session', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  });
  return res;
}


