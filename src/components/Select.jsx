import React, { useState } from 'react'
import styles from '../styles/Select.module.scss'
import { IoIosArrowDown } from 'react-icons/io'

const Select = ({ options, onOptionSelect, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0].name)

  const toggleOptions = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    console.log(option)
    onOptionSelect(option.sort)
    setSelectedOption(option.name)
    setIsOpen(false)
  }

  return (
    <div className={styles.customSelectContainer}>
      <div className={styles.selectedOption} onClick={toggleOptions}>
        <span>{selectedOption ? selectedOption : options[0].name}</span>
        <IoIosArrowDown className={isOpen ? styles.openSvg : ''} />
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li key={option.sort} onClick={() => handleOptionClick(option)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
