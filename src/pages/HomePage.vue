<template>
    <div class="elevator-pitch-super-wrapper">
        <div class="el-pitch-wrapper">
            <img class="el-pitch-profile-pic" src="../assets/profile_pic.jpg"/>
            <span class="el-pitch">
                <br>
                <span class="hello-span">Hello!</span> 
                <br>
                I am Will Pasquarette, a senior at Texas A&M University. I am majoring
                in Computer Science with a minor in cybersecurity. My front-end and 
                back-end experience at Texas A&M and multiple internships have given me
                the knowledge and skills to make an impact in software development at your
                company.
                <br>
                <span>
                    <a href="mailto: wjpasq@gmail.com"><img class="contact-icon" 
                        src="../assets/mail.png" alt="mail"></a>
                    <a href="https://www.linkedin.com/in/will-pasquarette"><img class="contact-icon" 
                        src="../assets/linked-in.png" alt="linked-in"></a>
                </span>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({

});
</script>
<style scoped>
.elevator-pitch-super-wrapper {
    height: 100vh;
    margin: 0;
    background-size: cover;
    background-image: url(../assets/mountain-background.jpg);
    display: flex;
    justify-content: center;
}

.el-pitch-wrapper {
    margin: auto;
    padding: 15px 60px;
    background-color: #1F4287;
    border: 10px solid #278EA5;
    border-radius: 10px;
    position: relative;
    top: 75px;
}

.el-pitch-profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 100%;
}

.el-pitch {
    color: #FFF;
    font-family: Tiro;
    display: block;
    max-width: 600px;
}

.hello-span {
    font-family: Pacifico;
    font-size: 32px;
}

.contact-icon {
    width: 1rem;
    height: 1rem;
    filter: invert(100%);
    margin: 5px;
}
</style>