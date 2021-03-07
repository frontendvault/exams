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

const singleColumn = document.querySelector(".single-column");

// Fetch results from  flow_exm_data.json file
async function getData() {
  const res = await fetch("data/flow_exm_data.json");
  const data = await res.json();
  return data;
}

// Show data

async function getExamDataParent() {
  const res = await fetch("data/flow_exm_data.json");
  const examData = await res.json();
  const parentItem = examData[0];

  var headHtml = `<div class="row border-bottom border-light py-2">
                <div class="col-8 ps-0">${parentItem.name}</div>
                <div class="col-4 pe-0">
                  <span class="bg-dark d-block rounded text-center">E</span>
                </div>
              </div>
              <div class="row border-bottom border-light py-2">
                <div class="col-8 ps-0">${parentItem.etyp}</div>
                <div class="col-4 pe-0">
                      <span class="bg-dark d-block rounded text-center"
                      >${parentItem.minmax}</span
                      >
                </div>
              </div>
              <div class="row align-items-center mt-2">
                <div class="col ps-0">
                  <div class="progress border border-light">
                    <div
                      class="progress-bar bg-magenta"
                      role="progressbar"
                      style="width: ${parentItem.perp}%"
                      aria-valuenow="${parentItem.perp}"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="col-auto pe-0">
                  <div class="bg-white rounded text-dark p-1">${parentItem.perp}%</div>
                </div>
              </div>`;

  document.getElementById("PageParent").innerHTML = headHtml;
}

async function getExamData() {
  const examData = await getData();
  examData.forEach((exam) => {
    var PageHtml = `<div class="border-box width100"></div>`;

    exam.cobj.map((dobj, idx) => {
      console.log(dobj);
      PageHtml += `<div class="col-md-3 mb-6">
          <div class="common-box shadow-sm orange-border-box arrow-top">
            <div class="row">
              <div class="col text-uppercase px-3">
                <div class="row border-bottom border-light py-1">
                  <div class="col ps-0">${dobj.name}</div>
                  <div class="col-auto pe-0">
                        <span
                          class="d-block rounded text-center orange py-1 px-2 text-white"
                        >${dobj.typ}</span
                        >
                  </div>
                </div>
                <div class="row border-bottom border-light py-1">
                  <div class="col ps-0">${dobj.etyp}</div>
                  <div class="col-auto pe-0">
                        <span
                          class="bg-dark text-white d-block rounded text-center py-1 px-2"
                        >5</span
                        >
                  </div>
                </div>
                <div class="row align-items-center mt-2">
                  <div class="col ps-0">
                    <div class="progress border border-light">
                      <div
                        class="progress-bar orange"
                        role="progressbar"
                        style="width: ${dobj.perp}%"
                        aria-valuenow="${dobj.perp}"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-auto pe-0">
                    <div class="bg-white rounded text-dark p-1">${dobj.perp}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    });

    document.getElementById("rowData").innerHTML = PageHtml;

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
  });
}

//<div class="border-box width100"></div>
//<div class="col-md-3 mb-6 ">
//</div>

getExamDataParent();
getExamData();

// console.log(getExamData());
