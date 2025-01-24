'use client';

import Search from "@/app/search/page";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import(`@/app/components/Modal`), { ssr: false });

const SearchModal = () => {
    return (
        <Modal>
            <Search />
        </Modal>
    )
}

export default SearchModal;