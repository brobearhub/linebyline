import styles from "./BlackFridayLanding.module.css";

const LOT_URL = "https://www.reg.ru/domain/shop/lot/linebyline.ru";

export function BlackFridayLanding() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.wordmark}>LINEBYLINE.RU</p>
        <p className={styles.headerDeadline}>ТОЛЬКО 11.11</p>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>BLACK FRIDAY</p>
          <h1 id="hero-title" className={styles.title}>
            <span>LINE</span>
            <span className={styles.titleAccent}>BY</span>
            <span>LINE</span>
            <span className={styles.titleAccent}>.</span>
            <span>RU</span>
          </h1>
          <p className={styles.description}>
            Премиальный домен для имени, которое запоминают.
          </p>
          <p className={styles.blackFridayWord}>BLACK FRIDAY</p>
        </div>

        <div className={styles.deadlineStamp} aria-label="Срок действия предложения">
          <span>ТОЛЬКО</span>
          <strong>11.11</strong>
        </div>
      </section>

      <section className={styles.offer} aria-label="Стоимость домена">
        <div>
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
          Забрать linebyline.ru <span aria-hidden>→</span>
        </a>
      </section>
    </main>
  );
}
