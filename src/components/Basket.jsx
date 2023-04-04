import React from 'react'
import { useContext } from 'react'
import MainContext from '../context/MainContext'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import styles from '../styles/Basket.module.scss'
import { RiDeleteBinLine } from 'react-icons/ri'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import BasketElement from './BasketElement'

const Basket = () => {
  const { basket, setBasket } = useContext(MainContext)
  console.log(basket)

  return (
    <section className={styles.basket}>
      {!!basket.length ? (
        <>
          <div className={styles.titleBlock}>
            <div className={styles.title}>
              <HiOutlineShoppingCart />
              <h2>Корзина</h2>
            </div>
            <button className={styles.clearButton}>
              <RiDeleteBinLine /> Очистить корзину
            </button>
          </div>
          <div className={styles.basketElements}>
            {[...new Array(6)].map((el, id) => (
              <BasketElement key={id} />
            ))}
            <div className={styles.counts}>
              <div className={styles.countAmount}>
                Всего пицц: <span>1 шт.</span>
              </div>
              <div className={styles.countSum}>
                Сумма заказа: <span>770 ₽</span>
              </div>
            </div>
            <div className={styles.buttons}>
              <NavLink to={'../'}>
                <Button type='back'>Вернуться назад</Button>
              </NavLink>
              <Button type='classic'>Оплатить сейчас</Button>
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
