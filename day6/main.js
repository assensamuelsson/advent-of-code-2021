const parseInput = (input) => {
  const ringBuffer = input
    .split(",")
    .reduce((acc, line) => {
      acc[Number.parseInt(line)]++;
      return acc;
  }, Array.from({ length: 9 }).fill(0));

  return {
    ringBuffer,
    head: 0,
    length: ringBuffer.length,
  }
}

const simulate = (school) => {
  school.ringBuffer[(school.head + 7) % school.length] += school.ringBuffer[school.head]
  school.head = (school.head + 1) % school.length;
}

const print = (school) => {
  const total = school.ringBuffer.reduce((acc, val) => acc + val, 0);
  console.log(total);
}

// const school = parseInput("3,4,3,1,2");
const school = parseInput("1,5,5,1,5,1,5,3,1,3,2,4,3,4,1,1,3,5,4,4,2,1,2,1,2,1,2,1,5,2,1,5,1,2,2,1,5,5,5,1,1,1,5,1,3,4,5,1,2,2,5,5,3,4,5,4,4,1,4,5,3,4,4,5,2,4,2,2,1,3,4,3,2,3,4,1,4,4,4,5,1,3,4,2,5,4,5,3,1,4,1,1,1,2,4,2,1,5,1,4,5,3,3,4,1,1,4,3,4,1,1,1,5,4,3,5,2,4,1,1,2,3,2,4,4,3,3,5,3,1,4,5,5,4,3,3,5,1,5,3,5,2,5,1,5,5,2,3,3,1,1,2,2,4,3,1,5,1,1,3,1,4,1,2,3,5,5,1,2,3,4,3,4,1,1,5,5,3,3,4,5,1,1,4,1,4,1,3,5,5,1,4,3,1,3,5,5,5,5,5,2,2,1,2,4,1,5,3,3,5,4,5,4,1,5,1,5,1,2,5,4,5,5,3,2,2,2,5,4,4,3,3,1,4,1,2,3,1,5,4,5,3,4,1,1,2,2,1,2,5,1,1,1,5,4,5,2,1,4,4,1,1,3,3,1,3,2,1,5,2,3,4,5,3,5,4,3,1,3,5,5,5,5,2,1,1,4,2,5,1,5,1,3,4,3,5,5,1,4,3");
console.time("duration");
for (let day = 1; day <= 256; day++) {
  simulate(school);
}
console.timeEnd("duration");
print(school);

