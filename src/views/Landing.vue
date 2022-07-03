<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

<template>

    <body>
        <!--Header-->
        <header class="p-3 text-white">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    </a>

                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-2 text-black">Home</a></li>
                        <li><a href="https://github.com/ataha322/planner.xyi/blob/master/README.md"
                                class="nav-link px-2 text-black">About</a></li>
                    </ul>

                    <!--Buttons-->
                    <div v-if='user.user_name ==  null' class="text-end" :user='user'>
                        <v-btn type="button" class="btn btn-outline-light me-2" onclick="window.location.href = '/app'">
                            Login</v-btn>
                        <v-btn type="button" onclick="window.location.href = '/register'">
                            Sign-up</v-btn>
                    </div>
                    <div v-else class="text-end">
                        <button type="button" class="btn btn-warning" onclick="window.location.href = '/app'">Welcome,
                            {{user.user_name}}</button>
                    </div>
                </div>
            </div>
        </header>

        <!--Main body-->
        <div class='landing-main'>
            <div color='red' outlined elevation="24" class='landing-temp'>
                <div class='landing-temp-title-tile'>
                    <h2 class='landing-temp-title'>
                        Coming Soon
                    </h2>
                    <span class="mdi mdi-github-box"></span>
                </div>
                <div class='authors'>
                    <h5>Main Raspiartory</h5>
                </div>
                <v-sheet-actions class='buttons'>
                    <v-btn href='https://github.com/ataha322/planner.xyi' icon class='github-button' target="_blank"
                        x-large>
                        <v-icon class='github-button-icon' size='60'>$vuetify.icons.button</v-icon>
                    </v-btn>
                </v-sheet-actions>

            </div>
        </div>

    </body>
</template>


<script>
import axios from 'axios';
import {User} from '@/models/user';

export default {
    
    name: 'Landing', 

    data() {
        return {
            user: new User(),
        }
    },

    async mounted() {
        try {
            const {data} = await axios.get('user');
            this.user = data;
        } catch (e) {
        }
    }


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
/** Header */
.text-end {
    color: black;
}

header {
    background-color: #E7E5E5;
    font-family: 'Inter';
}

/* Main Body*/
.landing-main {
    margin: 0;
    height: 100%;
    width: 100%;
    
    
    display: grid;
    grid-template-columns: 0.1fr 0.2fr 1fr 0.2fr 0.1fr;
    grid-template-rows: 0.1fr 0.2fr 1fr 0.2fr 0.1fr;
}


</style>

<style scoped>
html,
body {
    margin: 0;
    height: 100%;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #D9D9D9;

    font-family: 'Inter';

    display:  grid;
    grid-template-rows: 0.1fr 1fr 0.1fr;
}

/* Central sheet */
.landing-temp {
    grid-row: 3/4;
    grid-column: 3/4;

    background-color: #E7E5E5;

    display: grid;
    grid-template-columns: 0.1fr 0.2fr 1fr 0.2fr 0.1fr;
    grid-template-rows: 0.1fr 0.3fr 1fr 0.2fr 0.3fr 0.1fr;
}

.landing-temp-title-tile {
    grid-row: 2/4;
    grid-column: 3/4;
    text-align: center;

    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
}

.landing-temp-title {
    text-align: center;

    grid-row: 2/3;
    grid-column: 2/3;
}

/** Authors */
.authors {
    grid-row: 4/5;
    grid-column: 3/4;
    text-align: center;
}

/**Buttons */
.buttons {
    grid-row: 5/6;
    grid-column: 3/4;

    display: grid;

    grid-template-columns: 0.9fr 1fr 0.9fr;

}

.github-button {
    grid-column: 2/3;;
    align-items: center;
    text-align: center;

    margin: auto;

}

.flexcol .v-btn__content {
    flex-direction: column;
}

</style>