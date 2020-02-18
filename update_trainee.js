let indexx=localStorage.getItem('index');
var ind=JSON.parse(indexx);
var objr={};
var rs=localStorage.getItem('show');
var fresult=JSON.parse(rs);
console.log("old",fresult);
document.getElementById("firstName").value=fresult[ind].firstName;
document.getElementById("lastName").value=fresult[ind].lastName;
document.getElementById("uniqueUname").value=fresult[ind].uniqueUname;
document.getElementById("password").value=fresult[ind].password;
document.getElementById("email").value=fresult[ind].email;
document.getElementById("phNumber").value=fresult[ind].phNumber;
document.getElementById("dob").value=fresult[ind].dob;
document.getElementById("mySelect").value=fresult[ind].mySelect;
 uid=fresult[ind].uid;
function update(){
   
   var value1=document.getElementById("traineeInfo").elements;
   for( var y=0;y<value1.length;y++)
                {   
                            if(value1[y].type=="button")
                            {
                                continue;
                            }
                            if (fresult)
                            {
                                        if(value1[y].id=="uniqueUname")
                                        {
                                            
                                            if(fresult.find(a=>a.uniqueUname != value1[y].value))
                                            {
                                                alert("Username cant be updated");
                                                break;
                                            }
                                        }
                            }
                  }
                  
   obj={"Unique_Id": fresult[ind].Unique_Id,"firstName":document.getElementById("firstName").value ,"lastName":document.getElementById("lastName").value,"uniqueUname":fresult[ind].uniqueUname,"password":document.getElementById("password").value,"email":document.getElementById("email").value,"phNumber":document.getElementById("phNumber").value,"dob":document.getElementById("dob").value,"mySelect":document.getElementById("mySelect").value};
   
   fresult.splice(ind,1);
   fresult.push(obj);
   localStorage.clear();
   if (typeof(Storage) !== "undefined")
   {
      let ffresult=JSON.stringify(fresult);
   localStorage.setItem("show",ffresult);
  }
  window.location="listing.html";
}
