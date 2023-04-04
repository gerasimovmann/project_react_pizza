import React from 'react'
import { useState, useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'
import styles from '../styles/Pagination.module.scss'

function Pagination() {
  const { allData, setCurrentPage, limitPage, currentPage } =
    useContext(PizzasContext)
  const dataCount = allData?.length
  let count
  const pageCount = (countItems, limitItems) => {
    const pagesNum = Math.ceil(countItems / limitItems)
    count = pagesNum
    return [...new Array(pagesNum)]
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ul className={styles.pagination}>
      {currentPage <= 1 ? null : (
        <li
          onClick={() => {
            setCurrentPage((prev) => prev - 1)
            handleScrollToTop()
          }}
        >{`<`}</li>
      )}

      {!!dataCount &&
        pageCount(dataCount, limitPage).map((el, id) => (
          <li
            className={currentPage === id + 1 ? styles.activePag : null}
            onClick={() => {
              setCurrentPage(id + 1)
              handleScrollToTop()
            }}
            key={id}
          >
            {id + 1}
          </li>
        ))}
      {currentPage >= count ? null : (
        <li
          onClick={() => {
            setCurrentPage((prev) => prev + 1)
            handleScrollToTop()
          }}
        >{`>`}</li>
      )}
    </ul>
  )
}

export default Pagination
