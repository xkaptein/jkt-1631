<script setup lang="ts">
type RallyHero = { name: string; avatar: string };
const props = defineProps<{
    rallyInitiaorHeroes: RallyHero[];
    suggestHero?: string;
}>();
</script>

<template>
    <div class="flex flex-col gap-4">
        <div
            v-for="rallyHero in props.rallyInitiaorHeroes"
            :key="rallyHero.name"
            class="flex justify-start gap-2"
        >
            <div class="flex flex-col gap-2">
                <div
                    class="size-22 md:size-28 flex flex-col items-center justify-center rounded-2xl"
                >
                    <img
                        :src="rallyHero.avatar"
                        :alt="rallyHero.name"
                        class="size-28"
                    />
                </div>
                <span class="text-sm text-center">
                    {{ rallyHero.name }}
                </span>
            </div>
            <div class="flex flex-col gap-2">
                <div
                    class="size-22 md:size-28 flex flex-col items-center justify-center rounded-2xl"
                >
                    <div
                        class="size-18 md:size-22 border b-2 border-primary bg-primary/30 flex flex-col items-center justify-center rounded-2xl"
                    >
                        {{ suggestHero ?? "Any" }}
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <div
                    class="size-22 md:size-28 flex flex-col items-center justify-center rounded-2xl"
                >
                    <div
                        class="size-18 md:size-22 border b-2 border-primary bg-primary/30 flex flex-col items-center justify-center rounded-2xl"
                    >
                        {{ suggestHero ?? "Any" }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
