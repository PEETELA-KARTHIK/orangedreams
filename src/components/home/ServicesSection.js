'use client'
import styles from './ServicesSection.module.css'
import ChromaGrid from '../ui/ChromaGrid'

const serviceItems = [
    {
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop",
        title: "Portraits",
        subtitle: "Cinematic personal branding.",
        handle: "Starting at ₹15k",
        borderColor: "#ff4d00",
        gradient: "linear-gradient(145deg, #1a1a1a, #000)",
        url: "/services"
    },
    {
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop",
        title: "Family",
        subtitle: "Timeless memories.",
        handle: "Starting at ₹25k",
        borderColor: "#ff4d00",
        gradient: "linear-gradient(145deg, #1a1a1a, #000)",
        url: "/services"
    },
    {
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop",
        title: "Newborn",
        subtitle: "Gentle artistic capture.",
        handle: "Starting at ₹20k",
        borderColor: "#ff4d00",
        gradient: "linear-gradient(145deg, #1a1a1a, #000)",
        url: "/services"
    },
    {
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
        title: "Commercial",
        subtitle: "High-impact visuals.",
        handle: "Custom Quote",
        borderColor: "#ff4d00",
        gradient: "linear-gradient(145deg, #1a1a1a, #000)",
        url: "/services"
    }
];

export default function ServicesSection() {
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Our Services</h2>
                <div style={{ height: 'auto', minHeight: '600px', width: '100%', position: 'relative' }}>
                    <ChromaGrid
                        items={serviceItems}
                        columns={4}
                        radius={300}
                    />
                </div>
            </div>
        </section>
    )
}
