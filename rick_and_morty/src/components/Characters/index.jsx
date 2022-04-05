import './styles.css';
import CharCard from '../CharCard';

const Characters = ({listCharacters}) => {



  return (
    <>
      <h1>Characters from <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Open - Rick And Morty Svg Free Clipart@pikpng.com"/></h1>
      <ul >

        {listCharacters.map(({name, image, id, status }) => (

          <CharCard name={name} image={image} key={id} status={status}/>

        ))}

      </ul>
    
    </>
  )
}

export default Characters;