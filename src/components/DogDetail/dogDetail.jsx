import { useParams } from 'react-router-dom'; // ME PERMITE TRAER LAS PROPIEDADES, ME RETORNA UN OBJETO
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDogDetail, cleanDetail } from '../../redux/actions';
//import { cleanCountryDetail } from '../../redux/actions';
import style from '../DogDetail/dogDetail.module.css';
import Loading from '../Loading/loading';



const DogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  //const dog = useSelector((state) => state.dogDetail)
  const { name, image, height, weight, life_span, temperament, Temperaments } = useSelector((state) => state.dogDetail);
  
  
 
 

  useEffect(() => {
    dispatch(getDogDetail(id));
    return () => dispatch(cleanDetail()) 
  }, [dispatch, id]);



  if (!name) return (
    <div className={style.loading}>
       
        <div className={style.loaderContainer}>
            <Loading></Loading>
        </div>
     
    </div>
    )
    else return (
           
        <div className={style.dogDetail}>
             <Link to="/home" className={style.btn_detail}>BACK</Link>
        <div className={style.container}>
          <img src={image} alt={name} />
            <h1>{name}</h1>


          <div className={style.dogDetail_data}>
            <h3>Height:</h3> <p>{height + ' metrical'}</p>
            <h3>Weight:</h3> <p>{weight + ' metrical'}</p>
            <h3>Life Span:</h3> <p>{life_span}</p>
            <h3>Temperaments:</h3> <p>{temperament?temperament:Temperaments?.map((e) =>  e.name + ", ")}</p>
          </div>
        </div>
      </div>
    );
    
  

};

export default DogDetail;
