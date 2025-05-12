import { Title } from "@mantine/core";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/">
            <Title display="inline" className="red-primary title-sm">Shimla Apple</Title>
        </Link>
    );
}
