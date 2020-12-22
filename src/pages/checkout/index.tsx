import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import * as S from 'styles/checkout.styles'
import axios from 'axios'
import { ProductsProps, ResultProps } from 'types/api'
import BreadCrumb from 'components/BreadCrumb'
// import SelectBankModal from 'components/SelectBankModal'
// import Modal from 'react-modal'

// BreadCrumb Cart / Checkout / Receipt

const Index = ({ results }: ProductsProps) => {
  const [paymentMethod, setPaymentMethod] = useState('online')
  const { query } = useRouter()
  const router = useRouter()
  const breadCrumbLocale = [true, true, false]

  let result: ResultProps

  const filterResultById = (() => {
    results.filter((filtered) => {
      if (filtered.id === query.id) {
        result = filtered
      }
    })
  })()
  const activePaymentMethod = (paymentType: string) => {
    setPaymentMethod(paymentType)
  }
  const callEstablish = () => {
    window.PayWithMyBank.establish({
      accessId: 'D61EC9BAF0BB369B9438',
      merchantId: '1004314986',
      metadata: { demo: 'enabled' },
      currency: 'USD',
      paymentType: 'Deferred',
      amount: result.price,
      description: 'ramon.dmm@gmail.com',
      merchantReference: 'a71b3fa2-be44-480e-b63a-1ba8ac752d47',
      returnUrl: '#success',
      cancelUrl: '#cancel'
    })
    callReceipt()
  }

  const callReceipt = () => {
    window.PayWithMyBank.addPanelListener(function (command, event) {
      if (command === 'event' && event.type === 'new_location') {
        if (event.data.indexOf('#success') === 0) {
          router.push(
            { pathname: '/receipt', query: { id: result.id } },
            '/receipt',
            {
              shallow: true
            }
          )
        } else {
          alert('cancel!')
        }
        return false
      }
    })
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
                  <S.BigTitle>Cart total</S.BigTitle>
                  <S.Description black={true}>
                    {result.description}
                  </S.Description>
                  <S.Description black={false}>
                    x1 Green Size 41
                    <br />
                    Item # {result.id}
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
                      <S.Description black={false}>
                        Delivery included
                      </S.Description>
                    </S.Block>
                    <S.Block>
                      <S.TotalValue>
                        $ {result.price.replace('.00', '')}{' '}
                      </S.TotalValue>
                    </S.Block>
                  </S.ContainerFlexTotal>
                </S.Block>
              </S.ContainerFlex>
              <S.ContainerFlexPayment>
                <S.BigTitle>Select your payment method</S.BigTitle>
                <S.PaymentTag
                  save="SAVE $10"
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
                <S.ContinueCTA onClick={callEstablish}>Continue</S.ContinueCTA>
              </S.ContainerFlexCTA>
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
