import classNames from "classnames/bind";
import styles from './Footer.module.scss';
import Button from "~/components/Button";
import List from '~/components/Popper/List';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTelegram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

const LIST = [
    {
        title: 'AI',
        content: ['Nội dung 1', 'Nội dung 2', 'Nội dung 3', 'Nội dung 4']
    },
    {
        title: 'Moble',
        content: ['Nội dung 1', 'Nội dung 2', 'Nội dung 3', 'Nội dung 4']
    },
    {
        title: 'Web',
        content: ['Nội dung 1', 'Nội dung 2', 'Nội dung 3', 'Nội dung 4']
    },
    {
        title: 'Cloud',
        content: ['Nội dung 1', 'Nội dung 2', 'Nội dung 3', 'Nội dung 4']
    },
    {
        title: 'Support',
        content: ['Nội dung 1', 'Nội dung 2', 'Nội dung 3', 'Nội dung 4']
    },
]

function Footer() {
    return <footer className={cx('wrapper')}>
        <div className={cx('container')}>
            <div className={cx('input-email')}>
                <span>Tempor velit sint pariatur fugiat id velit eu magame eu.</span><br/>
                <input 
                    className={cx('email')}
                    type="email"
                    placeholder="Email..."
                    spellCheck={false}
                />
                <Button small className={cx('button')}>Register</Button>
            </div>
            <div className={cx('contact')}>
                <List items={LIST}/>
            </div>
        </div>
        <div className={cx('icon')}>
            <div class={cx('footer-container')}>
                <div class={cx('footer-year')}>
                    <span class={cx('year-text')}>© 2024 Your Website. All rights reserved. Designed by <a href="">REVITE TEAM</a></span>
                </div>
                <div class={cx('footer-icon')}>
                    <span>Follow us</span>
                    <a href=""><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href=""><FontAwesomeIcon icon={faYoutube}/></a>
                    <a href=""><FontAwesomeIcon icon={faTelegram}/></a>
                    <a href=""><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;