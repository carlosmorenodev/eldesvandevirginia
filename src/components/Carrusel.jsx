"use client";

// Importar los componentes de Swiper para React
import { Swiper, SwiperSlide } from 'swiper/react';

// Importar los módulos necesarios de Swiper
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Importar los estilos globales de Swiper (Obligatorios)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';
import styles from './Carrusel.module.css'


const imagenes = [
    {
        id: 1,
        src: '/works/work1.webp', // Si están en la carpeta public/
        alt: 'Descripción de la primera imagen',
    },
    {
        id: 2,
        src: '/works/work2.jpg', // Si son URLs externas
        alt: 'Descripción de la segunda imagen',
    },
    {
        id: 3,
        src: '/works/work3.jpg',
        alt: 'Descripción de la tercera imagen',
    },
    {
        id: 4,
        src: '/works/work4.webp',
        alt: 'Descripción de la tercera imagen',
    },
    {
        id: 5,
        src: '/works/work5.jpg',
        alt: 'Descripción de la tercera imagen',
    },
    {
        id: 6,
        src: '/works/work6.jpg',
        alt: 'Descripción de la tercera imagen',
    },
    {
        id: 7,
        src: '/works/work7.jpg',
        alt: 'Descripción de la tercera imagen',
    },
    {
        id: 8,
        src: '/works/work8.webp',
        alt: 'Descripción de la tercera imagen',
    },
    {
        id: 9,
        src: '/works/work9.jpg',
        alt: 'Descripción de la tercera imagen',
    },
];



export default function Carrusel() {
    return (
        <div className={styles.contenedorCarrusel}>
            <Swiper
                // Instalar los módulos que vas a usar
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect={'coverflow'} // Activamos el efecto
                grabCursor={true}    // Cambia el cursor a una mano para arrastrar
                centeredSlides={true} // Obligatorio: la slide activa va al centro
                slidesPerView={3}     // Queremos ver 3 slides al mismo tiempo
                loop={true}           // Hace que el carrusel sea infinito

                // Ajustes finos del efecto 3D:
                coverflowEffect={{
                    rotate: 15,     // Grados de rotación de las slides de los lados
                    stretch: -150,     // Espacio entre slides (puedes usar números negativos para encimarlas)
                    depth: 800,     // Profundidad en el eje Z (a más número, más pequeñas se ven las de los lados)
                    modifier: 1,    // Multiplicador del efecto
                    slideShadows: false, // Crea sombras realistas en las slides laterales
                }}
                navigation={true}
                pagination={{ clickable: true }}


                /* spaceBetween={20}       // Espacio entre diapositivas en px
                slidesPerView={3}        // Cuántas diapositivas mostrar a la vez
                navigation={true}        // Activar flechas de navegación
                pagination={{ clickable: true }} // Activar puntitos interactivos
                autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-reproducción */
                breakpoints={{
                    // Configuración responsiva (pantallas grandes)
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className={styles.swiper}
            >
                {imagenes.map((imagen) => (
                    <SwiperSlide className={styles.swiperSlide}>
                        {/* <div className={styles.sliderImage}> */}
                        <Image className={styles.sliderImage} src={imagen.src} width={400} height={400} /* style={{ borderRadius: "22px" }} */ />
                        {/* </div> */}
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    );
}