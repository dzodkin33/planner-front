<template>
    <main class="form-signin w-100 m-auto">
        <form @submit.prevent='submit'>
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
                <input v-model='email' class="form-control" placeholder="name@example.com">
                <label>Email address or username</label>
            </div>
            <div class="form-floating">
                <input v-model='password' type="password" class="form-control" placeholder="Password">
                <label>Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        async submit() {
            if (this.validateEmail(this.email)) {
                await axios.post('login', {
                    email: this.email,
                    password: this.password
                });
            } else {
                await axios.post('login', {
                    username: this.email,
                    password: this.password
                });
            }

            await this.$router.push('/app');
        },
        
        validateEmail(value) {
            let validation_result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            return validation_result
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
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>