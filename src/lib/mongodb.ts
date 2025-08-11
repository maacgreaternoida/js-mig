import { MongoClient, Collection } from 'mongodb';

export interface LeadDocument {
  _id?: unknown;
  name: string;
  email: string;
  phone: string;
  course: string;
  createdAt: string; // ISO string
}

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

async function getClient(): Promise<MongoClient> {
  if (client) return client;
  if (!clientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is not set');
    clientPromise = MongoClient.connect(uri, {
      // Keep defaults; add options here if needed
    });
  }
  client = await clientPromise;
  return client;
}

export async function getLeadsCollection(): Promise<Collection<LeadDocument>> {
  const dbName = process.env.MONGODB_DB || 'app';
  const cli = await getClient();
  const db = cli.db(dbName);
  return db.collection<LeadDocument>('leads');
}


