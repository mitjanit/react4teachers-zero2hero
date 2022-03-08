import '../styles/alternative.scss';

let renderList = (users) => {
  const container = document.querySelector('.injectionPlace')
  console.log(container)
  if(users){
    users.forEach((i) => {
      const {employee_name} = i;
      console.log(employee_name);
      let elem = document.createElement("li");
      elem.innerHTML = employee_name;
      container.appendChild(elem);
    })
  }
}

let aux = (label) => {
  console.log("hi there 2")
  const button = document.getElementById("myButton")
  console.log(button.innerHTML)
  button.innerHTML = `Toma ${label}`

  //fetch("http://dummy.restapiexample.com/api/v1/employees")
  fetch("../employees.json")
      .then(response =>{
        return response.json()
      }).then(json =>{
        const {data} = json;
        console.log(data);
        renderList(data);
      }).
      catch(error => {
            console.log("error", error)
  });

}

aux('Pep');

/*

function doLog(msg){
  console.log(msg);
}
let doAnotherLog = function(coolMsg){
  console.log(coolMsg);
}
const test = () => {
  console.log('hello world')
}

doLog('conventional function')
doAnotherLog('not so conventional function')
test()

 */