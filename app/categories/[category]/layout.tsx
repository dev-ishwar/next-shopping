import { Metadata } from "next"
import CategoriesSidenav from "../../components/CategoriesSidenav"
import BackButton from "@/app/components/BackButton"

type PropsType = {
    children: React.ReactElement
}

export const metadata: Metadata = {
    title: "Categories",
    description: "Product categories."
}

const Categorylayout = ({ children }: PropsType) => {
    return (
        <div className="p-5">
            <BackButton text="← All Categories" classes="mb-4"/>
            <main className="flex gap-4">
                <CategoriesSidenav />
                {children}
            </main>
        </div>
    )
}

export default Categorylayout;