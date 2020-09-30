///<reference types="Cypress"/>

import GenericFunctions from '../functions/GenericFunctions'

describe('To check whether the entered string is palindrome or not',() =>{
    let inputString
    before(function(){
          cy.fixture('palindromdata').then((input)=>{
          inputString=input
        })
    })
    it('Verfiy that the given string is palindrom',() =>{
        const x = new GenericFunctions()
        let result = x.palindrom(inputString.palindromstring)
        expect(result).to.eq(inputString.palindromstring+' is a palindrom')
    })
    it('Verfiy that the given case-sensitive string is a palindrom',() =>{
        const x = new GenericFunctions()
        let result = x.palindrom(inputString.case_sensitive_palindromstring)
        expect(result).to.eq(inputString.case_sensitive_palindromstring+' is a palindrom')
    })
    it('Verfiy that the given number format string is a palindrom',() =>{
        const x = new GenericFunctions()
        let result = x.palindrom(inputString.palindromnumber)
        expect(result).to.eq(inputString.palindromnumber+' is a palindrom')
    })
    it('Verfiy that the given string is empty',() =>{
        const x = new GenericFunctions()
        let result = x.palindrom(inputString.emptystring)
        expect(result).to.eq('an empty string')
    })
    it('Verfiy that the given alphanumeric string is palindrom',() =>{
        const x = new GenericFunctions()
        let result = x.palindrom(inputString.alpha_numeric_sc_palindromstring)
        expect(result).to.eq(inputString.alpha_numeric_sc_palindromstring+' is a palindrom')
    })
    it('Verfiy that the given case-sensitive string is not a palindrom',() =>{
        const x = new GenericFunctions()
        let result = x.palindrom(inputString.case_sensitive_not_palindromstring)
        expect(result).to.eq(inputString.case_sensitive_not_palindromstring+' is not a palindrom')
    })
    it('Verfiy that the given string is not a palindrom',() =>{
        const x = new GenericFunctions()
        let result = x.palindrom(inputString.not_palindromstring)
        expect(result).to.eq(inputString.not_palindromstring+' is not a palindrom')
    })
    it('Verfiy that the given alphanumeric string is not a palindrom',() =>{
        const x = new GenericFunctions()
        let result = x.palindrom(inputString.alpha_numeric_sc_not_palindromstring)
        expect(result).to.eq(inputString.alpha_numeric_sc_not_palindromstring+' is not a palindrom')
    })
    it('Verfiy that the given number format string is not a palindrom',() =>{
        const x = new GenericFunctions()
        let result = x.palindrom(inputString.not_palindromnumber)
        expect(result).to.eq(inputString.not_palindromnumber+' is not a palindrom')
    })
})