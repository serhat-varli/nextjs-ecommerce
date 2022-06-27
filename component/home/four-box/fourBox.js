import Image from "next/image";
import styles from './fourbox.module.scss';
export default function FourBox() {
    const ary = [
        {
            id: 1,
            title: "WOMEN TOPS",
            desk: "From world's top designer",
            btn: "DISCOVER NOW",
            img: "/content/img/four-box/items-1.png",
            positions: "left"
        },
        {
            id: 1,
            title: "WOMEN TOPS",
            desk: "From world's top designer",
            btn: "DISCOVER NOW",
            img: "/content/img/four-box/items-4.png",
            positions: "left"
        },
        {
            id: 1,
            title: "WOMEN TOPS",
            desk: "From world's top designer",
            btn: "DISCOVER NOW",
            img: "/content/img/four-box/items-1.png",
            positions: "left"
        },
        {
            id: 1,
            title: "WOMEN TOPS",
            desk: "From world's top designer",
            btn: "DISCOVER NOW",
            img: "/content/img/four-box/items-1.png",
            positions: "left"
        }
    ]
    return (
        <div className={styles['four-box']}>
            <div className='row'>
                {/* {
                ary.map(item => (
                    <div className=''>asd</div>
                ))
               } */}

                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Image src="/content/img/four-box/items-1.png" alt="" width='575' height='575' />
                        </div>
                        <div className='col-md-12'>
                            <Image src="/content/img/four-box/items-4.png" alt="" width='575' height='385' />
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Image src="/content/img/four-box/items-2.png" alt="" width='575' height='385' />
                        </div>
                        <div className='col-md-12'>
                            <Image src="/content/img/four-box/items-3.png" alt="" width='575' height='575' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}