import { ScrollToTop } from './components/ScrollToTop';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'TechWizard - Next js IT Solutions Services and Technology React Template',
  description:
    'TechWizard - your perfect pick for modern IT and technology websites. With its sleek design, seamless navigation, and TailwindCSS 3+ integration, "TechWizard" ensures a premium user experience on any device. Enjoy complimentary premium support, Google Fonts, and effortless customization across 2 Home Pages and 23+ Inner Pages. Supported 24/7 and equipped with detailed documentation, "TechWizard" is your shortcut to a professional and responsive online presence. Experience the magic of "TechWizard" today',
  openGraph: {
    title: 'TechWizard - Next js IT Solutions Services and Technology React Template',
    description:
      'TechWizard - your perfect pick for modern IT and technology websites. With its sleek design, seamless navigation, and TailwindCSS 3+ integration, "TechWizard" ensures a premium user experience on any device. Enjoy complimentary premium support, Google Fonts, and effortless customization across 2 Home Pages and 23+ Inner Pages. Supported 24/7 and equipped with detailed documentation, "TechWizard" is your shortcut to a professional and responsive online presence. Experience the magic of "TechWizard" today',
  },

  keywords: [
    'Next js',
    'React',
    'JavaScript',
    'It',
    'It services',
    'It company',
    'Tailwind CSS',
    'blog',
    'services',
    'modern services',
    'information technology',
    'agency',
    'digital agency',
    'creative agency',
  ],
  authors: [{ name: 'MkTemplateWizard', url: 'https://github.com/mkmonir' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
