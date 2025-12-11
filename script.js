function mover(myid){
	var str = "add_" + myid;
	var imgstr = str + "_img";
	var myval = document.getElementById(myid);
	var myadd = document.getElementById(str);
	var myaddimg = document.getElementById("add_img");
	myval.style.backgroundColor = "yellow";
	myadd.hidden = false;
	myaddimg.hidden = false;
	hary = {zero:0, one:1, two:2, three:3, four:4, five:5};
	myaddimg.src = hary[myid] + ".png";
	const ary = ["zero", "one", "two", "three", "four", "five"];
	for(var i = 0; i < 6; i++){
		if(myid !== ary[i]){
			var otherstr = "add_" + ary[i];
			var otherval = document.getElementById(ary[i]);
			var otheradd = document.getElementById(otherstr);
			otherval.style.backgroundColor = "greenyellow";
			otheradd.hidden = true;
		}
	}
}

function submover(img){
	var myimg = document.getElementById("add_img");
	myimg.src = img + ".png";
}
