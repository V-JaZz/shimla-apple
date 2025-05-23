"use client";

import { QuantityInput } from "@/components";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import {
    Box,
    BoxProps,
    Button,
    Flex,
    Group,
    SegmentedControl,
    Text,
} from "@mantine/core";
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
    const [quantity, setQuantity] = useState(1);

    const isMobile = useMediaQuery("(max-width: 500px)");
    const { addToCart } = useCart();

    const submitDisabled = !selectedSize || !selectedWeight;

    function handleAddToCart() {
        if (!selectedSize || !selectedWeight) return;
        addToCart(product, quantity, selectedSize, selectedWeight);
    }

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
                    isMobile={isMobile}
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
            </Box>

            <Group mt={20} align="end" wrap="wrap">
                <Box>
                    <Text size="sm" mb={5} className="dimmed">
                        Quantity
                    </Text>
                    <QuantityInput value={quantity} onChange={setQuantity} />
                </Box>

                <Button
                    flex={isMobile ? "unset" : 1}
                    size="lg"
                    color="red"
                    fullWidth
                    disabled={submitDisabled}
                    onClick={handleAddToCart}
                >
                    {submitDisabled ? "Select size and weight" : "Add to cart"}
                </Button>
            </Group>
        </Box>
    );
}

function Sizes({
    product,
    selectedSize,
    setSelectedSize,
    isMobile,
}: {
    product: Product;
    selectedSize: ProductKey | null;
    setSelectedSize: React.Dispatch<React.SetStateAction<ProductKey | null>>;
    isMobile: boolean | undefined;
}) {
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
