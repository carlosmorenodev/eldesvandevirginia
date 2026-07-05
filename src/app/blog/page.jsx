import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import styles from './page.module.css';

export const metadata = {
  title: 'Blog | El desván de Virginia',
  description: 'Artículos sobre crochet, manualidades y creatividad textil.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>El Blog</h1>
        <p className={styles.subtitle}>Artículos sobre crochet, manualidades y mucho más</p>
      </header>

      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.card}>
            <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
              {post.coverImage ? (
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.coverImage}
                    alt={post.title || ''}
                    fill
                    className={styles.coverImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderIcon}>✦</span>
                </div>
              )}
              <div className={styles.cardBody}>
                {post.date && (
                  <time className={styles.date}>
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                )}
                <h2 className={styles.cardTitle}>{post.title}</h2>
                {post.description && (
                  <p className={styles.description}>{post.description}</p>
                )}
                <span className={styles.readMore}>Leer artículo →</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}