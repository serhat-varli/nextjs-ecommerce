
import FourBox from '../../component/home/four-box/fourBox'
import Sliders from '../../component/home/slider/slider'
import styles from './home.module.scss'

export default function Homes() {
    return (
        <div className={styles.home}>
            <Sliders />
            <FourBox />
        </div>
    )
}