import * as Common from "./common_function.js"

/**
   * SET DATA ACTION
*/
function setDataDetail() {
   document.getElementById("lastCheck").value = "2022年8月1日";
   document.getElementById("nextCheck").value = "2023年9月1日";
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
      Common.movePage("/equipment_management_list.html")
   }

   document.getElementById("memoBtn").onclick = function () {
      Common.movePage("/memo.html")
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