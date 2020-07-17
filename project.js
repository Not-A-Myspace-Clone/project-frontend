

function append_to_div(div_name, data){ 
    document.getElementById(div_name).innerText += data; 
} 
  
document.getElementById("my_button") 
        .addEventListener('click', function() { 
      
    var user_name = document.getElementById("name"); 
    var value = user_name.value.trim(); 
      
    if(!value) 
        alert("Name Cannot be empty!"); 
    else 
        append_to_div("my_div", value+"\n" , "<hr>"); 
      
    user_name.value = ""; 
}); 