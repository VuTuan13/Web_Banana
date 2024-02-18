import classNames from "classnames/bind";
import styles from './Search.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from '~/components/Popper'
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useRef, useEffect } from "react";
import { useDebounce } from "~/hooks";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const debounce = useDebounce(searchValue, 500)
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
      if (!debounce.trim())
      {
        return
      }
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        .then(res => res.json())
        .then(res => {
          setSearchResult(res.data)
        })

    }, [debounce])

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
                  {searchResult.map((result) => (
                    <AccountItem key={result.id} data={result}/>
                  ))}
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
