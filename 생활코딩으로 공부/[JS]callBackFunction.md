# CallBack Function

- callback 함수는 다른 함수의 파라미터로 들어간 함수를 callback 함수라고 한다.
- callback 함수의 예시로는 filter()메서드를 들 수 있다.
- [filter()]()메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

```javascript
const words = ["orange", "limit", "elicetrackai8", "attribute", "member"];

const result = words.filter((word) => word.length > 6);

console.log(result); //expected output: Array ['elicetrackai8', 'attribute', 'blackpink']
```

- filter의 매개변수 `callback`은 각 요소를 시험할 함수이고 true를 반환하면 요소를 유지하고, false를 반환하면 버린다.
- element, index, Optional 세개를 매개변수로 받는다.
  - element : 처리할 요소

```javascript
function myFilter(origin, callback) {
  var result = [];
  for (var i = 0; i < origin.length; i++) {
    var current = origin[i];
    if (callback(current)) {
      result.push(current);
    }
  }
  return result;
}
newWords = myfilter(words, (element) => element.length > 6);
```
