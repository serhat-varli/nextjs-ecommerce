import styles from "./blog.module.scss"
export default function Blog() {
    const ary = [
        {
            id: 1,
            title: "Women Wear that’ll have you Daydreaming Your Holiday",
            img: "/content/img/blog/items-1.png",
            width: "575",
            height: "575",
            date: "June 26, 2022"
        },
        {
            id: 2,
            title: "Our development is your success",
            img: "/content/img/blog/items-2.png",
            width: "575",
            height: "575",
            date: "March 6, 2019"
        },
        {
            id: 3,
            title: "Ensuring Customer Success",
            img: "/content/img/blog/items-3.png",
            width: "575",
            height: "575",
            date: "February 11, 2019"
        },
    ]
    return (
        <div className={styles.blog}>
            <div className={styles["blog__inner-area"]}>
                <div className="row">
                    <div className="col-md-12">
                        <div className={styles.head}>
                            <h2>FRESH FROM OUR BLOG</h2>
                            <p>You are going to love this amazing shopify theme.</p>
                        </div>
                    </div>
                    {
                        ary.map((blog) => (
                            <div className="col-md-4" key={blog.id}>
                                <div className={styles.box}>
                                    <img className="w-100" src={blog.img} alt={blog.title} />
                                    <a>{blog.title}</a>
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}