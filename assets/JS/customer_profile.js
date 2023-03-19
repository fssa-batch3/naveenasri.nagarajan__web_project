function register() {
  let checker = false;
  const signupfrom = document.getElementById("form2");
  console.log(signupfrom);
  signupfrom.addEventListener("submit", function (event) {
    event.preventDefault();

    let userNew = [];
    console.log(userNew);

    if (localStorage.getItem("register") != null) {
      userNew = JSON.parse(localStorage.getItem("register"));
    }

    const getName = document.getElementById("name").value.trim();
    const getEmail = document.getElementById("email").value.trim();
    const getPassword = document.getElementById("password").value.trim();
    const getConfirmPassword = document
      .getElementById("confirm_password")
      .value.trim();
    const userId = Date.now();

    let userData = {
      userId: userId,
      userName: getName,
      userEmail: getEmail,
      userPassword: getPassword,
      userconPassword: getConfirmPassword,
    };

    console.log(userData);

    for (let i = 0; i < userNew.length; i++) {
      if (userNew[i]["userEmail"] === getEmail) {
        checker = true;
        alert("User already exit");
        break;
      } else {
        checker = false;
      }
    }
    if (checker === false) {
      if (getPassword === getConfirmPassword) {
        userNew.push(userData);
        const str = JSON.stringify(userNew);
        alert("Sucess");
        window.localStorage.setItem("register", str);
        window.location.href = "./login 2.html";
      } else {
        alert("Password and confirmpassword should be same");
      }
    }
  });
}

// function declaration
register();

function login() {
  let logIn = document.getElementById("form3");

  logIn.addEventListener("submit", (event) => {
    event.preventDefault();

    let defult = JSON.parse(localStorage.getItem("register"));
    console.log(defult);

    const getEmail = document.getElementById("email").value;
    const getPassword = document.getElementById("password").value;

    let match = false;

    for (let i = 0; i < defult.length; i++) {
      if (
        getEmail == defult[i].userEmail &&
        getPassword == defult[i].userPassword
      ) {
        match = true;
        break;
      } else {
        match = false;
      }
    }

    if (match === true) {
      alert("successfully completed");
      const matchObject = defult.find((o) => o["userEmail"] == getEmail);
      const thisUser = JSON.stringify(matchObject.userEmail);
      localStorage.setItem("this_user", thisUser);
      window.location.href = "../pages/customer home.html";
    } else {
      alert("failed");
    }
  });
}

// function declaration
login();

function profile() {
  //get data from local storage
  const thisUser = JSON.parse(localStorage.getItem("this_user"));
  const userinfo = JSON.parse(localStorage.getItem("register"));

  //get object from local storage used by email
  let singleUser = userinfo.find(function (event) {
    let useremail = event["userEmail"];
    if (thisUser == useremail) {
      return true;
    }
  });

  const email = (document.getElementById("email").value =
    singleUser["userEmail"]);

  const proname = (document.getElementById("userName").value =
    singleUser["userName"]);

  const pass = (document.getElementById("password").value =
    singleUser["userPassword"]);

  const c_pass = (document.getElementById("c_password").value =
    singleUser["userconPassword"]);

  let delete_user = document.getElementById("delete_btn");
  delete_user.addEventListener("click", function (event) {
    event.preventDefault();
    let index = userinfo.indexOf(singleUser);
    let msg = confirm("Are you sure you want to delete this account");
    if (msg !== true) {
      return;
    } else {
      userinfo.splice(index, 1);
      localStorage.setItem("register", JSON.stringify(userinfo));
      window.location.href = "../index home.html";
    }
  });
}

profile();

function profileEdit() {
  //get data from local storage
  const thisUser = JSON.parse(localStorage.getItem("this_user"));
  const userinfo = JSON.parse(localStorage.getItem("register"));
  //get object from local storage used by email
  let singleUser = userinfo.find(function (event) {
    let useremail = event["userEmail"];
    if (thisUser == useremail) {
      return true;
    }
  });

  const email = (document.getElementById("email").value =
    singleUser["userEmail"]);

  const proname = (document.getElementById("userName").value =
    singleUser["userName"]);

  const pass = (document.getElementById("password").value =
    singleUser["userPassword"]);

  const c_pass = (document.getElementById("c_password").value =
    singleUser["userconPassword"]);

  // edit page function
  let submit = document.getElementById("form_E");
  submit.addEventListener("submit", function (event) {
    event.preventDefault();
    // get data from edit form
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;
    let userconPassword = document.getElementById("c_password").value;

    let editUser_data = {
      userName,
      userEmail,
      userPassword,
      userconPassword,
    };

    let newData = JSON.parse(localStorage.getItem("register"));

    if (userPassword === userconPassword) {
      let oldData = newData.find((i) => i.userEmail == userEmail);
      let change = Object.assign(oldData, editUser_data);
      let index = newData.indexOf(oldData);
      newData[index] = change;
      localStorage.setItem("register", JSON.stringify(newData));
      window.location.href = "./customer profile.html";
    } else {
      alert("password and confirm password should be same");
    }

    // }
  });
}

profileEdit();
