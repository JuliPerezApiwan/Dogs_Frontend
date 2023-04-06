import Styles from './loading.module.css'

export default function Loading() {
    return (
        <div className={Styles.container}>
            <div className={Styles.leap_frog}>
                <div className={Styles.leap_frog__dot}></div>
                <div className={Styles.leap_frog__dot}></div>
                <div className={Styles.leap_frog__dot}></div>
            </div>
        </div>
    )
}