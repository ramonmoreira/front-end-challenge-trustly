import BreadCrumb from 'components/BreadCrumb'
import React, { useState } from 'react'
import * as S from 'styles/receipt.styles'
const imgObj =
  'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/ss-sneaker-maxres.png'

const Index = () => {
  const [paymentMethod, setPaymentMethod] = useState('online')
  const breadCrumbLocale = [true, true, true]
  function activePaymentMethod(paymentType: string) {
    setPaymentMethod(paymentType)
  }
  return (
    <S.Wrapper>
      <BreadCrumb props={breadCrumbLocale} />
      <S.Results>
        <S.ImagePlace>
          <S.Image src={imgObj} />
        </S.ImagePlace>
        <S.Info>
          <S.ContainerFlex>
            <S.Block>
              <S.SmallTitle>Order summary</S.SmallTitle>
              <S.Description black={true}>SS Sneaker</S.Description>
              <S.Description black={false}>
                x1 Green Size 41
                <br />
                Item #2839u512401
              </S.Description>
            </S.Block>
            <S.Block>
              <S.SmallTitle>Payment Method</S.SmallTitle>
              <S.ContainerFlexPayment>
                <S.ImagePayment src="img/png/payment-method-receipt.png" />
                <S.Description black={true}>Online Banking</S.Description>
              </S.ContainerFlexPayment>
            </S.Block>
          </S.ContainerFlex>
          <S.ContainerFlexTotal>
            <S.Block>
              <S.Description black={true}>Total cost</S.Description>
              <S.Description black={false}>Delivery included</S.Description>
            </S.Block>
            <S.Block>
              <S.TotalValue>$100</S.TotalValue>
            </S.Block>
            <S.ContinueCTA>Place order</S.ContinueCTA>
          </S.ContainerFlexTotal>
        </S.Info>
      </S.Results>
    </S.Wrapper>
  )
}
export default Index
