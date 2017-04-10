function login() {
  if($("#email").val() === "" || $("#password").val() === ""){
    swal("Warning", "Masukkan Email dan Password dengan Benar")
  }else{
      $.ajax({
        url: 'http://localhost:3000/users/login',
        type: 'POST',
        data: {
          email: $("#email").val(),
          password: $("#password").val(),
        },
        success: function(result) {
          if(result.status){
            console.log(result.token);
            localStorage.setItem("token",result.token)
            window.location.replace("http://localhost:8080/home.html")
          }else{
            swal("Login Failed", "Silahkan Ulangi")
          }
        }
      })
  }
}
