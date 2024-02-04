import classNames from "classnames/bind";
import styles from './Explore.module.scss';
import Box from "~/components/Box";

const cx = classNames.bind(styles);

const explore = [
    {
        title: 'Nội dung 1',
        description: 'Nội dung 1',
        imageUrl: 'https://btnmt.1cdn.vn/2019/05/28/a08c9b45-420e-4d2c-b7bd-e026deb4a38d.jpg'
    },
    {
        title: 'Nội dung 2',
        description: 'Nội dung 2',
        imageUrl: 'https://btnmt.1cdn.vn/2019/05/28/a08c9b45-420e-4d2c-b7bd-e026deb4a38d.jpg'
    },
    {
        title: 'Nội dung 3',
        description: 'Nội dung 3',
        imageUrl: 'https://btnmt.1cdn.vn/2019/05/28/a08c9b45-420e-4d2c-b7bd-e026deb4a38d.jpg'
    },
    {
        title: 'Nội dung 4',
        description: 'Nội dung 4',
        imageUrl: 'https://btnmt.1cdn.vn/2019/05/28/a08c9b45-420e-4d2c-b7bd-e026deb4a38d.jpg'
    },
]
function Explore() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('text')}>Explore</h1>
            <div className={cx('container')}>
            {explore.slice(0,2).map((member, index) => (
                <Box
                    medium
                    key={index}
                    title={member.title}
                    description={member.description}
                    imageUrl={member.imageUrl}
                ></Box>
            ))}
            </div>
            <div className={cx('content')}>
            {explore.slice(-2).map((member, index) => (
                <Box
                    medium
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

export default Explore;