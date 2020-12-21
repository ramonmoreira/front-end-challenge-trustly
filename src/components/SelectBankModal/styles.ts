import styled from 'styled-components'

export const Wrapper = styled.div`
    
`
export const SVGIcon = styled.img<{ rotate?: number }>`
cursor: pointer;
transform: rotate(${(props) => props.rotate ? props.rotate : '0'}deg);
`
export const HeaderModal = styled.div`
 display: flex;
 padding: 0 15px;
 justify-content: space-between;
 height: 57px;
 border-bottom: 1px solid #EDEDED;
`
export const ContentModal = styled.div`
    padding: 0 15px;
`
export const SearchBank = styled.input`
    height: 40px;
    width: 100%;
    position: relative;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    outline-color: transparent;
    appearance:none;
    background: url(img/svg/filter-mag-glass.svg) no-repeat 10px center;
    background-size: 15px;
    background-color: #f5f5f5;
    padding: 0 110px 0 35px;
    font-size: 14px;
    color: #626262;
    line-height: 19px;
    font-weight: 400;
`
export const SeachLabel = styled.label`
    position: absolute;
        top: 22px;
        right: 10px;
        content: "";
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
        color: #8a8a8a;
`

export const BankList = styled.div`
    display: flex;
    flex-direction: column;
`
export const Bank = styled.div`
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.75px solid #EAEAEA;
    cursor: pointer;
    &:last-child {
        border-bottom: none;
    }
`
export const ContainerFlex = styled.div`
    display: flex;
    position: relative;
`
export const BankThumb = styled.img``
export const BankInfo = styled.div`
    margin-left: 20px;
`
export const BankName = styled.h2`
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    color: #343434;
`
export const BankPage = styled.h3`
    font-size: 11px;
    line-height: 13px;
    font-weight: 400;
    color: #B9B9B9;
`
export const FooterModal = styled.div`
    width: 100%;
    height: 47px;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #EDEDED;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BankInformations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const HeaderTitle = styled.h2`
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    color: #52565F;
`
export const HeaderSub = styled.h3`
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: #a8a8a8;
`