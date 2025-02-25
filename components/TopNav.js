import Link from 'next/link';


export default function TopNav() {

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