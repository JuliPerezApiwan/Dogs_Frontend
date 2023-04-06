import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addDog, getAllDogs, getAllTemperaments } from '../../redux/actions';
import style from '../Form/form.module.css';
import { Link } from 'react-router-dom';
import validate from './validation';


const Form = () => {
    //const allDogs = useSelector((state) => state.allDogs);
    const allTemperaments = useSelector((state) => state.allTemperaments);
    const dispatch = useDispatch('');
    const [form, setForm] = useState({
        image: '',
        name:'',
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        life_span: '',
        temperamentID: [],
    });

    const [errors, setErrors] = useState({
        image: '',
        name:'',
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        life_span: '',
        temperamentID: [],
    })
   //max height
 //min
 //max weight
 //min 

 //const maxHeight = temperaments.
 
  
  
    const handleChange = (event) => {
       setForm ({
        ...form,
        [event.target.name]: event.target.value,
      });
      setErrors(validate({
        ...form,
         [event.target.name]: event.target.value
     }))
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
     dispatch(addDog(form));
     
     if (form.name.length > 0 && form.min_height.length > 0 && form.max_height.length > 0 && form.min_weight.length > 0 && form.max_weight.length > 0 && form.life_span.length > 0 && form.temperamentID.length > 0) {
     setForm({
        image: '',
        name:'',
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        life_span: '',
        temperamentID: [],
        
     })
     alert('Raza creada')
    }
     
     
     else {
        alert(errors.name || errors.height|| errors.weight || errors.life_span || errors.temperamentID)
     }
    };
  
    const handleSelectTemperaments = (e) => {
      setForm({
        ...form,
        temperamentID : [...form.temperamentID,e.target.value],
      });
    };

    
  
    
    useEffect(() => {
      dispatch(getAllDogs());
      dispatch(getAllTemperaments());
    }, [dispatch]);
  
    return (
    
      <div className={style.div}>
        <form className={style.form} onSubmit={handleSubmit}>
          <Link to="/home" className={style.btn_home}>
            <button>Home</button>
          </Link>
          <div className={style.container}>
            <h2>ADD DOGS FORM</h2>
            <label>Image <input type="text" autoComplete="off" value={form.image} name="image" placeholder="Image URL..." onChange={handleChange}/>
            </label>
           

            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder='Name'
              ></input>
            </label>
  
            <label>
            Height
            <input
                type="text"
                name="min_height"
                value={form.min_height}
                onChange={handleChange}
                placeholder='Min height '
              ></input>
                  <input
                type="text"
                name="max_height"
                value={form.max_height}
                onChange={handleChange}
                placeholder='Max height'
              ></input>
              
            </label>
  
            <label>
            Weight
            <input
                type="text"
                name="min_weight"
                value={form.min_weight}
                onChange={handleChange}
                placeholder='Min weight'
              ></input>
               <input
                type="text"
                name="max_weight"
                value={form.max_weight}
                onChange={handleChange}
                placeholder='Max weight'
              ></input>
            </label>
  
            <label>
            Life Span
              <input
                type="text"
                name="life_span"
                value={form.life_span}
                onChange={handleChange}
                placeholder='Life Span'
              />
            </label>
  
            <label>
            Temperaments
            <select
              className="select"
              name="temperaments"
              onChange={handleSelectTemperaments}
              value={form.id}
              key={form.id}
            >
              
              {allTemperaments?.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
            <div className={style.btn_select}>
           { Array.isArray(form.temperamentID) ? form.temperamentID.map((e)=> <button  type='button' key={e.name} value={e.name}>{e}</button>) : null}
            </div>
          </label>
            <div className={style.btn}>
              <button type="submit">Add Dog</button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  const dispatchDog = (dispatch) => {
    return {
      addDog: (dog) => {dispatch(addDog(dog))},
    };
  };
  
  
  export default connect(null, dispatchDog)(Form);