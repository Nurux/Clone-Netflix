function language(lange) {
    if (lange == 'ingles'){
        ingles()
    }

}

function ingles(){
    let text = document.querySelector('.desc')
    let titulo = text.querySelector('.text')
    let h3 = text.querySelector('h3')
    let p = text.querySelector('p')
    let e = document.querySelectorAll('button#email')

    titulo.innerHTML = 'Unlimited movies, TV<br>shows, and more.'
    h3.textContent = 'Watch anywhere. Cancel anytime.'
    p.textContent = 'Ready to watch? Enter your email to create or restart your membership.'
    
    for(let i =0; i < e.length;i++){
        e[i].innerHTML = 'Get Started <i class="fa-solid fa-chevron-right"></i>'
    }
    
    text = document.querySelector('.desc2')
    titulo = text.querySelector('.text-2')
    p = text.querySelector('p')
    
    titulo.textContent = 'Enjoy on your TV.'
    p.innerHTML = 'Watch on Smart TVs, Playstation, Xbox,<br> Chromecast, Apple TV, Blu-ray players, and<br>more.'

    text = document.querySelector('.desc3')
    titulo = text.querySelector('.text-2')
    p = text.querySelector('p')
    
    titulo.innerHTML = 'Download your shows<br>to watch offline.'
    p.innerHTML = 'Save your favorites easily and always have<br>something to watch.'

    text = document.querySelector('.desc4')
    titulo = text.querySelector('.text-2')
    p = text.querySelector('p')
    
    titulo.innerHTML = 'Watch everywhere.'
    p.innerHTML = 'Stream unlimited movies and TV shows on<br>your phone, tablet, laptop, and TV without<br>paying more.'

    text = document.querySelector('.desc5')
    titulo = text.querySelector('.text-2')
    p = text.querySelector('p')
    
    titulo.textContent = 'Create profiles for kids.'
    p.innerHTML = 'Send kids on adventures with their favorite<br>characters in a space made just for them—<br>free with your membership.'
    
    text = document.querySelector('.desc6')
    titulo = text.querySelector('.text-2')
    p = text.querySelector('p')

    titulo.textContent = 'Frequently Asked Questions'
    p.innerHTML = 'Ready to watch? Enter your email to create or restart your membership.'

}