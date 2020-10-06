import styled from "styled-components"


export const PageContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 360px;
  height: 640px;
  align-items: center;
`

export const Logo = styled.img`
  width: 104px;
  height: 58px;
  margin-top:88px;
`

export const Text = styled.text`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`
export const Title = styled.div`
  width: 360px;
  height: 42px;
  margin-top:16px;
`

export const InputContainer = styled.div`
  width: 360px;
  height: 72px;
  margin-top:8px;
  margin-bottom:8px;
`
export const Input = styled.input`
  width: 328px;
  height: 50px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
`

export const ButtonContainer = styled.div`
  width: 360px;
  height: 42px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #5cb646;
  border: none;
`

export const ButtonOnClick = styled.button`
  border:none;
  background:none;
  cursor:pointer;
`