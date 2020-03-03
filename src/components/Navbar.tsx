import React from 'react';

export const Navbar: React.FC = () => {
    return (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="brand-logo">React + TypeScript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Список дел</a></li>
                <li><a href="#">Информация</a></li>
            </ul>
        </div>
    </nav>
    );
  }
