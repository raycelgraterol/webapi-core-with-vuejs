<template>
    <div id="app">
        <b-navbar toggleable="md" type="dark" variant="danger">
            <b-container>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-navbar-brand href="#">Menu</b-navbar-brand>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
                        <b-nav-item :to="{name: 'login'}">Login</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-button v-if="loggedIn" size="sm" @click="logOut" class="my-2 my-sm-0" type="text">Sign Out</b-button>
                </b-navbar-nav>
            </b-container>
        </b-navbar>
        <b-container>
            <router-view />
        </b-container>
    </div>
</template>

<script>
    
    export default {
        name: 'home',
        data() {
            return {
                loggedIn: false
            }
        },
        components: {

        },
        methods: {
            logOut() {
                localStorage.removeItem("user");
                this.loggedIn = false;
                this.$router.push('/login');
            },
            setLoggedIn(){
                let userSeccion = localStorage.getItem("user");
                if (userSeccion) {
                    this.loggedIn = true
                } else {
                    this.loggedIn = false
                }
            }
        },
        updated() {
            this.setLoggedIn()
        }
    }
</script>
