
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/Modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import ClientOnly from './components/ClientOnly';
import LoginModal from './components/Modals/LoginModal';
import getCurrentUser from './action/getCurrentUser';
import RentModal from './components/Modals/RentModal';


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({ 
  subsets: ['latin'], 
  weight: '400'
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal/>
          <RentModal/>
          <Navbar currentUser={currentUser}/>
        {/* <ClientOnly/> */}
        {children}
      </body>
    </html>
  )
}
