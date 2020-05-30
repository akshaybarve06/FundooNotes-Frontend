<!-- 
* @Description :
*
* @file: Register.html
* @overview: Register.html is page for register new user
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 27/05/2020- Wednesday
*
-->
<template>
  <div class="container">
    <h1>Register Here</h1>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="firstName"
            required
            v-model="input.firstName"
            placeholder="Enter First Name"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="lastName"
            required
            v-model="input.lastName"
            placeholder="Enter Last Name"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="phoneNumber"
            v-model="input.phoneNumber"
            placeholder="Enter Mobile Number"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="role"
            required
            v-model="input.role"
            placeholder="Enter Role"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="service"
            required
            v-model="input.service"
            placeholder="Enter Service"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="email"
            required
            v-model="input.email"
            placeholder="Enter Email Id"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="password"
            required
            v-model="input.password"
            placeholder="Enter Password"
          />
          <div v-if=" input.password.length>1 && input.password.length < 6" class="text-danger">Password Must Greater Than 6 Characters</div>
        </div>
        <br />
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="confirmpassword"
            required
            v-model="input.confirmpassword"
            placeholder="Enter Confirm Password"
          />
        <div v-if=" input.password != input.confirmpassword " class="text-danger">Ensure That Both Passwords are same</div>
        </div>
        <br />
        <button v-on:click="register()" class="btn btn-primary">Register</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        role: "",
        service: "",
        createdDate: "",
        modifiedDate: "",
        email: "",
        password: "",
        confirmpassword: ""
      },
      response: ""
    };
  },
  methods: {
    register: function() {
      this.$http
        .post(
          "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
          {
            firstName: this.input.firstName,
            lastName: this.input.lastName,
            phoneNumber: this.input.phoneNumber,
            role: this.input.role,
            service: this.input.service,
            email: this.input.email,
            password: this.input.password
          }
        )
        .then(function(data) {
          console.log("Data..." + data);
          alert("Registered Successfully..!");
        }),
        error => {
          console.error("Sorry..Couldn't Register.." + error);
        };
      }
    }
};
</script>

<style>
</style>