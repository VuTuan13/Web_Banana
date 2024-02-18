import {useState, useEffect} from 'react'

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const headler = setTimeout(() => setDebounceValue(value), delay)

        return () => clearTimeout(headler)
    }, [value])

    return debounceValue
}

export default useDebounce