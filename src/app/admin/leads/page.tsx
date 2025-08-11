'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../Admin.module.css';

interface LeadRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  createdAt: string;
}

export default function LeadsPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('/api/leads', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load leads');
        const data = await res.json();
        if (active) setLeads(data.leads || []);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Failed to load leads';
        setError(message);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
  }

  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <h2>Leads</h2>
          <button className={styles.logout} onClick={handleLogout}>Logout</button>
        </div>
        {loading ? (
          <div className={styles.th} style={{ padding: 16 }}>Loading...</div>
        ) : error ? (
          <div className={styles.th} style={{ padding: 16, color: '#fca5a5' }}>{error}</div>
        ) : leads.length === 0 ? (
          <div className={styles.th} style={{ padding: 16 }}>No leads yet.</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Created</th>
                  <th className={styles.th}>Name</th>
                  <th className={styles.th}>Email</th>
                  <th className={styles.th}>Phone</th>
                  <th className={styles.th}>Course</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={`${lead.id ?? lead.createdAt}-${lead.email}`}>
                    <td className={`${styles.td} ${styles.date}`}>
                      {new Date(lead.createdAt).toLocaleString()}
                    </td>
                    <td className={styles.td}>{lead.name}</td>
                    <td className={styles.td}>{lead.email}</td>
                    <td className={styles.td}>{lead.phone}</td>
                    <td className={styles.td}>{lead.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}


