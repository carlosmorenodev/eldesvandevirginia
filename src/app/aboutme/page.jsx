import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';

import ReactMarkdown from "react-markdown";


const markdown = `
# Sobre mí

¡Hola! Soy la persona detrás de este pequeño proyecto de crochet hecho a mano.

Desde siempre me ha gustado crear cosas con mis propias manos, y el crochet se ha convertido en una forma de expresar mi creatividad y cuidar cada detalle. Cada pieza que hago está tejida con paciencia, dedicación y mucho cariño.

En esta web comparto una pequeña muestra de mis creaciones, pero todas las ventas se realizan a través de **Vinted**, donde puedes ver los productos disponibles, precios y gestionar la compra de forma segura.

Mi objetivo es ofrecer piezas únicas, hechas de manera artesanal, que aporten un toque especial y personal a quien las utiliza.

Gracias por apoyar el trabajo hecho a mano 💛

`



const page = () => {
  return (
    <div className={styles.container}>
      {/* <Image
        src={'/aboutme-image.jpg'}
        width={700}
        height={400}
        className={styles.aboutMeImg} /> */}
      <div className={styles.text}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

    </div>
  )
}

export default page