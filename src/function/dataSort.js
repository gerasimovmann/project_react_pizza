const dataSort = (datas, sort) => {
  console.log(datas)
  return datas.sort((a, b) => {
    if (sort === 'популярности') {
      return b.rating - a.rating
    }
    if (sort === 'цене') {
      return a.price26 - b.price
    }
    if (sort === 'алфавиту') {
      return a.title.localeCompare(b.title)
    }
  })
}

export default dataSort
