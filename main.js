const dataSet = {
    header: 'Featured Presenters',
    image: ['./images/speaker1.jpg', './images/speaker7.jpg', './images/speaker3.jpg', './images/speaker8.jpg', './images/speaker5.jpg', './images/speaker6.jpg'],
    name: ['Hanna Isa', 'David Darwin', 'Suzan Sanny', 'Pate Petar', 'AIyan Yuhsu', 'Ramon Rui'],
    title: ['Global Artificial intelligence specialist', 'Python Developer', ' Product manager', 'College Professor', 'Mechanical Engeneer'],
    intro: ['Global Artificial intelligence specialist and Project manager at Umurava',
        ' David has worked on world leading project using AI technology as freelence Python Developer',
        'Susan has a lot of experience technology and she is excited to share her experience and her journey',
        'Pete has been teaching about AI for long time about two decates and he wrote three books on AI ',
        ' With help of AI Aiyan has launched a gas free car which will be really great forthe envirnment.',
        'Ramon has been specializing Artificial intelligence specialist and he has experience as Software Engeener'],
};

const speakers = document.getElementById('speakers')
for (let i = 0; i < dataSet.image.length; i += 1) {
    const SpeakerDiv = document.createElement('div');
    const script = `
      <div class="people">
      <div class="presenters">
                <img src="${dataSet.image[i]}" alt="speaker">
                <div class="words">
                    <h5 class="name">${dataSet.name[i]}</h5>
                    <p class="title">${dataSet.title[i]}</p>
                    <p class="intro"> ${dataSet.intro[i]}</p>
                 </div>
            </div>
     </div>`
    SpeakerDiv.innerHTML = script
    speakers.appendChild(SpeakerDiv);
}
const btn = document.createElement('button');
const img = document.createElement('img');
img.src ="./images/arrowicon.png";
btn.textContent = 'More'
btn.className = 'more';
btn.appendChild(img)
const click = document.querySelectorAll('.people');
for(let i=0;i<click.length;i += 1){
    if(i == 5){
       click[i].appendChild(btn);                                                                             
    }
}
const bady = document.querySelector('*');
const menu = document.querySelector('.menu-item-hidden');
const navBar = document.querySelector('.nav-bar');
const humbuger = document.querySelector('.humbuger');
const cancel= document.querySelector('.cancel')
humbuger.addEventListener('click',() =>{
    humbuger.style.display = 'none'
    cancel.style.display = 'inline'
 menu.classList.add('menu-item-active')
   

});

cancel.addEventListener('click', () => {
    menu.classList.remove('menu-item-active')
    cancel.style.display = 'none'
    humbuger.style.display = 'block'
});
 


