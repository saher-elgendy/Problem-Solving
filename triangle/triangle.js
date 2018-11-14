

You are a graphic designer and you always feel upset of how many triangles you create 
in the project you work on, so you got an idea :thinking: to write a javascript function
that every time you call it, generates 3 values represent the angles of this triangle,
but you do not need any of these angels to be less than 30 degrees, your function should 
return every time 3 random values represent the angles, and of course you need sum of all
of them to be 180 every time.


for Example

triangle(); // 60,40,80
triangle();// 70,30,80
triangle();// 56 77 47

//Solution 1


const triangle = () => {
  const a = Math.floor(Math.random() * (120 - 30 + 1)) + 30;
  const b = Math.floor(Math.random() * (90 - 30 + 1)) + 30;
  const c = 180 - (firstAngle + secondAngle);
  return `${a},${b},${c}`;
}
----------------------------------------------------------------------------------------------

//Solution2

const triangle = () => {
  let a, b, c;

  while(!(a + b + c === 180)){
    a = Math.floor(Math.random() * 120) + 30;
	b = Math.floor(Math.random() * 120) + 30;
    c = Math.floor(Math.random() * 120) + 30;
  }

  return `${a},${b},${c}`;
}









