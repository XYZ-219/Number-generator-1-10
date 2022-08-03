let button = document.getElementById('button');
let show = document.getElementById('display');
// let button = document.getElementsByTagName('button')[0];

// window.alert(show);

const numberGenerator = () => {
    let randNum = Math.floor(Math.random() * 11);
    show.innerHTML = randNum;
    
}

// window.alert(numberGenerator());


button.onclick = numberGenerator;
//button.addEventListener("click", numberGenerator);


