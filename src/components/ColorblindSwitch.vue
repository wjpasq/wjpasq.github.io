<template>
    <label class="colorblind-switch">
        <input class="colorblind-checkbox" type="colorblind" @click="inputClicked">
        <span class="slider round"></span>
    </label>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from "@vue/composition-api";

export default defineComponent({
    setup(props, { emit }) {
        const isActive = ref(false);

        const inputClasses = computed(() => {
            return {
                'colorblind-checkbox': true,
                'is-active': isActive.value,
            }
        });

        const inputClicked = function() {
            var active = false;
            const switches = document.getElementsByClassName('colorblind-checkbox');
            for (var i = 0; i < switches.length; i++) {
                const item = switches.item(i);
                item?.classList.toggle("is-active");
                active = item?.classList.contains("is-active") as boolean;
            }

            isActive.value = active;

            emit("switchClicked", isActive.value);
        }

        onMounted(() => {
            const switches = document.getElementsByClassName('colorblind-checkbox');
            const navSwitch = switches.item(0);

            if (navSwitch?.classList.contains('is-active')) {
                switches.item(switches.length - 1)?.classList.toggle("is-active");
                isActive.value = true;
            }
        });

        return {
            inputClicked,
            inputClasses,
        }
    }
}); 
</script>

<style>
/* The switch - the box around the slider */
.colorblind-switch {
  position: relative;
  display: inline-block;
  width: 64px;
  min-width: 64px;
  height: 30px;
}

/* Hide default HTML checkbox */
.colorblind-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196F3;
  -webkit-transition: .4s;
  transition: .2s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: url('../assets/eye.svg');
  height: 26px;
  width: 26px;
  max-height: 26px;
  max-width: 26px;
  left: 4px;
  bottom: 2px;
  border-radius: 50%;
  -webkit-transition: .2s;
  transition: .2s;
}

input.is-active + .slider {
  background-color: #ccc;
}

input:focus + .slider {
  box-shadow: 0 0 1px #ccc;
}

input.is-active + .slider:before {
  -webkit-transform: translateX(30px);
  -ms-transform: translateX(30px);
  transform: translateX(30px);
  /* filter: brightness(0) invert(1); */
  content: url("../assets/cb_eye.svg");
}
</style>