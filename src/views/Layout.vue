<template>
    <v-app>
        <div class="grid">
            <div class="calendar-wrapper">
                <Calendar />
            </div>
            <div class="category-wrapper">
                <Categories />
            </div>
            <div class="task-list-wrapper">
                <Tasklist />
            </div>

            <div class="task-wrapper">
                <Task />
            </div>

            <div class ="nav-wrapper">
                    <Nav :user = "user"/>
            </div>
        </div>
    </v-app>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Calendar from '@/components/Calendar.vue'
import Categories from '@/components/Categories.vue'
import Task from '@/components/Task.vue'
import Tasklist from '@/components/Tasklist.vue'
import axios from 'axios'
import {User} from '@/models/user'

export   default {
    name: 'Layout',
    components: {
        Nav,
        Calendar,
        Categories,
        Task,
        Tasklist
    },

    data() {
        return {
            user: new User()
        }
    },

    async mounted() {
        //! Commented out for development purpouses (I can't be fucked to 
        // config databse just to edit html)
        try {
            const {data} = await axios.get('user');
            this.user = data;
        } catch (e) {
            //await this.$router.push('/')
        }

    }
}
</script>

<style>
html,
body {
    max-height: 100%;
    max-width: 100%;
    background: #EFECEC;
}

.grid {
    background: #EFECEC;
    margin: 0;
    height: 100%;

    display: grid;
    grid-template-rows: 0.01fr 0.5fr 1fr;
    grid-template-columns: 1fr 2fr 1fr;
}
/* Calendar */
.calendar-wrapper {
    grid-area: calendar-wrapper;
    background: white;
    margin: 0;
    height: 100%;
    line-height: 39px;
    grid-column: 1 / 2;
    grid-row: 2/3;

}

.calendar-header {
    font-style: normal;
    background: #F38B8B;
}

.calendar-header-text {

    font-family: 'Inter', sans-serif;
    font-weight: 700;

    color: #FFFFFF;
    text-align: right;
    position: relative;
    right: 25px;
}

/* Categories */
.component-bar {
    background: #EFECEC;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
}

/* Task List */
.task-list-wrapper {
    background: #EFECEC;
    grid-column: 2 / 3;
    grid-row: 2 / 4;
}

/* Task */
.task-wrapper {
    background: #D9D9D9;
    grid-column: 3 / 4;
    grid-row: 2 / 4;
}

/** Nav */

.nav-wrapper {
    grid-column: 1/4;
    grid-row: 1/2;
}


/* Buttons */
.btn:hover {

    background-color: #D7D5D5;
}
</style>