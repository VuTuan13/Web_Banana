import classNames from "classnames/bind";
import styles from './Support.module.scss';
import Button from '~/components/Button'

const cx = classNames.bind(styles);
function Support() {
    return ( 
        <div className={cx('wrapper')}>
            <h1 className={cx('text')}>Welcome to Banana Support</h1>
            <div className={cx('container')}>
                <input className={cx('input')} placeholder="How can we help you?"/>
                <div className={cx('content')}>
                    <div className={cx('box')}>
                        <a>Đăng ký</a>
                    </div>
                    <div className={cx('box')}>
                        <a>Dịch vụ sửa chữa</a>
                    </div>
                    <div className={cx('box')}>
                        <a>Dịch vụ khác</a>
                    </div>
                </div>
                <div className={cx('subnav')}>
                    <h2 className={cx('nav')}>Nhận hỗ trợ</h2>
                    <p>Hãy cung cấp một vài thông tin chi tiết để chúng tôi đưa ra giải pháp tốt nhất cho bạn. Kết nối qua điện thoại, tính năng trò chuyện, email và các phương thức khác.</p>
                    <Button small className={cx('button')}>Bắt đầu</Button>
                </div>
            </div>
        </div> 
    );
}

export default Support;