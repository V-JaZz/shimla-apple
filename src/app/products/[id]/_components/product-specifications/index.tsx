import classes from "./classes.module.css";
import { Product } from "@/types";
import { Box, BoxProps, SimpleGrid, Skeleton, Title } from "@mantine/core";
interface SizePricingProps extends BoxProps {
    product: Product;
}

export default function ProductSpecifications({
    product,
    ...props
}: SizePricingProps) {
    return (
        <Box {...props}>
            <Title order={3} mb={15}>
                Product Specifications
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={20}>
                <Skeleton h={80} />
                <Skeleton h={80} />
                <Skeleton h={80} />
                <Skeleton h={80} />
                <Skeleton h={80} />
                <Skeleton h={80} />
            </SimpleGrid>
        </Box>
    );
}
