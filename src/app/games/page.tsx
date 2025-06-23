"use client";
import './gamePage.css'
import { navGames } from '../../../data/navigationGames';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Routes } from '../../../routes/routes';

export default function PageGames() {
    const route = useRouter();
    return (
        <div className="GamePage">
            <div className="button-back-suport">
                <button onClick={() => route.push(Routes.home)}>🏠 Inicio</button>
                <button>⚙ Soporte</button>
            </div>
            <h1>Menu de Juegos</h1>
            {navGames.map((item) => (
                <div key={item.id}>
                    <a href={item.routeGame} className='content-games'>
                        <div className="NumGame"><h3>{item.id}.</h3></div>
                        <div className="imgGame"><Image src="/isotipo.png" alt="Imagen del juego" width={1000} height={1000} /></div>
                        <div className="TitlesGame">
                            <h2 className="titleGame">{item.titleGame}</h2>
                            <p className="descripcionGame">{item.descripcionGame}</p>
                        </div>
                        <div className="buttonGame">
                            <button>
                                JUGAR
                            </button>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}
