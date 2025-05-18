"use client";

import classes from "./classes.module.css";
import {
    Box,
    Burger,
    Button,
    Container,
    Divider,
    Drawer,
    Flex,
    Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { Logo } from "@/components";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false);

    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <Fragment>
            <header className={classes.header}>
                <Container size="xl" component="nav">
                    <Group justify="space-between" className={classes.inner}>
                        <Logo />
                        <Group gap={30} className={classes.links} visibleFrom="sm">
                            {siteConfig.navigation.map(({ label, href }) => (
                                <Link key={label} href={href} className={isActive(href) ? classes.activeLink : classes.link}>
                                    {label}
                                </Link>
                            ))}
                        </Group>
                        <Burger
                            opened={drawerOpened}
                            onClick={toggleDrawer}
                            hiddenFrom="sm"
                        />

                        <Button color="red" visibleFrom="sm">Sign up</Button>
                    </Group>
                </Container>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                title={<Logo />}
                hiddenFrom="sm"
                zIndex={1000000}
                styles={{
                    body: { padding: 0 },
                }}
            >
                <Divider mb="md" />

                <Flex direction="column" gap="sm" px="md" className={classes.links}>
                    {siteConfig.navigation.map(({ label, href }) => (
                        <Link key={label} href={href} className={isActive(href) ? classes.activeLink : classes.link}>
                            {label}
                        </Link>
                    ))}
                </Flex>

                <Divider my="md" />

                <Box px="md">
                    <Button color="red" fullWidth>Sign up</Button>
                </Box>
            </Drawer>
        </Fragment>
    );
}
