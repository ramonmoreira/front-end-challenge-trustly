import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type FilterProps = {
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

const Filter = ({ placeholder, ...props }: FilterProps) => {
  const [filter, setFilter] = useState('')
  const onChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <S.Wrapper>
      <S.Filter
        placeholder="Search for your sneaker"
        onChange={onChange}
        {...props}
      />
    </S.Wrapper>
  )
}

export default Filter
