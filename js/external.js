				var a=1;
				var b=2;
				var c = a + b;
				

				function getDate(){
					var date = new Date();
					var par = document.getElementById("current_date");
					par.innerHTML = date;
					par.style.color="green";
				}

				function getEmail(){
					var email = document.getElementById("email").value;
					var name = document.getElementById("Username").value;
					var password = document.getElementById("password").value;
					document.getElementById("getemail").innerHTML="Your email is:"+email 
					+ "<br>Your username is:"+name+"<br>Your password is:"+password;




					
					console.log(email);
				}