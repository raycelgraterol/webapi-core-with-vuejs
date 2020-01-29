<template>
    <div class="userGrid">
        <b-jumbotron header="Users" lead="">
            <b-row align-h="around" >
                <b-col cols="5">
                    <b-alert md variant="success" show>Select Any Row To Edit A User.</b-alert>
                </b-col>
                <b-col cols="2">
                    <b-button @click="createNewUser" variant="outline-success">Create New User</b-button>
                </b-col>
            </b-row>
            <b-alert :show="showAlert" variant="danger">{{alertText}} <b-button variant="outline-success" href="/login">Login</b-button></b-alert>

            <b-table hover :items="users" :fields="fields"
                     ref="selectableTable"
                     small
                     selectable
                     :select-mode="selectMode"
                     @row-selected="onRowSelected"
                     responsive="sm">
            </b-table>

            <b-modal id="modal-1" title="Add/Edit" hide-footer>
                <b-form @submit="saveUser" @reset="onReset">
                    <b-row align-h="center">
                        <b-col md="12" class="mb-5">
                            <b-form-group id="input-group-1"
                                          label="Email address:"
                                          label-for="input-1">
                                <b-form-input id="input-1"
                                              v-model="form.email"
                                              type="email"
                                              required
                                              :disabled="!isNew"
                                              placeholder="Enter email"></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                                <b-form-input id="input-2"
                                              v-model="form.password"
                                              type="password"
                                              required
                                              :disabled="!isNew"
                                              placeholder="Enter password"></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-3"
                                          label="Country :"
                                          label-for="input-3">
                                <b-form-input id="input-3"
                                              v-model="form.country"
                                              type="text"
                                              required
                                              placeholder="Enter the country"></b-form-input>
                            </b-form-group>

                        </b-col>
                        <b-col cols="2">
                            <b-button type="submit" variant="primary">{{isNew ? "Create" : "Update"}}</b-button>
                        </b-col>
                        <b-col cols="2">
                            <b-button type="text" @click="deleteUser" variant="danger">Delete</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-modal>
        </b-jumbotron>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                alertText: 'Please login to the app.',
                showAlert: false,
                isNew: false,
                fields: [
                    { key: 'id', label: 'Identifier', sortable: true, sortDirection: 'desc' },
                    { key: 'email', label: 'Email' },
                    { key: 'country', label: 'Country', sortable: true, sortDirection: 'desc' }
                ],
                users: [],
                errors: [],
                selectMode: 'single',
                selected: {},
                form: {
                    id: '',
                    email: '',
                    country: '',
                    password: ''

                },
            }
        },
        methods: {
            async getUsers() {
                let userSeccion = JSON.parse(localStorage.getItem("user"));
                if (userSeccion) {
                    let bearerToken = 'Bearer ' + userSeccion.token;
                    const headersAuth = {
                        'Authorization': bearerToken
                    };
                    let result = await axios.get('https://localhost:44349/users', { headers: headersAuth }).catch(e => { this.errors.push(e) });

                    this.users = result.data.result.filter(function (el) {
                                      return el.id != 1 ;
                                    })
                } else {
                    this.showAlert = true;
                }
            },
            onRowSelected(items) {
                this.isNew = false;
                this.selected = items;
                this.form.id = items[0].id;
                this.form.email = items[0].email;
                this.form.password = items[0].password;
                this.form.country = items[0].country;
                this.$bvModal.show('modal-1');
            },
            createNewUser() {
                this.isNew = true;
                this.form.email = '';
                this.form.country = '';
                this.form.password = '';
                this.$bvModal.show('modal-1');
            },
            async saveUser(evt) {
                evt.preventDefault();
                let userSeccion = JSON.parse(localStorage.getItem("user"));

                let bearerToken = 'Bearer ' + userSeccion.token;
                let headers = { 'Content-Type': 'application/json', 'Authorization': bearerToken };

                if (this.isNew) {
                    let data = { 'id': this.form.id, 'email': this.form.email, 'password': this.form.password, 'country': this.form.country };

                    await axios.post('https://localhost:44349/users', data, { headers: headers }).catch(e => { this.errors.push(e) });
                } else {
                    let data = { 'id': this.form.id, 'email': this.form.email, 'password': this.form.password, 'country': this.form.country };

                    await axios.put('https://localhost:44349/users/' + this.form.id, data, { headers: headers });
                }
                
                this.$bvModal.hide('modal-1');

            },
            async deleteUser(evt) {
                evt.preventDefault();
                let userSeccion = JSON.parse(localStorage.getItem("user"));

                let bearerToken = 'Bearer ' + userSeccion.token;
                let headers = { 'Authorization': bearerToken };

                await axios.delete('https://localhost:44349/users/' + this.form.id, { headers: headers }).catch(e => { this.errors.push(e) });

                this.$bvModal.hide('modal-1');

            },
            onReset(evt) {
                evt.preventDefault()
                this.form.email = '';
                this.form.country = '';
                this.form.password = '';
                // Trick to reset/clear native browser form validation state
                this.show = false
            }
        },
        created() {
            this.getUsers()
        },
        updated() {
            this.getUsers()
        }
    }

</script>
