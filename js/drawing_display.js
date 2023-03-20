import * as Common from "./common/common_function.js"

/*****  VIEW VARIABLE  *****/
const drawingList = [
   [1, "23-01110001", "送風機ファン01 (〇〇株式会社)", ""],
   [2, "23-01110002", "送風機ファン02 (〇〇株式会社)", ""],
   [3, "23-01110003", "送風機ファン03 (〇〇株式会社)", ""],
   [4, "23-01110004", "送風機ファン04 (〇〇株式会社)", ""],
   [5, "23-01110005", "送風機ファン05 (〇〇株式会社)", ""],
   [6, "23-01110006", "送風機ファン06 (〇〇株式会社)", ""],
   [7, "23-01110007", "送風機ファン07 (〇〇株式会社)", ""],
   [8, "23-01110008", "送風機ファン08 (〇〇株式会社)", ""],
   [9, "23-01110009", "送風機ファン09 (〇〇株式会社)", ""],
   [10, "23-01110010", "送風機ファン10 (〇〇株式会社)", ""],
];


/**
   * GENERATE TABLE
*/
function generateTable(listItem, tableName) {
	const table = document.getElementById(tableName);
	
    for (let i = 0; i < listItem.length; i++) {
      const row = document.createElement("tr");
		const cell = document.createElement("td");
		var span = document.createElement("span");
      span.id = "span_" + i;
		span.classList.add("text");
		span.textContent = "";
		cell.appendChild(span);
		row.appendChild(cell);
		table.appendChild(row);
    }
}

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
   console.log(drawingList)
}

window.onload = onLoadAction;