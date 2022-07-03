<template>
    <header class="p-2">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                </a>

                <ul class="nav justify-content-center mb-md-0">
                    <li><a href="/" class="nav-link px-2 text-black">Home</a></li>
                    <li><a href="https://github.com/ataha322/planner.xyi/blob/master/README.md"
                            class="nav-link px-2 text-black">About</a></li>
                </ul>
            </div>

            <!--Dropdown Menue-->
            <div class="menue-dropdown text-end">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class='nav-btn' color="#D9D9D9" v-bind="attrs" v-on="on">
                            Welcome,
                            <!--add {{user.name}} later when db is connected-->
                        </v-btn>
                    </template>

                    <!--Dropdown Menue Components-->
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                <a class='nav-menue-item' href='/'>Edit Profile</a>
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-title>
                                <a class='nav-menue-item' href='/'>Leave Feedback</a>
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-title>
                                <a class='nav-menue-item' @click = 'logout'>Logout</a>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>
    </header>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Nav',
    props: ['user'],

    methods: {
        async toLanding() {
            await this.$router.push('/');
        },
        async logout() {
            await axios.post('logout');

            await this.$router.push('/');
        }
    }

}
</script>

<style>
.nav-btn {
    background-color: #D9D9D9;
}
</style>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

/** Header */
.text-end {
    color: black;
}

header {
    background-color: #E7E5E5;
    font-family: 'Inter';
}

.container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
}

main>.container {
    padding: 60px 15px 0;
}


/* *Menue Dropdown */
.menue-dropdown{
     grid-column: 3/4;
}

.nav-menue-item {
    color: black;
    text-decoration: none;
}
</style>

