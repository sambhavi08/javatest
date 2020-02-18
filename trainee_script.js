let newarr1=localStorage.getItem("show");
var arr1=[];
if(newarr1){
    arr1=JSON.parse(newarr1);
}
function validate()
{   
    
    var value1=document.getElementById("traineeInfo").elements;

    var obj={};

                for( var y=0;y<value1.length;y++)
                {   
                            if(value1[y].type=="button")
                            {
                                continue;
                            }
                            if(value1[y].type=="submit")
                            {
                                continue;
                            }

                            
                            let uid=unique();
                            let name=value1[y].id;
                            let val=value1[y].value;
                            obj={"Unique_Id":uid,...obj,[name]:val};
                        
                 }
                
                 
                 if(arr1){
                            arr1=[...arr1,obj];
                 }
                 else{
                     arr1=obj;
                 }
        var result=JSON.stringify(arr1);
        if (typeof(Storage) !== "undefined")
         {
         localStorage.setItem("show",result);
        }
    clear();
    console.log(result);   
     
}

function clear()
{
    var ele= document.getElementById("traineeInfo").elements;
    for( var y=0;y<ele.length;y++)
    {
        if(ele[y].type=="button")
        {
            continue;
        }
        if(ele[y].type=="submit")
        {
            continue;
        }
        ele[y].value="";
    }
}
function unique()
{
    return  Math.random().toString(6).substr(2,5);
}
function transfer(){
   window.location="listing.html";
 }
function validate2(id){
    
          if (arr1){      
                                
                if(arr1.find(a=>a.uniqueUname == (document.getElementById(id).value)))
            
                    {            
                        console.log("in loop");                                
                     alert("Username already exist use another username");
                     document.getElementById("uniqueUname").value='';
                   alert("hiiii");
                     }
                     console.log("nhi mila"); 
                 }
                                                    
    }