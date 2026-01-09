import styles from './ContactSection.module.css'

export default function ContactSection() {
    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Ready to Create Magic?</h2>
                    <p>Let's discuss your vision and create something timeless together.</p>
                    <div className={styles.actions}>
                        <a href="mailto:hello@orangedreams.com" className={styles.primaryBtn}>Email Us</a>
                        <a href="https://wa.me/911234567890" className={styles.secondaryBtn}>WhatsApp Chat</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
