import MenuHeader from '../menu/menu';
import LogoHeader from '../logo/logo';
import UserHeader from '../user/user';
import Notification from '../notification/notification';
import styles from './headerDefault.module.scss';

export default function HeaderDefault() {
    return (
        <header className={styles.header}>
            <Notification/>
            <div className={styles.navition}>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-md-2'>
                            <LogoHeader />
                        </div>
                        <div className='col-md-8'>
                            <MenuHeader />
                        </div>
                        <div className='col-md-2'>
                            <UserHeader />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}