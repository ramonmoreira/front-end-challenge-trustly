import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
`
export const ImagePlace = styled.div`
    width: 532px;
    height: 633px;
    border-radius: 11px;
    overflow: hidden;
    position: relative;
`
export const Image = styled.img`
    position:absolute;
    height: 160%;
    top: 50%;
    left: 50%;
    transform: translate(-49%,-55%);
`
export const Info = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    background-color: #F7F7F7;
    border-radius: 11px;
`
export const ContainerFlex = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 170px;
`
export const ContainerFlexTotal = styled.div`
    margin: 85px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ContainerFlexPayment = styled.div`
    display: flex;
    align-items: center;
`
export const ContainerFlexCTA = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const SmallTitle = styled.h1`
    font-size: 20px;
    line-height: 30px;
    color: #000;
    font-weight: 400;
    margin-bottom: 20px;
`
export const Description = styled.h3<{ black: boolean }>`
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: ${(props) => (props.black ? '#000' : '#a5a5a5')};
`
export const TotalValue = styled.h1`
    font-size: 43px;
    line-height: 1;
    color: #000;
    font-weight: 400;
`
export const ContinueCTA = styled.button`
    width: 50%;
    bottom: 10px;
    height: 41px;
    margin-top: 10px;
    border-radius: 4.5px;
    background: #6B8067;
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: #5b6f57
    }
`

export const ImagePayment = styled.img`
    margin-right: 12px;
`




