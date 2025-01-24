import Link from "next/link";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const SearchIcon = () => {
    return (
        <Link href={'/search'} className="self-center mr-3" title="search products">
            <MagnifyingGlassIcon width={25} height={25} className="text-[--dark-color] hover:text-[--light-color]" />
        </Link>
    )
}

export default SearchIcon;