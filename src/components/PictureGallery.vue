<template>
    <div class="gallery-container">
        <div class="slides">
            <div v-for="img in images" :key="img">
                <img class="slide-img" :src="img">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "@vue/composition-api";

interface Props {
    images: Array<string>,
}

export default defineComponent({
    props: {
        images: Array,
    },
    setup(props: Props) {
        const activeIndex = ref(0);
        
        const thumbnailClasses = computed(() => {
            return (img: string) => {
                return {
                    'highlighted': props.images.indexOf(img) === activeIndex.value,
                }
            }
        });

        const thumbnailClicked = function (img: string) {
            console.log(props.images.indexOf(img));
        };

        return {
            thumbnailClicked,
            thumbnailClasses,
        }
    },
});
</script>

<style>
.gallery-container {
    position: relative;
    display: flex;
    justify-content: center;
}

.slides {
  margin: 0 16px;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  padding: 0 0.25rem;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  overflow-y: hidden;
  overflow-x: scroll;
}

.slides > div {
  scroll-snap-align: start;
  height: 200px;
}

.slides img {
  width: 180px;
  object-fit: contain;
  height: 100%;
}

.slides::-webkit-scrollbar {
  display: none;
}
</style>