import styled from "styled-components";

export const StyledMain = styled.div`
    display: flex;
    flex-direction:column;

    margin-top:-8px;
    margin-bottom :-8px;
    margin-left :-8px;
    margin-right :-8px;
    background-color: #E7E2DA;
    height: 100vh;
`

export const ButtonForm = styled.button`
        flex: 1 0 2.6rem;
        background-color: #c0b9a5;
        border: none;
        border-radius: 1rem ;
        
        flood-color: gray;
        font-size: 1rem;

        height: 3.125rem;
        
        &:hover{
            transition:.3s linear ;
            background-color: #b4ab93;
            cursor: pointer;

        }
`

export const AllFonts = styled.div`
    font-family: 'Poppins', sans-serif;
`