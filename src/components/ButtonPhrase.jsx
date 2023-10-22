import getRandomFromArr from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

const ButtonPhrase = ({setPhraseRandom,setbgApp}) => {

    const handleChangePhrase = () =>{
        setPhraseRandom(getRandomFromArr(phrases))
        setbgApp(getRandomFromArr(bgArr))
    } 

  return (
    <button 
      className="app__btn" 
      onClick={handleChangePhrase}
    >Ver Otro</button>
  )
}

export default ButtonPhrase