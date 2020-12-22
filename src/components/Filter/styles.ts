import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
    width: 1100px;
    margin: 85px auto 55px;
    display: grid;
    grid-template-columns: 1fr;
    ${media.lessThan('medium')`
        width: 100%;
        padding: 0 15px;
        margin: 40px auto 30px;
    `}
`
export const Filter = styled.input`
    border: none;
    border-bottom: 1px solid #BDBDBD;
    appearance:none;
    background: url(img/svg/filter-mag-glass.svg) no-repeat 30px center;
    text-align: center;
    font-size: 24px;
    font-weight: 300;
    padding: 12px;
    color: #000;
    &::placeholder {
        color: #a8a8a8;
    }
    &:focus {
        outline: none;
    }
    ${media.lessThan('medium')`
        font-size: 18px;
        background: url(img/svg/filter-mag-glass.svg) no-repeat 15px center;
    `}
`