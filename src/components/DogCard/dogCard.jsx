import { Link } from "react-router-dom";
import style from '../DogCard/dogCard.module.css'


const DogCard = ({id, name, image, temperament, weight, Temperaments }) => {
    //console.log(Temperaments)
   
    return(
        <div className={style.dogCard}>
            <img src={image} alt={name} />

            <Link to={`/dogs/${id}`} className={style.link_dogCard}  >
            <h2>{name}</h2></Link>
            <h4>Weight</h4> 
            <p>{weight} metrical </p>
            <h4>Temperaments</h4> 
            <p>{temperament?temperament:Temperaments?.map((e) =>  e.name)}</p>
            
        </div>
    )
}

export default DogCard;