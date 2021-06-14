import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import SocialNetwork from '../components/SocialNetwork'
import logo from '../public/images/FR_logo.png'
import menu from '../public/images/burger.png'
import style from '../styles/Header.module.css'

export function Header() {
  const [showMe, setShowMe] = useState(false)
  const {
    container,
    logoContainer,
    headerMenu,
    logoStyle,
    burger,
    headerMenuMobile,
  } = style
  function toggle() {
    setShowMe(!showMe)
  }
  return (
    <div>
      <div className={container}>
        <div className={logoContainer}>
          <Link href='/'>
            <img
              style={{ cursor: 'pointer' }}
              className={logoStyle}
              src={logo}
              alt=''
            />
          </Link>
        </div>
        <div>
          <ul className={headerMenu}>
            <li>
              <Link href='/aPropos'>À propos</Link>
            </li>
            <li>
              <Link href='/tarifs'>Tarifs</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
            <li>
              <Link href='/instagram'>Galerie</Link>
            </li>
            <SocialNetwork></SocialNetwork>
          </ul>
        </div>
        <button onClick={toggle} className={burger} style={{ margin: '10px' }}>
          <img src={menu} alt='menu' />
        </button>
      </div>
      <div style={{ display: showMe ? 'block' : 'none' }}>
        <ul className={headerMenuMobile}>
          <li>
            <Link href='/aPropos'>À propos</Link>
          </li>
          <li>
            <Link href='/tarifs'>Tarifs</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/instagram'>Galerie</Link>
          </li>
          <SocialNetwork></SocialNetwork>
        </ul>
      </div>
    </div>
  )
}
