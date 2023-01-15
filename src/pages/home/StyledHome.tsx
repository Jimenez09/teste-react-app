//@ts-nocheck
import styled from 'styled-components'

const StyledHome =  styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url('https://www.showmetech.com.br/wp-content/uploads//2016/04/armadura-darth-vader.jpg');
    background-size: contain;
    color: white;
    display: flex;
    flex-direction: ${(props)=>(props.col ? 'column':'row')};
    justify-content: center;
    align-items: center;
    h1{
        font-size: 100px;
        color: red;
    }
    button{
        padding: 1.2rem;
        border: 1px solid red;
        border-radius: 4px;
        background: black;
        color: red;
    }
`;

export default StyledHome;