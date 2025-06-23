"use client";
import './duolingoPage.css'
import './lvl1/lvl1.css'
import NavigationDuolingo from './navigationDuolingo/navigationDuolingo';
import { useRouter } from 'next/navigation';
import { Routes } from '../../../../routes/routes';

export default function PageDuolingo() {
    const route = useRouter();
    const goBack = () => {
        route.back();
    }

    return (
        <div className="duolingoPage">
            <header className='header-duolingo'>
                <div className="buttons-next-back">
                    <button onClick={goBack} className='buttonBack'>◀</button>
                    <h1 className="title-duolingo">Titulo</h1>
                    <a href={Routes.duolingo + Routes.lvl + 1}><button className='buttonNext'>▶</button></a>
                </div>
                <h5 className='slogan-duolingo'>Slogan</h5>
            </header>
            <hr />
            <NavigationDuolingo />
        </div>
    );
}
