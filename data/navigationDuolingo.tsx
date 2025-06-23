import { Routes } from "../routes/routes";
export interface NavDuolingo {
    lvl: number;
    imgURL: string;
    titleLvl: string;
    descripcionLvl: string;
    navLvl: string
}

export const navDuolingo: NavDuolingo[] = [
    {
        lvl: 1,
        imgURL: '/isotipo.png',
        titleLvl: 'Titulo lvl 1',
        descripcionLvl: 'descripcion lvl 1',
        navLvl: Routes.games + Routes.duolingo + Routes.lvl + 1
    },
    {
        lvl: 2,
        imgURL: '/isotipo.png',
        titleLvl: 'Titulo lvl 2',
        descripcionLvl: 'descripcion lvl 2',
        navLvl: Routes.games + Routes.duolingo + Routes.lvl + 2
    },
    {
        lvl: 3,
        imgURL: '/isotipo.png',
        titleLvl: 'Titulo lvl 3',
        descripcionLvl: 'descripcion lvl 3',
        navLvl: Routes.games + Routes.duolingo + Routes.lvl + 3
    },
    {
        lvl: 4,
        imgURL: '/isotipo.png',
        titleLvl: 'Titulo lvl 4',
        descripcionLvl: 'descripcion lvl 4',
        navLvl: Routes.games + Routes.duolingo + Routes.lvl + 4
    },
]