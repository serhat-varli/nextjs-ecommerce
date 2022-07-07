import Link from "next/link";
import Image from "next/image";
const img = "/content/img/logo.png"
import styles from './about.module.scss'

export default function FooterAbout() {
    return (
        <div className={styles["footer__about-area"]}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <Image src={img} alt="Picture of the author" width={106} height={36} />
                    </a>
                </Link>
            </div>
            <p>
                55 Gallaxy Enque,<br />
                2568 steet, 23568 NY
            </p>
            <ul>
                <li><strong>Phone:</strong>(440) 000 000 0000</li>
                <li><strong>Email:</strong><a href="mailto:sales@yousite.com">sales@yousite.com</a></li>
            </ul>
            <div className={styles.social}>
                <a href="/" target="_blank"><i className="icon-facebook-f"></i></a>
                <a href="/" target="_blank"><i className="icon-twitter"></i></a>
                <a href="/" target="_blank"><i className="icon-instagram"></i></a>
                <a href="/" target="_blank"><i className="icon-pinterest-p"></i></a>
            </div>
        </div>
    )
}