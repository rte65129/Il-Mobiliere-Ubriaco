import styles from './Features.module.css'
import {Card} from '../types/types'

const features: Card[] = [
    {
        id: 'materials',
        tag: '01',
        title: 'Натуральные материалы',
        text: 'Массив дуба, ясеня и ореха. Ткани — лён, шерсть и букле от европейских производителей.',
    },
    {
        id: 'design',
        tag: '02',
        title: 'Авторский дизайн',
        text: 'Каждый предмет проектируется под конкретное пространство и образ жизни заказчика.',
    },
    {
        id: 'craft',
        tag: '03',
        title: 'Ручная сборка',
        text: 'Мастера с опытом более 10 лет. Соединения без видимого крепежа, шлифовка до 320 грит.',
    },
    {
        id: 'warranty',
        tag: '04',
        title: 'Гарантия 5 лет',
        text: 'Бесплатное сервисное обслуживание и восстановление покрытия в течение всего срока.',
    },
]

export default function Futures() {
    return (
        <section id='features' className={styles.section}>
            <div className={styles.inner}>
                <header className={styles.head}>
                    <h2 className={styles.title}>
                        Продумано до последней детали
                    </h2>     
                </header>
            </div>

                <ul className={styles.grid}>
                {features.map((f) => (
                    <li key={f.id} className={styles.card}>
                        <span className={styles.tag}>{f.tag}</span>
                        <h3 className={styles.cardTitle}>{f.title}</h3>
                        <p className={styles.cardText}>{f.text}</p>
                    </li>
                    ))}
                </ul>
        </section>
    )
}