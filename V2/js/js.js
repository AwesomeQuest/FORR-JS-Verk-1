function doTheThing() {
    var products = ["circut", "wire", "switch", "resistor", "chair"];
    var a = "something", b = "something else";
    
    for (var i = 0; i < products.length; i++) {
        console.log("loop ",i);
        
        a = "id" + i ;
        b = products[i];
        
        document.getElementById(a).innerHTML = b;
    }
}