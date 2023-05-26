import React from 'react'
import styles from '../styles/Basket.module.scss'
import { BiMinus, BiPlus, BiX } from 'react-icons/bi'
import {
  incrementAmountItem,
  decrementAmountItem,
  deleteItem,
} from '../redux/slices/basketSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function BasketElement({ item, index }) {
  const dispatch = useDispatch()

  const definePizza = (type, size) => {
    const sizes = {
      0: '26 см',
      1: '30 см',
      2: '40 см',
    }
    const types = {
      0: 'Тонкое',
      1: 'Традиционное',
    }
    return `${types[type]}, ${sizes[size]}`
  }

  useEffect(() => {
    if (item.amount === 0) dispatch(deleteItem(index))
  }, [item.amount])

  return (
    <div className={styles.basketElement}>
      <div className={styles.titleImg}>
        <img src={item.img} alt={item.name} />
        <div className={styles.titleElement}>
          <h4>{item.name}</h4>
          <span>{definePizza(item.typePizza, item.sizePizza)}</span>
        </div>
      </div>
      <div className={styles.counter}>
        <button
          className={styles.counterButton}
          onClick={() => dispatch(decrementAmountItem(index))}
        >
          <BiMinus />
        </button>
        <div>{item.amount}</div>
        <button
          className={styles.counterButton}
          onClick={() => dispatch(incrementAmountItem(index))}
        >
          <BiPlus />
        </button>
      </div>
      <div className={styles.price}>{item.price * item.amount} ₽</div>
      <button
        className={styles.deleteBasket}
        onClick={() => dispatch(deleteItem(index))}
      >
        <BiX />
      </button>
    </div>
  )
}

export default BasketElement
