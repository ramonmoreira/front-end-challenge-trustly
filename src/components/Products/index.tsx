import CardProduct from 'components/CardProduct'
import { ProductsProps } from 'types/api'
import * as S from './styles'

const Products = ({ results }: ProductsProps) => (
  <S.Wrapper>
    {results.map(({ currency, description, id, price, thumbnailURL }) => (
      <CardProduct
        key={id}
        id={id}
        description={description}
        currency={currency}
        price={price}
        thumbnailURL={thumbnailURL}
      />
    ))}
  </S.Wrapper>
)

export default Products
