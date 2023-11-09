import { useEffect, useState } from 'react'
import { Container, ContainerCards, Input } from './Styles/Style'
import { AiOutlineSearch} from "react-icons/ai";


function App() {
    // API KEY http://www.omdbapi.com/?i=tt3896198&apikey=698e7173
    const [inputValue, setInputValue] = useState('')
    const [data, setData] = useState([])

    useEffect(() =>{
        const fetchData = async () =>{
        const response = await fetch(`http://www.omdbapi.com/?apikey=698e7173&s=batman`)

        const dataJson = await response.json()
   
        setData(dataJson.Search)
    }
    fetchData()
    },[])
 

    async function fetching(){
        const response = await fetch(`http://www.omdbapi.com/?apikey=698e7173&s=${inputValue}`)

        const dataJson = await response.json()
   
        setData(dataJson.Search)
   
    }
    console.log(data)
    function handleClick(){
        fetching()

    }

    function handleClickFlipCard(id){
        const card = document.getElementById(`meuCartao${id}`)
        card.classList.toggle('flipped')
    
    }
    function handleChange(e){
        const value = e.target.value
        setInputValue(value)
    }
    
  return (
    <>
      <Container>
            <h1>Busca Filmes</h1>
                <div className='WrapperInput'>
                <Input onChange={handleChange} placeholder='Ex : Shrek'/>
                <span>
                    <AiOutlineSearch onClick={handleClick}/>
                </span>
                </div>

       
                <ContainerCards>
                {data.map((movie,index) => {
                  return(
                    <div className="flip-card" key={movie.imdbID}onClick={() => handleClickFlipCard(index)} id={`meuCartao${index}`}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={movie.Poster} alt="" />
                        </div>
                        
                        <div className="flip-card-back">
                            <p>Nome: {movie.Title}</p>
                            <p>Ano: {movie.Year}</p>
                            <p>Genênero: Filme</p>
                        </div>
                    </div>
                    </div>
                  )
                })}
              
            

                </ContainerCards>
           
      </Container>
    </>
  )
}

export default App
