'use client'

import React from 'react'
import styles from './Footer.module.css'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <Image
                        src='/logo-fondo-footer.jpg'
                        width={150}
                        height={150} />

                </div>

                <div className={styles.links}>
                    <Link className={styles.contactItem} href={'/avisolegal'}>Aviso Legal</Link>
                    <Link className={styles.contactItem} href={'/privacidad'}>Privacidad</Link>
                    <Link className={styles.contactItem} href={'/cookies'}>Cookies</Link>
                </div>

                <div className={styles.contact}>
                    <a
                        className={styles.contactItem}
                        href="mailto:desvandevirginia@gmail.com"
                        aria-label="Enviar correo electrónico"
                    >
                        <span className={styles.contactIcon} aria-hidden="true">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="2" y="4" width="20" height="16" rx="3" />
                                <path d="M2 7l10 7 10-7" />
                            </svg>
                        </span>
                        <span>desvandevirginia@gmail.com</span>
                    </a>
                </div>

            <div className={styles.social}>
                <a
                    className={styles.contactItem}
                    href="https://www.instagram.com/eldesvandevirginia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visita nuestro perfil de Instagram"
                >
                    <span className={styles.contactIcon} aria-hidden="true">
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                        </svg>
                    </span>
                    <span>@eldesvandevirginia</span>
                </a>
            </div>


            </div>

            <p className={styles.copyright}>© 2026 El desván de Virginia</p>
        </footer>
    )
}

export default Footer