import React from 'react'
import styles from '../styles/App.module.scss'
import { HiOutlineShoppingCart, HiSearch } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false)
  const { searchText, setSearchText } = useContext(PizzasContext)
  console.log(searchText)

  return (
    <header>
      <NavLink to='/'>
        <div className={styles.logo}>
          <img src='./logo.svg' alt='logo' />
          <div className={styles.logoTitle}>
            <h1>REACT PIZZA</h1>
            <span>самая вкусная пицца во вселенной</span>
          </div>
        </div>
      </NavLink>
      <div className={styles.headerButtons}>
        <button
          className={
            openSearch
              ? `${styles.searchButton} ${styles.searchButtonActive}`
              : styles.searchButton
          }
          onClick={() => setOpenSearch((prev) => !prev)}
        >
          <HiSearch />
        </button>
        <NavLink to='basket'>
          <div className={styles.buttonBusket}>
            <button>
              520 ₽<span className={styles.buttonLine}></span>
              <HiOutlineShoppingCart />3
            </button>
          </div>
        </NavLink>
      </div>

      {openSearch ? (
        <div className={styles.searchBlock}>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type='search'
            maxLength={25}
            className={openSearch && styles.showInput}
            placeholder='Введите название пиццы...'
          />
        </div>
      ) : null}
    </header>
  )
}

export default Header
