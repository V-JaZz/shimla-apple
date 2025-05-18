"use client";
import { ProductCard, Pagination } from "@/components";
import { ITEMS_PER_PAGE } from "@/config/filters";
import { products } from "@/data/products";
import { useFilters } from "@/hooks";
import { SimpleGrid, SimpleGridProps, Title } from "@mantine/core";
import { Fragment } from "react";

function filterProducts(category: string) {
    if (category.toLowerCase() === "all" || !category) return products;
    return products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
    );
}

export default function ListingGrid({ ...props }: SimpleGridProps) {
    const { category, page } = useFilters();
    const filteredProducts = filterProducts(category);

    if (!filteredProducts.length)
        return <Title order={2}>No products found</Title>;

    return (
        <Fragment>
            <SimpleGrid {...props} mb={40}>
                {filteredProducts
                    .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} type="listing" />
                    ))}
            </SimpleGrid>
            <Pagination totalItems={filteredProducts.length} />
        </Fragment>
    );
}
