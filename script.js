var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
};

setInterval(function() {
    nextSlide()
}, 3000);


let teamMembersPics=document.querySelectorAll(".teamMembersPicsDiv img");
let body=document.querySelector("body");
let containerDiv=document.querySelector(".container");
let blurMode=false; //off

let techsOption=document.querySelector(".techsOption");
let technologies=document.querySelector(".technologies");

let projectsOption=document.querySelector(".projectsOption");
let projects=document.querySelector(".projects");

let pricingOption=document.querySelector(".pricingOption");
let pricing=document.querySelector(".pricing");

let teamOption=document.querySelector(".teamOption");
let teamMembers=document.querySelector(".teamMembers");

let contactOption=document.querySelector(".contactOption");
let contact=document.querySelector(".contact");

body.spellcheck=false;
let submitBtn=document.querySelector(".submitBtn");
let resetBtn=document.querySelector(".resetBtn");
let name=document.querySelector(".name");
let email=document.querySelector(".email");
let mobile=document.querySelector(".mobile");
let message=document.querySelector(".message");
let form=document.querySelector(".form");

for(let i=0;i<teamMembersPics.length;i++)
{
  teamMembersPics[i].addEventListener("click", function(e){
      let imageDiv=document.createElement("div");
      imageDiv.classList.add("picDiv");
      imageDiv.innerHTML=`<img src="images/Team_Members_${i+1}.jpg" class="imageDivPic" alt="Picture"> <span class="material-icons cancelIcon"> cancel </span>`;
      body.append(imageDiv);
      containerDiv.classList.add("blur");
      blurMode=true; //on
      let cancelIcon=document.querySelector(".cancelIcon");
      cancelIcon.addEventListener("click", function(e){
        imageDiv.classList.remove("picDiv");
        imageDiv.remove();
        containerDiv.classList.remove("blur");
        blurMode=false; //off
      });
  });
}

techsOption.addEventListener("click", function(e){
  technologies.scrollIntoView();
});

projectsOption.addEventListener("click", function(e){
  projects.scrollIntoView();
});

pricingOption.addEventListener("click", function(e){
  pricing.scrollIntoView();
});

teamOption.addEventListener("click", function(e){
  teamMembers.scrollIntoView();
});

contactOption.addEventListener("click", function(e){
  contact.scrollIntoView();
});


resetBtn.addEventListener("click", function(e) {
  name.value="";
  email.value="";
  mobile.value="";
  message.value="";
});

submitBtn.addEventListener("click", function(e){
  form.removeAttribute("action");
  form.removeAttribute("method");
  form.removeAttribute("enctype");
  submitBtn.removeAttribute("type");
  submitBtn.type="button";
  if(name.value=="")
  {
    alert("Enter your Full Name.");
    return;
  }
  else 
  {
    if(email.value=="")
    {
      alert("Enter your Email ID.");
      return;
    }
    else 
    {
      if(mobile.value=="")
      {
        alert("Enter your Contact Number.");
        return;
      }
      else 
      {
        if(message.value=="")
        {
          alert("Enter the Message you want to Send.");
          return;
        }
        else
        {
          submitBtn.removeAttribute("type");
          submitBtn.type="submit";
          form.action="mailto:taranjot11111@gmail.com";
          form.method="post";
          form.enctype="text/plain";
        }
      }
    }
  }
});


