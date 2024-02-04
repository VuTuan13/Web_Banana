import classNames from "classnames/bind";
import styles from './Teams.module.scss';
import Box from "~/components/Box";

const cx = classNames.bind(styles);

const team = [
    {
        title: 'Tô Quý Thành',
        description: 'Leader',
        imageUrl: 'https://btnmt.1cdn.vn/2019/05/28/a08c9b45-420e-4d2c-b7bd-e026deb4a38d.jpg'
    },
    {
        title: 'Nguyễn Quang Minh',
        description: 'Nguyễn Quang Minh',
        imageUrl: 'https://btnmt.1cdn.vn/2019/05/28/a08c9b45-420e-4d2c-b7bd-e026deb4a38d.jpg'
    },
    {
        title: 'Vũ Ngọc Tuân',
        description: 'Vũ Ngọc Tuân',
        imageUrl: 'https://btnmt.1cdn.vn/2019/05/28/a08c9b45-420e-4d2c-b7bd-e026deb4a38d.jpg'
    },
    {
        title: 'Ngô Anh Tuấn',
        description: 'Ngô Anh Tuấn',
        imageUrl: 'https://btnmt.1cdn.vn/2019/05/28/a08c9b45-420e-4d2c-b7bd-e026deb4a38d.jpg'
    },
]

function Team() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('text')}>Nhóm phát triển sản phẩm</h2>
            <div className={cx('container')}>
            {team.map((member, index) => (
                <Box
                    xsmall
                    key={index}
                    title={member.title}
                    description={member.description}
                    imageUrl={member.imageUrl}
                ></Box>
            ))}
            </div>
        </div>
    )
}

export default Team;