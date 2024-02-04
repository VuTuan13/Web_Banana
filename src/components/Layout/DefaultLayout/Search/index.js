import classNames from "classnames/bind";
import styles from './Search.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from '~/components/Popper'
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useRef, useEffect } from "react";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const inputRef = useRef();

  const handleSearchButtonClick = () => {
    setIsSearchVisible(true);
    setShowResult(true);
  }

  const handleCancel = () => {
    setIsSearchVisible(false);
    setShowResult(false);
    setSearchValue('');
    setSearchResult([]);
  }

  const handleHideResult = () => {
    setShowResult(false);
  }

  useEffect(() => {
    setTimeout(() => {
        setSearchResult([1, 2, 3]);
    }, 0)
    }, [])

  return (
    <div className={cx('wrapper')}>
      {isSearchVisible ? (
        <div className={cx('container')}>
          <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
            )}
            onClickOutside={handleHideResult}
          >
            <div className={cx('search')}>
              <input
                ref={inputRef}
                value={searchValue}
                placeholder="Search news"
                spellCheck={false}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
              />
              {!!searchValue && (
                <button className={cx('clear')} onClick={() => {
                  setSearchValue('');
                  inputRef.current.focus();
                  setSearchResult([]);
                }}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              )}
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </HeadlessTippy>
          {isSearchVisible && (
            <div>
              <Button small className={cx('cancel')} onClick={handleCancel}>Cancel</Button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <button className={cx('search-button')} onClick={handleSearchButtonClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            <span className={cx('text')}>Search</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
