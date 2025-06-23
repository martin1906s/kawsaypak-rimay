'use client';
import Link from 'next/link';
import { Routes } from '../../../routes/routes';
export default function Navigation() {
    return (
        <nav className="navigation">
            <Link href="#" className="nav-selection">
                <p className="nav-selection">Inicio</p>
            </Link>
            <Link href={Routes.games} className="nav-selection">
                <p className="nav-selection">Juegos</p>
            </Link>
        </nav>
    );
}
