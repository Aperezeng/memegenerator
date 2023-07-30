const img = document.querySelector("#img");
const textOnTopInput = document.querySelector("#text-on-top");
const textOnBottomInput = document.querySelector("#text-on-bottom");
const container=document.querySelector("#container");
const submit=document.querySelector("#submit")

//*Displays picture upon entering of URL 
  submit.addEventListener("click", function (e){
  e.preventDefault();
  let subcontainer= document.createElement("div");
  subcontainer.classList.add("subcontainer");
  let url = img.value;
  let image = document.createElement("img");
  image.src = url;

 //*Adds top text & bottom text 
  let toptext=document.createElement("p"); 
  toptext.classList.add("text-on-top");
  toptext.innerText = textOnTopInput.value;

  let bottomtext=document.createElement("p"); 
  bottomtext.classList.add("text-on-bottom");
  bottomtext.innerText = textOnBottomInput.value;
  subcontainer.append(image)
  subcontainer.append(toptext)
  subcontainer.append(bottomtext)
  container.append(subcontainer)

//click on image to remove
    image.addEventListener('click', function(e){
    e.target.remove();
  });
  textOnTopInput.value="";
  textOnBottomInput.value="";
  img.value="";
})


