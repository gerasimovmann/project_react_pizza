import React from 'react'
import styles from '../styles/Basket.module.scss'
import { BiMinus, BiPlus, BiX } from 'react-icons/bi'

function BasketElement() {
  return (
    <div className={styles.basketElement}>
      <div className={styles.titleImg}>
        <img src='/img/pizza1.png' alt='pizza' />
        <div className={styles.titleElement}>
          <h4>Сырный цыпленок</h4>
          <span>тонкое тесто, 26 см.</span>
        </div>
      </div>
      <div className={styles.counter}>
        <button className={styles.counterButton}>
          <BiMinus />
        </button>
        <div>1</div>
        <button className={styles.counterButton}>
          <BiPlus />
        </button>
      </div>
      <div className={styles.price}>770 ₽</div>
      <button className={styles.deleteBasket}>
        <BiX />
      </button>
    </div>
  )
}

export default BasketElement
