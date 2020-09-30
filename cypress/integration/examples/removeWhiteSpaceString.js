///<reference types="Cypress"/>

import GenericFunctions from '../functions/GenericFunctions'

describe('To remove white space from the string',() =>{
    let inputString
    before(function(){
          cy.fixture('whitespacestringdata').then((input)=>{
          inputString=input
        })
    })
    it('Verify white space available inbetween string is removed',() =>{
        const x = new GenericFunctions()
        let result = x.removeBlankSpace(inputString.whitespace_inbetween_string)
        expect(result).to.eq(inputString.string_without_whitespace)
    })
    it('Verify white space available before string is removed',() =>{
        const x = new GenericFunctions()
        let result = x.removeBlankSpace(inputString.whitespace_before_string)
        expect(result).to.eq(inputString.string_without_whitespace)
    })
    it('Verify white space available after string is removed',() =>{
        const x = new GenericFunctions()
        let result = x.removeBlankSpace(inputString.whitespace_after_string)
        expect(result).to.eq(inputString.string_without_whitespace)
    })
    it('Verify white space available inbetween after and before string is removed',() =>{
        const x = new GenericFunctions()
        let result = x.removeBlankSpace(inputString.whitespace_before_after_inbetween_string)
        expect(result).to.eq(inputString.string_without_whitespace)
    })
    it('Verify white space is removed from empty string if avaiable',() =>{
        const x = new GenericFunctions()
        let result = x.removeBlankSpace(inputString.emptystring)
        expect(result).to.eq('')
    })
})