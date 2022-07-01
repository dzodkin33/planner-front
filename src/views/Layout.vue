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
        </div>
    </v-app>
</template>

<script>
import Calendar from '@/components/Calendar.vue'
import Categories from '@/components/Categories.vue'
import Task from '@/components/Task.vue'
import Tasklist from '@/components/Tasklist.vue'

export   default {
    name: 'Layout',
    components: {
        Calendar,
        Categories,
        Task,
        Tasklist
    },

    async mounted() {
        //! Commented out for development purpouses (I can't be fucked to 
        // config databse just to edit html)
        try {
            const response = await axios.get('user');
        } catch (e) {
            await this.$router.push('/')
        }

    }
}
</script>

<style>
html,
body {
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    background: #EFECEC;
}

.grid {
    background: #EFECEC;
    margin: 0;
    height: 100%;

    display: grid;
    grid-template-rows: 1fr 2fr;
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
    grid-row: 1/2;

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
    grid-row: 2 / 3;
}

/* Task Lisr */
.task-list-wrapper {
    background: #D7D5D5;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
}

/* Task */
.task-wrapper {
    background: #D9D9D9;
    grid-column: 3 / 4;
    grid-row: 1 / 3;
}


/* Buttons */
.btn:hover {

    background-color: #D7D5D5;
}
</style>