"use strict";
var LoggerClass = /** @class */ (function () {
    function LoggerClass() {
        this.logs = [];
    }
    LoggerClass.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new LoggerClass();
        return this.instance;
    };
    LoggerClass.prototype.logFile = function (log) {
        this.logs.push(log);
    };
    LoggerClass.prototype.printLogs = function () {
        console.log(this.logs);
    };
    return LoggerClass;
}());
//const lc1 = new LoggerClass(); // ERROR cannot , with private constrctor
var lc1 = LoggerClass.getInstance();
lc1.logFile("Hello");
lc1.logFile("Again");
lc1.printLogs(); //["Hello", "Again"]
var lc2 = LoggerClass.getInstance();
lc2.printLogs(); //["Hello", "Again"]
/**
 * since its a singleton, they share the same instance.
 */ 
