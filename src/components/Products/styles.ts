import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
    width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    ${media.lessThan('medium')`
        width: 100%;
    `}
`

export const ProductsWrapper = styled.div`
    width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 65px 0;
    ${media.lessThan('medium')`
        width: 100%;
        grid-template-columns: 1fr;
        gap: 50px 0px;
    `}
`