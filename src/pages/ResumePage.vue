<template>
    <div>
        <object
            data='../assets/Resume.pdf'
            type="application/pdf"
            width="500"
            height="678">

            <iframe
            src='../assets/Resume.pdf'
            width="500"
            height="678">
                <p>This browser does not support PDF!</p>
            </iframe>
        </object>
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
}


</style>