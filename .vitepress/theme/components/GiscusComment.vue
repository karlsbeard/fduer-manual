<template>
    <div style="margin-top: 24px">
        <Giscus
            id="comments"
            repo="karlsbeard/fduer-manual"
            repoid="R_kgDONgpMZQ"
            category="General"
            categoryid="DIC_kwDONgpMZc4Clu62"
            mapping="pathname"
            term="Welcome to giscus!"
            reactionsenabled="1"
            emitmetadata="0"
            inputposition="top"
            loading="lazy"
            :theme="isDark ? 'dark' : 'light'"
            :key="route.path"
        ></Giscus>
    </div>
</template>

<script setup>
import Giscus from '@giscus/vue';
import { useRoute, useData } from 'vitepress';

const route = useRoute();
const { isDark } = useData();
</script>