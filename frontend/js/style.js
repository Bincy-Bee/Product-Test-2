import { nav } from "../components/nav.js";

document.getElementById("navbar").innerHTML= nav();

document.getElementById("profile").style.display="none";
document.getElementById("logout").style.display="none";
const userName = document.cookie.split(",")[1].split("=")[1]
const cookie = document.cookie.split(",")[0].split("=")[0];

if(cookie){
    document.getElementById("signup").style.display="none";
    document.getElementById("profile").style.display="block";
    document.getElementById("login").style.display="none";
    document.getElementById("logout").style.display="block";
    document.getElementById("profile").innerHTML=userName;
}
else{
    document.getElementById("profile").style.display="none";
    document.getElementById("profile").innerHTML="";
}

    const delCookie = (name)=>{
        document.cookie= name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

document.getElementById("logout").addEventListener("click",()=>delCookie(cookie));
