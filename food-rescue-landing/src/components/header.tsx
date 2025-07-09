import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-greenPrimary cursor-default select-none">Food Rescue</h1>
        <nav className="space-x-8 text-greenPrimary font-semibold">
          <a href="#institutions" className="hover:text-green-700 transition">Instituições</a>
          <a href="#donations" className="hover:text-green-700 transition">Doações</a>
          <a href="#volunteers" className="hover:text-green-700 transition">Voluntários</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
