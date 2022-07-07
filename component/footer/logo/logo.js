import Link from "next/link";
import Image from "next/image";
const img = "/content/img/logo.png"
import styles from './logo.module.scss'

export default function LogoFooter() {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <a>
                    <Image src={img} alt="Picture of the author" width={106} height={36} />
                </a>
            </Link>
        </div>
    )
}