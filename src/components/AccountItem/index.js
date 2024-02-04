import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            <span className={cx('text')}>Search</span>
        </div>
    );
}

export default AccountItem;