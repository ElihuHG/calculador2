


$(document).ready(function(){
    $("#btnCalcular").click(function(){
       var operador = $("#res1").val();
       var v1 = parseInt( $("#primNum").val());
       var v2 = parseInt( $("#segNum").val());
       var res=''; 
        



       if(operador=='+'){
         res = v1 + v2;
        
       } 
       else if(operador == '-'){
           res = v1-v2;
           
         }  
       
       else if(operador == '*'){
        res = v1*v2;
        
         }  

        else if(operador == '/'){
        res = v1/v2;
       
         }  

         else{
           alert("Ese no es un operador")
         }

         $("#resultado").text("el resultado es " + res);

     
        
    });
  
});

