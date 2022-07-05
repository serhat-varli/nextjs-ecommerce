import Cargo from "../cargo/cargo";
import styles from "./footer.module.scss";

export default function FooterDefault() {
    return (
        <footer>
            <div className={styles.footer}>
                <Cargo />
            </div>
        </footer>
    )
}