import Image from "next/image";
import styles from './twobox.module.scss';
export default function TwoBox() {
    const ary = [
        {
            id: 1,
            title: "FIND THE BEST COLLECTION AROUND THE WORLD",
            desk: "",
            btn: "Shop Now",
            img: "/content/img/two-box/items-1.png",
            positions: "left",
            width: "750",
            height: "500"
        },
        {
            id: 2,
            title: "AWESOME T-SHIRTS, CROP TOPS AND MORE...",
            desk: "",
            btn: "Shop Now",
            img: "/content/img/two-box/items-2.png",
            positions: "",
            width: "750",
            height: "500"
        }
    ]
    return (
        <div className={styles['two-box']}>
            <div className='row'>
                {
                    ary.map((item) => (
                        <div className='col-md-6' key={item.id}>
                            <div className={styles['box__area']}>
                                <img className={styles.img} src={item.img} alt="" width={item.width} height={item.height} />
                                <div className={styles.box}>
                                    <h3>{item.title}</h3>
                                    <button className="btn" type="button">{item.btn}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}