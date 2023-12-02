import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    gap:41.25rem;

    h1{
        cursor: pointer;
    }

    div{
        display: flex;
        gap: 2.25rem;
        
        button{
            height:3.125rem;
            width:7.5rem;
        }
    }
`