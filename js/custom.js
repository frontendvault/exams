// $(".panel-collapse").on("show.bs.collapse", function () {
//   $(this).siblings(".panel-heading").addClass("active");
// });

// $(".panel-collapse").on("hide.bs.collapse", function () {
//   $(this).siblings(".panel-heading").removeClass("active");
// });

// document.getElementById("singleExam").addEventListener("click", loadData);

// xhr, open(get method the url the bolean), onload(anony func if status then console log) and send

function logDataFlowExam() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data/flow_exm_data.txt", true);
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };
  xhr.send();
}
logDataFlowExam();
