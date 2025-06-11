var websiteName=document.getElementById("siteName");
var siteUrl=document.getElementById("url");
var tables = document.getElementById("taple-data");
var errorMessages = document.getElementById("error");
var data = JSON.parse(localStorage.getItem("websites")) || [];
display();
function create(){
const isNameValid = websiteName.classList.contains("is-valid");
const isUrlValid = siteUrl.classList.contains("is-valid");

const errorBox = document.getElementById("error");

if (isNameValid && isUrlValid) {
  var user = {
    websiteName: websiteName.value,
    websiteUrl: siteUrl.value,
  };

  data.push(user);
  localStorage.setItem("websites", JSON.stringify(data));

  display();
  clear();


  errorBox.classList.add("d-none");
} else {

  errorBox.classList.remove("d-none");
}



}
function display(){


  
  tables.innerHTML=""
for(var i=0;i<data.length;i++)
tables.innerHTML += `
  <tr>
      <th scope="row">${i}</th>
  
      <td>${data[i].websiteName}</td>
      <td>
        <button class="btn btn-success vis" type="button" onclick="sitesUrl(${i})">Visit
        </button>

      </td>
      <td><button class="btn btn-danger del" type="button" onclick="Delete(${i})">Delete</button></td>
    </tr>
    <tr>
    `;
}

function clear(){
    websiteName.value = "";
    siteUrl.value = "";
  websiteName.classList.remove("is-valid", "is-invalid");
  siteUrl.classList.remove("is-valid", "is-invalid");
}

function Delete(index){

 data.splice(index, 1);
localStorage.setItem("websites",JSON.stringify(data));
 display();
}
function sitesUrl(index){
 var urlData = data[index].websiteUrl;
window.open(urlData,'_blank');

}
function validateData(element) {
  var regex = {
    siteName: /^[a-zA-Z][a-zA-Z0-9]{2,14}$/,
    url: /^https?:\/\/[^\s]+$/i,
  };


  var result = regex[element.id]?.test(element.value);



  if (result) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    /*
    errorMessages.classList.add("d-none");
*/
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    /*
    errorMessages.classList.remove("d-none");
  */
  }
}

