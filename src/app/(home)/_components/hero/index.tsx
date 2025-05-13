import classes from "./classes.module.css";
import {
    Box,
    Button,
    Container,
    Flex,
    Group,
    Overlay,
    Text,
    Title,
} from "@mantine/core";
import Link from "next/link";

export default function Hero() {
    return (
        <Box component="section" className={classes.hero}>
            <Flex align="center" className={classes.wrapper}>
                <Overlay color="#000" opacity={0.75} zIndex={1} />

                <Container size="xl">
                    <Flex direction="column" align="center" className={classes.inner}>
                        <Title c="white" ta="center">
                            Fresh from the Hills of Shimla
                        </Title>

                        <Text maw={600} ta="center" c="white" mt={15}>
                            Experience the crisp, sweet taste of premium Shimla apples,
                            handpicked from our orchards
                        </Text>

                        <Group mx="auto" mt={20}>
                            <Button color="red" size="md" component={Link} href="/products">
                                Shopw Now
                            </Button>
                            <Button size="md" variant="white" component={Link} href="/about">
                                Learn More
                            </Button>
                        </Group>
                    </Flex>
                </Container>
            </Flex>
        </Box>
    );
}
