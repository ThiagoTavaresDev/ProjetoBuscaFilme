import styled from "styled-components";

export const Container = styled.div`
  

    width: 820px;
    background-color: var(--color-secundary);
    border-radius: 10px;
    margin: 10px auto;
    text-align: center;

    h1{
        font-size: 2.5rem;
        color: var(--color-text);
        padding-top: 20px;
    }   
    .WrapperInput{
        position: relative;
        margin-top: 60px;
    }
    .WrapperInput span{
        position: absolute;
        top: 6px;
        right: 134px;
        font-size: 1.825rem;
        color: white;
        cursor: pointer;
    }
   
`;

export const Input = styled.input`
    width: 70%;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 1.05rem;
    border-radius: 10px;
    color: var(--color-text);
    background-color: var(--color-main);


    &::placeholder{
        font-weight: bold;

    }
`
export const ContainerCards = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around; 
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px;
    width: 100%;
    

.flip-card {
    perspective: 1000px; 
    width: 140px;
    height: 230px;

}


.flip-card-inner {
  width:100%;
  height: 100%;
  transform-style: preserve-3d; 
  transition: transform 0.5s; 

}


.flip-card-front,
.flip-card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;

}


.flip-card-front {
    background-color: var(--color-text);
    padding: 0.6px;

}
.flip-card-front img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.flip-card-back {
  
  transform: rotateY(180deg);
  padding: 7px;
  background-color: var(--color-text);
}

.flip-card-back p {

    font-weight: bold;
}



.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

`

