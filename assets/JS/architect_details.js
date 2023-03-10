// const singleData = JSON.parse(localStorage.getItem("Single_Data"));
// const arcInfo = JSON.parse(localStorage.getItem("personArchitect"));
// console.log(arcInfo);

// const urlSearch = window.location.search;
// const url_params = new URLSearchParams(urlSearch);
// const get_id = url_params.get("arcId");
// console.log(get_id);

// let oneArchitect = arcInfo.find(function (event) {
//   let arcEmail = event["arcEmail"];
//   if (singleData == arcEmail) {
//     return true;
//   }
// });

// console.log(oneArchitect);

// const url = document
//   .getElementById("userImage")
//   .setAttribute("src", oneArchitect["arcUrl"]);
// const name = (document.getElementById("userName").innerHTML =
//   oneArchitect["arcName"]);
// const gender = (document.getElementById("userGender").innerHTML =
//   oneArchitect["arcGender"]);
// const phoneNumber = (document.getElementById("userPhoneNumber").innerHTML =
//   oneArchitect["arcPhoneNumber"]);
// const address = (document.getElementById("userAddress").innerHTML =
//   oneArchitect["arcAddress"]);
// const education = (document.getElementById("userEducation").innerHTML =
//   oneArchitect["arcEducation"]);
// const experience = (document.getElementById("userExperience").innerHTML =
//   oneArchitect["arcExperience"]);
// const email = (document.getElementById("userEmail").innerHTML =
//   oneArchitect["arcEmail"]);
// const password = (document.getElementById("userPassword").innerHTML =
//   oneArchitect["arcPassword"]);
// const graduatedocument = document
//   .getElementById("userDocument")
//   .setAttribute("src", oneArchitect["arcDocument"]);
// const modelDesign = document
//   .getElementById("userModelDesign")
//   .setAttribute("src", oneArchitect["arcModelDesign"]);

// let deleteUser = document.getElementById("deletebtn");
// deleteUser.addEventListener("click", function (event) {
//   event.preventDefault();

//   let identify = arcInfo.indexOf(oneArchitect);
//   let message = confirm("Are you sure you want to delete this account");

//   if (message !== true) {
//     return;
//   } else {
//     arcInfo.splice(identify, 1);
//     localStorage.setItem("personArchitect", JSON.stringify(arcInfo));
//     window.location.href = "../index home.html";
//   }
// });

// // url parames

// let pro_obj = arclist.find(function (select_architect) {
//   let check_id = select_architect["arcId"];
//   if (check_id == get_id) {
//     return true;
//   }
// });
// console.log(pro_obj);
