import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Sobre mí | El desván de Virginia',
  description: 'Conoce la historia detrás de El desván de Virginia, un proyecto artesanal de crochet hecho con paciencia, dedicación y mucho cariño.',
};

const values = [
  {
    icon: '🧶',
    title: 'Hecho a mano',
    text: 'Cada punto es mío. Ninguna pieza sale de una fábrica ni de una máquina.',
  },
  {
    icon: '✦',
    title: 'Diseño propio',
    text: 'Adapto patrones y creo mis propios diseños para que cada pieza sea única.',
  },
  {
    icon: '💛',
    title: 'Con cariño',
    text: 'Tejo con calma y sin prisa. La calidad de una pieza se nota en la intención.',
  },
  {
    icon: '🌿',
    title: 'Materiales cuidados',
    text: 'Elijo hilos de calidad que sean suaves, duraderos y bonitos al tacto.',
  },
];

export default function AboutMePage() {
  return (
    <div className={styles.page}>

      {/* ── Franja decorativa superior ── */}
      <div className={styles.topBanner}>
        <span className={styles.bannerText}>El desván de Virginia</span>
      </div>

      {/* ── Sección principal: foto + texto ── */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>

          {/* Foto */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/aboutme-image.jpg"
                alt="Foto de Virginia"
                fill
                className={styles.photo}
                sizes="(max-width: 768px) 80vw, 420px"
                priority
              />
            </div>
            <div className={styles.imageBadge}>✦ Hecho a mano ✦</div>
          </div>

          {/* Texto */}
          <div className={styles.textCol}>
            <span className={styles.eyebrow}>Sobre mí</span>
            <h1 className={styles.name}>Hola, soy Virginia</h1>
            <div className={styles.divider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerIcon}>✦</span>
              <span className={styles.dividerLine} />
            </div>
            <p className={styles.bio}>
              Desde siempre me ha gustado crear cosas con mis propias manos, y el crochet
              se ha convertido en mi forma favorita de expresar creatividad y cuidar cada
              detalle.
            </p>
            <p className={styles.bio}>
              Cada pieza que hago está tejida con paciencia, dedicación y mucho cariño.
              No es producción en serie — es tiempo real, hilo a hilo, pensando en quien
              va a recibir esa pieza.
            </p>
            <p className={styles.bio}>
              En esta web comparto una muestra de mis creaciones. Si quieres adquirir
              alguna, todas las ventas las gestiono a través de{' '}
              <a
                href="https://www.vinted.es"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                Vinted
              </a>
              , donde puedes ver disponibilidad y precios actualizados.
            </p>
            <a
              href="https://www.vinted.es"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Ver mi tienda en Vinted →
            </a>
          </div>

        </div>
      </section>

      {/* ── Sección valores ── */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <h2 className={styles.valuesTitle}>Cómo trabajo</h2>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className={styles.ctaSection}>
        <p className={styles.ctaQuote}>
          "Gracias por apoyar el trabajo hecho a mano."
        </p>
        <div className={styles.ctaLinks}>
          <Link href="/blog" className={styles.ctaSecondary}>
            Leer el blog
          </Link>
          <a
            href="https://www.vinted.es"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            Visitar Vinted
          </a>
        </div>
      </section>

    </div>
  );
}