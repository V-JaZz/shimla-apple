import {
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandFacebook,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text, Title } from "@mantine/core";
import classes from "./classes.module.css";
import { Logo } from "@/components";
import { siteConfig } from "@/constants/site";
import Link from "next/link";

export function Footer() {
    const groups = siteConfig.footerLinks.map((group) => {
        const links = group.links.map((link, index) => (
            <Link key={index} className={classes.link} href={link.href}>
                {link.label}
            </Link>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Title order={5} mb={10}>
                    {group.title}
                </Title>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container size="xl" className={classes.inner}>
                <div className={classes.logo}>
                    <Logo />
                    <Text c="dimmed" className={classes.description}>
                        Farm Fresh Apples Direct to You
                    </Text>
                </div>
                <div className={classes.groups}>
                    {groups}
                    <div className={classes.wrapper}>
                        <Title order={5} mb={10}>
                            Contact
                        </Title>
                        <Group wrap="nowrap" align="flex-start" gap={5}>
                            <Text className={classes.link}>Email:</Text>
                            <Text
                                component="a"
                                href={`mailto:${siteConfig.contact.email}`}
                                target="_blank"
                                className={classes.link}
                            >
                                {siteConfig.contact.email}
                            </Text>
                        </Group>
                        <Group wrap="nowrap" align="flex-start" gap={5}>
                            <Text className={classes.link}>Phone:</Text>
                            <Text
                                component="a"
                                href={`tel:${siteConfig.contact.phone}`}
                                target="_blank"
                                className={classes.link}
                            >
                                {siteConfig.contact.phone}
                            </Text>
                        </Group>
                        <Group align="flex-start" gap={5}>
                            <Text className={classes.link}>{siteConfig.contact.address}</Text>
                        </Group>
                    </div>
                </div>
            </Container>

            <Container size="xl" className={classes.afterFooter}>
                <Text c="dimmed">
                    © {new Date().getFullYear()} {siteConfig.name} All rights reserved.
                </Text>

                <Group
                    gap={15}
                    className={classes.social}
                    justify="flex-end"
                    wrap="nowrap"
                >
                    <ActionIcon
                        component="a"
                        href={siteConfig.links.twitter}
                        target="_blank"
                        size="lg"
                        color="cyan"
                        variant="subtle"
                    >
                        <IconBrandTwitter size={30} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        component="a"
                        href={siteConfig.links.facebook}
                        target="_blank"
                        size="lg"
                        color="blue"
                        variant="subtle"
                    >
                        <IconBrandFacebook size={30} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        component="a"
                        href={siteConfig.links.instagram}
                        target="_blank"
                        size="lg"
                        color="red"
                        variant="subtle"
                    >
                        <IconBrandInstagram size={30} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}
