import classNames from "classnames/bind";
import styles from './Box.module.scss'

const cx = classNames.bind(styles);

function Box({title, description, small, big, imageUrl, xsmall, medium}) {
    const classes = cx('wrapper', {
        small,
        big,
        xsmall,
        medium
    })

    return ( 
        <div className={classes}>
            <img src={imageUrl}/>
            <div className={cx('content')}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
     );
}

export default Box;