<template>
    <div id="categories" class="planner-window component-bar categories">
        <v-sheet class="create-task">

            <!--Categories list-->
            <div class='category-list' v-for="(category, index) in categories" :key="index">
                <a class='category'>
                    <a class='category-color'>
                        <v-menu top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                            <template v-slot:activator="{ on }">
                                <div v-on="on" />
                            </template>
                            <v-card>
                                <v-card-text class="pa-0">
                                    <v-color-picker flat />
                                </v-card-text>
                            </v-card>
                        </v-menu>
                    </a>
                    <div class='category-name'>
                        Name:
                        <input class='category-name-input' :placeholder="category.name">
                        <button @click='editCategoryName' class='category-name-change'>edit</button>
                    </div>
                    <div class='task-counts'>
                        <div class='task-count'>Tasks: {{category.taskCount}} </div>
                        <div class='task-compleated'>Compleated: {{category.compleatedTasks}}</div>
                    </div>

                    <button class='category-trash-btn-wrapper'>
                        <img class='category-trash-btn' src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png">
                    </button>
                </a>
            </div>

            <!--Creating categories-->
            <v-btn @click="categoryCreation" class="btn" color=#EFECEC block tile depressed>
                New Category
            </v-btn>
        </v-sheet>

    </div>

</template>


<script lang="ts">
export default {
    name: "Categories",

    data: () => {

        return {
            categories : [
                {
                    name: 'test',
                    groupColor: {
                        color: "#0099CC",
                        mask: '!#XXXXXXXX',
                        menue: false
                    },
                    taskCount: 8,
                    compleatedTasks: 8
                },
                {
                    name: 'test2',
                    groupColor: {
                        color: "#FFFFFF",
                        mask: '!#XXXXXXXX',
                        menue: false
                    },
                    taskCount: 9,
                    compleatedTasks: 5
                }
            ]
        }

    },  

    methods: {
        /**
         * Creates a new bar with category creation interface. 
         */
        // ? You can probably simplify it 
        // ? I am too lazy tho
        categoryCreation() {
            let div = document.getElementById("categories");

            if (div != null && document.getElementById("categoryCreation") == null) {

                const newCategory = document.createElement('div');
                newCategory.setAttribute('id', "categoryCreation");
                newCategory.setAttribute('class', 'category-creation');


                const collapsButtonWrapper = document.createElement('div');
                collapsButtonWrapper.setAttribute('class', 'collaps-btn-wrapper');
                const collapsButton = document.createElement('button');
                collapsButton.setAttribute('class', 'collaps-btn');
                collapsButton.addEventListener('click', (e: Event) => this.collapsCategoryCreation());

                const collapsButtonImage = document.createElement('img');
                collapsButtonImage.setAttribute('class', 'collaps-btn-img')
                collapsButtonImage.setAttribute('src', 'https://pixsector.com/cache/96937a07/av99d1cc0762c2ea29789.png')
                collapsButton.append(collapsButtonImage);

                collapsButtonWrapper.append(collapsButton)

                const inputBar = document.createElement('input');
                inputBar.setAttribute('type', 'text');
                inputBar.setAttribute('placeholder', "Enter New Category");
                inputBar.setAttribute('class', 'catergory-creation-name-input');
                

                const inputButton = document.createElement('button');
                inputButton.setAttribute("id", "catergoryCreationNameButton");
                inputButton.setAttribute("class", "btn catergory-creation-name-button");
                inputButton.textContent = 'Create Category'
                inputButton.addEventListener('click', (e: Event) => this.newCategory());

                // Don't mind the error warning, it is checked by if statement
                div.prepend(newCategory);
                newCategory.append(inputBar);
                newCategory.append(inputButton);
                newCategory.append(collapsButtonWrapper);



            
            }

        },

        newCategory() {
            this.collapsCategoryCreation();
        },


        /**
         * 
         */
        collapsCategoryCreation() {
            let element = document.getElementById("categoryCreation");
            if (element != null && element.parentNode != null) {
                element.parentNode.removeChild(element);
            }
            console.log('collaps test');
        },


        /**
         * 
         */
        editCategoryName() {

        },

        /**
         * 
         */
        deleteCategory() {

        },

    },

}



</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
.div {
    background: #EFECEC;
    font-family: 'Inter';
}

.category-creation {
    font-family: 'Inter';
    text-align: center;
    display: grid;
    grid-template-columns: 0.1fr 0.5fr 0.3fr 0.5fr 0.5fr;
    grid-template-rows: 0.5fr 1fr;
    border-bottom: 1px solid #D7D5D5;

}

.catergory-creation-name-input {

    font-family: 'Inter';
    font-style: italic;
    font-size: 13px;
    margin: 0;
    height: 100%;
    width: 100%;
    border-bottom: 0.1px solid #D7D5D5;
    grid-column: 2 / 5;
    grid-row: 1/2;
    position: relative;
    left: 2%;
    top: 5%;    
}

.catergory-creation-name-button {
    grid-column: 4 / 6;
    grid-row: 2/3;
}

.collaps-btn-wrapper {
    grid-row: 1/2 ;
    grid-column: 5 / 6;

    margin: 0;
    height: 100%;
    width: 100%;

}

.collaps-btn-img {
    height: 25px;
    width: 25px;
}

.btn {
    border: none;
}

/* Categories list */
.category-color {
    background-color: var(--category-color);
    grid-column: 2/3;
    grid-row: 3/4;

    margin: 0;
    height: 100%;
    width: 100%;

    border-radius: 25%;

    border: 1px solid rgba(0, 0, 0, 0.45);
}
.category {
    background-color: #EFECEC;
    border-bottom: 0.1px solid #D7D5D5;
    text-decoration: none;

    display: grid;
    grid-template-rows: 0.2fr 1fr 0.8fr 1fr 0.2fr;
    grid-template-columns:0.1fr 0.18fr 0.18fr 1fr 1fr 0.25fr;
}

/**Не трогать нахуй, сломается */
.category-name {
    grid-column: 4 / 6;
    grid-row: 2/3;
    color: black;

    border-bottom: 0.1px solid #D7D5D5;
    font-family: 'Inter';
    font-size: 15px;

    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;


}

.category-name-input, select,
textarea {
    color: black;
}

.category-name-change {
    grid-column: 3/4;
}

.category-name-change:hover {
    background-color: #E7E5E5;
    border-radius: 15%;
}

.task-counts {
    grid-row: 4/5;
    grid-column: 4 / 6;
    font-family: 'Inter';
    font-style: italic;
    font-size: 13px;
    color: black;

    display: grid;
    grid-template-columns: 1fr 1fr;
}

.category:active {
    background: #E7E5E5;
}

.category-trash-btn-wrapper {
    grid-column: 6/7;
}

.category-trash-btn {
    height: 20px;
    width: 20px;
}

.category-trash-btn:hover {
    background-color: #E7E5E5;
    border-radius: 25%;
}


</style>

<style scoped>
.btn {
    background: #EFECEC;
    font-family: 'Inter', sans-serif;
    font-style: italic;
    font-size: 10px;
    text-align: center;
}
</style>