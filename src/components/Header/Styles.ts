import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    padding: 30px 100px;
    

    > ul {

        display: flex;
        gap: 30px;
        list-style: none;
        cursor: pointer;

        > li {
            font-size: 20px;
            &:hover, &:focus {
                text-decoration: underline;
            }
        }

    }

`;