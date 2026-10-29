const LOT_URL = "https://www.reg.ru/domain/shop/lot/linebyline.ru";
const OWNER_EMAIL = "photoburg@yandex.ru";

export default function MainPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ink text-cream">
      <header className="flex items-center justify-between gap-4 px-6 py-6 sm:px-10 sm:py-7 lg:px-14">
        <p className="text-[15px] tracking-wide text-cream/90 sm:text-base">
          linebyline.ru
        </p>
        <span className="shrink-0 rounded-full border border-gold/80 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-gold sm:px-4 sm:text-[11px]">
          Домен продаётся
        </span>
      </header>

      <section className="flex w-full min-w-0 flex-1 flex-col items-center justify-center px-6 pb-16 pt-8 text-center sm:px-10">
        <p className="max-w-full text-[10px] uppercase tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.28em]">
          Возможность для вашего проекта
        </p>
        <h1 className="mt-6 max-w-full text-[2.65rem] font-medium leading-none tracking-[-0.035em] text-cream sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          linebyline.ru
        </h1>
        <p className="mt-6 w-full max-w-xl text-base font-normal leading-relaxed text-mist sm:text-lg md:text-xl">
          Короткое имя. Пространство для большой идеи.
        </p>
        <a
          href={LOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/75 px-6 py-2.5 text-sm text-cream transition-colors hover:border-gold hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:text-[15px]"
        >
          Обсудить покупку домена
          <span aria-hidden>→</span>
        </a>
      </section>

      <div className="relative h-8" aria-hidden>
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gold/70" />
        <svg
          className="absolute left-[68%] top-0 h-8 w-[4.5rem] -translate-x-1/2 text-gold/70 sm:left-[72%]"
          viewBox="0 0 72 32"
          fill="none"
        >
          <path
            d="M0 20C10 20 14 20 20 12C26 4 32 2 36 2C40 2 46 4 52 12C58 20 62 20 72 20"
            fill="#121110"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="mx-0 mt-8 h-px bg-white/15" />

      <footer className="flex flex-col gap-4 px-6 py-6 text-[11px] uppercase tracking-[0.22em] text-mist sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-7 lg:px-14">
        <p>По вопросам приобретения</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 normal-case tracking-normal">
          <a
            href={`mailto:${OWNER_EMAIL}`}
            className="inline-flex items-center gap-2 text-sm text-cream/85 transition-colors hover:text-cream"
          >
            <EnvelopeIcon />
            Напишите владельцу
          </a>
          <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
          <a
            href={`mailto:${OWNER_EMAIL}`}
            className="text-sm text-mist transition-colors hover:text-cream"
          >
            {OWNER_EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="text-cream/70"
    >
      <rect
        x="1.25"
        y="3.25"
        width="13.5"
        height="9.5"
        rx="1.25"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M2 4.2 8 8.4 14 4.2"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
