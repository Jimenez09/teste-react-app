import { useNavigate } from "react-router-dom";
import StyledHome from "./StyledHome";


function Home() {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/about');
    }
    return (
        //@ts-ignore
        <StyledHome col>
            <h1>Join the Dark Side</h1>
            <button onClick={handleClick}> Ir para about </button>
        </StyledHome>
    );
}

export default Home

//OPÇÃO MELHOR
// const handleClick = (page:string)=>{
//         navigate('/${page}')
//     }

// return (
//         <>
//             <h1>Home</h1>
//             <button onClick={()=>handleClick("bulba")}>Nome da pagina</button>
//             <button onClick={()=>handleClick("char")}>Nome da pagina</button>
//             <button onClick={()=>handleClick("squir")}>Nome da pagina</button>
//             <button onClick={()=>handleClick("pikachu")}>Nome da pagina</button>
//             <img src="link"></img>
//         </>
//     );