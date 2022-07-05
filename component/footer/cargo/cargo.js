import styles from "./cargo.module.scss";

export default function Cargo() {
    return (
        <div className={styles.cargo}>
            <div className={styles["cargo__inner--area"]}>
                <div className="row">
                <div className="col-md-4">
                        <div className={styles.box}>
                            <i className="icon-free-delivery"></i>
                            <div className={styles.text}>
                                <h3>FREE SHIPPING & RETURN</h3>
                                <p>Free shipping on all US orders</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.box}>
                            <i className="icon-money"></i>
                            <div className={styles.text}>
                                <h3>MONEY GAURNTEE</h3>
                                <p>30 days money back guarantee</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.box}>
                            <i className="icon-phone-24"></i>
                            <div className={styles.text}>
                                <h3>ONLINE SUPPORT</h3>
                                <p>We support online 24/7 on day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}