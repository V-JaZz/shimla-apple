"use client";

import { Pagination as MantinePagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { useFilters } from "@/hooks";
import { ITEMS_PER_PAGE } from "@/config/filters";

interface PaginationProps {
    totalItems: number;
}

export function Pagination({ totalItems }: PaginationProps) {
    const { page, handleFilterChange } = useFilters();

    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const pagination = usePagination({
        total: totalPages,
        initialPage: page || 1,
        page: page || 1,
    });

    function handlePageChange(page: number) {
        handleFilterChange("page", String(page));
        pagination.setPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <MantinePagination
            value={pagination.active}
            total={totalPages}
            onChange={handlePageChange}
            styles={{ root: { display: "flex", justifyContent: "center" } }}
            hideWithOnePage
            siblings={0}
            radius="md"
            key={page}
            color="red"
        />
    );
}
