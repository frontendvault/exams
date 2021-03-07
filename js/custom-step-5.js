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

// const singleColumn = document.querySelector(".single-column");

// Fetch results from  flow_exm_data.json file
async function getData() {
  const res = await fetch("data/flow_exm_data.json");
  const data = await res.json();
  return data;
}

// Show data

async function getExamDataStep5() {
  const res = await fetch("data/flow_2grp_data.json");
  const examData = await res.json();
  const parentItem = examData[0];

  console.log(parentItem);

  var headHtml = `<div class="row padding-bottom">
    <div class="col-md-4 mx-auto">
      <h5 class="text-uppercase text-center mb-4 font-weight-bold">
        group Exam
      </h5>

      <div class="common-box shadow-sm bg-white arrow-bottom border border-primary">
        <div class="row">
          <div class="col text-uppercase px-3">
            <div class="row border-bottom border-light py-2">
              <div class="col-8 ps-0">${parentItem.name}</div>
              <div class="col-4 pe-0">
                    <span class="bg-dark d-block rounded text-center text-white"
                    >E</span
                    >
              </div>
            </div>
            <div class="row border-bottom border-light py-2">
              <div class="col-8 ps-0">${parentItem.etyp}</div>
              <div class="col-4 pe-0">
                    <span class="bg-dark d-block rounded text-center text-white"
                    >${parentItem.minmax}</span
                    >
              </div>
            </div>
            <div class="row border-bottom border-light py-2">
              <div class="col-8 ps-0">${parentItem.fval}</div>
              <div class="col-4 pe-0">
                    <span class="bg-dark d-block rounded text-center text-white"
                    >20</span
                    >
              </div>
            </div>
            <div class="row align-items-center mt-2">
              <div class="col ps-0">
                <div class="progress border border-light">
                  <div
                    class="progress-bar bg-primary"
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
            </div>
          </div>
          <div class="col-auto d-flex align-items-center bg-white rounded ms-1 px-1">
            <?xml version="1.0" ?>
            <svg
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
            >
              <path
                d="M10 2C7.23858 2 5 4.23858 5 7V9C3.89543 9 3 9.89543 3 11V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V11C17 9.89543 16.1046 9 15 9H7V7C7 5.34315 8.34315 4 10 4C11.3940 4 12.5725 4.95512 12.9055 6.24926C13.0432 6.78411 13.5884 7.1061 14.1232 6.96844C14.4081 6.83078 14.9801 6.28559 14.8424 5.75074C14.2874 3.59442 12.3312 2 10 2Z"
                fill="#4A5568"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row padding-top justify-content-center">
    <div class="border-box width75"></div>`;

  // console.log(parentItem);
  parentItem.cobj.map((dObj, idx) => {
    // console.log(dObj.cobj);
    headHtml += `
    <div class="col-md-4 mb-6">
      <div class="common-box shadow-sm border-magenta arrow-top">
        <div class="row">
          <div class="col text-uppercase px-3">
            <div class="row border-bottom border-light py-1">
              <div class="col ps-0">${dObj.name}</div>
              <div class="col-auto pe-0">
                <span class="d-block rounded text-center bg-magenta py-1 px-2 text-white">${dObj.typ}</span>
              </div>
            </div>
            <div class="row border-bottom border-light py-1">
              <div class="col ps-0">${dObj.etyp}</div>
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
                    class="progress-bar bg-magenta"
                    role="progressbar"
                    style="width: ${dObj.perp}%"
                    aria-valuenow="${dObj.perp}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="col-auto pe-0">
                <div class="bg-white rounded text-dark p-1 shadow-sm">
                  ${dObj.perp}%
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-auto d-flex align-items-center bg-white rounded ms-1 px-1 red-text"
          >
            <?xml version="1.0" ?>
            <svg
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
            >
              <path
                d="M10 2C7.23858 2 5 4.23858 5 7V9C3.89543 9 3 9.89543 3 11V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V11C17 9.89543 16.1046 9 15 9H7V7C7 5.34315 8.34315 4 10 4C11.3940 4 12.5725 4.95512 12.9055 6.24926C13.0432 6.78411 13.5884 7.1061 14.1232 6.96844C14.4081 6.83078 14.9801 6.28559 14.8424 5.75074C14.2874 3.59442 12.3312 2 10 2Z"
                fill="#4A5568"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="row border-left pt-5 ms-4">`;

    console.log("dObj.cobj");
    console.log(dObj.cobj);

    // let inObj = dObj.cobj;
    let inObj = dObj.cobj[idx].cobj;
    // console.log(inObj);

    inObj.map((inDobj, indx) => {
      // console.log(inObj);
      headHtml += `<div class="col-10 offset-2 common-box shadow-sm orange-border-box arrow-left mb-4">
          <div class="row">
            <div class="col text-uppercase px-3">
              <div class="row border-bottom border-light py-1">
                <div class="col ps-0">${inDobj.name}</div>
                <div class="col-auto pe-0">
                      <span
                        class="d-block rounded text-center orange py-1 px-2 text-white"
                      >${inDobj.typ}</span
                      >
                </div>
              </div>
              <div class="row border-bottom border-light py-1">
                <div class="col ps-0">${inDobj.etyp}</div>
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
                      style="width: ${inDobj.perp}%"
                      aria-valuenow="${inDobj.perp}"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="col-auto pe-0">
                  <div class="bg-white rounded text-dark p-1 shadow-sm">
                    ${inDobj.perp}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      if (inDobj.hasOwnProperty("cobj")) {
        inDobj.cobj.map((objIn1, in1) => {
          headHtml += `<div class="col-8 offset-3 common-box shadow-sm border-yellow mb-4 child-border-top">
     <div class="row">
       <div class="col text-uppercase px-3">
         <div class="row border-bottom border-light py-1">
           <div class="col ps-0">${objIn1.name}</div>
           <div class="col-auto pe-0">
                 <span
                   class="d-block rounded text-center bg-yellow py-1 px-2 text-white"
                 >${objIn1.typ}</span
                 >
           </div>
         </div>
         <div class="row border-bottom border-light py-1">
           <div class="col ps-0">${objIn1.etyp}</div>
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
                 class="progress-bar bg-yellow"
                 role="progressbar"
                 style="width: ${objIn1.perp}%"
                 aria-valuenow="${objIn1.perp}"
                 aria-valuemin="0"
                 aria-valuemax="100"
               ></div>
             </div>
           </div>
           <div class="col-auto pe-0">
             <div class="bg-white rounded text-dark p-1 shadow-sm">
               ${objIn1.perp}%
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>`;
        });
      }
    });

    // <div class="col-8 offset-3 common-box shadow-sm border-yellow mb-4 child-border-top">
    //   <div class="row">
    //     <div class="col text-uppercase px-3">
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Tamil-1</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="d-block rounded text-center bg-yellow py-1 px-2 text-white"
    //               >C</span
    //               >
    //         </div>
    //       </div>
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Mark Only</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="bg-dark text-white d-block rounded text-center py-1 px-2"
    //               >5</span
    //               >
    //         </div>
    //       </div>
    //       <div class="row align-items-center mt-2">
    //         <div class="col ps-0">
    //           <div class="progress border border-light">
    //             <div
    //               class="progress-bar bg-yellow"
    //               role="progressbar"
    //               style="width: 40%"
    //               aria-valuenow="40"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //           </div>
    //         </div>
    //         <div class="col-auto pe-0">
    //           <div class="bg-white rounded text-dark p-1 shadow-sm">
    //             40%
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div class="col-8 offset-3 common-box shadow-sm border-yellow mb-4 child-border-top">
    //   <div class="row">
    //     <div class="col text-uppercase px-3">
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Tamil-ii</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="d-block rounded text-center bg-yellow py-1 px-2 text-white"
    //               >C</span
    //               >
    //         </div>
    //       </div>
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Mark Only</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="bg-dark text-white d-block rounded text-center py-1 px-2"
    //               >5</span
    //               >
    //         </div>
    //       </div>
    //       <div class="row align-items-center mt-2">
    //         <div class="col ps-0">
    //           <div class="progress border border-light">
    //             <div
    //               class="progress-bar bg-yellow"
    //               role="progressbar"
    //               style="width: 40%"
    //               aria-valuenow="40"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //           </div>
    //         </div>
    //         <div class="col-auto pe-0">
    //           <div class="bg-white rounded text-dark p-1 shadow-sm">
    //             40%
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div class="col-10 offset-2 common-box shadow-sm orange-border-box arrow-left mb-4">
    //   <div class="row">
    //     <div class="col text-uppercase px-3">
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">English</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="d-block rounded text-center orange py-1 px-2 text-white"
    //               >S</span
    //               >
    //         </div>
    //       </div>
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Mark Only</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="bg-dark text-white d-block rounded text-center py-1 px-2"
    //               >5</span
    //               >
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
    //           <div class="bg-white rounded text-dark p-1 shadow-sm">
    //             40%
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div class="col-10 offset-2 common-box shadow-sm orange-border-box arrow-left mb-4">
    //   <div class="row">
    //     <div class="col text-uppercase px-3">
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Maths</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="d-block rounded text-center orange py-1 px-2 text-white"
    //               >S</span
    //               >
    //         </div>
    //       </div>
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Mark Only</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="bg-dark text-white d-block rounded text-center py-1 px-2"
    //               >5</span
    //               >
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
    //           <div class="bg-white rounded text-dark p-1 shadow-sm">
    //             40%
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div class="col-10 offset-2 common-box shadow-sm orange-border-box arrow-left mb-4">
    //   <div class="row">
    //     <div class="col text-uppercase px-3">
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Maths</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="d-block rounded text-center orange py-1 px-2 text-white"
    //               >S</span
    //               >
    //         </div>
    //       </div>
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Mark Only</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="bg-dark text-white d-block rounded text-center py-1 px-2"
    //               >5</span
    //               >
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
    //           <div class="bg-white rounded text-dark p-1 shadow-sm">
    //             40%
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div class="col-10 offset-2 common-box shadow-sm orange-border-box arrow-left mb-4">
    //   <div class="row">
    //     <div class="col text-uppercase px-3">
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Maths</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="d-block rounded text-center orange py-1 px-2 text-white"
    //               >S</span
    //               >
    //         </div>
    //       </div>
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Mark Only</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="bg-dark text-white d-block rounded text-center py-1 px-2"
    //               >5</span
    //               >
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
    //           <div class="bg-white rounded text-dark p-1 shadow-sm">
    //             40%
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div class="col-10 offset-2 common-box shadow-sm orange-border-box arrow-left mb-4">
    //   <div class="row">
    //     <div class="col text-uppercase px-3">
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Maths</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="d-block rounded text-center orange py-1 px-2 text-white"
    //               >S</span
    //               >
    //         </div>
    //       </div>
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Mark Only</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="bg-dark text-white d-block rounded text-center py-1 px-2"
    //               >5</span
    //               >
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
    //           <div class="bg-white rounded text-dark p-1 shadow-sm">
    //             40%
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div class="col-10 offset-2 common-box shadow-sm orange-border-box arrow-left mb-4">
    //   <div class="row">
    //     <div class="col text-uppercase px-3">
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Maths</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="d-block rounded text-center orange py-1 px-2 text-white"
    //               >S</span
    //               >
    //         </div>
    //       </div>
    //       <div class="row border-bottom border-light py-1">
    //         <div class="col ps-0">Mark Only</div>
    //         <div class="col-auto pe-0">
    //               <span
    //                 class="bg-dark text-white d-block rounded text-center py-1 px-2"
    //               >5</span
    //               >
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
    //           <div class="bg-white rounded text-dark p-1 shadow-sm">
    //             40%
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    headHtml += `</div>
    </div>`;
  });
  headHtml += "</div>";

  document.getElementById("mainArea").innerHTML = headHtml;
}

getExamDataStep5();

// console.log(getExamData());
