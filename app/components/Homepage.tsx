import Link from "next/link";
import Card from "./Card";
import { HOMEPAGE_CARDS } from "../lib/config";

const Homepage = async () => {

    return (
        <main className="p-5">
            <div className="flex justify-center flex-wrap gap-5">
                {
                    HOMEPAGE_CARDS
                        .map(item => (
                            <Card key={item.id} classes="hover:bg-[--darker-color] group min-h-[200px] min-w-[300px] grid place-content-center" >
                                <Link href={item.href} className="cursor-pointer group-hover:text-[--accent-color] text-2xl">
                                    {item.title}
                                </Link>
                            </Card>
                        ))
                }
            </div>
        </main>
    )
}

export default Homepage;