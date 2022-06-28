import Link from "next/link";
import { useState } from "react";
import Search from "../search/search";
import styles from './user.module.scss'
export default function UserHeader() {
    const [active, setActive] = useState(false)
    const searchClick = () => {
        if (active == false) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    }

    return (
        <div className={styles.user}>
            <ul>
                <li className={[styles["search__btn-area"], active == true ? styles.active : ""].join(" ")}><Link href='/'><a><span className={styles['icon-search-l']} onClick={(e) => searchClick()}></span> <span className={styles['icon-times-l']} onClick={(e) => searchClick()}></span></a></Link></li>
                <li><Link href='/'><a><span className="icon-heart-l"></span></a></Link></li>
                <li><Link href='/'><a><span className="icon-bag-l" ></span></a></Link></li>
            </ul>
            <Search actives={active} />
        </div>


    )
}