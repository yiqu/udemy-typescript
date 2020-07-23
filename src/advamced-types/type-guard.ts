type SoccerPlayer1 = {
  backNumber: number;
  speed: number;
  name: string;
}

type FootballPlayer1 = {
  name: string;
  college: string;
}

type ProPlayer = SoccerPlayer1 | FootballPlayer1;

function printSomeInfo(p: ProPlayer) {
  p.name // allowed;
  //p.backNumber // doesnt work

  // use type guard
  if ('backNumber' in p) {
    p.backNumber; // TS knows this is a Soccer Plyaer
  }

  if ('college' in p) {
    p.college; // TS knows this is a football player
  }

  // Type assertion  something as ...
  if ((p as SoccerPlayer1).backNumber) {
    (p as SoccerPlayer1).backNumber;
  }

  // Type casting <Something>stuff
  if ((<SoccerPlayer1>p).backNumber) {
    (p as SoccerPlayer1).backNumber;
  }

}