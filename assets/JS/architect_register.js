function arcSignUp() {
  let check = false;
  const applyFrom = document.getElementById("architectForm1");
  console.log(applyFrom);

  applyFrom.addEventListener("submit", function (event) {
    event.preventDefault();

    let architectNew = [];
    console.log(architectNew);

    if (localStorage.getItem("personArchitect") != null) {
      architectNew = JSON.parse(localStorage.getItem("personArchitect"));
    }

    const getUrl = document.getElementById("image").value.trim();
    const getName = document.getElementById("name").value.trim();
    const getGender = document.getElementById("gender").value.trim();
    const getPhoneNumber = document.getElementById("phonenumber").value.trim();
    const getAddress = document.getElementById("address").value.trim();
    const getCoverPhoto = document.getElementById("coverphoto").value.trim();
    const getEducation = document.getElementById("education").value.trim();
    const getExperience = document.getElementById("experience").value.trim();
    const getEmail = document.getElementById("email").value.trim();
    const getPassword = document.getElementById("password").value.trim();
    const getDocument = document.getElementById("document").value.trim();
    const getNataCertificate = document
      .getElementById("natacertificate")
      .value.trim();
    const getId = Date.now();

    let architectData = {
      arcId: getId,
      arcUrl: getUrl,
      arcName: getName,
      arcGender: getGender,
      arcPhoneNumber: getPhoneNumber,
      arcAddress: getAddress,
      arcCoverPhoto: getCoverPhoto,
      arcEducation: getEducation,
      arcExperience: getExperience,
      arcEmail: getEmail,
      arcPassword: getPassword,
      booked: [],
      arcDocument: getDocument,
      arcNataCertificate: getNataCertificate,
    };

    console.log(architectData);

    for (let i = 0; i < architectNew.length; i++) {
      if (architectNew[i]["arcEmail"] === getEmail) {
        check = true;
        alert("user already exit");
        break;
      } else {
        check = false;
      }
    }

    if (check === false) {
      architectNew.push(architectData);
      const data = JSON.stringify(architectNew);
      alert("sucessfully completed");
      window.localStorage.setItem("personArchitect", data);
      window.location.href = "./architect_login.html";
    }
  });
}

function arcLogin() {
  let arcLogin = document.getElementById("architectForm2");

  arcLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    let wholeData = JSON.parse(localStorage.getItem("personArchitect"));
    console.log(wholeData);

    const getEmail = document.getElementById("email").value;
    const getPassword = document.getElementById("password").value;

    let match = false;

    for (let i = 0; i < wholeData.length; i++) {
      if (
        getEmail == wholeData[i].arcEmail &&
        getPassword == wholeData[i].arcPassword
      ) {
        match = true;
        break;
      } else {
        match = false;
      }
    }

    if (match === true) {
      alert("successfully completed");
      const matchData = wholeData.find((o) => o["arcEmail"] == getEmail);
      const singleData = JSON.stringify(matchData.arcEmail);
      localStorage.setItem("Single_Data", singleData);
      window.location.href = "./architect_architect_list.html";
    } else {
      alert("Failed");
    }
  });
}

function arcProfile() {
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
}

function arcProfileEdit() {
  const singleData = JSON.parse(localStorage.getItem("Single_Data"));
  const arcInfo = JSON.parse(localStorage.getItem("personArchitect"));

  let oneArchitect = arcInfo.find(function (event) {
    let arcEmail = event["arcEmail"];
    if (singleData == arcEmail) {
      return true;
    }
  });

  console.log(oneArchitect);

  const url = (document.getElementById("userImage").value =
    oneArchitect["arcUrl"]);
  const name = (document.getElementById("userName").value =
    oneArchitect["arcName"]);
  const gender = (document.getElementById("userGender").value =
    oneArchitect["arcGender"]);
  const phoneNumber = (document.getElementById("userPhoneNumber").value =
    oneArchitect["arcPhoneNumber"]);
  const address = (document.getElementById("userAddress").value =
    oneArchitect["arcAddress"]);
  const coverPhoto = (document.getElementById("userCoverPhoto").value =
    oneArchitect["arcCoverPhoto"]);
  const education = (document.getElementById("userEducation").value =
    oneArchitect["arcEducation"]);
  const experience = (document.getElementById("userExperience").value =
    oneArchitect["arcExperience"]);
  const email = (document.getElementById("userEmail").value =
    oneArchitect["arcEmail"]);
  // const password = document.getElementById("userPassword").value = oneArchitect["arcPassword"];
  const graduatedocument = (document.getElementById("userDocument").value =
    oneArchitect["arcDocument"]);
  const natacertificate = (document.getElementById(
    "userNataCertificate"
  ).value = oneArchitect["arcNataCertificate"]);
  // const modelDesign = document.getElementById("userModelDesign").value = oneArchitect["arcModelDesign"];

  // edit page function
  let complete = document.getElementById("architectForm3");

  console.log(complete);

  complete.addEventListener("submit", function (event) {
    event.preventDefault();
    // get data from edit form
    let arcUrl = document.getElementById("userImage").value;
    let arcName = document.getElementById("userName").value;
    let arcGender = document.getElementById("userGender").value;
    let arcPhoneNumber = document.getElementById("userPhoneNumber").value;
    let arcAddress = document.getElementById("userAddress").value;
    let arcCoverPhoto = document.getElementById("userCoverPhoto").value;
    let arcEducation = document.getElementById("userEducation").value;
    let arcExperience = document.getElementById("userExperience").value;
    let arcEmail = document.getElementById("userEmail").value;
    // let arcPassword = document.getElementById("userPassword").value;
    let arcDocument = document.getElementById("userDocument").value;
    let arcNataCertificate = document.getElementById(
      "userNataCertificate"
    ).value;
    // let arcModelDesign = document.getElementById("userModelDesign").value;

    let architectUser_data = {
      arcUrl,
      arcName,
      arcGender,
      arcPhoneNumber,
      arcAddress,
      arcCoverPhoto,
      arcEducation,
      arcExperience,
      arcEmail,
      // arcPassword,
      arcDocument,
      arcNataCertificate,
      // arcModelDesign,
    };

    let architectData = JSON.parse(localStorage.getItem("personArchitect"));
    let lastData = architectData.find((i) => i.arcEmail == arcEmail);
    let convert = Object.assign(lastData, architectUser_data);
    console.log(convert);
    let index = architectData.indexOf(lastData);
    architectData[index] = convert;
    localStorage.setItem("personArchitect", JSON.stringify(architectData));
    window.location.href = "./own_architect_profile.html";
  });
}
