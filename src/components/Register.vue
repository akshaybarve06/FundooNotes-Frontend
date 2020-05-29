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
            <input type="text" class="form-control" id="fullname" required placeholder="Enter Full Name" />
          </div>
          <br />
          <div class="form-group">
            <input type="text" class="form-control" id="mobile" required placeholder="Enter Mobile Number" />
          </div>
          <br />
          <div class="form-group">
            <input
              type="email" class="form-control" id="exampleInputEmail1" required placeholder="Enter Email Id"
            />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <br />
          <div class="form-group">
            <input type="password" class="form-control" id="password" required v-model="password" placeholder="Enter Password" />
            <div v-if=" password.length>1 && password.length < 6" class="text-danger">Password Must Greater Than 6 Characters</div>
          </div>
          <br />
          <div class="form-group">
            <input
              type="password" class="form-control" id="reenterpassword" required v-model="reenterpassword" placeholder="Confirm Password"
            />
            <div v-if=" password != reenterpassword " class="text-danger">Ensure That Both Passwords are same</div>
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:"register",
  data(){
    return{
      email:"",
      password:"",
      reenterpassword:""
    }
  },
};
</script>

<style>
</style>