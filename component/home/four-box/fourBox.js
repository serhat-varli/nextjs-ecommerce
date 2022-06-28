import Image from "next/image";
import styles from './fourbox.module.scss';
export default function FourBox() {
    const ary = [
        {
            id: 1,
            title: "WOMEN TOPS",
            desk: "From world's top designer",
            btn: "Discover Now",
            img: "/content/img/four-box/items-1.png",
            positions: "left",
            width : "575",
            height: "575"
        },
        {
            id: 2,
            title: "ACCESSORIES",
            desk: "add finishing touch to your outfit ",
            btn: "Shop Now",
            img: "/content/img/four-box/items-4.png",
            positions: "left",
            width : "575",
            height: "385"
        },
        {
            id: 3,
            title: "WOMEN TOPS",
            desk: "Up to 70% off on selected item",
            btn: "Shop Now",
            img: "/content/img/four-box/items-2.png",
            positions: "right",
            width : "575",
            height: "385"
        },
        {
            id: 4,
            title: "DENIM",
            desk: "Find your perfect outfit",
            btn: "Shop Now",
            img: "/content/img/four-box/items-3.png",
            positions: "right",
            width : "575",
            height: "575"
        }
    ]
    return (
        <div className={styles['four-box']}>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='row'>
                        {
                            ary.map(item => {
                                {
                                    if (item.positions == "left") {
                                        return <div className='col-md-12' key={item.id}>
                                            <div className={styles['box__area']}>
                                                <Image className={styles.img} src={item.img} alt="" width={item.width} height={item.height} />
                                                <div className={styles.box}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.desk}</p>
                                                    <button className="btn" type="button">{item.btn}</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                }
                            })
                        }
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        {
                            ary.map(item => {
                                {
                                    if (item.positions == "right") {
                                        return <div className='col-md-12' key={item.id}>
                                            <div className={styles['box__area']}>
                                                <Image className={styles.img} src={item.img} alt="" width={item.width} height={item.height} />
                                                <div className={styles.box}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.desk}</p>
                                                    <button className="btn" type="button">{item.btn}</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}