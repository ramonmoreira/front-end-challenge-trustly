import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BreadCrumbPlace = styled.div`
    width: 860px;
    margin: 65px auto 0;
    border-bottom: 1px solid #E8E8E8;
    position: relative;
`
export const Location = styled.div<{ active?: boolean }>`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) => (props.active ? '#61CB46' : '#E8E8E8')};
    position: absolute;
    top: -7.5px;
    &:nth-child(1){
        &::before {
            position: absolute;
            top: 25px;
            left: -7.5px;
            content: "Cart";
            font-size: 16px;
            font-family: 'Arial';
            line-height: 18px;
            font-weight: 400;
            color: ${(props) => (props.active ? '#000' : '#BEBEBE')};
        }
    }
    &:nth-child(2){
        right: calc(50% - 7.5px);
        &::before {
            position: absolute;
            width: 120px;
            top: 25px;
            left: -52.5px;
            content: "Payment options";
            font-size: 16px;
            font-family: 'Arial';
            line-height: 18px;
            font-weight: 400;
            color: ${(props) => (props.active ? '#000' : '#BEBEBE')};
        }
    }
    &:nth-child(3){
        right: 0;
        &::before {
            position: absolute;
            top: 25px;
            left: -19.5px;
            content: "Receipt";
            font-size: 16px;
            font-family: 'Arial';
            line-height: 18px;
            font-weight: 400;
            color: ${(props) => (props.active ? '#000' : '#BEBEBE')};
        }
    }
`