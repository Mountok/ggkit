import React from 'react'
import { Link } from 'react-router-dom'
import './headerStyle.css'
const Header = () => {
  return (
    <header className='header'>
        <div className="header_logo">
            <p className='header_logo-item'>
                <span>ГГКИТ</span><br />
                {/* Грозненский госудраственный колледж информационных технологий */}
                иновации и качество в подготовке специалистов
            </p>
        </div>
        <div className="header_nav">
            <nav className="header_nav_list">
                <Link className="header_nav_item">Домой</Link>
                <Link className="header_nav_item">Категории</Link>
                <Link className="header_nav_item">О Нас</Link>
                <Link className="header_nav_item">Контакы</Link>
            </nav>
            <div className="header_nav_start">
                <Link className="header_nav_start-button">Начать</Link> 
            </div>
        </div>
    </header>
  )
}

export default Header