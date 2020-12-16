import * as S from './styles'

const CardProduct = () => (
  <S.Wrapper>
    <S.Card>
      <S.Thumbnail src="https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/ss-sneaker-thumb.png" />
      <S.CardInfo>
        <S.CardTitle>SS Sneaker</S.CardTitle>
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
        <S.Price>$ 100.00</S.Price>
        <S.CardCTA>Add to cart</S.CardCTA>
      </S.CardInfo>
    </S.Card>
  </S.Wrapper>
)
export default CardProduct
