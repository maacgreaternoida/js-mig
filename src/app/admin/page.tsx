'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Admin.module.css';

export default function AdminDashboard() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
  }

  return (
    <div className={styles.dashWrap}>
      <div className={styles.dashCard}>
        <div className={styles.dashHeader}>
          <h1 className={styles.dashTitle}>Admin Dashboard</h1>
          <div className={styles.dashTopActions}>
            <button className={styles.secondaryBtn} onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <p className={styles.dashSubtitle}>Manage collected leads and future admin features from here.</p>

        <div className={styles.tileGrid}>
          <div className={styles.tile}>
            <h3 className={styles.tileTitle}>Leads</h3>
            <p className={styles.tileDesc}>View form submissions in a sortable table.</p>
            <Link href="/admin/leads" className={styles.tileBtn}>Open Leads</Link>
          </div>
          {/* Future tiles can go here */}
        </div>
      </div>
    </div>
  );
}


