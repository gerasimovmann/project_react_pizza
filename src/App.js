import styles from './styles/App.module.scss'
import { useState } from 'react'
import Main from './components/Main'
import MainContext from './context/MainContext'
import categorys from './data/categorys'
import sorts from './data/sorts'
import { PizzasContextProvider } from './context/PizzasContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NotFound from './components/NotFound'
import Basket from './components/Basket'

function App() {
  const [category, setCategory] = useState(categorys[0].type)
  const [sort, setSort] = useState(sorts[0])
  const [basket, setBasket] = useState([])

  return (
    <BrowserRouter>
      <MainContext.Provider
        value={{
          sort,
          setSort,
          basket,
          setBasket,
        }}
      >
        <PizzasContextProvider>
          <div className={styles.App}>
            <Routes>
              <Route path='/' element={<MainLayout />}>
                <Route index element={<Main />} />
                <Route path='basket' element={<Basket />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </PizzasContextProvider>
      </MainContext.Provider>
    </BrowserRouter>
  )
}

export default App
