import { tri, sin, cos, PI, TAU, isLast } from "./math.js";
import { zigzagColumns2d, hilbert2d } from "@thi.ng/grid-iterators";
import {
  concat,
  cycle,
  interleave,
  butLast,
  take,
  reverse,
  iterator,
  mapIndexed,
  range,
  partition,
  map,
} from "@thi.ng/iterators";

console.log(`range: ${[...range(0, 1, 0.1)]}`);

console.log(
  `interleave: ${[...interleave(range(0, 1, 0.1), cycle(iterator([0])))]}`
);

// 8 -> 8*2 - 1 = 15
console.log("4 beat test begin");
for (let i = 2; i < 30; i++) {
  const result = i * 2 - 1;
  if (result % 4 == 0) console.log(`4 beat result=${result}, i=${i}`);
  if (result % 3 == 0) console.log(`3 beat result=${result}, i=${i}`);
}

// number of points
let pts = 8;
let ptsStep = 1 / pts;

const zero = () => cycle(iterator([0]));
const linearRange = [...range(0, 1 + ptsStep, ptsStep)];
console.log("linear range test");
//console.log([...take(pts + 1, linearRange)]);
console.log([...linearRange]);
console.log([...take(pts + 1, reverse(linearRange))]);
console.log([...reverse(linearRange)]);

const linearPoints = [...partition(2, 2, interleave(linearRange, zero()))];
console.log("linear test");
console.log([...linearPoints]);

/* test stuff */
const basicLineForward = butLast(linearPoints);
const basicLineReverse = butLast(reverse(linearPoints));

const basicLine1Way = cycle(concat(basicLineForward, basicLineReverse));

console.log(`TEST line 1 way:`);

console.log([...take(pts * 3 + 1, basicLine1Way)]);

// console.log("forward test");
// console.log([...basicLineForward]);
// console.log("reverse test");
// console.log([...basicLineReverse]);

// second try
const linear = (x) => [x / pts, 0];

const basicLine1Way2 = partition(
  2,
  2,
  interleave(map(linear, range(0, pts)), cycle(iterator([0])))
);

console.log(`TEST line 2 way:`);

console.log(basicLine1Way2.next().value);
console.log(basicLine1Way2.next().value);
pts = 100;
console.log(basicLine1Way2.next().value);
console.log(basicLine1Way2.next().value);
