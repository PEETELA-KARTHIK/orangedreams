'use client'
import styles from './AboutSection.module.css'

import Image from 'next/image'

export default function AboutSection() {
    return (
        <section className={styles.about}>
            <div className={styles.contentGrid}>
                <div className={styles.imageCol}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/storytelling.png"
                            alt="The Art of Storytelling"
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
                <div className={styles.textCol}>
                    <h2 className={styles.title}>The Art of Storytelling</h2>
                    <p className={styles.text}>
                        At OrangeDreams, we believe photography is more than just capturing light—it's about preserving the raw emotion and timeless beauty of a moment.
                    </p>
                    <p className={styles.text}>
                        Based in Hyderabad, our studio specializes in creating cinematic, high-end visual narratives for families, brands, and individuals who value aesthetics and authenticity.
                    </p>
                    <a href="/about" className={styles.link}>Read Our Story →</a>
                </div>
            </div>
        </section>
    )
}
