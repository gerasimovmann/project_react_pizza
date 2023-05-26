import React, { useContext } from 'react'
import Select from './Select'
import Button from './Button'
import styles from '../styles/App.module.scss'
import sorts from '../data/sorts'
import categorys from '../data/categorys'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setSort } from '../redux/slices/filterSlice'
import { setCurrentPage } from '../redux/slices/paginationSlice'

function Filters() {
  const dispatch = useDispatch()
  const isCategory = useSelector((state) => state.filterSlice.isCategory)

  return (
    <section className={styles.filters}>
      <div className={styles.categories}>
        {categorys.map((el, id) => (
          <Button
            active={el.type === isCategory ? true : false}
            key={id}
            type={'filter'}
            onClick={() => {
              dispatch(setCategoryId(el.type))
              dispatch(setCurrentPage(1))
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
          onOptionSelect={(option) => dispatch(setSort(option))}
        ></Select>
      </div>
    </section>
  )
}

export default Filters
