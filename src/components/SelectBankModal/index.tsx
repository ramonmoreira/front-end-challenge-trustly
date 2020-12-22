import * as S from './styles'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import bankContent from './content'
import axios from 'axios'

Modal.setAppElement('#__next')

const customStyle = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,.75)'
  },
  content: {
    width: 350,
    height: 585,
    left: 'calc(50% - 175px)',
    top: 'calc(50% - 292.5px)',
    backgroundColor: '#fff',
    border: 'none',
    padding: 0
  }
}

const SelectBankModal = ({ statusModal, updateStatus, valueToBank }) => {
  const [filter, setFilter] = useState('')
  const [atualTitle, setAtualTitle] = useState('Select your bank')
  const [filtered, setFiltered] = useState([...bankContent])
  const [navStep, setNavStep] = useState(3)

  const onChange = (e) => {
    setFilter(e.target.value)
  }
  useEffect(() => {
    const result = bankContent.filter((el) => {
      if (el.bank.toLowerCase().includes(filter.toLowerCase())) {
        return el
      }
    })
    setFiltered(result)
  }, [filter])

  const closeModal = () => {
    setNavStep(1)
    setAtualTitle('Select your bank')
    updateStatus(false)
  }

  const navBack = () => {
    if (navStep > 1) {
      setNavStep(navStep - 1)
      switch (navStep) {
        case 2:
          setAtualTitle('Select your bank')
          break
        case 3:
          setAtualTitle('Sign into your bank')
          break
      }
    } else {
    }
  }

  const callEstablish = () => {
    window.PayWithMyBank.establish({
      accessId: 'D61EC9BAF0BB369B9438',
      merchantId: '1004314986',
      metadata: { demo: 'enabled' },
      currency: 'USD',
      paymentType: 'Deferred',
      amount: '100.00',
      description: 'ramon.dmm@gmail.com',
      merchantReference: 'a71b3fa2-be44-480e-b63a-1ba8ac752d47',
      returnUrl: '#success',
      cancelUrl: '#cancel'
    })
  }
  // useEffect(() => {
  //   window.PayWithMyBank.addPanelListener()
  // })

  const router = useRouter()
  return (
    <>
      {statusModal ? (
        <Modal isOpen={statusModal} style={customStyle}>
          <S.HeaderModal>
            <S.SVGIcon
              src="img/svg/arrow.svg"
              rotate={90}
              onClick={navBack}
              clicable={true}
            />
            <S.BankInformations>
              <S.HeaderTitle>{atualTitle}</S.HeaderTitle>
              {/* <S.HeaderSub>Amount: $ {valueToBank.price}</S.HeaderSub> */}
            </S.BankInformations>
            <S.SVGIcon
              src="img/svg/close-modal.svg"
              onClick={closeModal}
              clicable={true}
            />
          </S.HeaderModal>
          {navStep == 1 ? (
            <>
              <S.ContentModal>
                <S.ContainerFlex>
                  <S.SearchBank
                    placeholder="Search for your bank"
                    onChange={onChange}
                    value={filter}
                  />
                  <S.SeachLabel>+ 1,000 available</S.SeachLabel>
                </S.ContainerFlex>
                <S.BankList>
                  {filtered.map((item, index) => (
                    <S.Bank
                      key={index}
                      onClick={() => {
                        setNavStep(2)
                        setAtualTitle('Sign into your bank')
                      }}
                    >
                      <S.ContainerFlex>
                        <S.BankThumb src={`img/png/banks/${item.image}`} />
                        <S.BankInfo>
                          <S.BankName>{item.bank}</S.BankName>
                          <S.BankPage>{item.url}</S.BankPage>
                        </S.BankInfo>
                      </S.ContainerFlex>
                      <S.SVGIcon src="img/svg/arrow.svg" rotate={270} />
                    </S.Bank>
                  ))}
                </S.BankList>
              </S.ContentModal>
            </>
          ) : (
            ''
          )}
          {navStep == 2 ? (
            <>
              <S.ContentModal>
                <S.ShoesOn>
                  <S.SVGIcon src="img/svg/logo-shoes-on.svg" />
                  <S.TitleBank>About signing into Online Banking</S.TitleBank>
                  <S.Tips>
                    <S.Tip>This is a secure connection to Chase</S.Tip>
                    <S.Tip>Your bank login cannot be seen by shoes.on</S.Tip>
                  </S.Tips>
                  <S.Label>
                    <S.Input type="checkbox" />
                    Do not show this message again
                  </S.Label>
                  <S.NextStepCTA
                    onClick={() => {
                      setNavStep(3)
                      setAtualTitle('Sign into your bank')
                    }}
                  >
                    OK, got it!
                  </S.NextStepCTA>
                </S.ShoesOn>
              </S.ContentModal>
            </>
          ) : (
            ''
          )}
          {navStep == 3 ? (
            <>
              <S.ContentModal>
                <S.LoginArea>
                  <S.BankThumb src="img/png/banks/chase-logo.png" />
                  <S.LabelSingIn label={'username'}>
                    <S.InputSingIn type="text" />
                  </S.LabelSingIn>
                  <S.LabelSingIn label={'Password'}>
                    <S.InputSingIn type="password" />
                  </S.LabelSingIn>
                  <S.Terms>
                    By clicking 'Agree & Sign in', you agree to the
                    PayWithMyBank® <span>Terms of Use.</span>
                  </S.Terms>
                  <S.LoginCTA onClick={callEstablish}>
                    Agree & Sing In
                  </S.LoginCTA>
                </S.LoginArea>
              </S.ContentModal>
            </>
          ) : (
            ''
          )}
          <S.FooterModal>
            <S.SVGIcon src="img/svg/footer-modal.svg" />
          </S.FooterModal>
        </Modal>
      ) : (
        ''
      )}
    </>
  )
}

export default SelectBankModal
