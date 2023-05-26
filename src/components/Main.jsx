import Filters from './Filters'
import Cards from './Cards'
import Pagination from './Pagination'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { setCategoryId, setSort } from '../redux/slices/filterSlice'
import { setCurrentPage } from '../redux/slices/paginationSlice'
import { fetchPizzas, fetchAllPizzas } from '../redux/slices/pizzasSlice'

const Main = () => {
  const mounted = useRef(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const searchText = useSelector((state) => state.searchSlice.isSearch)
  const isCategory = useSelector((state) => state.filterSlice.isCategory)
  const isSorts = useSelector((state) => state.filterSlice.sorts)
  const currentPage = useSelector((state) => state.paginationSlice.currentPage)
  const limitItem = useSelector((state) => state.paginationSlice.limitItem)
  const fetchStatus = useSelector((state) => state.pizzasSlice.status)

  console.log(fetchStatus)

  const getPizzas = async () => {
    const sortRequest =
      isSorts === 'rating'
        ? `sortBy=${isSorts}&order=desc`
        : `sortBy=${isSorts}` // сортировка
    const categoryRequest = isCategory === 'all' ? '' : `category=${isCategory}` // категории
    const page = `page=${currentPage}`
    dispatch(
      fetchPizzas({ searchText, sortRequest, categoryRequest, page, limitItem })
    )
  }

  useEffect(() => {
    if (window.location.search) {
      const currentQuery = window.location.search
      const [category, sort, page] = currentQuery
        .replace('?category=', '')
        .replace('sort=', '')
        .replace('page=', '')
        .split('&')

      const queryObj = {
        category,
        sort,
        page,
      }
      dispatch(setCategoryId(queryObj.category))
      dispatch(setSort(queryObj.sort))
      dispatch(setCurrentPage(+queryObj.page))
    }
    mounted.current = true
  }, [])

  useEffect(() => {
    if (mounted.current) {
      const query = `category=${isCategory}&sort=${isSorts}&page=${currentPage}`
      navigate(`?${query}`)
    }
    getPizzas()
    dispatch(fetchAllPizzas())
  }, [isCategory, isSorts, currentPage, searchText])

  return (
    <main>
      <Filters />
      <Cards />
      {!searchText && fetchStatus !== 'error' && <Pagination />}
    </main>
  )
}

export default Main
