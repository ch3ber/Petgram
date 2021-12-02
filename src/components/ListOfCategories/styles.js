import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 1.3rem 1rem;
  background-color: #DBE2EF;
  border-radius: 0 0 2rem 2rem;
  margin: 0;
  margin-top: -3.5rem;
  margin-bottom: 3rem;

  box-shadow: 0px 9px 9px 0px rgba(0,0,0,0.25);
  -webkit-box-shadow: 0px 9px 9px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 9px 9px 0px rgba(0,0,0,0.25);
`

export const Item = styled.li`
  padding: 0 .8rem;
`
