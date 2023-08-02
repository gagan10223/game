document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('question').addEventListener('click', random);
    const memoryImages = document.getElementsByClassName('memory');
    let counter = 0;
    let list =[]
    for (const image of memoryImages) {
        image.addEventListener('click', () => {
            if (image.src.endsWith('what.png')) {
                revealImage(image);
                a = revealImage(image);
                list.push(a)
                if(counter > 0 && counter <= 3)
                {
                    if(image.className.split(' ')[1] == list[0]?.className.split(' ')[1])
                    {
                        counter++;
                        if(counter === 3)
                        {
                            addnew(list[0]?.className.split(' ')[1]);
                            counter = 0;
                            list = []
                            return ;
                        }
                        return;
                    }
                    else 
                    {
                        setTimeout(() => {
                            list.forEach(img => img.src = 'images/what.png');
                            list = [];
                            counter = 0;
                            }, 2000);
                        return;
                    }
                }
                counter++;
            }
        });
    }
});

function random() {
    let array = Array.from(document.getElementsByClassName('memory'));
    let changed = change(array);
    array.forEach((a) => a.remove());
    changed.forEach((a) => document.getElementById('new1').appendChild(a));
    changed.forEach(a=> {a.src = 'images/what.png';});
    const foundSection = document.getElementById('found');
    while (foundSection.firstChild) {
        foundSection.removeChild(foundSection.firstChild);
    }
    
}

function change(a) {
    for (let i = a.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function revealImage(a)
{
    const b = `images/${a.id}.png`
    a.src = b;
    return a;
    
}

function run(){
    let array = Array.from(document.getElementsByClassName('memory'));
    array.forEach(a=> {a.src = 'images/what.png';});
}
function addnew(b)
{
    const h1 = document.createElement('h1');
    h1.textContent = `images found from: ${b}`;
    document.getElementById('found').appendChild(h1);
    if (Array.from(document.getElementById('found').children).length === 8) {
        setTimeout(() => {
            window.alert("Good job, you won!");
            random(); 
        }, 2000); 
    }
}
