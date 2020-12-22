import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type FilterProps = {
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

const Filter = ({ placeholder, ...props }: FilterProps) => {
  return (
    <S.Wrapper>
      <S.Filter placeholder="Search for your sneaker" {...props} />
    </S.Wrapper>
  )
}

export default Filter
