import { useEffect , useRef } from "react"

export default function useClickOutside( callbackFn ) {
    let domNoderef = useRef();

    useEffect(() => {
        let handler = ( event ) => {
            if ( !domNoderef.current?.contains( event.target )) {
                callbackFn()
            }
        }

        document.addEventListener('mousedown' , handler );

        return () => {
            document.removeEventListener('mousedown' , handler )
        }
    } , [])
    return domNoderef
}