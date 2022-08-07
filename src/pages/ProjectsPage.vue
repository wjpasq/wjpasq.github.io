<template>
    <div class="projects-wrapper">
        <div class="project-card-wrapper" style="background-color: #278EA5">
            <span>
                <img class="project-left-pic" style="background-color: #1F4287;" src="../assets/bike.svg" alt="bike.svg"/>
                <h6>Bike Spot</h6>
                Bike Spot is an Android Applicaition I developed in a team at the City of College 
                Station Hackothon in 2019. Bike Spot uses the Google Maps API to display all the bike
                rack locations in College Station.
                <br>
                <a href="https://github.com/wjpasq/BikeSpot"><img class="filter-white" src="../assets/github.png" alt="github-logo"></a>
            </span>
        </div>
        <div class="project-card-wrapper" style="background-color: #1F4287;" >
            <span>
                <img class="project-right-pic" style="background-color: #21E6C1;" src="../assets/domino.svg" alt="domino.svg"/>
                <h6>Dominoes</h6>
                In this application, up to 4 different users can play draw dominoes. The player can also 
                set any number of the 4 players to computer players. Although this started as a project 
                for class, I ended up greatly exapanding upon the GUI and the functionality to make a 
                Dominoes game that I could enjoy playing.
                <br>
                <a href="https://github.com/wjpasq/Dominoes"><img class="filter-white" src="../assets/github.png" alt="github-logo"></a>
            </span>
        </div>
        <div class="project-card-wrapper" style="background-color: #278EA5">
            <span>
                <img class="project-left-pic" style="background-color: #FFF;" src="../assets/card-blackjack.png" alt="cards.svg"/>
                <h6>Black Jack</h6>
                Black Jack was the my first attempt at a NetBeans project. I wanted to make somehing
                that I could enjoy playing as well us something that could let me grow as a programmer.
                I made a black jacke game that allows the player to bet, split, double down, and even
                tells the player the real-time chance they have of winning the hand.
                <br>
                <a href="https://github.com/wjpasq/BlackJack"><img class="filter-white" src="../assets/github.png" alt="github-logo"></a>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
});
</script>

<style>
.projects-wrapper {
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

.project-card-wrapper {
    color: #FFF;
    font-family: Tiro;
    display: flex;
    max-width: 900px;
    margin: auto;
    padding: 30px;
    border-radius: 50px;
    margin-bottom: 50px;
}

.project-left-pic {
    border-radius: 25%;
    margin-right: 20px;
    max-height: 160px;
    max-width: 160px;
    margin-bottom: auto;
    margin-top: auto;
    padding: 10px;
    width: 25%;
    aspect-ratio: 1;
    float: left;
}

.project-right-pic {
    border-radius: 25%;
    margin-left: 20px;
    max-height: 160px;
    max-width: 160px;
    margin-bottom: auto;
    margin-top: auto;
    padding: 10px;
    width: 25%;
    aspect-ratio: 1;
    float: right;
}

.project-link {
    color: #FFF;
    text-decoration: none;
}

.project-link:hover {
    color: #071E3D;
}

.filter-white {
    filter: invert(100%);
}
</style>