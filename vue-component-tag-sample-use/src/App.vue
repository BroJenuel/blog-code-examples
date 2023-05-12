<script lang="ts" setup>
import { ref } from "vue";
import pagesToRender from "./utility/PagesToRender";

const selectedPage = ref("one");
</script>

<template>
    <h1>This Are Pages</h1>

    <button v-for="page in pagesToRender" :key="'btn-' + page.key" @click="selectedPage = page.key">{{ page.title }}</button>

    <component :is="pagesToRender.find((item) => item.key == selectedPage)?.component as any" />
</template>
