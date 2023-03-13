import * as Mess from "./message.js"
import * as StringCS from "./string.js"
import * as Common from "./common_function.js"

/*****  VIEW VARIABLE  *****/
/* modal */
const modal = document.getElementById("myModal");

/**
   * LOGIN ACTION
*/
function login() {
    let password = document.getElementById("pass"); 
    if (password.value === "") {
        Common.setupModal("error", null, Mess.I00005, StringCS.CLOSE, null, null, false);
    } else {
        Common.setupModal("load", null, Mess.I00001, null, null, null, false);
        checkUser(password.value);
    }
}

/**
   * SET FOCUS INPUT
*/
function setFocusInput() {
    let user = document.getElementById("user"); 
    let password = document.getElementById("pass"); 
    user.onfocus = function () {
        if (user.classList.contains("warning")) {
            user.classList.remove("warning");
        }
    }
    password.onfocus = function () {
        if (password.classList.contains("warning")) {
            password.classList.remove("warning");
        }
    }
}

/**
   * CHECK USER ACCOUNT
   * @param username     [INT]
   * @param password     [INT]
*/
function checkUser(password) {
    if (password == 1) {
        Common.movePage("/menu.html")
    }
    else {
        Common.setupModal("error", null, Mess.E00003, null, StringCS.OK, null, false);
        document.getElementById("pass").value = "";
    }
}

/**
   * ONCLICK ACTION
*/
function onclickAction() {
	document.getElementById("loginButton").onclick = login;
}

/**
   * ONLOAD ACTION
*/
function onLoadAction() {
	onclickAction();
    setFocusInput();
}

window.onload = onLoadAction;