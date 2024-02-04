import classNames from "classnames/bind";
import styles from './Question.module.scss'
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Question() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('like')}>
                <p>Did this page help you?</p>
                <Button small className={cx('yes')}>Yes</Button>
                <Button small className={cx('no')}>No</Button><br/>
                <a>Provide feedback</a>
            </div>
            <div className={cx('container')}>
                <p>Next topic: <a>Regions</a></p>
                <p>Need help?</p>
                <li><a>Connect with an AWS IQ expert</a></li>
            </div>
        </div>
     );
}

export default Question;