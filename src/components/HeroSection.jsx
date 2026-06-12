import React from 'react'

import styles from './HeroSection.module.css'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroSectionContent}>
                <h2>No es solo crochet. Es tiempo, diseño y corazón</h2>
                <h3>Descubre nuestra colección de prendas artesanales tejidas a mano en casa</h3>                
                    <a className={styles.heroSectionButton} href="#">Visita mi tienda en Vinted</a>
            </div>

        </div>

    )
}

export default HeroSection