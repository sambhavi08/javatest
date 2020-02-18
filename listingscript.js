var rs=localStorage.getItem('show');
var fresult=JSON.parse(rs);
var result=[];
for (let i = 0; i < fresult.length; i++) {
    if (fresult[i].mySelect =='active') {
        result.push(fresult[i]);
    }
}
console.log(result);
let head="";
let data="";
var count=0;
for(let i in result)
{       

        data+="<tr>";
        for(let j in result[i])
        {
            if(count==0)
            {
                head +="<th>" + j + "</th>";
                
            }
           
            data +="<td>" + result[i][j] +"</td>";
            
        }
        count++;
       
        data += "<td>" + "<a onclick=\"update("+i+")\">Update</a>" +"</td>";   
        data += "<td>" + "<a onclick=\"deletee("+i+")\">Delete</a>" +"</td>";
        
        data+="</tr>";
}

document.getElementById("head").innerHTML=head;
document.getElementById("data").innerHTML=data;

function trainee()
{
    window.location= "add_trainee.html";
}
function update(index)
{
 
  if (typeof(Storage) !== "undefined")
         {
            let indexx=JSON.stringify(index);
         localStorage.setItem("index",index);
        }
        window.location="update_trainee.html";   
}
function deletee(index)
{
    
    result.splice(index,1);
    
    let nresult=JSON.stringify(result);
    alert("This data wil be deleted");
         localStorage.setItem("show",nresult);
        
         window.location="listing.html"; 
        }

    
