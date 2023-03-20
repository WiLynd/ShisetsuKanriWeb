import * as Common from "./common/common_function.js"

/**
   * SET DATA ACTION
*/
function setDataDetail() {
   document.getElementById("controlNumber").value = "SP1-01";
   document.getElementById("maker").value = "A社";
   document.getElementById("purchaseDate").value = "2019年7月1日";
   document.getElementById("administrator").value = "Nguyen Van Dung";
}

/**
   * ONCLICK ACTION
*/
function onClickAction() {
   document.getElementById("backBtn").onclick = function () {
      Common.movePage("/equipment_detail.html")
   }

   document.getElementById("memoTsuikaBtn").onclick = function () {
      Common.movePage("/menu.html")
   }
}

/**
   * ONLOAD ACTION
*/
function onLoadAction() {
   onClickAction();
   setDataDetail();
}

window.onload = onLoadAction;