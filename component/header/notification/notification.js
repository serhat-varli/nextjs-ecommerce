import Link from "next/link";
import { useState } from "react";
import styles from './notification.module.scss'
export default function Notification() {
    const [jsactive, setJsActive] = useState(false);
    const hidenNotifivation = () => {
        setJsActive(true)
        console.log(jsactive)
    }
    return (
        <div className={[styles.notification , jsactive == true ? styles.active : " "].join(" ")}>
            <Link href="/"><a><b>BLAZING FAST !</b> PURCHASE THIS INCREDIBLE THEME NOW <b> FOR THE SUCCESS OF YOUR BUSINESS !</b></a></Link>
            <span className={styles['icon-times-l']} onClick={(e) => hidenNotifivation()}></span>
        </div>
    )
}