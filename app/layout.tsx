import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Chinese Blossom Tree 3D',
  description: 'Interactive, realistic 3D Chinese blossom tree with procedural bark, seasonal petals, dynamic time-of-day lighting, and cinematic post-processing in Three.js.',
  openGraph: {
    title: 'Chinese Blossom Tree 3D',
    description: 'Interactive, realistic 3D Chinese blossom tree with procedural bark, seasonal petals, dynamic time-of-day lighting, and cinematic post-processing in Three.js.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinese Blossom Tree 3D',
    description: 'Interactive, realistic 3D Chinese blossom tree with procedural bark, seasonal petals, dynamic time-of-day lighting, and cinematic post-processing in Three.js.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
