import React from 'react'
import { useContext } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import styles from '../styles/Basket.module.scss'
import { RiDeleteBinLine } from 'react-icons/ri'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import BasketElement from './BasketElement'

import { deleteAll } from '../redux/slices/basketSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Basket = () => {
  const basket = useSelector((state) => state.basketSlice.basketItems)
  const amountBasketItems = useSelector(
    (state) => state.basketSlice.amountBasketItems
  )
  const totalPrice = useSelector((state) => state.basketSlice.totalCost)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(amountBasketItems)
  })

  return (
    <section className={styles.basket}>
      {!!basket.length ? (
        <>
          <div className={styles.titleBlock}>
            <div className={styles.title}>
              <HiOutlineShoppingCart />
              <h2>Корзина</h2>
            </div>
            <button
              className={styles.clearButton}
              onClick={() => dispatch(deleteAll())}
            >
              <RiDeleteBinLine /> Очистить корзину
            </button>
          </div>
          <div className={styles.basketElements}>
            {basket.map((el, id) => (
              <BasketElement key={id} index={id} item={el} />
            ))}
            <div className={styles.counts}>
              <div className={styles.countAmount}>
                Всего пицц: <span>{amountBasketItems} шт.</span>
              </div>
              <div className={styles.countSum}>
                Сумма заказа: <span>{totalPrice} ₽</span>
              </div>
            </div>
            <div className={styles.buttons}>
              <NavLink to={'../'}>
                <Button type='back'>Вернуться назад</Button>
              </NavLink>
              <NavLink to={'/'}>
                <Button type='classic'>Оплатить сейчас</Button>
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.basketEmpty}>
          <div className={styles.title}>
            <h2>Корзина пуста 😕</h2>
            <span>
              Вероятнее всего, вы ничего не добавили. Для того, чтобы заказать
              пиццу, перейдите на главную страницу.
            </span>
          </div>
          <img src='/img/illustration1.svg' alt='img' />
          <NavLink to={'/'}>
            <Button type='back'>За покупками</Button>
          </NavLink>
        </div>
      )}
    </section>
  )
}

export default Basket
