import { headers } from 'next/headers'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <a href="#" className={styles.logo}>
                    <span>
                        Il Mobiliere Ubriaco
                    </span>
                </a>

                <nav className={styles.nav}>
                    <a href="">Коллекция</a>
                    <a href="">О нас</a>
                    <a href="">Контакты</a>
                </nav>

                <a href="#contacts" className={styles.cta}>
                    Мебель на заказ
                </a>
            </div>
        </header>
    )
}