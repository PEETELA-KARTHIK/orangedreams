'use client'
import styles from './HeroSection.module.css'

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>OrangeDreams</h1>
                <p className={styles.tagline}>Est. 2024 • Fine Art Photography</p>
                <div style={{ marginTop: '2rem' }}>
                    <a href="/portfolio" className={styles.cta}>View Portfolio</a>
                </div>
            </div>
        </section>
    )
}
