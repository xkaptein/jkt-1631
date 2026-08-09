<script setup lang="ts">
import type { Hero } from "@/data/hero-rally";

const props = defineProps<{ hero: Hero }>();
</script>
<template>
  <div class="flex flex-col gap-2">
    <div
      class="size-22 md:size-28 flex flex-col items-center justify-center rounded-2xl"
    >
      <img :src="props.hero.avatar" :alt="props.hero.name" class="size-28" />
    </div>
    <span class="text-sm text-center">
      {{ props.hero.name }}
    </span>
  </div>
</template>
