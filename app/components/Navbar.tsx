import Link from 'next/link';
import React from 'react';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className="navbar bg-slate-400  flex-col md:flex-row">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl text-white">
          Cocktail Rocket
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Search />
      </div>
    </nav>
  );
}
