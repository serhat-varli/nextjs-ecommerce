import { useState } from 'react';
import styles from './search.module.scss';
export default function Search({ actives }) {
    const [search, setSearch] = useState('');
    if(actives == false) {
        
    }
    return (
        <div className={[styles["search__box-area"], actives == true ? styles.active : ""].join(" ")}>
            <form>
                <input className={styles.search__input} type="search" name="q" placeholder="Search for products, brands and more" value={search} onChange= {(e) => setSearch(e.target.value)} autoComplete="off" />
                <button className={styles.btn} type="submit"><i className="icon-search-l"></i></button>
            </form>
        </div>
    )
}