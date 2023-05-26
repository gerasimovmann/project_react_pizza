import React, { useState } from 'react'
import styles from '../styles/Button.module.scss'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'

function Button({ children, type, onClick, counter, active }) {
  //   <Button type={'classic'}>classic</Button>
  //   <Button type={'filter'}>filter</Button>
  //   <Button type={'back'}>back</Button>
  //   <Button type={'card'}>card</Button>
  const [typeBut, setTypeBut] = useState(type)

  return (
    <>
      {typeBut === 'card' && (
        <button onClick={onClick} className={styles.butCard}>
          <AiOutlinePlus /> {children}{' '}
          {!!counter && <span className={styles.counter}>{counter}</span>}
        </button>
      )}
      {typeBut === 'classic' && (
        <button onClick={onClick} className={styles.butClassic}>
          {children}
        </button>
      )}
      {typeBut === 'back' && (
        <button onClick={onClick} className={styles.butBack}>
          <IoIosArrowBack />
          {children}
        </button>
      )}
      {typeBut === 'filter' && (
        <button
          onClick={onClick}
          className={
            !!active
              ? `${styles.butFilter} ${styles.butFilterActive}`
              : styles.butFilter
          }
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button
