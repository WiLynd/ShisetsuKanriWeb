import * as Common from "./common/common_function.js"
import * as Mess from "./common/message.js"
import * as StringCS from "./common/string.js"

/**
   * VARIABLE
 */
var dateStart = null;
var dateEnd = null;

/**
   * ONCLICK ACTION
*/
function onClickAction() {
   document.getElementById("logoutOption").onclick = function () {
      Common.movePage('login.html')
   }

   document.getElementById("zumenKensakuBtn").onclick = function () {
      Common.movePage("/drawing_display.html")
   }

   document.getElementById("backBtn").onclick = function () {
      Common.movePage("/menu.html")
   }
}

/**
   * ONCHANGE ACTION
*/
function onChangeAction() {
   document.getElementById("kaishi").onchange = function () {
      if (document.getElementById("shuryo").value != "") {
         checkValidDay();
      }
   }

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
    * SETUP DATEPICKER
*/
function setupDatePicker() {
   $(document).ready(function () {
      $(function () {
         $.datepicker.regional['jp'] = {
            closeText: "閉じる",
            prevText: "前",
            nextText: "次",
            currentText: "現在",
            monthNames: ["- 1月", "- 2月", "- 3月", "- 4月", "- 5月", "- 6月",
               "- 7月", "- 8月", "- 9月", "- 10月", "- 11月", "- 12月"
            ],
            monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月",
               "7月", "8月", "9月", "10月", "11月", "12月"
            ],
            dayNames: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            dateFormat: "yy/mm/dd",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: true,
         };
         $.datepicker.setDefaults($.datepicker.regional['jp']);

         $('#kaishi').datepicker();
         $('#shuryo').datepicker();
         Common.setupDatePicker("kaishi");
         Common.setupDatePicker("shuryo");
      });

      $("#kaishi").on("change", function () {
         var _dateStart = $(this).val();
         var _dateEnd = $("#shuryo").val();
         if (_dateEnd != '') {
            if (_dateStart > _dateEnd) {
               Common.setupModal("info", null, Mess.I00008, null, StringCS.OK, null, false);
               document.getElementById("kaishi").value = dateStart;
            }
         }

      });

      $("#kaishi").on("focus", function () {
         dateStart = $(this).val();
      });


      $("#shuryo").on("change", function () {
         var _dateEnd = $(this).val();
         var _dateStart = $("#kaishi").val();
         if (_dateStart > _dateEnd) {
            Common.setupModal("info", null, Mess.I00008, null, StringCS.OK, null, false);
            document.getElementById("shuryo").value = dateEnd;
         }
      });

      $("#shuryo").on("focus", function () {
         dateEnd = $(this).val();
      });
   });
}

/**
   * ONLOAD ACTION
*/
function onLoadAction() {
   onClickAction();
   onChangeAction();
   setupDatePicker();
}

window.onload = onLoadAction;