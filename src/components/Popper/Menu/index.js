import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '~/components/Popper'
import MenuItem from './MenuItem';
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({children, items = []}) {
    const [history, setHistory] = useState([{ data:items}])
    const current = history[history.length - 1]
    
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <MenuItem 
                    key={index} 
                    data={item} 
                    onClick={() => {
                        if (isParent) {
                            setHistory(prev => [...prev, item.children])
                        } 
                         else {
                            onchange(item)
                         }
                    }}  
                />
            )}
        );
    }

    return (
        <Tippy 
            interactive
            delay={[0, 300]}
            placement="bottom-end"
            render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    {history.length > 1 && <HeaderMenu title="Language" onBack={ () => {
                        setHistory((prev) => prev.slice(0, prev.length -1))
                    }}/>}
                    {renderItems()}
                </PopperWrapper>
            </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;