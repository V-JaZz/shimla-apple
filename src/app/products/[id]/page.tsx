import { notFound } from "next/navigation";
import { Container, Image, Skeleton, Text, Title } from "@mantine/core";
import { GridClient, GridColCient } from "@/components";
import { getProductById } from "@/data/products";
import SizePricing from "./_components/size-pricing";
import ProductSpecifications from "./_components/product-specifications";

export default async function SingleProduct({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    if (!id || id === undefined) return notFound();

    const product = getProductById(id);

    if (!product) return notFound();

    return (
        <Container component="section" size="lg" py={40}>
            <GridClient gutter={40}>
                <GridColCient span={{ base: 12, sm: 5 }}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        radius="md"
                        width="100%"
                        height="100%"
                        className="shadow-primary"
                        mah={400}
                    />
                </GridColCient>

                <GridColCient span={{ base: 12, sm: 7 }}>
                    <Title order={1}>{product.name}</Title>
                    <Text mt={5} className="dimmed">
                        {product.description}
                    </Text>

                    <SizePricing product={product} mt={10} />

                    <ProductSpecifications product={product} mt={30} />
                </GridColCient>
            </GridClient>
        </Container>
    );
}
