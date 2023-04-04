import React, { useState } from 'react'
import styles from '../styles/App.module.scss'
import Button from './Button'

const Card = ({ card, onTypePizza, onSizePizza }) => {
  const [countBasket, setCounterBasket] = useState(0)
  const [typePizza, setTypePizza] = useState(0)
  const [sizePizza, setSizePizza] = useState(0)

  onTypePizza(typePizza) // отдать на вверх значение type пиццы
  onSizePizza(sizePizza) // отдать на вверх значение size пиццы

  return (
    <div className={styles.card}>
      <img src={card.img} alt='pizza' />
      <div className={styles.cardTitle}>{card.title}</div>
      <div className={styles.optionsCard}>
        <div className={styles.types}>
          {card.type.map((el, id) => {
            console.log(`id: ${id}`)

            return el === 0 ? (
              <button
                key={id}
                className={typePizza === 0 ? styles.buttonActive : ''}
                onClick={() => setTypePizza(0)}
              >
                Тонкое
              </button>
            ) : (
              <button
                key={id}
                className={typePizza === 1 ? styles.buttonActive : ''}
                onClick={() => setTypePizza(1)}
              >
                Традиционное
              </button>
            )
          })}
        </div>

        <div className={styles.sizes}>
          {card.size.map((el, id) => {
            console.log(`id: ${id}`)
            return (
              (el === 0 && (
                <button
                  key={el}
                  className={sizePizza === 0 ? styles.buttonActive : ''}
                  onClick={() => setSizePizza(0)}
                >
                  26 см.
                </button>
              )) ||
              (el === 1 && (
                <button
                  key={el}
                  className={sizePizza === 1 ? styles.buttonActive : ''}
                  onClick={() => setSizePizza(1)}
                >
                  30 см.
                </button>
              )) ||
              (el === 2 && (
                <button
                  key={el}
                  className={sizePizza === 2 ? styles.buttonActive : ''}
                  onClick={() => setSizePizza(2)}
                >
                  40 см.
                </button>
              ))
            )
          })}
        </div>
      </div>
      <div className={styles.priceButton}>
        <div className={styles.price}>
          от {card.price}
          <span> ₽</span>
        </div>
        <Button
          onClick={() => setCounterBasket((prev) => prev + 1)}
          counter={countBasket}
          type={'card'}
        >
          Добавить
        </Button>
      </div>
    </div>
  )
}

export default Card
