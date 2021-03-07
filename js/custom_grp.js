// document.getElementById("singleExam").addEventListener("click", loadData);

// xhr, open(get method the url the bolean), onload(anony func if status then console log) and send

// function logDataFlowExam() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "data/flow_exm_data.txt", true);
//   xhr.onload = function () {
//     if (this.status === 200) {
//       console.log(this.responseText);
//     }
//   };
//   xhr.send();
// }
// logDataFlowExam();

const singleColumn = document.querySelector(".main-exam-data");

// console.log(singleColumn);


// Fetch results from  flow_exm_data.json file
async function getDataGRP() {
  const res = await fetch("data/flow_2grp_data.json");
  const data = await res.json();
  return data;
}

// Show data

async function getListExamData() {
  const examData = await getDataGRP();
  examData.forEach((exams) => {


    exams.cobj.forEach((exm) => {
      console.log(exm);
    });

    //   const examEl = document.createElement("div");
    //   examEl.classList.add("col-md-3");
    //   examEl.innerHTML = `<div class="common-box shadow-sm orange-border-box arrow-top">
    //   <div class="row">
    //     <div class="col text-uppercase px-3">
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0"> ${exam.name}</div>
    //         <div class="col-auto pe-0">
    //           <span
    //             class="d-block rounded text-center orange py-1 px-2 text-white"
    //             > ${exam.typ} </span
    //           >
    //         </div>
    //       </div>
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0"> ${exam.etyp} </div>
    //         <div class="col-auto pe-0">
    //           <span
    //             class="bg-dark text-white d-block rounded text-center py-1 px-2"
    //             >5</span
    //           >
    //         </div>
    //       </div>
    //       <div class="row align-items-center mt-2">
    //         <div class="col ps-0">
    //           <div class="progress border border-light">
    //             <div
    //               class="progress-bar orange"
    //               role="progressbar"
    //               style="width: 40%"
    //               aria-valuenow="40"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //           </div>
    //         </div>
    //         <div class="col-auto pe-0">
    //           <div class="bg-white rounded text-dark p-1">40%</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>`;
    // singleColumn.appendChild(examEl);
    // console.log(examEl);
  });
}

//<div class="border-box width100"></div>
//<div class="col-md-3 mb-6 ">
//</div>
getListExamData();

// console.log(getExamData());
