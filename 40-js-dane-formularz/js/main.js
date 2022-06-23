document.querySelector('button').onclick = function () {

  let input1 = document.getElementById('fname').value;
  console.log(input1);
  let par1 = document.getElementById('name');
  par1.innerText = input1;

  let input2 = document.getElementById('lname').value;
  console.log(input2);
  let par2 = document.getElementById('surname');
  par2.innerText = input2;

  let input3 = document.getElementById('number').value;
  console.log(input3);
  let par3 = document.getElementById('phone');
  par3.innerText = input3;
  
}