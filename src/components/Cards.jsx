import React, { useContext } from 'react'
import styles from '../styles/App.module.scss'
import Card from './Card'

import MainContext from '../context/MainContext'
import dataSort from '../function/dataSort'
import Loader from './Loader'
import { useLocation } from 'react-router-dom'
import { PizzasContext } from '../context/PizzasContext'

const Cards = () => {
  const { data, isLoading } = useContext(PizzasContext)
  const { category, sort } = useContext(MainContext)
  const { searchText } = useContext(PizzasContext)

  dataSort(data, sort) // сортировка

  return (
    <section className={styles.items}>
      {!!searchText ? <h2>Поиск: {searchText}</h2> : <h2>Все пиццы</h2>}
      <div className={styles.cards}>
        {!!isLoading
          ? [...new Array(6)].map((el, id) => <Loader key={id} />)
          : data
              // поиск
              .filter((el) =>
                el.title.toLowerCase().includes(searchText.toLowerCase())
              )
              //Отображение на странице
              .map((el, id) => (
                <Card
                  key={id}
                  card={el}
                  onTypePizza={(type) => console.log(type)}
                  onSizePizza={(size) => console.log(size)}
                />
              ))}
      </div>
    </section>
  )
}

export default Cards
