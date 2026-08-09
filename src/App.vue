<script setup lang="ts">
import jktImg from "@/assets/img/jkt.png";
import CastleBattleCard from "./components/card/castle-battle-card.vue";
import HeroRallyCard from "./components/card/hero-rally-card.vue";
import { BaseLayout, Container } from "./components/layout";
import ModeToggle from "./components/mode-toggle.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
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
            <TabsTrigger value="castle-battle"> Castle Battle </TabsTrigger>
          </TabsList>
          <TabsContent
            value="bear-trap"
            class="w-full mt-4 flex flex-col gap-6"
          >
            <HeroRallyCard />
          </TabsContent>
          <TabsContent value="vikings">Coming Soon!</TabsContent>
          <TabsContent value="castle-battle">
            <CastleBattleCard />
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  </BaseLayout>
</template>
