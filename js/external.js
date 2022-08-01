				var a=1;
				var b=2;
				var c = a + b;

				let car=["Toyota","Bmw","lamborgini","Ferari"];
				console.log(car);

				console.log(car.includes("Bmw"))

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
					var remarks = document.getElementById("remarks").value;
					document.getElementById("getemail").innerHTML="Your email is:"+email 
					+ "<br>Your username is:"+name+"<br>Your password is:"+password
					+"<br>Remarks is:"+remarks;

				console.log(email);
				}

				function getchoices(){
					var date = document.getElementById("date").value;
					var role = document.getElementById("Role").value;
					//var gender = document.getElementById("gender").value;
					//var skill = document.getElementById("skill").value;
					var fav = document.getElementById("prog.language").value;

					document.getElementById("getchoice").innerHTML="Date is:"+
					date+"<br>Role is:"+role+//"<br>gender is:"+gender+"<br>skill are"+skill+
					"<br>Favourite:"+fav;
				}



				function getPersonData(){
					const person={
					name:"samir",
					age:20,
					gender:"Male",
					weight:53
					
				};

				document.getElementById("getPerson").innerHTML="Your name is:"+person.name 
					+ "<br>Your age is:"+person.age+"<br>Your gender is:"+person.gender
					+"<br>weight is:"+person.weight;

				}
