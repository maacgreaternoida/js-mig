import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | Login',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style
        // Hide global site header/footer inside admin routes
        dangerouslySetInnerHTML={{
          __html: `
            header, footer { display: none !important; }
            body { background: #0b1020; }
          `,
        }}
      />
      {children}
    </>
  );
}


