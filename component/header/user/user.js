import Link from "next/link";
import styles from './user.module.scss'
export default function UserHeader() {
    return (
        <div className={styles.user}>
            <ul>
                <li><Link href=''><a><span className="icon-search-l"></span></a></Link></li>
                <li><Link href=''><a><span className="icon-heart-l"></span></a></Link></li>
                <li><Link href=''><a><span className="icon-bag-l"></span></a></Link></li>
            </ul>
        </div>
    )
}