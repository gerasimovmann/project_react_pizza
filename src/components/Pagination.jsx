import React from 'react'
import styles from '../styles/Pagination.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
  setCurrentPage,
  incrementCurrentPage,
  decrementCurrentPage,
} from '../redux/slices/paginationSlice'

function Pagination() {
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.paginationSlice.currentPage)
  const limitItem = useSelector((state) => state.paginationSlice.limitItem)
  const allData = useSelector((state) => state.pizzasSlice.allData)

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
            dispatch(decrementCurrentPage())
            handleScrollToTop()
          }}
        >{`<`}</li>
      )}

      {!!dataCount &&
        pageCount(dataCount, limitItem).map((_el, id) => (
          <li
            className={currentPage === id + 1 ? styles.activePag : null}
            onClick={() => {
              dispatch(setCurrentPage(id + 1))
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
            dispatch(incrementCurrentPage())
            handleScrollToTop()
          }}
        >{`>`}</li>
      )}
    </ul>
  )
}

export default Pagination
