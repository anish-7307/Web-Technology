function bakecake(mycallback){
    console.log("Baking cake...");
    setTimeout(() => {
        console.log("Cake is ready!");
        mycallback();
    }, 2000);
}
bakecake()