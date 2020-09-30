const spnText = document.querySelector('.text');
const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi vel aspernatur laborum similique dicta porro eum minima eius. Enim accusantium quibusdam et architecto reprehenderit quo esse, debitis vero a!';



let index = 0;



const addLetter = () => {
    spnText.textContent += text[index];
    index++;
    if (index == text.length) {
        clearInterval(timer);
    }
}

const timer = setInterval(addLetter, 100);


// function addLetter() {

//     spnText.textContent = text.slice(0, index);
//     index++;
//     if (index > text.length) {
//         index = 0;
//     }
// }
// setInterval(addLetter, 100);