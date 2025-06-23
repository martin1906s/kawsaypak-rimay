'use client';
import Link from 'next/link';
export default function Navigation() {
    return (
        <nav className="navigation">
            <Link href="#" className="nav-selection">
                <p className="nav-selection">Wasi</p>
            </Link>
            <Link href="/duolingo" className="nav-selection">
                <p className="nav-selection">Pukllay</p>
            </Link>
        </nav>
    );
}
