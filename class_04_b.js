let abc= {
    name: "Anish",
    age:20,
    outer:function(){
        console.log("Here in lig",this.name);
        inner=()=>
        {
            console.log("Here in inner",this.name);
        }
        inner();
    }
}
abc.outer();