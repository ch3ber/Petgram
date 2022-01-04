import styled from 'styled-components'

export const H2 = styled.h2`
  text-align: center;
`

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 70%;
  justify-content: space-between;
  align-items: center;
  &[disabled] {
    opacity: 0.3;
  }
`

export const Input = styled.input`
  border: 1px solid #191919;
  color: #111;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #fff;
  margin: 0.5rem 0;
  padding: 1rem;
  width: 100%;
`

export const Button = styled.button`
  border: none;
  color: #555;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #a8dadc;
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
`

export const Error = styled.span`
  font-size: 1.4rem;
  color: #f00;
`
