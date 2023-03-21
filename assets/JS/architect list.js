const select_architect_list = [];

let arclist = JSON.parse(localStorage.getItem("personArchitect"));
// let oneArc = JSON.parse(localStorage.getItem("Single_Data"));

console.log(arclist);

for (i = 0; i < arclist.length; i++) {
  select_architect_list.push(arclist[i]);
  console.log(select_architect_list);
}

for (i = 0; i < select_architect_list.length; i++) {
  // const singleArchitect = select_architect_list[i];

  let card;
  let design_img_div;
  let design_img;
  let arcname;
  let exp_div;
  let preExp;
  let arcexperience;
  // let rating;
  // let star1;
  // let star2;
  // let star3;
  // let star4;
  // let star5;
  let detailsbtn;
  let bookbtn;

  card = document.createElement("div");
  card.setAttribute("class", "card");
  document.querySelector("div.all-architect-list").append(card);
  console.log(card);

  design_img_div = document.createElement("div");
  design_img_div.setAttribute("class", "cover-photo");
  design_img_div.setAttribute(
    "style",
    "background: url(" +
      select_architect_list[i]["arcModelDesign"] +
      ") no-repeat center center / contain;"
  );
  card.append(design_img_div);

  design_img = document.createElement("img");
  design_img.setAttribute("src", select_architect_list[i]["arcUrl"]);
  design_img.setAttribute("class", "profile");
  design_img.setAttribute("alt", "architect-profile");
  design_img_div.append(design_img);

  arcname = document.createElement("h3");
  arcname.setAttribute("class", "profile-name");
  arcname.innerText = select_architect_list[i]["arcName"];
  card.append(arcname);

  exp_div = document.createElement("div");
  exp_div.setAttribute("class", "exp_div");
  card.append(exp_div);

  preExp = document.createElement("pre");
  preExp.innerText = "Experience : ";
  exp_div.append(preExp);

  arcexperience = document.createElement("p");
  arcexperience.setAttribute("class", "about");
  arcexperience.innerText = select_architect_list[i]["arcExperience"];
  exp_div.append(arcexperience);

  // rating = document.createElement("div");
  // rating.setAttribute("class", "rate");
  // card.append(rating);

  // star1 = document.createElement("span");
  // star1.setAttribute("class", "star-icon filled");
  // rating.append(star1);

  // star2 = document.createElement("span");
  // star2.setAttribute("class", "star-icon filled");
  // rating.append(star2);

  // star3 = document.createElement("span");
  // star3.setAttribute("class", "star-icon filled");
  // rating.append(star3);

  // star4 = document.createElement("span");
  // star4.setAttribute("class", "star-icon filled");
  // rating.append(star4);

  // star5 = document.createElement("span");
  // star5.setAttribute("class", "star-icon");
  // rating.append(star5);

  detailsbtn = document.createElement("a");

  detailsbtn.setAttribute("class", "btn");
  detailsbtn.setAttribute(
    "href",
    "./detail_profile.html?id=" + arclist[i].arcId
  );
  detailsbtn.setAttribute("id", "detailsbtn");
  detailsbtn.innerText = " More Details";
  card.append(detailsbtn);

  bookbtn = document.createElement("button");
  bookbtn.setAttribute("class", "btn");
  bookbtn.setAttribute("id", "bookbtn");
  bookbtn.innerText = "Book now";
  card.append(bookbtn);
}
