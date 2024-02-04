import classNames from "classnames/bind";
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEarthAsia, faHome, faLanguage, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Menu from "~/components/Popper/Menu";
import Search from "../Search";

const cx = classNames.bind(styles);

function Header() {

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faLanguage}/>,
            title: 'English',
            children: {
                title:'Language',
                data: [
                    {
                        code:'en',
                        title: 'English'
                    },
                    {
                        code:'ch',
                        title: 'Chinese'
                    },
                    {
                        code: 'ja',
                        title: 'Japanese'
                    },
                    {
                        code: 'vn',
                        title: 'VietNamese'
                    }
                ]
            }
        }
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('header-logo')}>
                    <FontAwesomeIcon icon={faHome} className={cx('logo')}></FontAwesomeIcon>
                </div>
                <div className={cx('menu')}>
                    <ul>
                        <li><a href="#">Release</a></li>
                        <li><a href="#">Research</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Explore</a></li>
                    </ul>
                </div>
            </div>
            <div className={cx('content-nav')}>
                <Search/>
                <Menu items ={MENU_ITEMS}>
                    <div className={cx('language')}>
                        <button className={cx('language-btn')}>
                            <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>
                            <span className={cx('text')}>Language</span>
                        </button>
                    </div>
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;