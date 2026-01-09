'use client'
import styles from './PortfolioShowcase.module.css'
import DomeGallery from '../ui/DomeGallery'

// Sample images for the Dome Gallery
const portfolioImages = [
    // Corporate & Portraits
    { src: '/images/gallery/gallery-1.jpg', alt: 'Corporate Portrait' },
    { src: '/images/gallery/gallery-2.jpg', alt: 'Professional Headshot' },
    { src: '/images/gallery/gallery-3.jpg', alt: 'Executive Portrait' },
    // Family & Lifestyle
    { src: '/images/gallery/gallery-4.jpg', alt: 'Family Moment' },
    { src: '/images/gallery/gallery-5.jpg', alt: 'Mother and Child' },
    { src: '/images/gallery/gallery-6.jpg', alt: 'Lifestyle Photography' },
    // Kids & Moods
    { src: '/images/gallery/gallery-7.jpg', alt: 'Child Portrait' },
    { src: '/images/gallery/gallery-8.jpg', alt: 'Playful Moment' },
    { src: '/images/gallery/gallery-9.jpg', alt: 'Artistic Child Portrait' },
    { src: '/images/gallery/gallery-10.jpg', alt: 'Candid Child Photography' },
    // Nature & Scenery
    { src: '/images/gallery/gallery-11.jpg', alt: 'Scenic Landscape' },
    { src: '/images/gallery/gallery-12.jpg', alt: 'Nature Detail' },
    { src: '/images/gallery/gallery-13.jpg', alt: 'Outdoor Atmosphere' },
    { src: '/images/gallery/gallery-14.jpg', alt: 'Fine Art Nature' },
];

export default function PortfolioShowcase() {
    return (
        <section className={styles.showcase}>
            <div className={styles.header}>
                <h2 className={styles.title}>Selected Works</h2>
                <div className={styles.line}></div>
                <p className={styles.subtitle}>Explore our visual stories</p>
            </div>

            <div className={styles.galleryContainer}>
                <DomeGallery
                    images={portfolioImages}
                    fit={0.8}
                    minRadius={600}
                    maxRadius={1000}
                    maxVerticalRotationDeg={35}
                    dragSensitivity={10}
                    overlayBlurColor='#050505'
                />
            </div>
        </section>
    )
}
