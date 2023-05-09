const singleData = JSON.parse(localStorage.getItem("Single_Data"));
const arcInfo = JSON.parse(localStorage.getItem("personArchitect"));
console.log(arcInfo);

let oneArchitect = arcInfo.find(function (event) {
  let arcEmail = event["arcEmail"];
  if (singleData == arcEmail) {
    return true;
  }
});

const url = document
  .getElementById("userImage")
  .setAttribute("src", oneArchitect["arcUrl"]);

const name = (document.getElementById("userName").innerHTML =
  oneArchitect["arcName"]);

const gender = (document.getElementById("userGender").innerHTML =
  oneArchitect["arcGender"]);

const phoneNumber = (document.getElementById("userPhoneNumber").innerHTML =
  oneArchitect["arcPhoneNumber"]);

const address = (document.getElementById("userAddress").innerHTML =
  oneArchitect["arcAddress"]);

const coverphoto = document
  .getElementById("userCoverPhoto")
  .setAttribute("src", oneArchitect["arcCoverPhoto"]);

const education = (document.getElementById("userEducation").innerHTML =
  oneArchitect["arcEducation"]);

const experience = (document.getElementById("userExperience").innerHTML =
  oneArchitect["arcExperience"]);

const email = (document.getElementById("userEmail").innerHTML =
  oneArchitect["arcEmail"]);

// const password = document.getElementById("userPassword").innerHTML = oneArchitect["arcPassword"];
const graduatedocument = document
  .getElementById("userDocument")
  .setAttribute("src", oneArchitect["arcDocument"]);

const natacertificate = document
  .getElementById("userNataCertificate")
  .setAttribute("src", oneArchitect["arcNataCertificate"]);

// const modelDesign = document.getElementById("userModelDesign").setAttribute("src", oneArchitect["arcModelDesign"]);

let deleteUser = document.getElementById("deletebtn");
deleteUser.addEventListener("click", function (event) {
  event.preventDefault();

  let identify = arcInfo.indexOf(oneArchitect);
  let message = confirm("Are you sure you want to delete this account");

  if (message !== true) {
    return;
  } else {
    arcInfo.splice(identify, 1);
    localStorage.setItem("personArchitect", JSON.stringify(arcInfo));
    window.location.href = "../index.html";
  }
});

let oneArchitectdesign = [];

let deslist = JSON.parse(localStorage.getItem("personDesign"));

for (let i = 0; i < deslist.length; i++) {
  if (singleData === deslist[i]["designemail"]) {
    oneArchitectdesign.push(deslist[i]);
  }
}

for (let i = 0; i < oneArchitectdesign.length; i++) {
  let card;
  let img;
  let info_div;
  let design_name;
  let square_feet;
  let para;
  let details;
  let editdes;
  let deletedes;

  card = document.createElement("div");
  card.setAttribute("class", "card");
  document.querySelector("#model-designs").append(card);
  console.log(card);

  img = document.createElement("img");
  img.setAttribute("alt", "inteior design");
  img.setAttribute("src", oneArchitectdesign[i]["designimg"]);
  card.append(img);

  info_div = document.createElement("div");
  info_div.setAttribute("class", "info");
  card.append(info_div);

  design_name = document.createElement("h3");
  design_name.innerText = oneArchitectdesign[i]["designdname"];
  info_div.append(design_name);

  square_feet = document.createElement("p");
  square_feet.innerText = oneArchitectdesign[i]["designsquarefeet"];
  info_div.append(square_feet);

  para = document.createElement("p");
  para.innerText = oneArchitectdesign[i]["designpara"];
  info_div.append(para);

  details = document.createElement("a");
  details.setAttribute("class", "btn");
  details.innerText = " More details";
  details.setAttribute(
    "href",
    "./user_design_detail.html?id=" + oneArchitectdesign[i].designid
  );
  info_div.append(details);

  editdes = document.createElement("a");
  editdes.setAttribute("class", "editdes");
  editdes.setAttribute("id", oneArchitectdesign[i].designid);
  editdes.innerText = "Edit";
  info_div.append(editdes);

  deletedes = document.createElement("a");
  deletedes.setAttribute("class", "deletedes");
  deletedes.setAttribute("id", "deletedes");
  deletedes.setAttribute(
    "onclick",
    "deletedesign(" + oneArchitectdesign[i].designid + ")"
  );
  deletedes.innerText = "Delete";
  info_div.append(deletedes);
}

let editdes = document.querySelectorAll("a.editdes");
editdes.forEach(function (findId) {
  findId.addEventListener("click", function () {
    let designCard = this.closest(".card");
    const Id = designCard.querySelector(".editdes").getAttribute("id");
    console.log(Id);
    localStorage.setItem("designID", JSON.stringify(Id));
    window.location.href = "./own_architect_design_edit_form.html";
  });
});

function deletedesign(id) {
  let oneDesign = deslist.find((e) => {
    if (e["designid"] == id) {
      return true;
    }
  });
  let index = deslist.indexOf(oneDesign);
  let check = confirm("are you want to delete");
  console.log(index);
  if (check === true) {
    deslist.splice(index, 1);
    localStorage.setItem("personDesign", JSON.stringify(deslist));
    window.location.href = "./own_architect_profile.html";
    alert("success");
  }
}
