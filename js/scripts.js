class Validator {
    constructor() {
        this.validations = [
            'data-min-length',
        ]
    }

    // iniciar a validação
    validate(form) {
        //inputs
        let inputs = form.getElementsByTagName('input');
        
        // transformar HTMLCollection em arr
        let inputsArray = [...inputs];

        console.log(inputsArray)
        
        inputsArray.forEach((input) => {


            for(let i = 0; this.validations.length > i; i++) {
                if(input.getAttribute(this.validations[i]) != null) {

                    console.log(input.getAttribute(this.validations[i]));
                    let method = this.validations[i].replace("data-", "").replace("-", "");

                    // valor do input
                    let value = input.getAttribute(this.validations[i])
          
                    // invoca o método
                    console.log(method);
                    console.log(value);
                    
                    this[method](input,value);
            }
        }
         
        }, this);

    }
    minLength(input, MinValue) {
        console.log(input);
        console.log(MinValue)
        
        let inputLength = input.value.length;
        
        let errorMensage= `o campo precisa ter pelo menos ${Minvalue} caracteres`
        
    if(inputLength < this.MinValue) {
        this.printMessage(input, errorMensage)
    }
}

printMessage(input, msg) {
    
    let template = document.querySelector('.erro_de_validação').cloneNode(true);
    
    template.textContent = msg;
    
    let inputParent = input.parentNode;
    
    template.classlist.remove('template')
    
    inputParent.appendChild(template);
}

}

let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');

let validator = new Validator();

// evento de envio do form, que valida os inputs
submit.addEventListener('click', function(e) {
  e.preventDefault();

  validator.validate(form);
});
