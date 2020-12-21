import CardProduct from 'components/CardProduct'
import Filter from 'components/Filter'
import { ProductsProps } from 'types/api'
import * as S from './styles'
import { useState, useEffect } from 'react'

const Products = ({ results }: ProductsProps) => {
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([...results])
  const onChange = (e) => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    const result = results.filter((el) => {
      if (el.description.toLowerCase().includes(filter.toLowerCase())) {
        return el
      }
    })
    setFiltered(result)
  }, [filter])
  return (
    <S.Wrapper>
      <Filter onChange={onChange} value={filter} />
      <S.ProductsWrapper>
        {filtered.map(({ currency, description, id, price, thumbnailURL }) => (
          <CardProduct
            key={id}
            id={id}
            description={description}
            currency={currency}
            price={price}
            thumbnailURL={thumbnailURL}
          />
        ))}
      </S.ProductsWrapper>
    </S.Wrapper>
  )
}

export default Products
