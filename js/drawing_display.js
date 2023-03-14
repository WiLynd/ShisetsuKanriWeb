import * as Common from "./common_function.js"


/**
   * ONCLICK ACTION
*/
function onClickAction() {
	document.getElementById("backBtn").onclick = function () {
      Common.movePage("/drawing_search.html")
   }
}


/**
   * ONLOAD ACTION
*/
function onLoadAction() {
	onClickAction();
}

window.onload = onLoadAction;