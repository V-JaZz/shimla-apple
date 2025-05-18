"use client";

import { Grid, GridProps, GridColProps } from "@mantine/core";

interface GridClientProps extends GridProps {
    children: React.ReactNode;
}

interface GridColCientProps extends GridColProps {
    children: React.ReactNode;
}

export function GridClient({ children, ...props }: GridClientProps) {
    return <Grid {...props}>{children}</Grid>;
}

export function GridColCient({ children, ...props }: GridColCientProps) {
    return <Grid.Col {...props}>{children}</Grid.Col>;
}
