import styles from "./BlackFridayLanding.module.css";

const LOT_URL = "https://www.reg.ru/domain/shop/lot/linebyline.ru";
const OWNER_EMAIL = "photoburg@yandex.ru";
const TELEGRAM_URL = "https://t.me/n1ko1sky";
const MAX_URL = "https://max.ru/u/f9LHodD0cOLP98OifRXEUV5qhVgx_Hk-fykoRXxVM4ASamJGMqsHY4f5JsU";

export function BlackFridayLanding() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
         <p className={styles.headerDeadline}>ТОЛЬКО 11.11</p>
        <p className={styles.wordmark}>LINEBYLINE.RU</p>
       
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.titlePartLineA}>LINE</span>
            <span className={styles.titleMobileGap} aria-hidden />
            <span className={`${styles.titleAccent} ${styles.titlePartBy}`}>BY</span>
            <span className={styles.titlePartLineB}>LINE</span>
            <span className={`${styles.titleAccent} ${styles.titlePartDot}`}>.</span>
            <span className={styles.titlePartRu}>RU</span>
          </h1>
          <p className={styles.description}>
            Премиальный домен для имени, которое запоминают.
          </p>
          <p className={styles.blackFridayWord}>BLACK FRIDAY</p>
        </div>
      </section>

      <section className={styles.offer} aria-label="Стоимость домена">
        <div className={styles.offerInfo}>
          <p className={styles.offerLabel}>ЦЕНА BLACK FRIDAY</p>
          <p className={styles.price}>
            666 тыс. ₽ <del>850 тыс. ₽</del>
          </p>
        </div>
        <a
          className={styles.cta}
          href={LOT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Купить домен
        </a>
        <div className={styles.contacts} aria-label="Контакты">
            <a className={styles.contactLink} href={`mailto:${OWNER_EMAIL}`}>
              {OWNER_EMAIL}
            </a>
            <a
                className={styles.contactLink}
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <a
                className={styles.contactLink}
                href={MAX_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                MAX
              </a>
          </div>
      </section>
    </main>
  );
}
