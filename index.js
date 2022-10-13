// import { user } from "./utilitys.js";

var log4js = require("log4js");
var logger = log4js.getLogger();

function log() {
  logger.level = "debug";
  logger.debug("Some debug messages");

  console.log("hello world");
  // console.log(user("arlind"));
  var user11 = {
    first_name: "John",
    age: "38",
    department: "Software",
  };

  console.log(Object.keys(user11).length);
}

log();
