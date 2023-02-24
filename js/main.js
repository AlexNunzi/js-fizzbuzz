const mainDom = document.querySelector('main');
const containerDom = document.createElement('div');

containerDom.classList.add('container');

mainDom.append(containerDom);

for(let i=1; i <=100; i++){

    let bgColor;
    let elementData;

    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} è divisibile per entrambi FizzBuzz`);
        bgColor = 'bg-red';
        elementData = 'FizzBuzz';
    } else if(i % 5 == 0){
        console.log(`${i} é divisibile per 5 Buzz`);
        bgColor = 'bg-yellow';
        elementData = 'Buzz';
    } else if (i % 3 == 0){
        console.log(`${i} è divisibile per 3 Fizz`);
        bgColor = 'bg-lightGreen';
        elementData = 'Fizz';
    } else {
        console.log(i);
        bgColor = 'bg-lightBlue';
        elementData = i;
    }

    const content = document.createElement('div');
    content.classList.add(bgColor);
    content.classList.add('square')
    content.append(elementData);
    containerDom.append(content);
}
