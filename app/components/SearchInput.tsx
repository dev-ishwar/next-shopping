'use client';

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { debounce } from "../lib/helper";

type PropsType = {
    setQuery: Dispatch<SetStateAction<string>>
}

const SearchInput = ({ setQuery }: PropsType) => {

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const debouncedhandleInput = debounce(handleInput, 500);


    return (
        <div className="relative">
            <input
                className="rounded-sm p-2 w-full text-[--darker-color] border"
                type="text" placeholder="Search products..."
                onChange={debouncedhandleInput}
            />
        </div>
    )
}

export default SearchInput;