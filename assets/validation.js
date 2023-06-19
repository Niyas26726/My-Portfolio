
      function validateForm() {
        var name = document.getElementById("name").value;
        var mobilenumber = document.getElementById("mobilenumber").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;        
        if (name == "") {
          Swal.fire({
            title: "Error", 
            html: "Your Name should not be empty",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        if (/\d/.test(name)){
          Swal.fire({
            title: "Error", 
            html: "Your Name should only contain letters",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (mobilenumber == "") {
          Swal.fire({
            title: "Error", 
            html: "Your Mobile Number should not be empty",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        if (isNaN(mobilenumber)){
          Swal.fire({
            title: "Error", 
            html: "Your Mobile Number should only contain numbers",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (mobilenumber.length<10){
          Swal.fire({
            title: "Error", 
            html: "Your Mobile Number should have 10 digits",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (mobilenumber.length>10){
          Swal.fire({
            title: "Error", 
            html: "Your Mobile Number should only have 10 digits",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
          Swal.fire({
            title: "Error", 
            html: "Email address must be a vallid Email address",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        if (subject == "") {
          Swal.fire({
            title: "Error", 
            html: "Subjest should not be empty",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }
  
        if (message == "") {
          Swal.fire({
            title: "Error", 
            html: "Message should not be empty",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }
        
        return Swal.fire({
          title: "Success", 
          html: "Submited Sucessfully",  
          confirmButtonText: "Ok",
        });
      }
      