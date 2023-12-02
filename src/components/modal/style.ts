import styled from "styled-components";

export const ModalDiv = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  
  > div {
    display: flex;
    background-color: #E7E2DA;
    padding: 20px;
    box-shadow: 0  0 25px 0 rgba(0,0,0,.25);
    width: 100%;
    max-width: 400px;
    flex-direction: column;
    align-items: center;
    gap:45px;
    border-radius:20px;

    div{
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      gap:120px;

      button{
        height:38px;
        width:42px;
        background-color: transparent;
        border-color: transparent;
        cursor: pointer;
      }
    }
    

    form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap:10px;
    }
  }
`