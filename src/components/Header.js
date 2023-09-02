import React from 'react';

function Header(props) {
    return (
        <header>
            <div>
                <span className="logo">House</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>

                </ul>
            </div>
            <div className="presentation"></div>
        </header>
    );
}

export default Header;