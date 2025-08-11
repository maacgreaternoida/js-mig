import fs from 'fs';
import path from 'path';

export interface LeadRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  createdAt: string; // ISO string
}

const DATA_DIR = path.join(process.cwd(), '.data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

function ensureStore(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, '[]', 'utf8');
  }
}

export function readLeads(): LeadRecord[] {
  ensureStore();
  const raw = fs.readFileSync(LEADS_FILE, 'utf8');
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as LeadRecord[];
    return [];
  } catch {
    return [];
  }
}

export function appendLead(lead: Omit<LeadRecord, 'id' | 'createdAt'>): LeadRecord {
  ensureStore();
  const all = readLeads();
  const record: LeadRecord = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...lead,
  };
  all.unshift(record);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(all, null, 2), 'utf8');
  return record;
}


