"use client";

import { NumberInput, ActionIcon, Group } from "@mantine/core";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { useState } from "react";

interface QuantityInputProps {
    value: number;
    onChange: (val: number) => void;
    min?: number;
    max?: number;
}

export function QuantityInput({
    value = 1,
    onChange,
    min = 1,
    max = 10,
}: QuantityInputProps) {
    function handleChange(val: number) {
        const newVal = Math.max(min, Math.min(max, val));
        onChange(newVal);
    }

    function increment() {
        if (value < max) handleChange(value + 1);
    }

    function decrement() {
        if (value > min) handleChange(value - 1);
    }

    return (
        <Group gap={10}>
            <ActionIcon
                variant="default"
                onClick={decrement}
                disabled={value <= min}
                radius="xl"
                size="xl"
            >
                <IconMinus size={16} />
            </ActionIcon>

            <NumberInput
                value={value}
                onChange={(val) => handleChange(Number(val))}
                min={min}
                max={max}
                hideControls
                styles={{
                    input: { width: 60, textAlign: "center", fontSize: 16 },
                }}
                radius="xl"
                readOnly
            />

            <ActionIcon
                variant="default"
                onClick={increment}
                disabled={value >= max}
                radius="xl"
                size="xl"
            >
                <IconPlus size={16} />
            </ActionIcon>
        </Group>
    );
}
