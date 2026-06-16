import React from 'react'
import styles from './page.module.css'

import ReactMarkdown from "react-markdown";


const markdown = `
# Política de Cookies

## 1. ¿Qué son las cookies?

Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita una página web. Su finalidad puede ser técnica, de análisis o de mejora de la experiencia de navegación.

---

## 2. Uso de cookies en este sitio

Este sitio web es de carácter informativo y no utiliza cookies propias con fines publicitarios, de seguimiento o de perfilado de usuarios.

En caso de que se utilicen cookies, estas serán exclusivamente técnicas y necesarias para el correcto funcionamiento del sitio (por ejemplo, para garantizar la carga correcta de la web o su seguridad).

---

## 3. Cookies de terceros

Este sitio puede estar alojado en servicios de terceros (como proveedores de hosting) que podrían utilizar cookies técnicas o recopilar información básica de navegación con fines de funcionamiento y seguridad.

No se utilizan cookies de analítica avanzada ni de publicidad personalizada.

---

## 4. Gestión de cookies

Dado que este sitio no utiliza cookies de seguimiento ni publicidad, no es necesario el consentimiento activo del usuario mediante banner de cookies.

El usuario puede configurar o eliminar las cookies desde su navegador en cualquier momento.

---

## 5. Desactivación de cookies

El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración del navegador que utilice:

- Google Chrome  
- Mozilla Firefox  
- Safari  
- Microsoft Edge  

---

## 6. Cambios en la política de cookies

Esta política puede actualizarse para adaptarse a cambios legales o técnicos del sitio web.

`



const page = () => {
    return (
        <div className={styles.container}>
            <ReactMarkdown>{markdown}</ReactMarkdown>

        </div>
    )
}

export default page