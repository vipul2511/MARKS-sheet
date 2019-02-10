
marks=new Array();

function avgfun(){
 var sum_of_array=0; 
 console.log(marks.length);
 for(var i=0;i<parseInt(marks.length);i++){
   sum_of_array=(parseInt(marks[i])+parseInt(sum_of_array));
   console.log(sum_of_array);
 }
 sum_of_array= sum_of_array/parseInt(marks.length);

 sum_of_student= document.getElementById('avgmark').value=sum_of_array; 
 console.log(sum_of_array);
} 
function myFunction(){

 if (document.getElementById('english').checked) {
   subject_name = document.getElementById('english').value;
   console.log(subject_name);
 }
 if (document.getElementById('maths').checked){
   subject_name=document.getElementById('maths').value;
   console.log(subject_name);
 }
 if(document.getElementById('phy').checked){
   subject_name=document.getElementById('phy').value;
   console.log(subject_name);
 }
 if(document.getElementById('chem').checked){
   subject_name=document.getElementById('chem').value;
   console.log(subject_name);
 }
 if(document.getElementById('computer').checked){
   subject_name=document.getElementById('computer').value;
   console.log(subject_name);
 }

 enter_name_of_student=new Array();
  // marks=new Array();
  sub_name=new Array();
  var total_marks=parseInt(document.getElementById("total").value);
  var obtain_marks=parseInt(document.getElementById("marks").value);
  if(obtain_marks<=total_marks){
   enter_name_of_student.push(document.getElementById("name").value);
   marks.push(obtain_marks);
   sub_name.push(subject_name);




       var avg;
 // console.log(enter_name_of_student[i]);
 // console.log(sub_name[i]);
//  console.log(marks[i]);
for(var i=0;i<enter_name_of_student.length;i++){
var sum=sum+parseInt(marks[i]);
var avg=sum/parseInt(marks.length);
}
 // var avg=parseInt(document.getElementById("avg").value);

//  console.log(sum);
  //imp start
  var listx= document.createElement("tr");
  var node1 = document.createElement("td");
  var stu_name_node=document.createTextNode(document.getElementById("name").value);
  node1.appendChild(stu_name_node);
  var node2 = document.createElement("td");
  var stu_sub_node=document.createTextNode(subject_name);
  node2.appendChild(stu_sub_node);
  var node3 = document.createElement("td");
  var stu_marks_node=document.createTextNode(document.getElementById("marks").value);
  node3.appendChild(stu_marks_node);
  listx.appendChild(node1);
  listx.appendChild(node2);
  listx.appendChild(node3);
  var element = document.getElementById("stu_data");
  element.appendChild(listx);

 }else {
   alert("please enter marks below then 100");
 }
// myprint( enter_name_of_student,marks,sub_name);
 var sumof=marks.reduce(getSum);
 //console.log(marks);
}


function getSum(total, num) {
 return total + num;
}






