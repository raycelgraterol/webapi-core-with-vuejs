<template>
    <div class="formLogin">
        <b-row>
            <b-col offset-md="4" md="5">
                <h1 class="text-dask text-center">
                    {{title}}
                </h1>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group id="input-group-1"
                                  label="Email address:"
                                  label-for="input-1"
                                  description="We'll never share your email with anyone else.">
                        <b-form-input id="input-1"
                                      v-model="form.email"
                                      type="email"
                                      required
                                      placeholder="Enter email"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                        <b-form-input id="input-2"
                                      v-model="form.password"
                                      type="password"
                                      required
                                      placeholder="Enter password"></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                title: "Loggin",
                
                errors: [],
                form: {
                    email: '',
                    password: ''
                },
                show: true
            }
        },
        computed: {
            loggingIn() {
                return false;
            }
        },
        methods: {
            async onSubmit(evt) {
                evt.preventDefault();
                
                let headers = { 'Content-Type': 'application/json' };
                let data = { 'email': this.form.email, 'password': this.form.password };

                let result = await axios.post('https://localhost:44349/users/authenticate', data, { headers: headers }).catch(e => {this.errors.push(e)});

                this.form.email = '';
                this.form.password = '';
                localStorage.setItem("user", JSON.stringify(result.data));
                this.$router.push('/users');

            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.password = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
            },
            checkLogin() {
                let userSeccion = JSON.parse(localStorage.getItem("user"));
                if (userSeccion) { this.$router.push('/users'); }
            }
        },
        created() {
            this.checkLogin();
        }
    }
</script>


