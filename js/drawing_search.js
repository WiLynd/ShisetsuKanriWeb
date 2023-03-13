import * as Common from "./common_function.js"

/**
   * ONCLICK ACTION
*/
function onclickAction() {
	document.getElementById("ichiranHyojiBtn").onclick = function () {
        Common.movePage("/drawing_display.html")
    }
}

/**
   * ONLOAD ACTION
*/
function onLoadAction() {
	onclickAction();
}

window.onload = onLoadAction;