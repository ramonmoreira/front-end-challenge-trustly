import * as S from './styles'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import bankContent from './content'

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

const SelectBankModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true)

  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([...bankContent])
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
    setIsOpen(false)
  }
  console.log(bankContent)

  const router = useRouter()
  return (
    <S.Wrapper>
      <Modal isOpen={modalIsOpen} style={customStyle}>
        <S.HeaderModal>
          <S.SVGIcon src="img/svg/arrow.svg" rotate={90} />
          <S.BankInformations>
            <S.HeaderTitle>Select your bank</S.HeaderTitle>
            <S.HeaderSub>Amount: $ 100.00</S.HeaderSub>
          </S.BankInformations>
          <S.SVGIcon src="img/svg/close-modal.svg" onClick={closeModal} />
        </S.HeaderModal>
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
            {filtered.map((item) => (
              <S.Bank>
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
        <S.FooterModal>
          <S.SVGIcon src="img/svg/footer-modal.svg" />
        </S.FooterModal>
      </Modal>
    </S.Wrapper>
  )
}

export default SelectBankModal
