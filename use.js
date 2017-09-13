
const url = 'http://localhost:12345/get';
let results;
// var results;
function MyAutoRun() {

  getData();
  // results = getData;
  console.log('results');
  console.log(results);
  // showDate(results);

}

function getData() {
  fetch(url, { method: 'GET' }).then(
    res => res.json()).then(
      resText => {
        results = resText;
      }
    ).then(
      () => {
        showDate();
      }

    );
}

function showDate() {
  console.log('showDate');

  for (var index in results){
    // console.log('index');
    // console.log(index);
    // console.log('results[index].name');
    console.log(results[index].name);
    // document.createElement('h3').innerHTML = results[index].name;
    var b;
    (b = document.createElement("button")).innerHTML = "click me";
  }

  // results.forEach((result) => {
  //   document.createElement('h3').innerHTML = result.name;
  //   console.log('result');
  // });


  // console.log('result');
  // console.log(results);
  // document.getElementById('hh').innerHTML = result;
}
