import React, { useContext } from 'react'

import styles from '../styles/App.module.scss'
import Filters from './Filters'
import Cards from './Cards'
import Pagination from './Pagination'
import { PizzasContext } from '../context/PizzasContext'

const Main = () => {
  const { searchText } = useContext(PizzasContext)
  return (
    <main>
      <Filters />
      <Cards />
      {!searchText && <Pagination />}
    </main>
  )
}

export default Main
