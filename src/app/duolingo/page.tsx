"use client";
import './duolingo.css';
import { DuolingoText, duolingoText } from '../../../data/duolingoText';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function PageDuolingo() {
    const [remainingItems, setRemainingItems] = useState<DuolingoText[]>([]);
    const [currentItem, setCurrentItem] = useState<DuolingoText | null>(null);
    const [selectedQuechua, setSelectedQuechua] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    useEffect(() => {
        startNewGame();
    }, []);
    
    function startNewGame() {
        const shuffled = [...duolingoText].sort(() => Math.random() - 0.5);
        setRemainingItems(shuffled);
        setCurrentItem(shuffled[0]);
        setSelectedQuechua(null);
        setScore(0);
        setAttempts(0);
        setIsGameFinished(false);
    }

    function checkMatch() {
        if (!currentItem || selectedQuechua === null || isGameFinished) {
            alert("Selecciona una palabra en quechua.");
            return;
        }
        
        let newScore = score;
        if (currentItem.id === selectedQuechua) {
            alert(`✅ ¡Correcto! ${currentItem.spanish} - ${currentItem.quechua}`);
            newScore += 1;
        } else {
            alert(`❌ Incorrecto.`);
        }

        const nextItems = remainingItems.slice(1);
        setScore(newScore);
        setAttempts(prev => prev + 1);
        setSelectedQuechua(null);
        
        if (nextItems.length === 0) {
            setIsGameFinished(true);
            
            setTimeout(() => {
                alert(`Juego terminado 🎉\nPuntaje: ${newScore}/${duolingoText.length}`);
                if (newScore > 4) {
                    alert("¡Felicidades! Has completado este nivel.");
                } else {
                    alert("Puntaje insuficiente. Reiniciando juego...");
                    startNewGame();  // Reiniciar si el puntaje es bajo
                }
            }, 300); // Delay para evitar conflicto con otros alerts

            setCurrentItem(null);
        } else {
            setRemainingItems(nextItems);
            setCurrentItem(nextItems[0]);
        }
    }
    
    function resetGame(event?: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        if (event) event.preventDefault();
        startNewGame();
    }
    
    function goToNextLevel(event?: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        if (event) event.preventDefault();
        if (!isGameFinished) {
            alert("Debes completar el nivel actual primero.");
            console.log(attempts);
            return;
        }
        alert("¡Próximamente el siguiente nivel estará disponible!");
        goBack();
    }

    return (
        <div className="duolingo">
            <header className='header-duolingo'>
                <h1 className="title-duolingo">Titulo</h1>
                <h5 className='slogan-duolingo'>Slogan</h5>
            </header>

            <hr />

            <div className='multimedia-duolingo'>
                <div className="content-video-duolingo">
                    <iframe
                        className="video-duolingo"
                        src="https://drive.google.com/file/d/ididididididididid/preview"
                        allow='autoplay'
                        allowFullScreen
                    />
                </div>
                <hr />
                <div className="content-title-video-duolingo">
                    <h3 className='title-video-duolingo'>Titulo del video</h3>
                    <p>Descripcion pequeña del video</p>
                </div>
                <hr />

            </div>

            <hr />

            <div className="content-actividad">
                <h2>RECONOCE LA PALABRA</h2>

                {/* Mostrar solo una palabra en español */}
                <div className="content-actividad-items spanish">
                    {currentItem && (
                        <div className="actividad-items">
                            <span >
                                {currentItem.spanish}
                            </span>
                        </div>
                    )}
                </div>

                <hr />

                {/* Mostrar todos los botones en quechua */}
                <div className="content-actividad-items quechua">
                    {duolingoText.map((item) => (
                        <div className="actividad-items" key={item.id}>
                            <button
                                onClick={() => setSelectedQuechua(item.id)}
                                disabled={isGameFinished}
                                className={selectedQuechua === item.id ? "selected" : ""}
                            >
                                {item.quechua}
                            </button>
                        </div>
                    ))}
                </div>

                <div className='content-button-check-duolingo'>
                    <button onClick={checkMatch} disabled={isGameFinished}>
                        Comprobar
                    </button>
                </div>

                <div className="buttons-reset-next-duolingo">
                    <button onClick={resetGame} disabled={isGameFinished} className='button-reset-duolingo'>
                        ⟲
                    </button>
                    <button onClick={goToNextLevel} disabled={!isGameFinished} className='button-next-duolingo'>
                        ▶
                    </button>
                </div>
            </div>
        </div>
    );
}
