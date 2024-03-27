import MainHeader from '@/components/main-header/main-header';
import './globals.css';
import { RootLayoutTypes } from '@/types'; 

export const metadata = {
  title: 'YourFoodies',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }: RootLayoutTypes) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
