import React from 'react'
import * as S from './styles'
import { ResultProps } from 'types/api'

const CardProduct: React.FC<ResultProps> = ({
  currency,
  description,
  id,
  price,
  thumbnailURL,
  color,
  maxresURL
}) => (
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
        <S.CardCTA>Add to cart</S.CardCTA>
      </S.CardInfo>
    </S.Card>
  </S.Wrapper>
)
export default CardProduct
