<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/vue";
import { useColorMode } from "@vueuse/core";

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode();
</script>

<template>
    <Button
        @click="mode = 'dark'"
        size="icon"
        variant="outline"
        v-if="mode === 'light'"
    >
        <Icon
            icon="radix-icons:moon"
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
    </Button>
    <Button @click="mode = 'light'" size="icon" variant="outline" v-else>
        <Icon
            icon="radix-icons:sun"
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
    </Button>
</template>
