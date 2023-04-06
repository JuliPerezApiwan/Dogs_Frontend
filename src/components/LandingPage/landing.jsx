import { Link } from 'react-router-dom'
import style from '../LandingPage/landing.module.css'

const Landing = () => {
   return (
    <div className={style.landing}>
        <div className={style.data}>
        <h1>Henry Dogs</h1>
        <h3>by Julieta Perez Apiwan</h3>

    </div>
    <Link to="/home">
    <div className={style.btn_landing}>
        <button>HOME PAGE</button>
        </div>
    </Link>
    </div>
   )
}

export default Landing;