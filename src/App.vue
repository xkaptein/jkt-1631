<script setup lang="ts">
import jktImg from "@/assets/img/jkt.png";
import HeroRally from "./components/hero-rally.vue";
import { BaseLayout, Container } from "./components/layout";
import ModeToggle from "./components/mode-toggle.vue";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { rallyInitiatorHeroes, rallyJoiners } from "./data/hero-rally";
</script>

<template>
    <BaseLayout>
        <div class="absolute top-5 right-5">
            <ModeToggle class="" />
        </div>
        <Container class="flex flex-col gap-6">
            <div class="flex items-center justify-center">
                <img :src="jktImg" alt="JKT" class="w-120" />
            </div>

            <div class="flex items-center justify-center gap-2 my-8">
                <Tabs defaultValue="bear-trap" class="w-full max-w-4xl">
                    <TabsList class="w-full class">
                        <TabsTrigger value="bear-trap">Bear Trap</TabsTrigger>
                        <TabsTrigger value="vikings">Viking</TabsTrigger>
                        <TabsTrigger value="castle-battle">
                            Castle Battle
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent
                        value="bear-trap"
                        class="w-full mt-4 flex flex-col gap-6"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Rally Initiator</CardTitle>
                                <CardDescription>
                                    Use your 3 strongest heroes, SSR even better
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
                                    Avoid to use hero with chance(%) skill in
                                    expedition (Rally Flag) as your left hero.
                                </CardDescription>
                            </CardHeader>
                            <Separator />
                            <CardContent>
                                <HeroRally
                                    :rallyInitiaorHeroes="rallyJoiners"
                                    suggestHero="Any"
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="vikings">Coming Soon!</TabsContent>
                </Tabs>
            </div>
        </Container>
    </BaseLayout>
</template>
