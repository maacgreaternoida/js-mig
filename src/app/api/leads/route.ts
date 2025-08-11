import { NextRequest, NextResponse } from 'next/server';
import { appendLead, readLeads } from '@/lib/db';
import { getLeadsCollection } from '@/lib/mongodb';
import { verifySessionToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  // Protect leads listing with admin session
  const token = request.cookies.get('admin_session')?.value;
  const payload = verifySessionToken(token);
  if (!payload) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  if (process.env.MONGODB_URI) {
    try {
      const col = await getLeadsCollection();
      const leads = await col
        .find({}, { projection: { _id: 0 } })
        .sort({ createdAt: -1 })
        .toArray();
      return NextResponse.json({ leads });
    } catch (e) {
      // Fallback to file store on DB errors
      const leads = readLeads();
      return NextResponse.json({ leads });
    }
  }
  const leads = readLeads();
  return NextResponse.json({ leads });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, course } = body || {};
    if (!name || !email || !phone || !course) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    if (process.env.MONGODB_URI) {
      try {
        const col = await getLeadsCollection();
        const doc = { name, email, phone, course, createdAt: new Date().toISOString() };
        await col.insertOne(doc);
        return NextResponse.json({ lead: doc }, { status: 201 });
      } catch (e) {
        // Fallback to file store
        const created = appendLead({ name, email, phone, course });
        return NextResponse.json({ lead: created }, { status: 201 });
      }
    }
    const created = appendLead({ name, email, phone, course });
    return NextResponse.json({ lead: created }, { status: 201 });
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }
}


