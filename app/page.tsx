'use client'
// pages/index.js
import Head from 'next/head'
import styles from './styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Website</title>
        <meta name="description" content="Movie streaming platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.leftSection}>
          <button className={styles.menuButton}>☰</button>
          <div className={styles.logo}>LOGO</div>
        </div>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
          <button className={styles.quickAccess}>S</button>
        </div>

        <div className={styles.rightSection}>
          <button className={styles.languageBtn}>EN</button>
          <div className={styles.bell}>🔔</div>
          <div className={styles.profile}>👤</div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.featuredContent}>
          <div className={styles.movieInfo}>
            <div className={styles.rating}>PG</div>
            <h1 className={styles.title}>Movie Title</h1>
            <p className={styles.description}>
              Movie description goes here...
            </p>
            <div className={styles.indicators}>
              ●○○○○○
            </div>
          </div>
          <div className={styles.featuredPoster}>
            {/* Featured movie poster */}
          </div>
        </section>

        <section className={styles.recentMovies}>
          <h2>RECENT MOVIES</h2>
          <div className={styles.movieGrid}>
            {[...Array(14)].map((_, i) => (
              <div key={i} className={styles.movieCard}>
                <div className={styles.poster}></div>
                <p className={styles.movieTitle}>Title</p>
              </div>
            ))}
          </div>
        </section>

        <aside className={styles.topMovies}>
          <h2>TOP MOVIE</h2>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.topMovieItem}>
              <span>{i + 1}</span>
              <div className={styles.miniPoster}></div>
              <p>TITLE</p>
            </div>
          ))}
        </aside>
      </main>
    </div>
  );
}