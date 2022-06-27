import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.scss'
const sliderAryy = [
    {
        id: 1,
        img: "/content/img/slider/dome1-bnr1.jpg",
        desk1: "ARE YOU READY?",
        desk2: " Start Selling Online Successfully",
        desk3: "Creative, Flexible and High Performance shopify theme!",
        url: "/",
        positions: "left"
    },
    {
        id: 2,
        img: "/content/img/slider/dome1-bnr2.jpg",
        desk1: "",
        desk2: " Speed up your store to convert more Sales",
        desk3: "The Powerful Theme You can Trust",
        url: "/",
        positions: "right"
    }
]

export default function Sliders() {

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {
                sliderAryy.map(slider => (
                    <div key={slider.id} className={`${styles.slider__items}`}>
                        <Image src={slider.img} alt="" width='1920' height='900' />
                        <div className={`${styles.slideshow__text} ${slider.positions == "left" ? styles.left : styles.right}`}>
                            <span className={styles.span}>{slider.desk1}</span>
                            <h2 className={styles.h2}>{slider.desk2}</h2>
                            <span className={styles.span}>{slider.desk3}</span>
                            <button className={styles.btn}>Shop now</button>
                        </div>
                    </div>
                ))
            }
        </Slider>
    );

}
