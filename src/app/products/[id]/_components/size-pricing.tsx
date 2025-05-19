"use client";

import { Product } from "@/types";
import { Box, BoxProps, Flex, SegmentedControl, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

const weightOptions = ["5KG", "10KG"];

interface SizePricingProps extends BoxProps {
    product: Product;
}

type ProductKey = keyof Product["sizes"];

export default function SizePricing({ product, ...props }: SizePricingProps) {
    const [selectedSize, setSelectedSize] = useState<ProductKey | null>(null);
    const [selectedWeight, setSelectedWeight] = useState<string | null>(null);

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

            <Box mt={20}>
                <Text size="sm" mb={5} className="dimmed">
                    Select box weight
                </Text>
                <Weight
                    selectedWeight={selectedWeight}
                    setSelectedWeight={setSelectedWeight}
                />
                `
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

function Weight({
    selectedWeight,
    setSelectedWeight,
}: {
    selectedWeight: string | null;
    setSelectedWeight: React.Dispatch<React.SetStateAction<string | null>>;
}) {
    const mappingData = weightOptions.map((weight) => {
        return {
            value: weight,
            label: (
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                    gap={5}
                    h={100}
                >
                    <Text>{weight}</Text>
                </Flex>
            ),
        };
    });
    return (
        <SegmentedControl
            data={mappingData}
            value={selectedWeight || ""}
            onChange={(value) => setSelectedWeight(value)}
            color="red"
            fullWidth
            bg="white"
            className="shadow-primary"
            radius="md"
        />
    );
}
