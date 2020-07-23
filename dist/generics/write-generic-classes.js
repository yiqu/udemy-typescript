"use strict";
// ** EXAMPLE 1 -------------------------------------------
class MyStorage {
    constructor(initItems) {
        this.data = [];
        if (initItems && initItems.length > 0) {
            this.data = [...initItems];
        }
    }
    addItems(item) {
        this.data.push(item);
    }
    printItems() {
        return this.data;
    }
}
const mixedStorage = new MyStorage();
mixedStorage.addItems("Kevin");
mixedStorage.addItems(20);
//console.log(mixedStorage.printItems()); //["Kevin", 20]
const mixedStorage2 = new MyStorage(["Kevin", 11, 0]);
//console.log(mixedStorage2.printItems()); //["Kevin", 11, 0]
