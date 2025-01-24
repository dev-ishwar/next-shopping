import { ChangeEvent } from "react";
import { debounce } from "../lib/helper";
import { redirect } from "next/navigation";

type PropsType = {
    query: string
}

const SearchInput = ({ query }: PropsType) => {

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        redirect(`/search?query=${e.target.value}`)
    }

    const debouncedhandleInput = debounce(handleInput, 500);

    // const handleClearInput = () => redirect('/search');

    return (
       <div className="relative">
         <input
            className="rounded-sm p-2 w-full text-[--darker-color] border"
            type="text" placeholder="Search products..."
            onChange={debouncedhandleInput}
            defaultValue={query}
        />
        {/* <button className="absolute right-2 top-[50%] -translate-y-[50%]" onClick={handleClearInput} type="button">x</button> */}
       </div>
    )
}

export default SearchInput;