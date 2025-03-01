import { useEffect, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Dropdown ({ children ,
    trigger , onToggle }) {
        const [show , setShow ] = useState(false);
        const dropref = useClickOutside( () => setShow( false ));

        useEffect(() => {
            onToggle?.(show)
        }, [show] );
        
        return (
            <div className="w-fit relative" onClick={ () => setShow( ( curr ) => !curr )} ref={dropref}>
                <div>{trigger}</div>
                { show && <ul
                className="min-w-max absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow overflow-hidden">{children}</ul>}
            </div>
        )
    }
export function DropdownItem({children}) {
    return (
        <li className= {`flex gap-3 items-center 
        px-4 py-2 text-gray-800 hover:bg-gray-50
        cursor-pointer`}>
            {children}
        </li>
    )
}