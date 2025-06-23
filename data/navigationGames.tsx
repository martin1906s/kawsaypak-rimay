import { Routes } from "../routes/routes";

export interface NavGames {
    id: number;
    imgURL: string;
    titleGame: string;
    descripcionGame: string;
    routeGame: string
}

export const navGames: NavGames[] = [
    {
        id: 1,
        imgURL: '/isotipo.png',
        titleGame: 'Duolingo',
        descripcionGame: 'Aprende el idioma quechua de forma facil mediante contenido multimedia',
        routeGame: Routes.games + Routes.duolingo
    },
]