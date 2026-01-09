import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>OrangeDreams</Link>
                <nav className={styles.nav}>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact" className={styles.bookBtn}>Book a Shoot</Link>
                </nav>
            </div>
        </header>
    )
}
