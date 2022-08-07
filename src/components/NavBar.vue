<template>
    <nav class="navbar" id="mainNav">
        <div :class="containerClasses">
            <img class="profile-pic" src="../assets/profile_pic.jpg" alt="profile-pic" @click="menuItemClicked('Home')">
            <button v-if="menuButton" id="navButton" :class="navbarTogglerClasses" 
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" 
            aria-expanded="false" @click="toggleVerticalMenu" aria-label="Toggle navigation">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </button>
            <Transition>
                <div v-if="togglerActive" :class="verticalNavClasses" id="navbarResponsive">
                    <ul class="navbar-nav vertical">
                        <li :class="itemClasses('About Me')" @click="menuItemClicked('About Me')"><a class="nav-link rounded">About Me</a></li>
                        <li :class="itemClasses('Projects')" @click="menuItemClicked('Projects')"><a class="nav-link rounded">Projects</a></li>
                        <li :class="itemClasses('Resume')" @click="menuItemClicked('Resume')"><a class="nav-link rounded">Resume</a></li>
                        <li :class="itemClasses('Fun Facts')" @click="menuItemClicked('Fun Facts')"><a class="nav-link rounded">Fun Facts</a></li>
                        <li class="nav-item"><ColorblindSwitch @switchClicked="(switchValue) => $emit('toggleFilter', switchValue)"></ColorblindSwitch></li>
                    </ul>
                </div>
            </Transition>
            <div v-if="!menuButton" :class="horizontalNavClasses" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li :class="itemClasses('About Me')" @click="menuItemClicked('About Me')"><a class="nav-link rounded">About Me</a></li>
                    <li :class="itemClasses('Projects')" @click="menuItemClicked('Projects')"><a class="nav-link rounded">Projects</a></li>
                    <li :class="itemClasses('Resume')" @click="menuItemClicked('Resume')"><a class="nav-link rounded">Resume</a></li>
                    <li :class="itemClasses('Fun Facts')" @click="menuItemClicked('Fun Facts')"><a class="nav-link rounded">Fun Facts</a></li>
                    <li class="nav-item"><ColorblindSwitch @switchClicked="(switchValue) => $emit('toggleFilter', switchValue)"></ColorblindSwitch></li>
                </ul>
            </div>
        </div>
    </nav>
</template>     

<script lang="ts">
import { defineComponent, computed, ref, onMounted, onUnmounted } from "@vue/composition-api";
import ColorblindSwitch from "./ColorblindSwitch.vue";


export default defineComponent({
    setup(props, { emit }) {
        const selectedItem = ref("");

        if (localStorage.getItem("selectedItem")) {
            selectedItem.value = localStorage.getItem("selectedItem") as string;
        }

        const showVerticalNav = ref(false);
        const togglerActive = ref(false);
        const menuButton = ref(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 575);
        const containerClasses = computed(() => {
            return {
                "container": true,
                "vertical": menuButton.value,
            };
        });
        const itemClasses = computed(() => {
            return (item: string) => {
                return {
                    "nav-item": true,
                    "is-active": item === selectedItem.value,
                };
            };
        });
        const menuItemClicked = function (menuItem: string) {
            selectedItem.value = menuItem;
            localStorage.setItem("selectedItem", selectedItem.value);
            emit("menuItemClicked", menuItem);
        };
        const windowResized = function () {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            menuButton.value = vw < 668;
            if (showVerticalNav.value && !menuButton.value) {
                showVerticalNav.value = false;
            }
            if (!menuButton.value && togglerActive.value) {
                togglerActive.value = false;
            }
        };
        const navbarTogglerClasses = computed(() => {
            return {
                "navbar-toggler": true,
                "is-active": togglerActive.value,
            };
        });
        onMounted(() => {
            window.addEventListener("resize", windowResized);
        });
        onUnmounted(() => {
            window.removeEventListener("resize", windowResized);
        });

        const horizontalNavClasses = computed(() => {
            return {
                "horizontal-nav": !menuButton.value,
                "show": !menuButton.value,
            };
        });

        const verticalNavClasses = computed(() => {
            return {
                "vertical-nav": menuButton.value,
                "show": showVerticalNav.value,
            }
        });

        const togglerActiveListener = function (event: Event) {
            const target = event.target as HTMLElement;
            const container = document.getElementById("mainNav");

            if (target.id !== "mainNav" && !container?.contains(target)) {
                showVerticalNav.value = false;
                togglerActive.value = false;    
                window.removeEventListener("click", togglerActiveListener);
                window.removeEventListener("touchstart", togglerActiveListener);
            }
        };
        const toggleVerticalMenu = function (event: Event) {
            const target = event.target as HTMLElement;
            console.log("Toggle vertical");
            if (showVerticalNav.value) {
                showVerticalNav.value = false;
                togglerActive.value = false;
            } else {
                showVerticalNav.value = (document.activeElement?.id === "navButton");
                togglerActive.value = true;
                window.addEventListener("click", togglerActiveListener);
                window.addEventListener("touchstart", togglerActiveListener);
            }
        };
        return {
            containerClasses,
            menuButton,
            menuItemClicked,
            showVerticalNav,
            toggleVerticalMenu,
            togglerActive,
            itemClasses,
            navbarTogglerClasses,
            horizontalNavClasses,
            verticalNavClasses,
        };
    },
    components: { ColorblindSwitch }
})
</script>

<style scoped>
@font-face {
    font-family: Pacifico;
    src: url(../assets/fonts/Pacifico-Regular.ttf)
}

@font-face {
    font-family: Tiro;
    src: url(../assets/fonts/TiroKannada-Regular.ttf)
}

.profile-pic {
    width: 50px;
    border-radius: 100%;
    margin-top: 5px;
    margin-left: 15px;
    cursor: pointer;
}

#mainNav {
    background-color: #278EA5;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    transition: padding-top 0.3s, padding-bottom 0.3s;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    flex: 0 1 auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}

#mainNav.navbar-shrink {
    padding-top: .5rem;
    padding-bottom: .5rem;
}
.container {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
}

.container.vertical {
    align-items: normal;
    flex-direction: column;
}

.nav-item {
    display: block;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: auto;
}

.nav-item.is-active {
    background-color: #1F4287;
    transition: background-color 0.15s ease-in-out;
}

.nav-item.is-active > .nav-link {
    color: #FFF !important;
}

.nav-link {
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
}

.nav-link:hover {
    color: #1F4287;
}

.navbar-nav {
    display: flex;
    margin-right: 2rem;
}

.navbar-nav.vertical {
    display: block;
    margin-right: 0;
    padding-left: 0;
    float: left;
    margin-left: 1rem;
}

.navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 0.125rem solid #FFFFFF;
    border-radius: 0.5rem;
    color: #FFFFFF;
    position: absolute;
    right: 2rem;
    margin-top: 1rem;
}

.navbar-toggler:hover {
    text-decoration: none;
    cursor: pointer;
    color: #1F4287;
    border-color: #1F4287;
}

.navbar-toggler.is-active {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0.25rem;
    transition: box-shadow 0.15s ease-in-out;
    color: #1F4287;
    border-color: #1F4287;
}

.vertical-nav {
    text-align: left;
}

/* Transition */
.v-enter,
.v-leave-to {
    /* max-height: 0; */
    max-height: 0 !important;
    opacity: 0 !important;
}

.v-enter-active,
.v-leave-active {
    transition: max-height 1s ease-in-out, opacity 0s ease-in-out .5s;
}

.v-leave,
.v-enter-to {
    max-height: 500px;
    opacity: 1;
}
</style>