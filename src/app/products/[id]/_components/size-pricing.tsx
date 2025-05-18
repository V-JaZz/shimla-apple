"use client";

import { Product } from "@/types";
import { Box, BoxProps, Flex, SegmentedControl, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

interface SizePricingProps extends BoxProps {
    product: Product;
}

type ProductKey = keyof Product["sizes"];

export default function SizePricing({ product, ...props }: SizePricingProps) {
    const [selectedSize, setSelectedSize] = useState<ProductKey | null>(null);

    return (
        <Box {...props}>
            <Text fw={500} className="red-primary">
                {selectedSize
                    ? `₹${product.sizes[selectedSize].price} / ${product.sizes[selectedSize].weight}`
                    : `Starting from ₹${product.price}`}
            </Text>
            <Box mt={20}>
                <Text size="sm" mb={5} className="dimmed">
                    Select a size
                </Text>
                <Sizes
                    product={product}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                />
            </Box>
        </Box>
    );
}

function Sizes({
    product,
    selectedSize,
    setSelectedSize,
}: {
    product: Product;
    selectedSize: ProductKey | null;
    setSelectedSize: React.Dispatch<React.SetStateAction<ProductKey | null>>;
}) {
    const isMobile = useMediaQuery("(max-width: 500px)");
    const mappingData = Object.keys(product.sizes).map((size) => {
        return {
            value: size,
            label: (
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                    gap={5}
                    h={100}
                >
                    <Text size="sm">{size}</Text>
                    <Text size="sm">{product.sizes[size as ProductKey].weight}</Text>
                    <Text size="sm">₹{product.sizes[size as ProductKey].price}</Text>
                </Flex>
            ),
        };
    });

    return (
        <SegmentedControl
            data={mappingData}
            value={selectedSize || ""}
            onChange={(value) => setSelectedSize(value as ProductKey)}
            color="red"
            fullWidth
            orientation={isMobile ? "vertical" : "horizontal"}
            bg="white"
            className="shadow-primary"
            radius="md"
        />
    );
}
