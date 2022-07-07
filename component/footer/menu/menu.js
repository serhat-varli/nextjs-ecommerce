import Link from "next/link";
import styles from "./menu.module.scss"
export default function MenuFooter() {
    const ary = [
        {
            id: 1,
            title: "About us",
            positions: "left",
            url: "/fsdf",
        },
        {
            id: 2,
            title: "Contact Us",
            positions: "left",
            url: "/fsdfs",
        },
        {
            id: 3,
            title: "Career",
            positions: "left",
            url: "/fsdfss",
        },
        {
            id: 4,
            title: "My Account",
            positions: "left",
            url: "/fsdfaaa",
        },
        {
            id: 5,
            title: "Orders and Returns",
            positions: "left",
            url: "/fsdfas",
        },


        {
            id: 6,
            title: "Fashion",
            positions: "center",
            url: "/fsdfas",
        },
        {
            id: 7,
            title: "Men",
            positions: "center",
            url: "/fsdfas",
        },
        {
            id: 8,
            title: "Furniture",
            positions: "center",
            url: "/fsdfas",
        },
        {
            id: 9,
            title: "Home Decor",
            positions: "center",
            url: "/fsdfas",
        },
        {
            id: 10,
            title: "Shoes",
            positions: "center",
            url: "/fsdfas",
        },



        {
            id: 11,
            title: "Help & FAQs",
            positions: "right",
            url: "/fsdfas",
        },
        {
            id: 12,
            title: "Returns Policy",
            positions: "right",
            url: "/fsdfas",
        },
        {
            id: 13,
            title: "Terms & Conditions",
            positions: "right",
            url: "/fsdfas",
        },
        {
            id: 14,
            title: "Privacy Policy",
            positions: "right",
            url: "/fsdfas",
        },
        {
            id: 15,
            title: "Support Center",
            positions: "right",
            url: "/fsdfas",
        },
     
    ]
    return (
        <div className="col-md-12">
            <div className="row">
            <div className="col-md-4">
                    <h3 className={styles.title}>INFORMATION</h3>
                    <ul className={styles.nav}>
                        {
                            ary.map(nav => {
                                {
                                    if (nav.positions == "left") {
                                        return <li key={nav.id}><Link href={nav.url}><a >{nav.title}</a></Link></li>
                                    }
                                }
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3 className={styles.title}>QUICK SHOP</h3>
                    <ul className={styles.nav}>
                        {
                            ary.map(nav => {
                                {
                                    if (nav.positions == "center") {
                                        return <li key={nav.id}><Link href={nav.url}><a >{nav.title}</a></Link></li>
                                    }
                                }
                            })
                        }
                    </ul>
                </div>
                

                <div className="col-md-4">
                    <h3 className={styles.title}>CUSTOMER SERVICES</h3>
                    <ul className={styles.nav}>
                        {
                            ary.map(nav => {
                                {
                                    if (nav.positions == "right") {
                                        return <li key={nav.id}><Link href={nav.url}><a >{nav.title}</a></Link></li>
                                    }
                                }
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}