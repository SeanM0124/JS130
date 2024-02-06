function startCounting() {
  let number = 0;
  let counterId = setInterval(function() {
    number++
    console.log(number);
  }, 1000);
  return counterId;
}
let id = startCounting();

function stopCounting(id) {
  clearInterval(id)
}

stopCounting(id);