const nav = document.createElement("nav");
const log_img = document.createElement("div");
log_img.setAttribute("class", "logo-img");
const log_image = document.createElement("img");
log_image.setAttribute("src","https://images.click.in/classifieds/images/177/28_5_2015_16_32_16_pu3rhurb17lmrl4afchq5o1bq7_q671hm5fa.png");
log_img.append(log_image);

const logo_text = document.createElement("div");
logo_text.setAttribute("class", "logo-text");
const logo_text_image = document.createElement("img");
logo_text_image.setAttribute("src","https://www.thirukkural.net/themes/styleHome/Logo_ta.png");
logo_text.append(logo_text_image);
nav.append(log_img, logo_text);
document.querySelector(".navbar").append(nav);
// ------------------- header and images Starts HERE -------------------
const header = document.createElement("header");
header.setAttribute("class", "header");
const header_image_left = document.createElement("img");
header_image_left.setAttribute( "src", "https://thirukkural.net/themes/styleHome/Aram_home_ta.png");
header_image_left.setAttribute("alt", "left_image");

const header_image_right = document.createElement("img");
header_image_right.setAttribute( "src", "https://thirukkural.net/themes/styleHome/Porul_home_ta.png");
header_image_right.setAttribute("alt", "right_image");

const header_image_center = document.createElement("img");
header_image_center.setAttribute( "src","https://thirukkural.net/themes/styleHome/Kaamam_home_ta.png");
header_image_center.setAttribute("alt", "center_image");
header.append(header_image_left, header_image_center, header_image_right);

// ===================== header and images [ Ends  HERE ] =================

// -------------------  creating the center image Starts HERE-------------------
const center_image = document.createElement("div");
center_image.setAttribute("class", "centerimage");
const center_image_img = document.createElement("img");
center_image_img.setAttribute("src","https://thirukkural.net/themes/styleHome/CenterShow.png");
center_image_img.setAttribute("alt", "center_image");
center_image.append(center_image_img);

// ===================== creating the center image [ Ends HERE ]  ==============

//-------------------------- Creating the form Starts HERE-------------------------
const form_box = document.createElement("form");
form_box.setAttribute("action", "#");
const form_container = document.createElement("div");
form_container.setAttribute("class", "form_container");
form_container.innerHTML = `
         <div class="inputBox">
          <input type="number" name="search" id="search" />
          <span>Enter any number from 1 to 1330</span>
        </div>
        <div class="inputBox">
          <button class="search_button" id="search_btn" name="search_btn" onclick="searchData(event)">Search </button>
        </div>
`;
form_box.append(form_container);

document.querySelector(".form").append(header, center_image, form_box);

//======================== Creating the form Ends HERE =================================

//--------------------------- Fecthing API --------------------
const apiurl = "https://api-thirukkural.vercel.app";

//-----------------Function for get tha inputvalue form the textbox---------
const searchData = function (event) {
  event.preventDefault();
  let inputvalue = document.querySelector("#search");
  let findText = inputvalue.value;
  console.log(findText);
  if (findText == "") {
    alert("Please!!! Enter the number...");
  } else if (findText > 1330) {
    alert("Please!!! Enter the number from 1 to 1330");
  } else {
    getData(findText);
  }

  inputvalue.value = "";
};
//----------------------- Function to get the data from the Api -------------
async function getData(find) {
  try {
    const response = await fetch(`${apiurl}/api?num=${find}`);
    const data = await response.json();
    console.log(data);
    document.querySelector(".section").innerHTML = "";
    document.querySelector(".section1").innerHTML = "";
    display_Data_Tamil(data);
    display_Data_English(data);
  } catch (err) {
    document.querySelector(".section").append("Details Cannot be  Founded");
    console.log(err);
  }
}
//======================= Fecthing API Ends Here =====================

//-------------------------- Creating the section Starts HERE -------------------------
const display_Data_Tamil = function (data) {
  const card_container = document.createElement("div");
  card_container.setAttribute("class", "card-container");
  card_container.innerHTML = `
  <h2 class="section_title">திருக்குறள்</h2>
   <div class="card-title">
          <h4>${data.chap_tam}</h4>
          <h4>${data.sect_tam}</h4>
        </div>

        <div class="card-heading">
          <h4>குறள் எண்: ${data.number}</h4>
        </div>

        <div class="card-content">
          <h4>${data.line1}</h4>
          <h4>${data.line2}</h4>
          <p><strong>குறள் விளக்கம்: </strong> ${data.tam_exp}</p>
        </div>
        <h4 class="author_name">- திருவள்ளுவர்</h4>
`;
  document.querySelector(".section").append(card_container);
};

//========================== Creating the section Ends HERE ==============================

//-------------------------- Creating the section Starts HERE -------------------------
const display_Data_English = function (data) {
  const card_container = document.createElement("div");
  card_container.setAttribute("class", "card-container");
  card_container.innerHTML = `
  <h2 class="section_title">Thirukkural</h2>
   <div class="card-title">
          <h4>${data.chap_eng}</h4>
          <h4>${data.sect_eng}</h4>
        </div>

        <div class="card-heading">
          <h4>Kural: ${data.number}</h4>
        </div>

        <div class="card-content">
          <h4>${data.eng}</h4>
          <p><strong>Explanation:</strong> ${data.eng_exp}</p>
        </div>
        <h4 class="author_name">- Thiruvalluvar</h4>
`;
  document.querySelector(".section1").append(card_container);
};

//========================== Creating the section Ends HERE ==============================

//================= Footer ================
const footer_div = document.createElement("div");
const footer_para = document.createElement("p");
footer_para.innerHTML = "© 2021 by Sangeetha";
footer_div.append(footer_para);
document.querySelector("footer").append(footer_div);
//=================footer Ends here==========

// loader script
const loader_div = document.createElement("div");
loader_div.setAttribute("class", "loader");
const loader_image = document.createElement("img");
loader_image.setAttribute(
  "src",
  "https://i.pinimg.com/originals/c0/0a/6f/c00a6f768ec5ad626774e9a9f6a88ee0.gif"
);
loader_div.append(loader_image);
document.querySelector(".page_loader").append(loader_div);

const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";
    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 6000);
}
init();
