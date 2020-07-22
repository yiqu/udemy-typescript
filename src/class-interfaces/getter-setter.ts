// user getters and setters

class Computer {

  constructor(public cpu: string, public color: string, private id?: string){
  }

  /**
   * A getter for id
   */
  get pcId(): string {
    return this.id ?? "No ID";  //nullish colliasing
  }

  set setPcId(id: string) {
    if (!id) {
      throw new Error("Invalid ID");
    }
    this.id = id;
  }

}

const pc1 = new Computer("AMD", "Red");
// console.log(pc1.pcId); // No ID

const pc2 = new Computer("Intel", "Black");
pc2.setPcId = "01010";
//console.log(pc2) //Computer {cpu: "Intel", color: "Black", id: "010101"}