<template>
  <div class="container">
    <h1 >Register Here</h1>
    <br>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="fullname"
              placeholder="Enter Full Name"
            />
          </div>
          <br>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="mobile"
              placeholder="Enter Mobile Number"
            />
          </div>
          <br>
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
          <br>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
            />
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>