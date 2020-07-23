// ** EXAMPLE 1 -------------------------------------------

// Write  a class that is a generic class

type StringNum = string | number;

class MyStorage<T extends string | number> {
  private data: T[] = [];

  constructor(initItems?: T[]) {
    if (initItems && initItems.length > 0) {
      this.data = [...initItems];
    }
  }

  addItems(item: T) {
    this.data.push(item);
  }

  printItems(): T[] {
    return this.data;
  }
}

const mixedStorage = new MyStorage<StringNum>();
mixedStorage.addItems("Kevin");
mixedStorage.addItems(20);
//console.log(mixedStorage.printItems()); //["Kevin", 20]

const mixedStorage2 = new MyStorage<StringNum>(["Kevin", 11, 0]);
//console.log(mixedStorage2.printItems()); //["Kevin", 11, 0]