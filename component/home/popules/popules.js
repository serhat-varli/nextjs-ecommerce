import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './popules.module.scss'
import Link from "next/link";
export default function Popules() {
    const populers = [
        {
            id: 1,
            title: "Innerbloom Puffer Jacket",
            img: "/content/img/product/items-1.png",
            price: 479.00,
            oldprice: 750.00,
            color: ""
        },
        {
            id: 2,
            title: "Martha Knit Top",
            img: "/content/img/product/items-2.png",
            price: 300.00,
            oldprice: 0.00,
            color: ""
        },
        {
            id: 3,
            title: "Button Up Top Black",
            img: "/content/img/product/items-3.png",
            price: 800.00,
            oldprice: 0.00,
            color: ""
        },
        {
            id: 4,
            title: "Backpack With Contrast Bow",
            img: "/content/img/product/items-4.png",
            price: 70.00,
            oldprice: 0.00,
            color: ""
        },
        {
            id: 1,
            title: "Toledo Mules shoes",
            img: "/content/img/product/items-5.png",
            price: 200.00,
            oldprice: 0.00,
            color: ""
        }
    ]
    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className={styles.popules}>
            <div className={styles.head}>
                <h2>NEW ARRIVALS</h2>
                <p>Shop our new arrivals from established brands</p>
            </div>
            <div className={styles["popules__inner"]}>
                <Slider {...settings}>
                    {
                        populers.map(slider => (
                            <div key={slider.id} className={`${styles.slider__items}`}>
                                <div className={styles.img}>
                                    <img src={slider.img} alt="" width='350' height='450' />
                                    <div className={styles['button-set']}>
                                        <a className="btn" href="">
                                            <i className="icon-heart-l"></i>
                                        </a>
                                        <a className="btn" href="">
                                            <i className="icon-cart-l" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <Link href="/"><a><h2>{slider.title}</h2></a></Link>
                                    {
                                        slider.oldprice > slider.price ?
                                            <div className={styles["price__area"]}>
                                                <span className={styles["old__price"]}> ${slider.oldprice.toFixed(2)}</span>
                                                <span className={styles["new__price"]}> ${slider.price.toFixed(2)}</span>
                                            </div>
                                            :
                                            <div className={styles["price__area"]}>
                                                <span className={styles.price}> ${slider.price.toFixed(2)}</span>
                                            </div>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );

}