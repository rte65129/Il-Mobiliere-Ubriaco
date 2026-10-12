import Image from 'next/image';
import styles from './Collection.module.css';
import type { Items } from '../types/types';

const items: Items[] = [
  {
    id: '1',
    title: 'Обеденный стол «La Sbornia»',
    description:
      'Эксклюзивный асимметричный стол из массива тосканского ореха и карарского мрамора с эффектом лёгкого наклона ножек.',
    image: '/images/catalog/table-la-sbornia.jpg',
  },
  {
    id: '2',
    title: 'Лаунж-кресло «Il Sommelier»',
    description:
      'Анатомическое кресло в премиальной коже Nabuk, силуэт которого вдохновлён формой изящного винного бокала.',
    image: '/images/catalog/chair-il-sommelier.jpg',
  },
  {
    id: '3',
    title: 'Комод «Un deposito di felicità in bottiglie di vetro»',
    description:
      'Высокий комод из шпона морёного дуба с фрезерованным фасадом, создающим оптическую иллюзию «падающей» волны.',
    image: '/images/catalog/cabinet-barolo-vertigo.jpg',
  },
  {
    id: '4',
    title: 'Модульный диван «Amaretto Float»',
    description:
      'Парящий диван в роскошном итальянском букле со скруглёнными формами, навеянными тягучей эстетикой ликера.',
    image: '/images/catalog/sofa-amaretto-float.jpg',
  },
  {
    id: '5',
    title: 'Архитектурный стеллаж «Grappa Tilt»',
    description:
      'Дизайнерский стеллаж из закалённого тонированного стекла и травертина с иронично наклонёнными полками.',
    image: '/images/catalog/shelves-grappa-tilt.jpg',
  },
  {
    id: '6',
    title: 'Напольное зеркало «Prosecco Splash»',
    description:
      'Ростовое зеркало в массивной раме из муранского выдувного стекла с уникальной текстурой застывших пузырьков.',
    image: '/images/catalog/mirror-prosecco-splash.jpg',
  },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className={styles.section}
      aria-labelledby="collection-title"
    >
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>Каталог</p>
          <h2 id="collection-title" className={styles.title}>
            Коллекция
          </h2>
          <p className={styles.lead}>
            Шесть предметов, в которых итальянская школа дизайна встречается
            с натуральными материалами и ручной сборкой.
          </p>
        </header>

        <ul className={styles.grid}>
          {items.map((item, index) => (
            <li key={item.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                  priority={index === 0}
                />
              </div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
                <a
                  href={`#item-${item.id}`}
                  className={styles.more}
                  aria-label={`Подробнее: ${item.title}`}
                >
                  Подробнее
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}