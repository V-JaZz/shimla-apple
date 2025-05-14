"use client";
import { SegmentedControl, Box, BoxProps } from "@mantine/core";
import { CATEGORIES } from "@/config/filters";
import { useMediaQuery } from "@mantine/hooks";
import { useFilters } from "@/hooks";

export default function Filters({ ...props }: BoxProps) {
    const { category, handleFilterChange } = useFilters();
    const isMobile = useMediaQuery("(max-width: 500px)");

    return (
        <Box {...props}>
            <SegmentedControl
                size={isMobile ? "sm" : "md"}
                color="red"
                value={category}
                onChange={(value) => handleFilterChange("category", value)}
                data={CATEGORIES}
            />
        </Box>
    );
}
