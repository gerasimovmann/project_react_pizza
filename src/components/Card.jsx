import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/App.module.scss'
import Button from './Button'

const Card = ({ card, pizzaBasket }) => {
  const getCount = (basket) => {
    if (basket.length) {
      for (const el of basket) {
        if (el.id === card.id) {
          setCounterBasket((prev) => prev + el.amount)
        }
      }
    }
  }

  const [countBasket, setCounterBasket] = useState(0)
  const [typePizza, setTypePizza] = useState(0)
  const [sizePizza, setSizePizza] = useState(0)
  const [extraPrice, setExtraPrice] = useState({ type: 0, size: 0 })
  const cardPrice = card.price + extraPrice.type + extraPrice.size
  const basketItems = useSelector((state) => state.basketSlice.basketItems)

  const firstMounted = useRef(true)

  const interfacePizza = {
    id: card.id,
    name: card.title,
    typePizza,
    sizePizza,
    price: cardPrice,
    amount: 1,
    img: card.img,
  }

  useEffect(() => {
    getCount(basketItems)
    firstMounted.current = false
  }, [])

  return (
    <div className={styles.card}>
      <img src={card.img} alt='pizza' />
      <div className={styles.cardTitle}>{card.title}</div>
      <div className={styles.optionsCard}>
        <div className={styles.types}>
          {card.type.map((el, id) => {
            return el === 0 ? (
              <button
                key={id}
                className={typePizza === 0 ? styles.buttonActive : ''}
                onClick={() => {
                  setTypePizza(0)
                  setExtraPrice((prev) => {
                    return { ...prev, type: 0 }
                  })
                }}
              >
                Тонкое
              </button>
            ) : (
              <button
                key={id}
                className={typePizza === 1 ? styles.buttonActive : ''}
                onClick={() => {
                  setTypePizza(1)
                  setExtraPrice((prev) => {
                    return { ...prev, type: 50 }
                  })
                }}
              >
                Традиционное
              </button>
            )
          })}
        </div>

        <div className={styles.sizes}>
          {card.size.map((el, _id) => {
            return (
              (el === 0 && (
                <button
                  key={el}
                  className={sizePizza === 0 ? styles.buttonActive : ''}
                  onClick={() => {
                    setSizePizza(0)
                    setExtraPrice((prev) => {
                      return { ...prev, size: 0 }
                    })
                  }}
                >
                  26 см.
                </button>
              )) ||
              (el === 1 && (
                <button
                  key={el}
                  className={sizePizza === 1 ? styles.buttonActive : ''}
                  onClick={() => {
                    setSizePizza(1)
                    setExtraPrice((prev) => {
                      return { ...prev, size: 150 }
                    })
                  }}
                >
                  30 см.
                </button>
              )) ||
              (el === 2 && (
                <button
                  key={el}
                  className={sizePizza === 2 ? styles.buttonActive : ''}
                  onClick={() => {
                    setSizePizza(2)
                    setExtraPrice((prev) => {
                      return { ...prev, size: 300 }
                    })
                  }}
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
          {typePizza !== 0 || sizePizza !== 0 ? '' : 'от'} {cardPrice}
          <span> ₽</span>
        </div>
        <Button
          onClick={() => {
            setCounterBasket((prev) => prev + 1)
            pizzaBasket(interfacePizza)
          }}
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
