<template>
    <div class="resume-wrapper">
        <div class="pdf-frame-wrapper">
            <iframe src="https://drive.google.com/file/d/1L7szdeI1xnsMvGcYz8mzW5OHLZepMFUX/preview" 
            allow="autoplay" class="resume-pdf"></iframe>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
});
</script>

<style>
.resume-wrapper {
    padding-top: 10rem;
    background-color: #1F4287;
    height: 100%;
    width: 100%;
    min-width: 800px;
}

.resume-pdf {
    width: 700px;
    height: 600px;
    /* padding: 50px; */
}

.pdf-frame-wrapper {
    padding: 50px;
    width: fit-content;
    margin: auto;
    background-color: #071E3D;
    border-radius: 50px;
}
</style>