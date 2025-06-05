'use client';
import { useEffect, useRef } from 'react';

export default function IntroSection() {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        entry.target.classList.remove('active');
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <main className="body-intro" ref={ref}>
            <div className="intro-video">
                <div className="intro">
                    <p>En Kawsaypak Rimay, el futuro se construye hoy. Jóvenes programadores, saberes indígenas y tecnología se unen para revitalizar Imantag desde sus raíces, conectando mentes y corazones para crear un impacto sin fronteras.</p>
                </div>
                <div className="video-intro">
                    <div className="hojas-container">
                        <img src="/img/hoja.png" alt="Hoja" className="hoja hoja-izquierda" />
                        <img src="/img/hoja.png" alt="Hoja" className="hoja hoja-centro" />
                        <img src="/img/hoja.png" alt="Hoja" className="hoja hoja-derecha" />
                    </div>
                    <div className="video-container">
                        <video src="/video/Kawsaypak Rimay.mp4" autoPlay muted playsInline controls></video>
                    </div>
                </div>
            </div>
        </main>
    );
}
