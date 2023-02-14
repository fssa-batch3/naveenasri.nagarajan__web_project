
// JSON

let architect = [
    {
        "image": "../assets/image/login as architect/profile/boy.jpg",
        "name": "John",
        "location": "chennai",
        "document": "Document",
        "image1": "../assets/image/login as architect/sample design/sample 1.jpg",
        // "image2": "../assets/image/login as architect/sample design/sample 2.webp",
        "button": "Book now",
      },
      {
        "image": "../assets/image/login as architect/profile/boy1.jpg",
        "name": "Robert",
        "location": "Madurai",
        "document": "Document",
        "image1": "../assets/image/login as architect/sample design/sample 3.jpg",
        // "image2": "../assets/image/login as architect/sample design/sample 4.jpg",
        "button": "Book now",
      },
      {
        "image": "../assets/image/login as architect/profile/girl.jfif",
        "name": "Maha",
        "location": "Erumapatti",
        "document": "Document",
        "image1": "../assets/image/login as architect/sample design/sample 5.webp",
        // "image2": "../assets/image/login as architect/sample design/sample 6.webp",
        "button": "Book now",
      },
      {
        "image": "../assets/image/login as architect/profile/girl1.jfif",
        "name": "Durga",
        "location": "Namakkal",
        "document": "Document",
        "image1": "../assets/image/login as architect/sample design/sample 7.webp",
        // "image2": "../assets/image/login as architect/sample design/sample 8.webp",
        "button": "Book now",
      },

    
  ];







  // Java Script

  // <div class="one-architect-detail">


for(let i= 0; i< architect.length; i++){

let big_div;
let image_div;
let image;
let details;
let architectName;
let architectLocation;
let architectDocument;
let architectSample;
let architectimage1;
let architectimage2;
let customerBooking;
let customerBook;

  big_div = document.createElement("div");
  big_div.setAttribute("class","one-architect-detail");
  document.querySelector("div.all-architect-details" ).append(big_div)
  console.log(big_div);

      // <div> - image_div
  image_div = document.createElement("div");
  image_div.setAttribute("class","profile-div");
  big_div.append(image_div);

      // <img - image
  image = document.createElement("img");
  image.setAttribute("src", architect[i]["image"]);
  image.setAttribute("alt","Architect_image");
  image.setAttribute("height","350px");
  image.setAttribute("width","300px");
  image.setAttribute("style","border-radius: 9px");
  image_div.append(image);

      //details div 
  details =document.createElement("div");
  big_div.append(details);
  
  architectName =document.createElement("h5");
  architectName.innerText = architect[i]["name"]
  details.append(architectName);
      
  architectLocation =document.createElement("p");
  architectLocation.innerText = architect[i]["location"] 
  details.append(architectLocation);

  architectDocument =document.createElement("button");
  architectDocument.innerText = architect[i]["document"]
  details.append(architectDocument);

  architectSample =document.createElement("div");
//   architectSample.setAttribute("class","sample-image");
  details.append(architectSample);
  
  architectimage1 =document.createElement("img");
  architectimage1.setAttribute("src",architect[i]["image1"]);
  architectimage1.setAttribute("alt","sample_design");
  architectimage1.setAttribute("height","200px");
  architectimage1.setAttribute("width","150px");
  architectimage1.setAttribute("style","border-radius: 20px; padding: 10px");
  architectSample.append(architectimage1);

  architectimage2 =document.createElement("img");
  architectimage2.setAttribute("src",architect[i]["image2"]);
  architectimage2.setAttribute("alt","sample_design");
  architectimage2.setAttribute("height","200px");
  architectimage2.setAttribute("width","150px");
  architectimage2.setAttribute("style","border-radius: 20px; padding: 10px");
  architectSample.append(architectimage2);   

  customerBooking =document.createElement("a");
  customerBooking.setAttribute("href","../pages/customer booking.html");
  details.append(customerBooking);

  customerBook =document.createElement("button");
  customerBook.innerText = "Book now"
  customerBooking.append(customerBook);
  



  
 }