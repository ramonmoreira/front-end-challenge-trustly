import React, { useState } from 'react'
import * as S from './styles'
const imgObj =
  'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/ss-sneaker-maxres.png'

const Index = () => {
  const [paymentMethod, setPaymentMethod] = useState('online')
  function activePaymentMethod(paymentType: string) {
    setPaymentMethod(paymentType)
  }
  return (
    <S.Wrapper>
      <S.ImagePlace>
        <S.Image src={imgObj} />
      </S.ImagePlace>
      <S.Info>
        <S.ContainerFlex>
          <S.Block>
            <S.BigTitle>Cart total</S.BigTitle>
            <S.Description black={true}>SS Sneaker</S.Description>
            <S.Description black={false}>
              x1 Green Size 41
              <br />
              Item #2839u512401
            </S.Description>
          </S.Block>
          <S.Block>
            <S.SmallTitle>Delivery details</S.SmallTitle>
            <S.Description black={false}>
              John Smith
              <br />
              Phone no: 01312428200
              <br />
              Address: Redwood City, 2000.
            </S.Description>
            <S.ContainerFlexTotal>
              <S.Block>
                <S.Description black={true}>Total cost</S.Description>
                <S.Description black={false}>Delivery included</S.Description>
              </S.Block>
              <S.Block>
                <S.TotalValue>$100</S.TotalValue>
              </S.Block>
            </S.ContainerFlexTotal>
          </S.Block>
        </S.ContainerFlex>
        <S.ContainerFlexPayment>
          <S.BigTitle>Select your payment method</S.BigTitle>
          <S.PaymentTag
            onClick={() => {
              activePaymentMethod('online')
            }}
            className={paymentMethod === 'online' ? 'active' : ''}
          >
            <S.PaymentMethod>Online Banking</S.PaymentMethod>
            <S.PaymentImage src="img/png/payment-online.png" />
          </S.PaymentTag>
          <S.PaymentTag
            onClick={() => {
              activePaymentMethod('card')
            }}
            className={paymentMethod === 'card' ? 'active' : ''}
          >
            <S.PaymentMethod>Card payment</S.PaymentMethod>
            <S.PaymentImage src="img/png/payment-card.png" />
          </S.PaymentTag>
          <S.PaymentTag
            onClick={() => {
              activePaymentMethod('apple')
            }}
            className={paymentMethod === 'apple' ? 'active' : ''}
          >
            <S.PaymentMethod>Apple Pay</S.PaymentMethod>
            <S.PaymentImage src="img/png/payment-apple.png" />
          </S.PaymentTag>
        </S.ContainerFlexPayment>
        <S.ContainerFlexCTA>
          <S.ContinueCTA>Continue</S.ContinueCTA>
        </S.ContainerFlexCTA>
      </S.Info>
      <S.Receipt></S.Receipt>
    </S.Wrapper>
  )
}
export default Index
