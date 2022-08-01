function matchpass(){
	var fi=document.getElementById("password").value;
	var sec=document.getElementById("password1").value;

	if (fi=sec) {
		alert("password is correct");
		return true;
	}else{
		alert("Password must be the same");
		return false;
	}
}