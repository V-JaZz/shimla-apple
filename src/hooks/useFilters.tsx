import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/config/filters";

export interface Filters {
    category: string;
    page: number;
}

export function useFilters() {
    const searchParams = useSearchParams();

    const filters: Filters = {
        category: searchParams.get("category") || CATEGORIES[0],
        page: parseInt(searchParams.get("page") || "1"),
    };

    function resetFilters() {
        const urlSearch = new URLSearchParams();
        urlSearch.forEach((_, key) => urlSearch.delete(key));
        window.history.pushState({}, "", `/products`);
    }

    function handleFilterChange<Key extends keyof Filters>(
        key: Key,
        value: Filters[Key] extends boolean | number ? string : Filters[Key]
    ) {
        const urlSearch = new URLSearchParams(searchParams.toString());
        urlSearch.set(key, String(value));

        if (key !== "page") {
            urlSearch.delete("page");
        }

        window.history.pushState(null, "", `?${urlSearch.toString()}`);
    }

    return { ...filters, resetFilters, handleFilterChange };
}
