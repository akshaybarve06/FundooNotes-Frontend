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
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <br />
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>