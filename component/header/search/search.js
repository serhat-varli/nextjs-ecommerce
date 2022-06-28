import styles from './search.module.scss';
export default function Search({ actives }) {
   
    return (
        <div className={[styles["search__box-area"], actives == true ? styles.active : ""].join(" ")}>
            {/* <a className={styles.closeSearch} href="javascript:void(0);"><i className="icon-times-l"></i></a> */}
            <form>
                <input className={styles.search__input} type="search" name="q" placeholder="Search for products, brands and more" value="" autoComplete="off" />
                <button className={styles.btn} type="submit"><i className="icon-search-l"></i></button>
            </form>
        </div>
    )
}