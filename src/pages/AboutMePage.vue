<template>
    <div class="about-me-wrapper">
        <div class="about-card-wrapper" style="background-color: #071E3D;">
            <span>
                <img class="about-right-pic" style="background-color: #21E6C1; aspect-ratio: auto; 
                    max-height: none; padding: 10px;" :src="AggiePic" alt="personal-aggie-pic"/>
                <h6>Texas A&M University</h6>
                I am currently a senior at Texas A&M University, Gig'em!. I am planning on graduating
                in the spring of 2023 with a B.S. in Computer Science and a minor in Cybersecurity. 
                Through my coursework at A&M, I learned how to work in a team, agile development, SQL,
                python, C++, and many other languages and tools. 
            </span>
        </div>
        <div class="about-card-wrapper" style="background-color: #278EA5;">
            <span>
                <img class="about-left-pic" style="background-color: #071E3D;" src="../assets/artificial-logo.svg" alt="artificial-logo"/>
                <h6>Artificial</h6>
                I worked as a software engineering intern at 
                <a class="about-link" href="https://www.artificial.com/"> Artificial Inc. </a>
                 during the summer of
                2021 and the summer of 2022. At Artificial, I got to work on projects using vue.js
                and typescript. I added features to the artificial lab suite that were requested by
                clients. I also created an internal UI tool for use by other Artificial developers.
            </span>
        </div>
        <div class="about-card-wrapper" style="background-color: #071E3D;">
            <span>
                <img class="about-right-pic apple-pic" style="background-color: #21E6C1;" src="../assets/apple.svg" alt="amplifood-apple"/>
                <h6>Amplifood LLC</h6>
                In 2019, a high school friend approached me with an idea and needed help building
                an application. I started working with the small team already assembled to create an
                android application that could scan a barcode at a grocery store and tell if that food
                item is part of the users diet or not. My time at 
                <a class="about-link" href="https://www.amplifood.app"> Amplifood </a>
                 has not only allowed me
                to delve deep into Android development, but also gave me invaluable experience in 
                project management, marketing, and pitching ideas.    
            </span>
        </div>
        <div class="about-card-wrapper" style="background-color: #278EA5;">
            <span>
                <img class="about-left-pic" style="background-color: #071E3D; aspect-ratio: auto; padding: 10px;"
                    src="../assets/venue-valet-logo.png" alt="venue-valet-logo"/>
                <h6>Venue Valet</h6>
                During the summer of 2019, I worked at 
                <a class="about-link" href="https://venue-valet.com/">Venue Valet</a> 
                in Austin, TX. I used my knowledge
                of Java to help make an admin page for electronic movie poster management. At Venue Valet,
                I learned JSP with JSTL tags and added features and unit tests to the Venue Valet product
                suite.
            </span>            
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import AggiePic from "../assets/aggie-pic.jpg"

export default defineComponent({
    setup(props) {
        return {
            AggiePic: AggiePic,
        }
    }
});
</script>

<style>
.about-me-wrapper {
    padding-top: 10rem;
    background-color: #1F4287;
}

h6 {
    font-family: Tiro;
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
}

.about-card-wrapper {
    color: #FFF;
    font-family: Tiro;
    display: flex;
    max-width: 900px;
    margin: auto;
    padding: 30px;
    border-radius: 50px;
    margin-bottom: 50px;
}

.about-left-pic {
    border-radius: 25%;
    margin-right: 20px;
    max-height: 160px;
    max-width: 160px;
    margin-bottom: auto;
    margin-top: auto;
    width: 30%;
    aspect-ratio: 1;
    float: left;
}

.about-right-pic {
    border-radius: 25%;
    margin-left: 20px;
    max-height: 160px;
    max-width: 160px;
    margin-bottom: auto;
    margin-top: auto;
    width: 30%;
    float: right;
}

.apple-pic {
    max-width: 160px;
    padding: 20px;
    margin-top: auto;
    margin-bottom: auto;
}

.about-link {
    color: #FFF;
}

.about-link:hover {
    color: #1F4287;
}
</style>