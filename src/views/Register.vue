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
          <!--Input Field for Full Name-->
          <div class="form-group">
            <input type="text"
            class="form-control"
            id="fullname"
            placeholder="Enter Full Name" />
          </div>
          <br />
          <!--Input Field for Mobile Number-->
          <div class="form-group">
            <input type="text"
            class="form-control"
            id="mobile" 
            placeholder="Enter Mobile Number" />
          </div>
          <br />
          <!--Input Field for Email Id-->
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email Id"
            />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <br />
          <!--Input Field for Password-->
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
            />
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
export default {};
</script>

<style>
</style>