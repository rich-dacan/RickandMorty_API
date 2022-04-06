import './styles.css';

const CharCard = ({name, image, status}) => {

  return (


    <>
      {status === 'Dead' ?
      
        <li>
          <span className='card__container'>

            <img className='dead' src={image} alt="character"  />
            <p>{name}</p>

          </span>
        </li>
      : 

      <li>
      <span className='card__container'>

        <img src={image} alt="character"  />
        <p>{name}</p>

      </span>
      </li>
        
      
      }
    
    </>
  )
}

export default CharCard;
