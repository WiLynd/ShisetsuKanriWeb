import * as Common from "./common/common_function.js"
import * as Mess from "./common/message.js"
import * as StringCS from "./common/string.js"

/*****  VIEW VARIABLE  *****/
const memoList = [
   ["2020年1月10日", "異音がしたため確認したが目立った…", ""],
   ["2021年11月22日", "ベアリング交換", ""],
];

/**
   * SET DATA ACTION
*/
function setDataDetail() {
   document.getElementById("lastCheck").value = "2022年8月1日";
   document.getElementById("nextCheck").value = "2023年9月1日";
   document.getElementById("controlNumber").value = sessionStorage.getItem("equipmentName");
   document.getElementById("maker").value = "A社";
   document.getElementById("purchaseDate").value = "2019年7月1日";
   document.getElementById("administrator").value = "Nguyen Van Dung";
}

/**
   * GENERATE TABLE
*/
function generateTable(listItem, tableName) {
   const table = document.getElementById(tableName);
   const tbody = document.createElement("tbody");
   table.appendChild(tbody);
   for (let i = 0; i < listItem.length; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < listItem[i].length; j++) {
         const cell = document.createElement("td");
         var button = document.createElement("button");
         if (j != listItem[i].length -1) {
            var span = document.createElement("span");
            span.textContent = listItem[i][j];
            if (j == 0) {
               cell.classList.add("col-2");
            }
            cell.appendChild(span);
            cell.classList.add("text");
            row.appendChild(cell);
         }
         else {
            cell.classList.add("col-1");
            button.id = i;
            button.append("編集");
            button.classList.add("btn");
            button.classList.add("btn-default");
            button.classList.add("detail-btn");
            button.classList.add("text");
            cell.appendChild(button);
            row.appendChild(cell);
         }
      }
      row.id = i;
      tbody.appendChild(row);
   }
}

/**
   * ONCLICK ACTION
*/
function onClickAction() {
   document.getElementById("backBtn").onclick = function () {
      Common.movePage("/equipment_management_list.html")
   }

   document.getElementById("memoBtn").onclick = function () {
      sessionStorage.setItem("memoTitle", "");
      Common.movePage("/memo.html")
   }

   document.getElementById("setsubiShosaiBtn").onclick = async function () {
      Common.setupModal("success", null, Mess.I00003, null, StringCS.OK, null, false);
      document.getElementById("buttonAreaModal").onclick = function () {
         Common.movePage("/equipment_management_list.html");
      }
   }

   $('#memoTable').on('click', 'tbody tr td button', function () {
      sessionStorage.setItem("memoTitle", memoList[this.id][1]);
      Common.movePage("/memo.html");
   })
}

/**
   * ONLOAD ACTION
*/
function onLoadAction() {
   onClickAction();
   setDataDetail();
   generateTable(memoList, "memoTable")
   document.getElementById("title").innerHTML = sessionStorage.getItem("area") + "　＞　" + sessionStorage.getItem("item");
}

window.onload = onLoadAction;