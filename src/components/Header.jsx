import React, { useRef, useCallback } from 'react'
import styles from '../styles/App.module.scss'
import { HiOutlineShoppingCart, HiSearch } from 'react-icons/hi'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import debounce from 'lodash.debounce'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSearch } from '../redux/slices/searchSlice'
import { setCategoryId, setSort } from '../redux/slices/filterSlice'
import { setCurrentPage } from '../redux/slices/paginationSlice'

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false)
  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch()
  const location = useLocation()
  const amountBasketItems = useSelector(
    (state) => state.basketSlice.amountBasketItems
  )
  const totalPrice = useSelector((state) => state.basketSlice.totalCost)

  // delay updating data
  const debounceFunc = useCallback(
    debounce((text) => {
      dispatch(setIsSearch(text))
    }, 500),
    []
  )

  const toHomePage = () => {
    dispatch(setCategoryId('all'))
    dispatch(setSort('rating'))
    dispatch(setCurrentPage(1))
  }

  return (
    <header>
      <NavLink to='/'>
        <div className={styles.logo} onClick={toHomePage}>
          <img src='./logo.svg' alt='logo' />
          <div className={styles.logoTitle}>
            <h1>TASTY PIZZA</h1>
            <span>самая вкусная пицца во вселенной</span>
          </div>
        </div>
      </NavLink>
      <div className={styles.headerButtons}>
        {location.pathname !== '/' ? null : (
          <button
            className={
              openSearch
                ? `${styles.searchButton} ${styles.searchButtonActive}`
                : styles.searchButton
            }
            onClick={() => {
              setOpenSearch((prev) => !prev)
              if (!!openSearch) {
                dispatch(setIsSearch(''))
                setInputText('')
              }
            }}
          >
            <HiSearch />
          </button>
        )}

        <NavLink to='basket'>
          <div className={styles.buttonBusket}>
            <button>
              {totalPrice} ₽<span className={styles.buttonLine}></span>
              <HiOutlineShoppingCart />
              {amountBasketItems}
            </button>
          </div>
        </NavLink>
      </div>

      {openSearch ? (
        <div className={styles.searchBlock}>
          <input
            onChange={(e) => {
              setInputText(e.target.value)
              debounceFunc(e.target.value)
            }}
            value={inputText}
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
