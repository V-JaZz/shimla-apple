"use client";

import { Badge, Box, Card, Group, Image, Text, Title } from "@mantine/core";
import classes from "./classes.module.css";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
    product: Product;
    type?: "listing" | "featured";
}

export function ProductCard({ product, type = "featured" }: ProductCardProps) {
    return (
        <Card
            padding="sm"
            radius="md"
            className={classes.card}
            component={Link}
            href={`/products/${product.id}`}
        >
            <Card.Section>
                <Image
                    src={product.image}
                    alt={product.name}
                    height={type === "listing" ? 180 : 220}
                    className={classes.cardImg}
                />
            </Card.Section>

            <Group justify="space-between" mt="sm" mb={5}>
                <Badge variant="light" color="green">
                    {product.category}
                </Badge>
                <Text size="sm" className="red-primary">Starting at ₹{product.price}</Text>
            </Group>

            <Box pb={10}>
                <Title order={3} className="title-sm">
                    {product.name}
                </Title>
                <Text size="sm" className="dimmed" mt={5} lineClamp={2}>
                    {product.description}
                </Text>

                {product.sizes && (
                    <Group mt="xs" gap={5}>
                        {Object.keys(product.sizes).map((size, index) => (
                            <Badge
                                key={index}
                                size="sm"
                                variant="light"
                                color="gray"
                                radius="sm"
                            >
                                {size}
                            </Badge>
                        ))}
                    </Group>
                )}
            </Box>
        </Card>
    );
}
