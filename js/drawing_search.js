import * as Common from "./common_function.js"
import * as Mess from "./message.js"
import * as StringCS from "./string.js"

/**
   * ONCLICK ACTION
*/
function onClickAction() {
	document.getElementById("ichiranHyojiBtn").onclick = function () {
      var controlNumber = document.getElementById("controlNumber").value;
      var startDay = document.getElementById("kaishi").value;
      var endDay = document.getElementById("shuryo").value;
      var productType = document.getElementById("cbb_productType").value;
      if ((controlNumber != "") && (startDay != "") && (endDay != "") && (productType != "-")) {
         Common.movePage("/drawing_display.html")
      } else {
         Common.setupModal("error", null, Mess.E00007, StringCS.CLOSE, null, null, false);
      }
      
   }

   document.getElementById("backBtn").onclick = function () {
      Common.movePage("/menu.html")
   }
}

/**
   * ONCHANGE ACTION
*/
function onChangeAction() {
	document.getElementById("shuryo").onchange = function () {
      console.log(document.getElementById("shuryo").value)
      document.getElementById("shuryo").value = date;
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