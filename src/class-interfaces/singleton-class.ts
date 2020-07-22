class LoggerClass {

  private static instance: LoggerClass;

  logs: string[];

  private constructor() {
    this.logs = [];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new LoggerClass();
    return this.instance;
  }

  logFile(log: string) {
    this.logs.push(log);
  }

  printLogs() {
    console.log(this.logs);
  }
}

//const lc1 = new LoggerClass(); // ERROR cannot , with private constrctor
const lc1 = LoggerClass.getInstance();
lc1.logFile("Hello");
lc1.logFile("Again");
lc1.printLogs(); //["Hello", "Again"]

const lc2 = LoggerClass.getInstance();
lc2.printLogs(); //["Hello", "Again"]

/**
 * since its a singleton, they share the same instance.
 */