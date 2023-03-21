import * as Common from "./common/common_function.js"
import * as Mess from "./common/message.js"
import * as StringCS from "./common/string.js"

/**
   * SET DATA ACTION
*/
function setDataDetail() {
   document.getElementById("controlNumber").value = sessionStorage.getItem("equipmentName");
   document.getElementById("maker").value = "A社";
   document.getElementById("purchaseDate").value = "2019年7月1日";
   document.getElementById("administrator").value = "Nguyen Van Dung";
   document.getElementById("title").value = sessionStorage.getItem("memoTitle");
}
/**
   * ONCLICK ACTION
*/
function onClickAction() {
   document.getElementById("backBtn").onclick = function () {
      Common.movePage("/equipment_detail.html")
   }

   document.getElementById("memoTsuikaBtn").onclick = function () {
      Common.setupModal("success", null, Mess.I00003, null, StringCS.OK, null, false);
      document.getElementById("buttonAreaModal").onclick = function () {
          Common.movePage("/equipment_detail.html");
      }
   }
}

/**
   * ONLOAD ACTION
*/
function onLoadAction() {
   onClickAction();
   setDataDetail();
   console.log(sessionStorage.getItem("memoTitle"))
}

window.onload = onLoadAction;