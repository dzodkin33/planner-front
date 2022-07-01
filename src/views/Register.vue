<template>
    <main class="form-signin w-100 m-auto">
        <form @submit.prevent = "submit">
            <h1 class="h3 mb-3 fw-normal">Please register</h1>
            <div class="form-floating">
                <input v-model="name" class="form-control" placeholder="name@example.com">
                <label>Name</label>
            </div>
            <div class="form-floating">
                <input v-model="user_name" class="form-control" placeholder="name@example.com">
                <label>User Name</label>
            </div>
            <div class="form-floating">
                <input v-model="email" type="email" class="form-control" placeholder="name@example.com">
                <label>Email address</label>
            </div>
            <div class="form-floating">
                <input v-model="password" type="password" class="form-control" placeholder="Password">
                <label>Password</label>
            </div>
            <div class="form-floating">
                <input v-model="password_confirm" type="password-confirm" class="form-control" placeholder="Password Confirm">
                <label>Password Confirm</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    </main>
</template>

<!--If you use <script lang = 'ts'> here it will throw errors for some reaons-->
<!--I have no idea why and frankly I don't really care-->
<script>
import axios from 'axios'


export default {
    name: 'Register',
    data() {
        return {
            name: '',
            user_name:'',
            email: '',
            password: '',
            password_confirm: '' 
        }
    },

    // ? Change later for an actual link
    methods: {
        async submit() {
            await axios.post('register', {
                name: this.name, 
                user_name: this.user_name, 
                email: this.email,
                password: this.password, 
                password_confirm: this.password_confirm,
            });

            await this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 15px;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.form-signin input[type="Password Confirm"]{
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>