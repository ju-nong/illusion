<template>
    <div class="w-[100vw] h-[100vh] flex items-center justify-center">
        <div class="relative cursor-pointer" @click="modalShow = true">
            <span
                v-for="index in config.count"
                :key="index"
                class="text-center absolute triangle text-4xl"
                :style="`left: ${setLeft(index)}px; top:${setTop(
                    index,
                )}px; opacity: ${config.opacity}`"
            >
                {{ config.icon }}
            </span>
        </div>
        <ShareModal
            v-if="modalShow"
            :config="config"
            ref="$modal"
            @update="updateConfig"
            @close="modalShow = false"
        />
    </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const $modal = ref();
const modalShow = ref(false);

onClickOutside($modal, (event) => {
    modalShow.value = false;
});

// 구성요소
const config = reactive({
    icon: "❤", // 표시할 아이콘
    diameter: 100, // 지름
    count: 100, // 개수
    opacity: 1, // 투명도
});

// 각도
const angle = computed(() => (Math.PI * 2) / config.count);

const setLeft = (idx) =>
    Math.ceil(config.diameter * Math.cos(idx * angle.value));
const setTop = (idx) =>
    Math.ceil(config.diameter * Math.sin(idx * angle.value));

// const updateConfig = (newConfig) => Object.assign(config, newConfig);
const updateConfig = ({ key, value }) => {
    if (key === "count") {
        value = Number(value);
    }

    config[key] = value;
};
</script>

<style lang="scss">
.illusion-container {
    border: 1px solid #000;
    aspect-ratio: 1/1;
    perspective: 1000px;
}

.triangle {
    /* text-shadow: 0px 0px 5px #000; */
    transform: rotate(0deg);

    animation-name: TriangleRotate;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
</style>
