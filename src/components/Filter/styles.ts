import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 1100px;
    margin: 100px auto 55px;
    display: grid;
    grid-template-columns: 1fr;
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
`