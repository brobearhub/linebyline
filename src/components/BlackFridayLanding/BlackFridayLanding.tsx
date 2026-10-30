import styles from "./BlackFridayLanding.module.css";

const LOT_URL = "https://www.reg.ru/domain/shop/lot/linebyline.ru";
const OWNER_EMAIL = "photoburg@yandex.ru";
const TELEGRAM_URL = "https://t.me/n1ko1sky";
const MAX_URL = "https://max.ru/u/f9LHodD0cOLP98OifRXEUV5qhVgx_Hk-fykoRXxVM4ASamJGMqsHY4f5JsU";

export function BlackFridayLanding() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.wordmark}>
          LINE<span className={styles.accent}>BY</span>LINE<span className={styles.accent}>.</span>RU
        </p>
        <div className={styles.headerContacts} aria-label="Контакты">
          <a className={styles.contactMuted} href={`mailto:${OWNER_EMAIL}`}>
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
        <p className={styles.headerDeadline}>ТОЛЬКО 11.11</p>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.look}>
          <img
            src="/ivory-suit.png"
            alt="Женский костюм цвета слоновой кости"
          />
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.blackFridayWord}>BLACK FRIDAY</p>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.titlePartLineA}>LINE</span>
            <span className={styles.titleGap} aria-hidden />
            <span className={`${styles.accent} ${styles.titlePartBy}`}>BY</span>
            <span className={styles.titlePartLineB}>LINE</span>
            <span className={`${styles.accent} ${styles.titlePartDot}`}>.</span>
            <span className={styles.titlePartRu}>RU</span>
          </h1>
          <p className={styles.description}>
            Премиальный домен для имени, которое запоминают.
          </p>
        </div>
      </section>

      <section className={styles.offer} aria-label="Стоимость домена">
        <div className={styles.offerInfo}>
          <p className={styles.offerLabel}>ЦЕНА BLACK FRIDAY</p>
          <p className={styles.price}>
            666 тыс. ₽ <del>850 тыс. ₽</del>
          </p>
        </div>
        <div className={styles.actions}>
          <a
            className={styles.cta}
            href={LOT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Купить домен
          </a>
          <div className={styles.contacts} aria-label="Контакты">
            <a className={styles.contactMuted} href={`mailto:${OWNER_EMAIL}`}>
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
        </div>
      </section>
    </main>
  );
}
