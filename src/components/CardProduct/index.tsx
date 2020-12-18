import { useRouter } from 'next/router'
import * as S from './styles'
import { ResultProps } from 'types/api'

const CardProduct: React.FC<ResultProps> = ({
  description,
  id,
  price,
  thumbnailURL
}) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push({ pathname: '/checkout', query: { id: id } }, '/checkout', {
      shallow: true
    })
  }

  return (
    <S.Wrapper>
      <S.Card key={id}>
        <S.Thumbnail src={thumbnailURL} />
        <S.CardInfo>
          <S.CardTitle>{description}</S.CardTitle>
          <S.SelectContainerFlex>
            <S.Select>
              <S.SelectTitle>Size</S.SelectTitle>
              <S.SelectField>
                <option>1</option>
              </S.SelectField>
            </S.Select>
            <S.Select>
              <S.SelectTitle>Quantity</S.SelectTitle>
              <S.SelectField>
                <option>1</option>
              </S.SelectField>
            </S.Select>
          </S.SelectContainerFlex>
          <S.Price>$ {price}</S.Price>
          <S.CardCTA onClick={handleClick}>Add to cart</S.CardCTA>
        </S.CardInfo>
      </S.Card>
    </S.Wrapper>
  )
}
export default CardProduct
