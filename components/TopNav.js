"use client";

import Link from 'next/link';
import { useSession,signOut} from 'next-auth/react';

export default function TopNav() {
    const {data, status, } = useSession();

    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href="/" className="nav-link">
             🚀 NEXTAUTH
            </Link>

            <div className="d-flex">
                <Link href="/signin" className="nav-link">Login</Link>
                <Link href="/signup" className="nav-link">Register</Link>
            </div>
        </nav>        
    );
}