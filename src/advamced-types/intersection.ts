type SoccerPlayer = {
  backNumber: number;
  speed: number;
  name: string;
}

type FootballPlayer = {
  name: string;
  college: string;
}

// created a intersection type
type CollegePlayer = SoccerPlayer & FootballPlayer;

// all the fields from both types are required
let pla1: CollegePlayer = {
  backNumber: 1,
  speed: 10,
  name: "Kevin",
  college: "GMU",
  //hi: 1 //error
}

// union. Either you have all the properties from one of them or other one
type MaybeCollegePlayer = SoccerPlayer | FootballPlayer | string;

let pl2: MaybeCollegePlayer = {
  name: "Kevin",
  speed: 1,
  backNumber: 10
}

let pl21: MaybeCollegePlayer = {
  name: "Kevin",
  college: "GMU"
}

let p31: MaybeCollegePlayer = "Hi"