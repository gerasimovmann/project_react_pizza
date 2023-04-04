import React, { useContext } from 'react'
import Select from './Select'
import Button from './Button'
import styles from '../styles/App.module.scss'
import sorts from '../data/sorts'
import categorys from '../data/categorys'
import MainContext from '../context/MainContext'
import { PizzasContext } from '../context/PizzasContext'

function Filters() {
  const { category, setCategory, setSort, sort } = useContext(MainContext)
  const { isCategory, setIsCategory, isSorts, setIsSorts, setCurrentPage } =
    useContext(PizzasContext)

  return (
    <section className={styles.filters}>
      <div className={styles.categories}>
        {categorys.map((el, id) => (
          <Button
            active={el.type === isCategory ? true : false}
            key={id}
            type={'filter'}
            onClick={() => {
              setIsCategory(el.type)
              setCurrentPage(1)
            }}
          >
            {el.text}
          </Button>
        ))}
      </div>
      <div className={styles.sorts}>
        Сортировка по:{' '}
        <Select
          options={sorts}
          onOptionSelect={(option) => setIsSorts(option)}
        ></Select>
      </div>
    </section>
  )
}

export default Filters
