import styles from "./copyright.module.scss";

export default function CopyRight() {
    return (
        <div className={styles["copy-right"]}>
            <div className={styles["copy-inner"]}>
                © 2022 Avone. All Rights Reserved. Ecommerce Software by SV TASARIM
            </div>
        </div>
    )
}