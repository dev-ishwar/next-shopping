import { ProductType } from "./types";

const API_BASE_URL = 'https://dummyjson.com';

export type CategoryType = {
    slug: string,
    name: string,
    url: string
}

export const fetchCategoryList = async () => {
    try {
        const res = await fetch(`${API_BASE_URL}/products/categories`);
        const data: CategoryType[] = await res.json();
        return data;
    } catch (error) {
        console.error('error: ', error)
        return [];
    }
}

export const fetchProductsByCategory = async (category: string, params?: URLSearchParams) => {
    try {
        const url = params ? `${API_BASE_URL}/products/category/${category}?${params.toString()}` : `${API_BASE_URL}/products/category/${category}`;
        const res = await fetch(url);
        const data: { products: ProductType[] } = await res.json();
        return data;
    } catch (error) {
        console.error('error: ', error);
        return [];
    }
}

export const fetchAllProducts = async () => {
    try {
        const res = await fetch(`${API_BASE_URL}/products`);
        const data: { products: ProductType[] } = await res.json();
        return data;
    } catch (error) {
        console.error('error: ', error);
        return [];
    }
}

export const fetchProductById = async (id: string) => {
    try {
        const res = await fetch(`${API_BASE_URL}/products/${id}`);
        const data: ProductType = await res.json();
        return data;
    } catch (error) {
        console.error('error: ', error);
        return null;
    }
}