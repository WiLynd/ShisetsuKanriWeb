import * as Common from "./common_function.js"
import * as Mess from "./message.js"
import * as StringCS from "./string.js"

/**
   * ONCLICK ACTION
*/
function onClickAction() {
	document.getElementById("ichiranHyojiBtn").onclick = function () {
      Common.movePage("/drawing_display.html")
   }
}

/**
   * ONCHANGE ACTION
*/
function onChangeAction() {
	document.getElementById("shuryo").onchange = function () {
      checkValidDay();
   }
}

/**
   * CHECK VALID DATE
 */
function checkValidDay() {
   var startDay = document.getElementById("kaishi").value;
   var endDay = document.getElementById("shuryo").value;
   if (endDay < startDay) {
      Common.setupModal("error", null, Mess.I00008, StringCS.CLOSE, null, null, false);
   }
}
/**
   * ONLOAD ACTION
*/
function onLoadAction() {
	onClickAction();
   onChangeAction();
}

window.onload = onLoadAction;