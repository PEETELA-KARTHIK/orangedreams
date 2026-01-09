import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/layout/SmoothScroll'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

export const metadata = {
    title: 'OrangeDreams Photography',
    description: 'Premium fine-art and professional photography studio in Hyderabad.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body>
                <SmoothScroll>
                    <Header />
                    {children}
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    )
}
