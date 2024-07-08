const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}
// --------------------
//     PRELOADER
// --------------------
let loader = document.getElementById('preloader');

function viewPage(){
    loader.style.display = 'none';
}

window.addEventListener('load', () =>{
   setTimeout(viewPage, '3000');
})


// ----------------------------
//     NAVBAR COLOR CHANGE
// ----------------------------
function checkScroll(){
  let navbar = document.querySelector('.navbar');
  let navAbout = document.querySelector('.nav-about');
  let navService = document.querySelector('.nav-service');
  let navStore = document.querySelector('.nav-store');
  let navContact = document.querySelector('.nav-contact');
  let scrollValue = window.scrollY;

if(scrollValue < 400){
  navbar.classList.remove('navColor');
  navAbout.classList.remove('linkcolor');
  navService.classList.remove('linkcolor');
  navStore.classList.remove('linkcolor');
  navContact.classList.remove('linkcolor');
}else{
  navbar.classList.add('navColor');
  navAbout.classList.add('linkcolor');
  navService.classList.add('linkcolor');
  navStore.classList.add('linkcolor');
  navContact.classList.add('linkcolor');
}

console.log(scrollValue);
}window.addEventListener('scroll', checkScroll);


// For Store Page 
function checkScroll(){
  let navbar = document.querySelector('.navbar');
  let navAbout = document.querySelector('.nav-about');
  let navService = document.querySelector('.nav-service');
  let navStore = document.querySelector('.nav-store');
  let navContact = document.querySelector('.nav-contact');
  let scrollValue = window.scrollY;

if(scrollValue < 400){
  navbar.classList.remove('navColor');
  navAbout.classList.remove('linkcolor');
  navService.classList.remove('linkcolor');
  navStore.classList.remove('linkcolor');
  navContact.classList.remove('linkcolor');
}else{
  navbar.classList.add('navColor');
  navAbout.classList.add('linkcolor');
  navService.classList.add('linkcolor');
  navStore.classList.add('linkcolor');
  navContact.classList.add('linkcolor');
}

console.log(scrollValue);
}window.addEventListener('scroll', checkScroll);


// =======================
//     SIGN UP PAGE
// =======================

// -- FORM VERIFICATION --
function valid(){
  let Name = document.getElementById('name');
  let email = document.getElementById('mail');
  let phone = document.getElementById('phoneNo');
  let pass = document.getElementById('password');
  let address = document.getElementById('residence');

  let nameE = Name.value;
  let maiL = email.value;
  let numbeR = phone.value;
  let passworD = pass.value;
  let addresS = address.value;

  let errName = document.getElementById('Nerr');
  let errMail = document.getElementById('Mailerr');
  let errPhone = document.getElementById('Phoneerr');
  let errPass = document.getElementById('Passerr');
  let erradd = document.getElementById('adderr');

  Name.addEventListener('input', () =>{
    errName.style.display = 'none';
    Name.style.borderBottom = '0px solid transparent';
})
  email.addEventListener('input', () =>{
    errMail.style.display = 'none';
    email.style.borderBottom = '0px solid transparent';
  })
  phone.addEventListener('input', () =>{
      errPhone.style.display = 'none';
      phone.style.borderBottom = '0px solid transparent';
  })
  pass.addEventListener('input', () =>{
      errPass.style.display = 'none';
      pass.style.borderBottom = '0px solid transparent';
  })
  address.addEventListener('input', () =>{
      erradd.style.display = 'none';
      address.style.borderBottom = '0px solid transparent';
      address.style.borderBottom = '0px solid transparent';
  })

// CONDITIONS //
  if (nameE.trim() == ""){
      Name.style.borderBottom = '1px solid red';
      errName.innerHTML = 'Fill in name';
      errName.style.color = 'red';
      errName.style.fontSize = '13px';
      return false;
  }
  else if(maiL.trim() == ""){
      errMail.innerHTML = 'Fill in email';
      errMail.style.color = 'red';
      errMail.style.fontSize = '13px';
      email.style.borderBottom = '1px solid red';
      return false;
  }
  else if(numbeR.trim() == ""){
      errPhone.innerHTML = 'Fill in phone number';
      errPhone.style.color = 'red';
      errPhone.style.fontSize = '13px';
      phone.style.borderBottom = '1px solid red';
      return false;
  }
  else if(passworD.trim() == ""){
      errPass.innerHTML = 'Fill in password';
      errPass.style.color = 'red';
      errPass.style.fontSize = '13px';
      pass.style.borderBottom = '1px solid red';
      return false;
  }
  else if(addresS.trim() == ""){
      erradd.innerHTML = 'Fill in address';
      erradd.style.color = 'red';
      erradd.style.fontSize = '13px';
      return false;
  }
  else{
      return true;
  }
}




//=============================
//      CONTACT US FORM
//=============================
function myvalid2(){
  let errorI = document.getElementById("e1");
  let errorII = document.getElementById("e2");
  let errorIII = document.getElementById("e3");

  let nme = document.getElementById("name");
  let name = nme.value;
  let eml = document.getElementById("email");
  let Email = eml.value;
  let subject = document.getElementById("subject");
  let sub = subject.value;
  // let message = document.getElementById("message");
  // let mes = message.value;

  let text = /^[A-Za-z\s]+$/;
  let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




  if(name.trim() == ''){
      errorI.style.display = "inline";
      errorI.innerHTML = "Please fill in name";
      return false;
  }else if(!text.test(name)){
      errorI.style.display = "inline";
      errorI.innerHTML = "Please fill in name correctly";
      return false;
  }else if(Email.trim() == ''){
      errorII.style.display = "inline";
      errorII.innerHTML = "Please fill in email";
      errorI.style.display = "none";
      return false;
  }else if(!email.test(Email)){
      errorII.style.display = "inline";
      errorII.innerHTML = "Please fill in email correctly";
      return false;
  }else if(sub.trim() == ''){
      errorIII.style.display = "inline";
      errorIII.innerHTML = "Please leave a message";
      errorII.style.display = "none";
      return false;
  }
  else{
      // errorIV.style.display = "none";
      localStorage.setItem('name', name);
      return true;
  }
}



// STORE CLICK EFFECTS
let addtocart1 = document.querySelector('.cart');
addtocart1.addEventListener('dblclick', () =>{
  window.alert('This item is successfully ordered');
})



//STORE PRODUCT SEARCH 
function search(){
  let find = document.querySelector('.search').value;
  let message = document.querySelector('.available');
  let malaria = document.querySelector('.malaria');
  let pain = document.querySelector('.pain');
  let blood = document.querySelector('.bloodtonic');
  let cold = document.querySelector('.cold');
  let diarrhea = document.querySelector('.diarrhea');
  let heartburn = document.querySelector('.heartburn');

  if(find === 'Malaria' || find === 'malaria'){
    message.innerHTML = 'MALARIA DRUGS';
    malaria.style.display = 'flex';
    pain.style.display = 'none';
    blood.style.display = 'none';
    diarrhea.style.display = 'none';
    cold.style.display = 'none';
    heartburn.style.display = 'none';
  }
  else if(find === 'Headache' || find === 'headache' || find === 'Pain' || find === 'pain' || find === 'Pain relief' || find === 'pain relief'){
    message.innerHTML = 'PAIN RELIEF AND HEADACHE';
    malaria.style.display = 'none';
    pain.style.display = 'flex';
    blood.style.display = 'none';
    diarrhea.style.display = 'none';
    cold.style.display = 'none';
    heartburn.style.display = 'none';
  }
  else if(find === 'Blood Tonic' || find === 'Blood tonic' || find === 'blood tonic'){
    message.innerHTML = 'BLOOD TONIC';
    malaria.style.display = 'none';
    pain.style.display = 'none';
    blood.style.display = 'flex';
    diarrhea.style.display = 'none';
    diarrhea.style.display = 'none';
    cold.style.display = 'none';
    heartburn.style.display = 'none';
  }
  else if(find === 'Cold' || find === 'cold'){
    message.innerHTML = 'COLD DRUGS';
    malaria.style.display = 'none';
    pain.style.display = 'none';
    blood.style.display = 'none';
    cold.style.display = 'flex';
    diarrhea.style.display = 'none';
    heartburn.style.display = 'none';
  }
  else if(find === 'Diarrhea' || find === 'diarrhea' || find === 'stomach pain' || find === 'Stomach pain'){
    message.innerHTML = 'DIARRHEA';
    malaria.style.display = 'none';
    pain.style.display = 'none';
    blood.style.display = 'none';
    diarrhea.style.display = 'flex';
    heartburn.style.display = 'none';
    cold.style.display = 'none';
  }
  else if(find === 'Heart' || find === 'heart' || find === 'Heartburn' || find === 'heartburn' || find === 'Heart burn' || find === 'heart burn'){
    message.innerHTML = 'HEARTBURN';
    malaria.style.display = 'none';
    pain.style.display = 'none';
    blood.style.display = 'none';
    diarrhea.style.display = 'none';
    cold.style.display = 'none';
    heartburn.style.display = 'flex';
  }
  else{
    message.innerHTML = 'AVAILABLE PRODUCTS';
    malaria.style.display = 'flex';
    pain.style.display = 'flex';
    blood.style.display = 'flex';
    diarrhea.style.display = 'flex';
    cold.style.display = 'flex';
    heartburn.style.display = 'flex';
  }
}