const literalTypeNumber = 4.2; // literal type of 4.2, never will change

let doorAction: "push" | "pull";
doorAction = "pull"; // only these literals are allowed
doorAction = "push";
// doorAction = "kick" // ERROR