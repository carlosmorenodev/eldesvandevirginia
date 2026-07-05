import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './page.module.css';

export default async function PostPage({ params }) {
  const { slug } = await params;
  const { data, content } = getPostBySlug(slug);

  const formattedDate = data.date
    ? new Date(data.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <div className={styles.page}>

      {/* ── Hero / imagen de portada ── */}
      <div className={styles.hero}>
        {data.coverImage ? (
          <>
            <Image
              src={data.coverImage}
              alt={data.title || ''}
              fill
              priority
              className={styles.heroImage}
              sizes="100vw"
            />
            <div className={styles.heroOverlay} />
          </>
        ) : (
          <div className={styles.heroPlaceholder}>
            <span className={styles.placeholderIcon}>✦</span>
          </div>
        )}
      </div>

      {/* ── Cabecera ── */}
      <header className={styles.header}>
        <Link href="/blog" className={styles.backLink}>
          ← Volver al blog
        </Link>

        {formattedDate && (
          <time className={styles.date}>{formattedDate}</time>
        )}

        <h1 className={styles.title}>{data.title}</h1>

        <div className={styles.divider}>
          <span className={styles.dividerIcon}>✦</span>
        </div>
      </header>

      {/* ── Contenido MDX ── */}
      <article className={styles.content}>
        <MDXRemote source={content} />
      </article>

    </div>
  );
}