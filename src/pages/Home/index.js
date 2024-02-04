import classNames from "classnames/bind";
import styles from './Home.module.scss';
import Slider from "~/components/Popper/Slider";
import Box from "~/components/Box";

const cx = classNames.bind(styles);

const content = [
    {
        title: 'AI',
        description: 'Tin tức nổi tiếng',
    },
    {
        title: 'Mobile',
        description: 'Tin tức nổi tiếng',
    },
    {
        title: 'Cloud',
        description: 'Tin tức nổi tiếng',
    },
    {
        title: 'Web',
        description: 'Tin tức nổi tiếng',
    },
]

const images = [
    'https://images.ctfassets.net/hrltx12pl8hq/4ACnMj4WVSOZRZt0jHu9h5/1506f652bcd70f4dc3e88219fefea858/shutterstock_739595833-min.jpg?fit=fill&w=1200&h=630',
    'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/hinh-nen-may-tinh-4k-cong-nghe-19.jpg',
    'https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/12/4/photo1701716046802-1701716046992949859703.jpg',
    'https://img.pikbest.com/backgrounds/20220119/blue-technology-future-background-picture_6236513.jpg!w700wp'
  ];

function Home() {
    return <div className={cx('wrapper')}>
        <div className={cx('slider')}>
            <div className={cx('message')}>
                <span class="noti-text">Thông báo mới sẽ nằm ở đây. <a href="">Xem thêm</a></span>
            </div>
            <Slider images={images}/>
        </div>
        <div className={cx('container')}>
            <Box 
                title={content[0].title}
                description={content[0].description}
                imageUrl={images[0]}
                big/>
            <div className={cx('box')}>
                {content.slice(1).map((item, index) => (
                    <Box
                        key={index + 1}
                        title={item.title}
                        description={item.description}
                        imageUrl={images[index + 1]}
                        small
                    />
                ))}
            </div>
        </div>
    </div>
}

export default Home;