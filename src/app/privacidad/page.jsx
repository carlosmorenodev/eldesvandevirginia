import React from 'react'
import styles from './page.module.css'

import ReactMarkdown from "react-markdown";


const markdown = `
# Política de Privacidad

## 1. Responsable del tratamiento

El responsable de los datos personales es el titular de esta página web.

Para cualquier consulta relacionada con la privacidad puedes contactar a través del correo electrónico indicado en la sección de contacto.

---

## 2. Actividad del sitio

Este sitio web es de carácter informativo y no permite registro de usuarios, ni recopila datos personales a través de formularios.

Las ventas de productos se realizan exclusivamente a través de la plataforma externa **Vinted**, por lo que cualquier tratamiento de datos personales relacionado con la compra o envío se realiza directamente dentro de dicha plataforma.

---

## 3. Datos personales

Este sitio web no recopila, almacena ni procesa datos personales de los visitantes.

---

## 4. Servicios de terceros

Este sitio puede estar alojado en servicios de hosting que, de forma técnica, pueden recopilar información básica de navegación (como dirección IP o estadísticas de acceso) con fines de funcionamiento y seguridad.

En caso de uso de plataformas externas como **Vinted**, estas actúan como responsables independientes del tratamiento de los datos.

---

## 5. Finalidad

Dado que no se recogen datos personales en este sitio, no existe tratamiento con fines comerciales, publicitarios o de análisis personalizado.

---

## 6. Derechos del usuario

Dado que este sitio no almacena datos personales, no es posible ejercer derechos sobre datos dentro de esta web.

Para cualquier gestión relacionada con compras o datos personales, el usuario deberá dirigirse directamente a la plataforma **Vinted**, donde se realiza la transacción.

---

## 7. Cambios en la política de privacidad

Esta política puede actualizarse para reflejar cambios legales o técnicos del sitio web.

`



const page = () => {
    return (
        <div className={styles.container}>
            <ReactMarkdown>{markdown}</ReactMarkdown>

        </div>
    )
}

export default page