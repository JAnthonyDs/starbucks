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
            transition: 0.6s;
            font-size: 20px;
            &:hover, &:focus {
                transform: rotate(360deg);
                /* text-decoration: underline; */
            }
        }

    }

`;