'use client';

import { useRouter } from "next/navigation";

type PropsType = {
    text: string,
    classes?: string
}

const BackButton = ({ text, classes }: PropsType) => {
    const router = useRouter();

    const handleBackClick = () => router.back();

    return (
        <button onClick={handleBackClick} className={`border border-[--darker-color] p-2 hover:bg-[--darker-color] rounded-sm ${classes ?? ''}`}>
            {text}
        </button>
    )
}

export default BackButton;