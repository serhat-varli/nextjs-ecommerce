import FooterAbout from "../about/about";
import Cargo from "../cargo/cargo";
import CopyRight from "../copyright/copyright";
import MenuFooter from "../menu/menu";
import styles from "./footer.module.scss";

export default function FooterDefault() {
    return (
        <footer>
            <div className={styles.footer}>
                <Cargo />
                <div className={styles["footer__wrap"]}>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-3">
                                    <FooterAbout />
                                </div>
                                <div className="col-md-9">
                                    <div className="row">
                                        <MenuFooter />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
                <CopyRight/>
            </div>
        </footer>
    )
}