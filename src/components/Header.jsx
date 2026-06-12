import React from 'react'

import styles from './Header.module.css'

import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (

        <div className={styles.header}>
            
                <Image
                    className={styles.logo}
                    src="/logo-fondo.jpg"
                    width={120}
                    height={120}
                />

                <h1 className={styles.headerTitle}>El desván de Virginia</h1>

            

            <nav className={styles.headerNav}>
                <Link className={styles.headerNavItem} href={'/'}>Inicio</Link>
                {/* <Link>mis trabajos</Link> */}
            </nav>


        </div>


    )
}

export default Header