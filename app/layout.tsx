import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'F1 Reaction Test - Jeu de Réflexes',
  description: 'Testez vos réflexes comme un pilote de Formule 1 ! Cliquez dès que les feux s\'éteignent.',
  keywords: 'F1, formule 1, réaction, réflexes, jeu, test',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#e10600',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
