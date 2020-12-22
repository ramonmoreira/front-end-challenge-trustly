import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
    height: 87px;
    background-color: #f1f1f1;
    ${media.lessThan('medium')`
        height: 50px;
        background-color: transparent;
        padding: 0 15px;
    `}
`
export const Header = styled.div`
    max-width: 1300px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const BackButton = styled.div<{ visible?: boolean }>`
    opacity: ${(props) => props.visible ? 1 : 0};
    width: 115px;
    padding: 0 20px;
    height: 34px;
    border-radius: 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0,0,0,.05);
    font-size: 21px;
    color: #000;
    font-weight: 400;
    cursor: pointer;
    pointer-events: ${(props) => props.visible ? 'auto' : 'none'};
`

export const HeaderTitle = styled.h1`
    font-size: 26px;
    color: #000;
    font-weight: 300;
    width: 300px;
    text-align: center;
    margin-left: -150px;
    ${media.lessThan('medium')`
        display: none;
    `}
`