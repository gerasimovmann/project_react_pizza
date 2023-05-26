import styles from '../styles/App.module.scss'
import Card from './Card'
import Loader from './Loader'
import {
  setBasketItems,
  incrementAmountItem,
} from '../redux/slices/basketSlice'
import { useSelector, useDispatch } from 'react-redux'

const Cards = () => {
  const fetchStatus = useSelector((state) => state.pizzasSlice.status)
  const searchText = useSelector((state) => state.searchSlice.isSearch)
  const basketItems = useSelector((state) => state.basketSlice.basketItems)
  const data = useSelector((state) => state.pizzasSlice.data)
  const dispatch = useDispatch()

  const addItemInBasket = (objPizza) => {
    if (basketItems.length !== 0) {
      // если в корзине есть товары
      // создаем свойства для выявления совпадений, исключаем amount
      const prop = Object.getOwnPropertyNames(objPizza).filter(
        (el) => el !== 'amount'
      )
      // проходимся по товарам
      for (let i = 0; i < basketItems.length; i++) {
        let trueCounter = 0 // счетчик совпадений

        for (let j = 0; j < prop.length; j++) {
          // проходимся по всем свойствам
          if (basketItems[i][prop[j]] === objPizza[prop[j]]) {
            trueCounter++ // добавляем совпадения в счетчик
          }
        }

        // если совепадений столько же сколько и самих свойств
        if (trueCounter === prop.length) {
          dispatch(incrementAmountItem(i))
          return
        }

        // если нет совпадений на последней итерации вызываем добавление в массив
        if (trueCounter !== prop.length && i === basketItems.length - 1) {
          dispatch(setBasketItems(objPizza))
        }
      }
    } else {
      // если в корзине нет товаров
      dispatch(setBasketItems(objPizza))
    }
  }

  return (
    <section className={styles.items}>
      {!!searchText ? <h2>Поиск: {searchText}</h2> : <h2>Все пиццы</h2>}
      <div className={styles.cards}>
        {fetchStatus === 'error' && (
          <h1 className={styles.fetchError}>Не удалось загрузить данные 😕</h1>
        )}

        {fetchStatus === 'loading' &&
          [...new Array(6)].map((_el, id) => <Loader key={id} />)}

        {fetchStatus === 'success' && data.length ? (
          data.map((el, id) => (
            <Card
              key={id}
              card={el}
              pizzaBasket={(objPizza) => addItemInBasket(objPizza)}
            />
          ))
        ) : (
          <h1 className={styles.fetchError}>Товары не найдены 😕</h1>
        )}
      </div>
    </section>
  )
}

export default Cards
