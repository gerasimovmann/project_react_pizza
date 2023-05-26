import styles from './styles/App.module.scss'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NotFound from './components/NotFound'
import Basket from './components/Basket'
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.App}>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Main />} />
              <Route path='basket' element={<Basket />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
