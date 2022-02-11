const numCount = document.getElementById('num-count');
const increase = document.getElementsByClassName('increase')[0];
const decrease = document.getElementsByClassName('decrease')[0];
const reset = document.getElementsByClassName('reset')[0];

let count = 0;



increase.addEventListener('click', function() {
    count++;
    numCount.innerText = count;
    countColor();
});

decrease.addEventListener('click', function() {
    count--;
    numCount.innerText = count;
    countColor();
}) 

reset.addEventListener('click', function(){
    count = 0;
    numCount.innerText = count;
    countColor();
});



function countColor (){
    if(count > 0){
        numCount.style.color = 'rgb(2, 112, 30)'
    } else { 
        if ( count == 0 ){
            numCount.style.color = 'black'
            }    else {
                     numCount.style.color = 'red'
    }
  }
}

