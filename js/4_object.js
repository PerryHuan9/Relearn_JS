function showInfo(obj) {

    var ouput="";
    if (typeof obj.name == "string") {
        ouput += "Name:" + obj.name + "\n";
    }

    if (typeof obj.age == "number") {
        ouput += "Age:" + obj.age + "\n";
    }

    alert(ouput);

}

showInfo({name: "perry", age: 22});
showInfo({age: 25});































