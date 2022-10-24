import styled from "styled-components";
export const Container = styled.div`
width: 90%;
margin: auto;
margin-top: 100px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
@media (max-width: 768px) {
        flex-direction: column;
    
  }
`