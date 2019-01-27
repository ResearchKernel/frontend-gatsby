import styled from 'styled-components'

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  right: -1px;
  width: 120px;
  background: #fff;
  border: 1px solid #ccc;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    div {
      width: 100%;
      padding: 4px 8px;
      &:hover {
        background-color: rgb(246, 247, 248);
      }
    }
  }
`

export const Dropdown = styled.button`
  position: relative;
  border-color: rgb(237, 239, 241);
  outline: none;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 100%;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  padding: 2px 6px;
  cursor: pointer;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  background-color: #fff;
  .arrow-rotate {
    -webkit-transition: -webkit-transform 0.8s ease-in-out;
    transition: transform 0.2s ease-in-out;
    &:hover {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
`
