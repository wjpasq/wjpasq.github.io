
<template>
    <div id="app">
        <svg style="position: absolute; height: 0;">
            <filter id="colorblind-filter">
                <feColorMatrix
                type="matrix"
                values=" 0.367  0.861  -0.228  0.000  0.000 
                        0.280  0.673  0.047  0.000  0.000 
                        -0.012  0.043  0.969  0.000  0.000 
                        0.000  0.000  0.000  1.000  0.000">
                </feColorMatrix>
            </filter>
        </svg>
        <NavBar @menuItemClicked="menuItemClicked" @toggleFilter="toggleFilter"></NavBar>
        <div id="page">
            <AboutMePage v-if="currentPage === 'About Me'"></AboutMePage>
            <ProjectsPage v-else-if="currentPage === 'Projects'"></ProjectsPage>
            <ResumePage v-else-if="currentPage === 'Resume'"></ResumePage>
            <FunFactsPage @toggleFilter="toggleFilter" v-else-if="currentPage === 'Fun Facts'"></FunFactsPage>
            <HomePage v-else></HomePage>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import bootstrap from 'bootstrap-vue';
import NavBar from "./components/NavBar.vue";
import AboutMePage from './pages/AboutMePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ResumePage from './pages/ResumePage.vue';
import FunFactsPage from './pages/FunFactsPage.vue';
import HomePage from './pages/HomePage.vue';
import { faLowVision } from '@fortawesome/free-solid-svg-icons';


export default defineComponent({
    /* eslint-disable */
    components: {
        NavBar,
        AboutMePage,
        ProjectsPage,
        ResumePage,
        FunFactsPage,
        HomePage,
    },
    setup() {
        onMounted(() => {
            window.addEventListener('DOMContentLoaded', event => {

                // Navbar shrink function
                var navbarShrink = function () {
                    const navbarCollapsible = document.body.querySelector('#mainNav');
                    if (!navbarCollapsible) {
                        return;
                    }
                    if (window.scrollY === 0) {
                        navbarCollapsible.classList.remove('navbar-shrink')
                    } else {
                        navbarCollapsible.classList.add('navbar-shrink')
                    }

                };

                // Shrink the navbar 
                navbarShrink();

                // Shrink the navbar when page is scrolled
                document.addEventListener('scroll', navbarShrink);

                // Activate Bootstrap scrollspy on the main nav element
                const mainNav = document.body.querySelector('#mainNav');
                if (mainNav) {
                    new bootstrap.ScrollSpy(document.body, {
                        target: '#mainNav',
                        offset: 72,
                    });
                }

                // Collapse responsive navbar when toggler is visible
                const navbarToggler: HTMLElement | null = document.body.querySelector('.navbar-toggler');
                const responsiveNavItems: Element[] = [].slice.call(
                    document.querySelectorAll('#navbarResponsive .nav-link')
                );
                responsiveNavItems.map(function (responsiveNavItem) {
                    responsiveNavItem.addEventListener('click', () => {
                        if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                            navbarToggler.click();
                        }
                    });
                });

            });

            if (localStorage.getItem("rootFilter")) {
                const rootFilter = localStorage.getItem("rootFilter") as string;
                const root = document.documentElement as HTMLElement;
                root.style.setProperty("--root-filter-color", rootFilter);
            }

        });

        const currentPage = ref('home');
        if (localStorage.getItem("currentPage")) {
            currentPage.value = localStorage.getItem("currentPage") as string;
        }

        const menuItemClicked = function(menuItem: string) {
            console.log(currentPage);
            currentPage.value = menuItem;
            localStorage.setItem("currentPage", currentPage.value);
        }

        const toggleFilter = function(switchValue: boolean) {
            const root = document.documentElement as HTMLElement;

            if (switchValue) {
                root.style.setProperty("--root-filter-color", "url('#colorblind-filter')");
                localStorage.setItem("rootFilter", "url('#colorblind-filter')");
            } else {
                root.style.setProperty("--root-filter-color", "none");
                localStorage.setItem("rootFilter", "none");
            }
        }

        return {
            currentPage,
            menuItemClicked,
            toggleFilter,
        }
    },
    methods: {
        menuToggle() {
            document.querySelector("#navbarResponsive")?.classList.toggle("show");
        },
    }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    margin: 0;
}

.profile-pic {
    width: 50px;
    border-radius: 100%;
    margin-top: 5px;
}

#page {
    display: flex;
    flex-flow: column;
    height: 100%;
}

:root {
    --root-filter-color: none;
    filter: var(--root-filter-color);
}
</style>