import { BreadCrumbProps } from 'types/api'
import * as S from './styles'

const BreadCrumb = ({ props }) => {
  return (
    <S.Wrapper>
      <S.BreadCrumbPlace>
        {props.map((prop) => (
          <S.Location active={prop} />
        ))}
      </S.BreadCrumbPlace>
    </S.Wrapper>
  )
}

export default BreadCrumb
