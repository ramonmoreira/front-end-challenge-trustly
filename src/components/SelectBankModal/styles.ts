import styled from 'styled-components'

export const Wrapper = styled.div`
    
`
export const ModalStep = styled.div``
export const SVGIcon = styled.img<{ rotate?: number, clicable?: boolean }>`
cursor: ${(props) => props.clicable ? 'pointer' : 'auto'};
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


// Modal step 2

export const ShoesOn = styled.div`
    height: 440px;
    margin-top: 20px;
    position: absolute;
    width: calc(100% - 15px);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%), #788D74;
    background-blend-mode: overlay, normal;
    border-radius: 5px 0 0 5px;
    padding: 40px;
`
export const TitleBank = styled.h2`
    width: 200px;
    font-size: 21px;
    line-height: 29px;
    color: #fff;
    font-weight: 700;
    margin-top: 20px;
    margin: 20px 0 22px; 
`
export const Tips = styled.ul`
    padding-left: 22px;
`
export const Tip = styled.li`
    width: 225px;
    margin-top: 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
`
export const Checkbox = styled.div`
    margin-top: 25px;
`
export const Input = styled.input`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 14px;
    height: 14px;
    border: solid 1px white;
    border-radius: 2px;
    transition: background border 0.2s;
    position: relative;
    outline: none;
    margin-right: 9px;
    &:before {
      content: '';
      width: 4px;
      height: 6px;
      border: solid 1px white;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: 0.2s;
    }
    &:focus {
      box-shadow: none;
    }
    &:checked {
      border-color: #fff;
      background: transparent;
      &:before {
        opacity: 1;
      }
    }
   
`
export const Label = styled.label`
    display: flex;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    padding-left: 1px;
    color: #fff;
    line-height: 20px;
    margin-top: 25px;
`
export const NextStepCTA = styled.a`
    width: 100px;
    margin: 40px 0px 0 auto;
    height: 40px;
    border: solid 1px white;
    border-radius: 3px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
        background: #aaa;
    }
`

// Modal step 3
export const LoginArea = styled.div`
    height: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InputSingIn = styled.input`
    height: 36px;
    padding: 0 10px;
    width: 100%;
    border: solid 1px #d8d8d8;
    border-radius: 3px;
    font-size: 14px;
    color: #252525;
    outline: none;
    
`
export const LabelSingIn = styled.label<{ label?: string }>`
    width: 100%;
    margin-top: 12px;
    font-size: 10px;
    color: #9f9f9f;
    background-color: white;
    position: relative;
    &::before {
        content: '${(props) => props.label ? props.label : ''}';
        width: 55px;
        background: white;
        position: absolute;
        top: -6px;
        left: 10px;
        text-align: center;
    }
`
export const Terms = styled.h3`
    width: 277px;
    margin: 24px auto 20px;
    font-size: 13.3px;
    line-height: 19px;
    color: #7C7C7C;
    font-weight: 300;
    & span {
        color: #007DB8;
        text-decoration: underline;
        cursor: pointer;
    }
`
export const LoginCTA = styled.a`
    width: 100%;
    height: 40px;
    border-radius: 3px;
    background: #0078CD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
        background: #17527b;
    }
`