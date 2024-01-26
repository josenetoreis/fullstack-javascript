import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo"
import imagemLivros from "../../imagens/livro2.png"
import CardRecomenda from "../CardRecomenda"
import styled from "styled-components"

const UltimosLacamentosContainer = styled.section`
        background-color: #EBECEE;
        padding-botom: 20px;
        display: flex;
        flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`



function UltimosLancamentos() {
    return(
        <UltimosLacamentosContainer>
         <Titulo
          cor={"#EB9B00"} 
          tamanhoFonte={"36px"}
           alinhamento={"center"}
           >ÚLTIMOS LANÇAMENTOS</Titulo>
        <NovosLivrosContainer>
            {livros.map(
                livro => (
                    <img src={livro.src}/>
            )
        )}
        </NovosLivrosContainer>
        <CardRecomenda
            titulo="Talvez você se intesse por..."
            subtitulo="Agular 11"
            descricao="Contruindo uma aplicação com a plataforma Google"
            img={imagemLivros}
            />
        </UltimosLacamentosContainer>
    )}


export default UltimosLancamentos