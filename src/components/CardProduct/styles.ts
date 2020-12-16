import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`

export const Card = styled.div`
    width: 298px;
    margin: 0 auto;
    height: 373px;
    background-color: white;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
    border-radius: 4.5px;
    position: relative;
`

export const Thumbnail = styled.img`
    
`
export const CardInfo = styled.div`
    padding: 25px 10px 10px;
`
export const CardTitle = styled.h1`
    font-size: 20px;
    line-height: 17px;
    text-align: center;
    color: #000;
    font-weight: 400;
`
export const SelectContainerFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 255px;
    margin: 0 auto;
`
export const Select = styled.div`
    margin-top: 15px;
`
export const SelectTitle = styled.label`
    font-size: 12px;
    font-weight: 400;
    color: #8D8D8D;
    margin-right: 10px;
`
export const SelectField = styled.select`
    width: 70px;
    height: 27px;
    border-radius: 25px;
    font-size: 12px;
    font-weight: 400;
    color: #8D8D8D;
    padding: 0 10px;
    border: 1px solid #E8E8E8;
    appearance:none;
    background: url(img/svg/arrow-select.svg) no-repeat 46px center;
    &:focus {
        outline: none;
    }
`
export const Price = styled.h2`
    margin-top: 20px;
    font-size: 21px;
    line-height: 17px;
    text-align: center;
    color: #000;
    font-weight: 600;
`
export const CardCTA = styled.button`
    width: calc(100% - 20px);
    position: absolute;
    bottom: 10px;
    height: 41px;
    border-radius: 4.5px;
    background: #6B8067;
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
    color: #fff;
    border: none;
    cursor: pointer;
`