import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Коллекция 2010  Ручная работа</p>
          <h1 className={styles.title}>
            Мебель, <em>которая</em> переживёт тренды
          </h1>
          <p className={styles.subtitle}>
            Создаём предметы интерьера из массива дуба, ясеня и натуральных
            тканей. Минималистичный дизайн, продуманный до миллиметра.
          </p>

          <div className={styles.actions}>
            <a href="#collection" className={styles.cta}>
              Смотреть Коллекцию
            </a>
            <a href="#features" className={styles.link}>
              О мастерской
            </a>
          </div>

          <dl className={styles.stats}>
            <div>
              <dt>12 лет</dt>
              <dd>на рынке</dd>
            </div>
            <div>
              <dt>480+</dt>
              <dd>проектов</dd>
            </div>
          </dl>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.card} />
          <div className={styles.cardAccent} />
        </div>
      </div>
    </section>
  );
}