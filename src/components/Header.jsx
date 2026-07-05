'use client'

import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    // Bloquear scroll del body cuando el menú está abierto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const closeMenu = () => setMenuOpen(false)

    return (
        <div className={styles.header}>

            <div>
                <Image
                    className={styles.logo}
                    src="/logo-fondo.jpg"
                    width={200}
                    height={200}
                />
            </div>

            <h1 className={styles.headerTitle}>El desván de Virginia</h1>

            {/* Nav escritorio */}
            <nav className={styles.headerNav}>
                <Link className={styles.headerNavItem} href={'/'}>Inicio</Link>
                <Link className={styles.headerNavItem} href={'/manualidades'}>Manualidades</Link>
                <Link className={styles.headerNavItem} href={'/aboutme'}>Sobre mí</Link>
                <Link className={styles.headerNavItem} href={'/blog'}>Blog</Link>
                {/* <Link>mis trabajos</Link> */}
            </nav>

            {/* Botón hamburguesa (solo móvil) */}
            <button
                className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            {/* Overlay */}
            <div
                className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* Cortina lateral */}
            <nav
                className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
                aria-label="Menú móvil"
            >
                <button className={styles.drawerClose} onClick={closeMenu} aria-label="Cerrar menú">
                    ✕
                </button>

                <div className={styles.drawerLogo}>
                    <Image
                        src="/logo-fondo.jpg"
                        width={80}
                        height={80}
                        style={{ borderRadius: '50%' }}
                        alt="Logo El desván de Virginia"
                    />
                </div>

                <div className={styles.drawerLinks}>
                    <Link className={styles.drawerNavItem} href={'/'} onClick={closeMenu}>Inicio</Link>
                    <Link className={styles.drawerNavItem} href={'/manualidades'} onClick={closeMenu}>Manualidades</Link>
                    <Link className={styles.drawerNavItem} href={'/aboutme'} onClick={closeMenu}>Sobre mí</Link>
                    <Link className={styles.drawerNavItem} href={'/blog'} onClick={closeMenu}>Blog</Link>



                    {/* <Link className={styles.drawerNavItem} href={'/trabajos'} onClick={closeMenu}>Mis trabajos</Link> */}
                </div>
            </nav>

        </div>
    )
}

export default Header