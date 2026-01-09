import Link from 'next/link'
import styles from './Footer.module.css'
import { Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <h3>OrangeDreams</h3>
                    <p>Capturing life's most beautiful moments.</p>
                </div>

                <div className={styles.links}>
                    <div className={styles.column}>
                        <h4>Studio</h4>
                        <Link href="/portfolio">Portfolio</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/about">About Us</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Connect</h4>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="mailto:hello@orangedreams.com">Email</a>
                        <a href="https://wa.me/1234567890">WhatsApp</a>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} OrangeDreams Photography. All rights reserved.</p>
            </div>
        </footer>
    )
}
