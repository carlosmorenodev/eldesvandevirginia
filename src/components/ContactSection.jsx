import React from 'react'

import styles from './ContactSection.module.css'

const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
       <h2>Ponte en contacto conmigo en:</h2>
       <a href="#">desvandevirginia@gmail.com</a>
       <a href="https://www.instagram.com/eldesvandevirginia/">Instagram</a>
    </div>
  )
}

export default ContactSection