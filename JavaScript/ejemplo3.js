var global = "Variable Global"

function externa (){
    var externa = "Var Externa"
    function interna (){
        console.log (externa);
    }
        interna ()
    }
externa();    
