<script setup lang="ts">
import * as hero from "@/assets/img/heroes";
import {
  defenseGarrisonLead,
  defenseJoiner,
  rallyAttackInitiatorGarrison,
  rallyAttackJoinerGarrison,
} from "@/data/hero-rally";
import HeroBox from "../hero-box.vue";
import HeroRally from "../hero-rally.vue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
</script>

<template>
  <div class="mt-4 space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Attack</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion collapsible type="single" defaultValue="leader">
          <AccordionItem value="leader">
            <AccordionTrigger class="underline underline-offset-4">
              Rally Initiator
            </AccordionTrigger>
            <AccordionContent>
              <HeroRally
                :rallyInitiaorHeroes="rallyAttackInitiatorGarrison"
                suggestHero="SSR"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="joiner">
            <AccordionTrigger class="underline underline-offset-4">
              Rally Joiner
            </AccordionTrigger>
            <AccordionContent>
              <HeroRally
                :rallyInitiaorHeroes="rallyAttackJoinerGarrison"
                suggestHero="Any"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Defense/Garrison</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion collapsible type="single" defaultValue="leader">
          <AccordionItem value="leader">
            <AccordionTrigger class="underline underline-offset-4">
              Lead Garrison
            </AccordionTrigger>
            <AccordionContent>
              (Best Options)
              <div class="flex justify-start gap-2">
                <HeroBox :hero="{ name: 'Eric', avatar: hero.eric }" />
                <HeroBox :hero="{ name: 'Hilde', avatar: hero.hilde }" />
                <HeroBox :hero="{ name: 'Jaegar', avatar: hero.jaegar }" />
              </div>
              <Separator class="my-6" />
              <HeroRally
                :rallyInitiaorHeroes="defenseGarrisonLead"
                suggestHero="SSR"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="joiner">
            <AccordionTrigger class="underline underline-offset-4">
              Joiner
            </AccordionTrigger>
            <AccordionContent>
              <HeroRally
                :rallyInitiaorHeroes="defenseJoiner"
                suggestHero="Any"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  </div>
</template>
