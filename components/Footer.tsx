import styles from './Footer.module.css';
import CurrentYear from './CurrentYear'

export default function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            Atelier<span>Formo</span>
          </a>
          <p className={styles.tagline}>
            Мебель ручной работы. Адресс
          </p>
        </div>

        <nav className={styles.cols} aria-label="Навигация в футере">
          <div>
            <h4 className={styles.colTitle}>Студия</h4>
            <a href="#">О нас</a>
            <a href="#">Мастера</a>
            <a href="#">Вакансии</a>
          </div>
          <div>
            <h4 className={styles.colTitle}>Клиентам</h4>
            <a href="#">Доставка</a>
            <a href="#">Гарантия</a>
            <a href="#">Уход за мебелью</a>
          </div>
          <div>
            <h4 className={styles.colTitle}>Контакты</h4>
            <a href="tel:+70000000000">+7 (000) 000-00-00</a>
            <a href="mailto:Il Mobiliere Ubriaco@gmail.com">Il Mobiliere Ubriaco@gmail.com</a>
            <a href="#">Telegram</a>
          </div>
        </nav>
      </div>

      <div className={styles.bottom}>
        <span>© <CurrentYear /> Il Mobiliere Ubriaco. Все права защищены.</span>
        <span>Политика конфиденциальности</span>
      </div>
    </footer>
  );
}