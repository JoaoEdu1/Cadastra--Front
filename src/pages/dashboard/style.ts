import styled from "styled-components";

export const StyledDivv= styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;

    margin-top:-8px;
    margin-bottom :-8px;
    margin-left :-8px;
    margin-right :-8px;
    background-color: #E7E2DA;
    height: 100vh;
`

export const StyledMainDashboard = styled.main`
    display: flex;
    flex-direction: column;

    padding:20px;
    margin-top: -10px;
    background-color: red;
    width: 1199px;
    height: 684px;
    border-radius: 30px;
    background-color: #6F6049;
    gap:10px;
    
    
    
    .Modal{
        button{
            width: 145px;
        }
    }
    
    .contacts{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        flex-wrap: wrap;
        gap: 30px;
        padding:20px;
        border-radius: 20px;
        background-color: #948061;
        overflow-y: auto;
        
        
        div{
            display: flex;
            flex-direction: column;
            flex-wrap:wrap;
            align-items: center;
            justify-content: center;

            background-color: #c0b9a5;
            padding:10px;
            border-radius: 20px;
            gap:30px;
            max-width:185px;
            box-shadow: 13px 15px 28px -10px rgba(49,43,32,1);

        }

    }

`