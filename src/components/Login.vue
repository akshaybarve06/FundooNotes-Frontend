<!-- 
* @Description :
*
* @file: Login.html
* @overview: Login.html is page for register new user
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 27/05/2020- Wednesday
*
-->
<template>
  <div class="container">
    <h1>Login Form</h1>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="input.email"
              required
              placeholder="Enter Email-Id"
            />
          </div>
          <br />
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="input.password"
              required
              placeholder="Password"
            />
          </div>
          <br />
          <button type="submit" v-on:click.prevent="login()" class="btn btn-primary">Login</button>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: {
        email: "",
        password: ""
      },
      response: ""
    };
  },
  methods: {
    login: function() {
      this.$http
        .post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", {
          email: this.input.email,
          password: this.input.password
        })
        .then(function(data) {
          console.log("Data..." + data);
          alert("Login Successful..!")
        }),
        error => {
          console.error("Sorry..Couldn't Login.." + error);
        };
    }
  }
};
</script>

<style>
</style>