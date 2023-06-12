# Promise

## 동기 비동기란?

- synchronous / Asynchronous
- 앞에 있는 코드부터 순차적으로 실행되는 것을 동기적으로 실행된다라고 한다.
- 비동기적인 명령을 실행시키면 각자가 주어진 시간에 맞춰 병렬적으로 코드가 실행되는 것을 비동기적으로 실행된다고 한다.
- 나중에 ajex 강의 찾아보기
- 웹브라우저, 웹서버가 통신할 때 사용하는 fetch에 대해 알아보자.
- fetch api는 promise를 사용한다.

```javascript
function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
console.log(`start`);
timer(1000)
  .then(function (time) {
    console.log(`time: ${time}`);
    return timer(time + 1000);
  })
  .then(function (time) {
    console.log(`time: ${time}`);
    return timer(time + 1000);
  })
  .then(function (time) {
    console.log(`time: ${time}`);
    console.log(`end`);
  });
```

- await 사용하기

```javascript
async function run() {
  console.log(`start`);
  var time = await timer(1000);
  console.log(`time: ${time}`);
  time = await timer(time + 1000);
  console.log(`time: ${time}`);
  time = await timer(time + 1000);
  console.log(`time: ${time}`);
  console.log(`end`);
}

run();
```

```javascript
async function run2() {
  console.log(`parent start`);
  await run();
  console.log(`parent end`);
}
```
