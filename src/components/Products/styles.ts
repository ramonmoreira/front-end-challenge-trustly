import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const ProductsWrapper = styled.div`
    width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 65px 0;
`