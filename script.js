let namee = document.getElementById('name');
let dob = document.getElementById('dob');
let Oname = document.getElementById('outputname');
let Odob = document.getElementById('outputage');
let button = document.getElementById('button');
button.addEventListener('click',function(){
  function Calculater(name, dob){
    this.name= name;
    this.dateOfBirth= new Date(dob);
    this.calculateAge = function() {
              const difference  = Date.now() - this.dateOfBirth.getTime()
              const ageDate = new Date(difference)
              return ageDate.getUTCFullYear() - 1970
          }
  }
  let inputname= namee.value;
  let inputdob= dob.value;
  const zahid = new Calculater(inputname, inputdob)
  Oname.textContent= inputname;
  Odob.textContent= zahid.calculateAge();
})