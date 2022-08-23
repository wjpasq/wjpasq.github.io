<template>
    <div class="gallery-container">
        <div id="gallery" :class="slideClasses" @mousedown="mouseDown" @mouseup="mouseUp" @mousemove="mouseMove" @mouseleave="mouseLeave">
            <div v-for="img in images" :key="img">
                <img class="slide-img" :src="img">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";

interface Props {
    images: Array<string>,
}

export default defineComponent({
    props: {
        images: Array,
    },
    setup(props: Props) {
        let startX = 0;
        let scrollLeft = 0;
        const isDown = ref(false);
        
        const mouseDown = function(event: MouseEvent) {
            isDown.value = true;
            const gallery = document.getElementById("gallery") as HTMLElement;
            startX = event.pageX - gallery.offsetLeft;
            scrollLeft = gallery.scrollLeft;
        }

        const mouseUp = function(event: MouseEvent) {
            isDown.value = false;
        }

        const mouseMove = function(event: MouseEvent) {
            if (isDown.value) {
                if (!(event.x == 0 && event.y == 0)) {
                    const gallery = document.getElementById("gallery") as HTMLElement;
                    event.preventDefault();
                    const x = event.pageX - gallery.offsetLeft;
                    const walk = 2 * (x - startX);
                    gallery.scrollLeft = scrollLeft - walk;
                }
            }
        }

        const mouseLeave = function (event: MouseEvent) {
            isDown.value = false;
        }

        const slideClasses = computed(() => {
            return {
                'slides': true,
                'active': isDown.value,
            }
        });

        return {
            mouseMove,
            mouseDown,
            mouseUp,
            slideClasses,
            mouseLeave,
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
  scrollbar-width: none;
  overflow-y: hidden;
  overflow-x: scroll;
  cursor: grab;
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

.active {
    cursor: grabbing;
}
</style>