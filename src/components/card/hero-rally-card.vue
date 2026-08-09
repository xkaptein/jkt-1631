<script setup lang="ts">
import { rallyInitiatorHeroes, rallyJoiners } from "@/data/hero-rally";
import HeroRally from "../hero-rally.vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Rally Initiator</CardTitle>
      <CardDescription>
        <slot name="rally-initiator-description" />
      </CardDescription>
    </CardHeader>
    <Separator />
    <CardContent>
      <HeroRally
        :rallyInitiaorHeroes="rallyInitiatorHeroes"
        suggestHero="SSR"
      />
    </CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle>Rally Joiner</CardTitle>
      <CardDescription>
        <slot name="rally-joiner-description" />
      </CardDescription>
    </CardHeader>
    <Separator />
    <CardContent>
      <HeroRally :rallyInitiaorHeroes="rallyJoiners" suggestHero="Any" />
    </CardContent>
  </Card>
</template>
