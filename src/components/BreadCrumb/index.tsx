import { BreadCrumbProps } from 'types/api'
import * as S from './styles'

const BreadCrumb = ({ props }) => {
  return (
    <S.Wrapper>
      <S.BreadCrumbPlace>
        {props.map((prop, index) => (
          <S.Location key={index} active={prop} />
        ))}
      </S.BreadCrumbPlace>
    </S.Wrapper>
  )
}

export default BreadCrumb
