import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import sorts from '../data/sorts'
import categorys from '../data/categorys'

const PizzasContext = createContext(null)

function PizzasContextProvider({ children }) {
  const [allData, setAllData] = useState()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSorts, setIsSorts] = useState(sorts[0].sort)
  const [isCategory, setIsCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [limitPage, setLimitPage] = useState(6)
  const [searchText, setSearchText] = useState('')

  console.log(data)
  console.log(isCategory)

  useEffect(() => {
    setIsLoading(true)
    const sortRequest =
      isSorts === 'rating'
        ? `sortBy=${isSorts}&order=desc`
        : `sortBy=${isSorts}` // сортировка
    const categoryRequest = isCategory === 'all' ? '' : `category=${isCategory}` // категории
    const page = `page=${currentPage}`
    console.log(page)

    !!searchText === true
      ? axios
          .get(
            `https://641cb100b556e431a874a0e4.mockapi.io/dataPizza?search=${searchText}`
          )
          .then((datas) => {
            setData(datas.data)
            setIsLoading(false)
          })
      : axios
          .get(
            `https://641cb100b556e431a874a0e4.mockapi.io/dataPizza?${page}&limit=${limitPage}&${categoryRequest}&${sortRequest}`
          )
          .then((datas) => {
            setData(datas.data)
            setIsLoading(false)
          })
          .catch((error) => console.log(error.name))
  }, [isCategory, isSorts, currentPage, searchText])

  useEffect(() => {
    axios
      .get('https://641cb100b556e431a874a0e4.mockapi.io/dataPizza')
      .then((data) => setAllData(data.data))
  }, [])

  return (
    <PizzasContext.Provider
      value={{
        data,
        isLoading,
        isCategory,
        setIsCategory,
        isSorts,
        setIsSorts,
        currentPage,
        setCurrentPage,
        allData,
        limitPage,
        currentPage,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </PizzasContext.Provider>
  )
}

export { PizzasContext, PizzasContextProvider }
