<template>
    <div class="fun-facts-wrapper">
        <div class="fun-card-wrapper" style="background-color: #1F4287;">
            <img class="fun-left-pic" style="background-color: #FFFFFF" src="../assets/colorblind-test.png" alt="colorblind-test">
            <span>
                <h6>I'm Color Blind</h6>
                When I was in second grade, I colored the sky purple and the grass brown. Afterwards,
                I was taken to the optometrist and found out I had Dueteranomaly color deficiency, or
                red-green color blindness. I rarely notice my color blindness in day-to-day life (except 
                when I'm asked to read a color-coded map). If you want to see what the world looks 
                like to me, flip the switch to <img class="cb-eye-img" src="../assets/cb_eye.svg"> 
                in the top right corner.
            </span>
            <ColorblindSwitch @switchClicked="(switchValue) => $emit('toggleFilter', switchValue)"></ColorblindSwitch>
        </div>
        <div class="fun-card-wrapper" style="background-color: #278EA5;">
            <span style="width: 100%;">
                <h6>Murphy</h6>
                Murphy is my family dog. He is a five year old labradoodle who is always the center 
                of attention. Murphy loves bacon, chasing squirrels, belly rubs, and lounging on the
                couch.
                <PictureGallery class="gallery" :images="images"></PictureGallery>
            </span>
        </div>
        <div class="fun-card-wrapper" style="background-color: #1F4287;">
            <span>
                <h6>Drums</h6>
                I loved playing drums growing up. I started playing drums in the third grade and my 
                parents got their first set of noise cancelling headphones shortly after. I also got
                to play on the drumline in high school. My favorite songs to play on the drum set
                are Brain Stew by Green Day, Last Resort by Papa Roach, My Hero by the Foo Fighters,
                Come Together by the Beatles, and Bombtrack by Rage Against the Machine.
            </span>
            <img class="fun-right-pic" style="background-color: #21E6C1;" src="../assets/Drums.svg"/>
        </div>
        <div class="fun-card-wrapper" style="background-color: #278EA5;">
            <img class="fun-left-pic" style="background-color: #1F4287" src="../assets/gears.png" alt="gears">
            <span>
                <h6>Family of Engineers</h6>
                Both my parents graduated from college with degrees in Electrical Engineering. Growing 
                up in a family of engineers has been fun (and a little odd). I have been going to 
                robotics and programming camps for as long as I can remember. I even got to tag along
                with my parents to a couple technology conferences. Even my older sister graduated 
                from A&M with a degree in Mechanical Engineering.
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import ColorblindSwitch from "@/components/ColorblindSwitch.vue";
import PictureGallery from "@/components/PictureGallery.vue";
import Murphy_1 from "../assets/Murphy/IMG_0217.jpg";
import Murphy_2 from "../assets/Murphy/IMG_0336.jpg";
import Murphy_3 from "../assets/Murphy/IMG_0340.jpg";
import Murphy_4 from "../assets/Murphy/IMG_0345.jpg";
import Murphy_5 from "../assets/Murphy/IMG_0349.jpg";
import Murphy_6 from "../assets/Murphy/IMG_20190803_151811_01.jpg";
import Murphy_7 from "../assets/Murphy/Mur.jpg";
import Murphy_8 from "../assets/Murphy/murph_holstrom.jpg";
import Murphy_9 from "../assets/Murphy/murph_night.jpg";
import Murphy_10 from "../assets/Murphy/murph_outside.jpg";
import Murphy_11 from "../assets/Murphy/murph_wet.jpg";

export default defineComponent({
    setup() {
        const test = function() {
            console.log("switch clicked");
        }

        const images = ref([
            Murphy_1,
            Murphy_2,
            Murphy_3,
            Murphy_4,
            Murphy_5,
            Murphy_6,
            Murphy_7,
            Murphy_8,
            Murphy_9,
            Murphy_10,
            Murphy_11,
        ]);

        return {
            test,
            images,
        }
    },
    components: { ColorblindSwitch, PictureGallery }
});
</script>

<style>
.fun-facts-wrapper {
    padding-top: 10rem;
    background-color: #071E3D;
}

h6 {
    font-family: Tiro;
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
}

.fun-card-wrapper {
    color: #FFF;
    font-family: Tiro;
    display: flex;
    max-width: 900px;
    margin: auto;
    padding: 30px;
    border-radius: 50px;
    margin-bottom: 50px;
}

.fun-left-pic {
    border-radius: 50px;
    margin-right: 50px;
    max-height: 160px;
    margin-bottom: auto;
    margin-top: auto;
    padding: 10px;
}

.fun-right-pic {
    border-radius: 50px;
    margin-left: 50px;
    max-height: 160px;
    margin-bottom: auto;
    margin-top: auto;
    padding: 10px;
}

.cb-eye-img {
    width: 16px;
    height: 16px;
    margin: auto 5px;
    padding: 5px;
    border-radius: 100%;
    background-color: #ccc;
}

.gallery {
    margin-top: 30px;
    background-color: #1F4287;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 30px;
}
</style>