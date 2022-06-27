const navMenu = [
    {
        id: 1,
        name: "Home",
        ulr: "/"
    },
    {
        id: 2,
        name: "Shop",
        ulr: "/"
    },
    {
        id: 3,
        name: "Features",
        ulr: "/"
    },
    {
        id: 4,
        name: "New In",
        ulr: "/"
    },
    {
        id: 5,
        name: "Lookbook",
        ulr: "/"
    },
    {
        id: 6,
        name: "Pages",
        ulr: "/"
    },
    {
        id: 7,
        name: "Blog",
        ulr: "/"
    }
]
import Link from 'next/link'
import styles from './nav.module.scss'
export default function MenuHeader() {
    return (
        <ul className={styles.nav}>
            {
                navMenu.map(nav => (
                    <li key={nav.id}><Link href=""><a>{nav.name}</a></Link></li>
                ))
            }
        </ul>
    )
}