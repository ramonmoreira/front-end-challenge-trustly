import { GetStaticProps } from 'next'
import BreadCrumb from 'components/BreadCrumb'
import { useRouter } from 'next/router'
import axios from 'axios'
import React, { useState } from 'react'
import * as S from 'styles/receipt.styles'
import { ProductsProps, ResultProps } from 'types/api'
const imgObj =
  'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/ss-sneaker-maxres.png'

const Index = ({ results }: ProductsProps) => {
  const [paymentMethod, setPaymentMethod] = useState('online')
  const { query } = useRouter()
  const breadCrumbLocale = [true, true, true]

  let result: ResultProps

  const filterResultById = (() => {
    results.filter((filtered) => {
      if (filtered.id === query.id) {
        result = filtered
      }
    })
  })()

  function activePaymentMethod(paymentType: string) {
    setPaymentMethod(paymentType)
  }

  return (
    <S.Wrapper>
      <BreadCrumb props={breadCrumbLocale} />
      <S.Results>
        {result ? (
          <>
            <S.ImagePlace>
              <S.Image src={result.maxresURL} />
            </S.ImagePlace>
            <S.Info>
              <S.ContainerFlex>
                <S.Block>
                  <S.SmallTitle>Order summary</S.SmallTitle>
                  <S.Description black={true}>
                    {result.description}
                  </S.Description>
                  <S.Description black={false}>
                    x1 Green Size 41
                    <br />
                    Item #{result.id}
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
                  <S.TotalValue>
                    $ {result.price.replace('.00', '')}{' '}
                  </S.TotalValue>
                </S.Block>
                <S.ContinueCTA>Place order</S.ContinueCTA>
              </S.ContainerFlexTotal>
            </S.Info>
          </>
        ) : (
          <h1>Carregando...</h1>
        )}
      </S.Results>
    </S.Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get(
    'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json'
  )
  const results: ResultProps[] | undefined = await res.data.results

  return {
    props: {
      results: results
    }
  }
}

export default Index
