import Link from "next/link";
import Card from "../components/Card";
import { CategoryType, fetchCategoryList } from "../lib/data-service";

const Categories = async () => {
    const categories: CategoryType[] = await fetchCategoryList();

    return (
        <main className="p-5">
            <h2 className="text-2xl my-5 ">Categories</h2>
            <div className="flex flex-wrap gap-5">
                {
                    categories
                        .map(category => (
                            <Card key={category.slug} classes="hover:bg-[--button-hover] group" >
                                <Link href={`/categories/${category.slug}`} className="cursor-pointer group-hover:text-[--background] transition-colors duration-300">
                                    {category.name}
                                </Link>
                            </Card>
                        ))
                }
            </div>
        </main>
    )
}

export default Categories;