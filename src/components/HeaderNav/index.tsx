import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'

const HeaderNav = () => {
  const route = useRouter()
  let PageName = ''
  let showBack: boolean
  switch (route.pathname) {
    case '/':
      PageName = 'Sneakers'
      showBack = false
      break
    case '/checkout':
      showBack = true
      PageName = 'Checkout'
      break
    case '/receipt':
      showBack = true
      PageName = 'Review and Confirmation'
      break
  }
  return (
    <S.Wrapper>
      <S.Header>
        <S.BackButton visible={showBack} onClick={() => route.back()}>
          <img src="img/svg/arrow-back.svg" />
          Back
        </S.BackButton>
        <S.HeaderTitle>{PageName}</S.HeaderTitle>
        <img src="img/png/avatar.png" />
      </S.Header>
    </S.Wrapper>
  )
}

export default HeaderNav
