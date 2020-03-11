class Faq {
  constructor() {
    this.questions = document.querySelectorAll('article');
    this.init()
  }

  init(){
    // on crée l'evenement pour chaque article
    this.questions.forEach((element) =>{
      element.addEventListener(
        'click',
        ()=>{
          // on bascule avec ou sans current
          element.classList.toggle('current')

          // on gère la fermeture des autres elements ouverts.
          this.questions.forEach((element2) =>{
              if(element2.classList.contains('current') && element !== element2) {
                element2.classList.remove('current')
              }
          })
        }
      )
    });
  }
}

const faq = new Faq();
