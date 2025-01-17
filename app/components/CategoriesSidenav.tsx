import Link from "next/link";
import { CategoryType, fetchCategoryList } from "../lib/data-service";

const CategoriesSidenav = async () => {
    const categories: CategoryType[] = await fetchCategoryList();

    return (
        <aside className="basis-64 flex-grow max-w-[175px]">
            <h2 className="text-md mb-3">Other Categories</h2>
            <nav>
                <ul className="border border-[--darker-color] px-3 py-2 rounded-sm">
                    {
                        categories.map(category => (
                            <li
                                key={category.slug}
                                className="[&:not(:last-child)]:border-b border-b-[--darker-color] mb-2 last:mb-0 hover:bg-[--accent-color] hover:text-[--darker-color] transition-all"
                            >
                                <Link
                                    href={`/categories/${category.slug}`}
                                    className="inline-block w-full sm:text-nowrap"
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
}

export default CategoriesSidenav;