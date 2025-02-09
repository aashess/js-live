// Write a function racePromises(p1, p2) that takes two promises and returns a new promise that
//  resolves or rejects as soon as either of the given promises settles (whichever is first).

// Requirements:

// Use Promise.race() to determine which promise settles first.
// If the first resolved promise wins, log "First resolved:", result.
// If the first rejected promise wins, log "First rejected:", error.
// Test the function by creating two promises:
// One should resolve after 2 seconds.
// One should reject after 1 second.

let p1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Resolved is performed first.");
  }, 2000)
);

let p2 = new Promise((_, reject) =>
  setTimeout(() => {
    reject("Rejected is performed first.");
  }, 1000)
);

function racePromises(p1,p2) {
    new Promise.race(([p1,p2])
    .then((result) => 
    console.log(p1)
    ) 
}