var mongo = require("mongodb");
var dbhost = "127.0.0.1",
    dbport = 27017;


var db=new mongo.Db("BankDB", new mongo.Server(dbhost,dbport, {}));
//customer signup
        db.open(function(error){
            console.log("We are connected to DB now.");
            db.collection("user", function(error,collection){
                collection.insert({
                    id: "1",
                    name: "John",
                    company:"intersources"
                });
                console.log("Inserted data");
            });// create databasse , create collection and insertdata

        });
