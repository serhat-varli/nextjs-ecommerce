import MenuHeader from '../menu/menu';
import LogoHeader from '../logo/logo';
import UserHeader from '../user/user';
import Notification from '../notification/notification';
import styles from './headerDefault.module.scss';
import { useState } from 'react';

export default function HeaderDefault() {
    const [active, setActive] = useState(false)
    const navOpen = () => {
        if (active == true) {
            setActive(false)
        }
        else {
            setActive(true)
        }
    }
    return (
        <header className={styles.header}>
            <Notification />
            <div className={styles.navition}>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-5 col-lg-2 d-flex align-items-center'>
                            <i className={[["icon-bars-l"], styles["btn-nav"], active == true ? styles.active : ""].join(" ")} onClick={(e) => navOpen()}></i>
                            <LogoHeader active={active} />
                        </div>
                        <div className='col-1 col-lg-8'>
                            <MenuHeader active={active} />
                        </div>
                        <div className='col-6 col-lg-2'>
                            <UserHeader />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}