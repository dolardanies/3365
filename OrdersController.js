var lista = {
    " order_id ": 1,
    " table_id ": 1,
    " productos ": [{
            " producto ": " PIZZA ",
            " cantidad ": 3,
            " precio ": " $ 15.000 "}
        ,
        {
            " producto ": " HAMBURGUESA ",
            " cantidad ": 1,
            " precio ": " $ 12.300 "
        }
    ]
}
addOrder = function(){
	var insert = {2:{"orderAmountsMap":{"HOTDOG":10,"HAMBURGUER":20,"BEER":40},"tableNumber":2}};
	axios.post('/orders', insert)
		.then(function(){                
			$("#tablasActuales").append("<p>Orden 1. </p>");
                        $("#tablasActuales").append("<table class="table"><thead class="thead-dark"><tr><th scope="col">PRODUCTO</th><th scope="col">CANTIDAD</th><th scope="col">PRECIO</th></tr></thead>");
			for(map in insert[2].orderAmountsMap){
				//Render the rows
				$("#Order"+2).append("<tbody> <tr> <td>"+map+"</td> <td>"+insert[2].orderAmountsMap[map]+"</td> </tr> </tbody>");
			}
			
		})
		.catch(function(error){
			console.log(error);
			errorMessage();
		});
}

removeOrderById = function(id){
	axios.delete('/orders/'+id)
		.then(function(){
                        document.getElementById("tag"+id).remove();
			document.getElementById("Order"+id).remove();
		})
		.catch(function(error){
			console.log(error);
			errorMessage();
		});
}




