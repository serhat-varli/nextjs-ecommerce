
import Blog from '../../component/home/blog/blog'
import FourBox from '../../component/home/four-box/fourBox'
import Popules from '../../component/home/popules/popules'
import Sliders from '../../component/home/slider/slider'
import TwoBox from '../../component/home/two-box/twoBox'
import styles from './home.module.scss'

export default function Homes() {
    return (
        <div className={styles.home}>
            <Sliders />
            <FourBox />
            <Popules/>
            <TwoBox/>
            <Blog/>
        </div>
    )
}