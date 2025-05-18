import {
    Box,
    Button,
    Container,
    Group,
    SimpleGrid,
    Title,
} from "@mantine/core";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components";
import Link from "next/link";

export default function FeatureProducts() {
    return (
        <Box component="section" py={50}>
            <Container size="xl">
                <Group justify="space-between">
                    <Title ta="center" order={2}>
                        Featured Products
                    </Title>
                    <Button
                        component={Link}
                        td="underline"
                        href="/products"
                        size="sm"
                        variant="subtle"
                    >
                        View All
                    </Button>
                </Group>

                <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing={50} mt={40}>
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
