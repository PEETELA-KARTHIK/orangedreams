'use client'
import styles from './TestimonialsSection.module.css'

const testimonials = [
    { text: "Every photo tells a story. OrangeDreams didn't just take pictures, they captured our essence.", author: "Priya & Rahul", role: "Wedding Clients" },
    { text: "Professional, artistic, and incredibly patient. The best studio experience we've had.", author: "Arjun Reddy", role: "Corporate Headshots" },
    { text: "The cinematic quality of their work is unmatched in Hyderabad. Truly premium.", author: "Sarah Thomas", role: "Fashion Brand" },
]

export default function TestimonialsSection() {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Client Stories</h2>
                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <p className={styles.quote}>"{t.text}"</p>
                            <div className={styles.author}>
                                <h4>{t.author}</h4>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
