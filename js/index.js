const views = document.querySelector('.anass');
const botons = document.querySelectorAll('.btn');

botons.forEach(e => {
  e.addEventListener('click', (a) => {
      switch(a.target.innerText){
          case "C":
              views.innerText = ' ';
              break;
        case "←":
            if(views.innerText){
                views.innerText = views.innerText.slice(0, -1)
            }
            break;
        case "=":
            try{
                views.innerText = eval(views.innerText)
            }catch{
                views.innerText = 'This is Error'
            }
            break;
        default : 
             views.innerText += a.target.innerText;
      }
  })
})


function darkMode(){
    document.querySelector('.heading').classList.toggle('color');
    views.classList.toggle('viewso')
    document.body.classList.toggle('dark1');
    document.querySelector('.dark').classList.toggle('white');
    botons.forEach(e => {
     if(e !== 'C' && e !== '='){
        e.classList.toggle('nv')
     }
    })
}