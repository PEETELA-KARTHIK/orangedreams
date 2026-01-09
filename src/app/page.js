import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import PortfolioShowcase from '@/components/home/PortfolioShowcase'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import ContactSection from '@/components/home/ContactSection'

import ScrollSequence from '@/components/ui/ScrollSequence'

export default function Home() {
    return (
        <main>
            <ScrollSequence>
                <HeroSection />
            </ScrollSequence>
            <AboutSection />
            <ServicesSection />
            <PortfolioShowcase />
            <TestimonialsSection />
            <ContactSection />
        </main>
    )
}
