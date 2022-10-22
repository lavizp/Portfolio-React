import styled from "styled-components"

export const Line = styled.hr`
    background-color: ${props=>props.theme.secondary};
    width: 90%;
    height: 1px;
    line-height: 80%;
    border: none;
    margin-top: 100px;
`