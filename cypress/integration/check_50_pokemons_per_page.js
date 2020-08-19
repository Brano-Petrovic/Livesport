
// Otestuje ci sa na kazdej stranke nachadza 50 pokemonov (elementov), okrem poslednej kde musi byt aspon jedna a maximalne 50
describe('Check all 50 pokemons per page', () => {
    it('Open main page', () => {
        cy.visit('http://127.0.0.1:3000')

        cy.get('.sc-AxiKw > span').each(($el, index, $list) => {                                        //cyklus prejde cez kazdu stranku
            cy.wrap($el).click()                                                                        //klikne na nasledujucu stranku
            if ($el.text() != $list.last().text()){                                                     //porovna ci je otvorena posledna stranka alebo nie (pretoze posledna stranka nemusi mat presne 50 pokemonov(objektov))
                cy.get('.sc-AxjAm').find('li').should('have.length', 50)                                //spocita ci sa na stranke nachadza 50 pokemonov(objektov)
            }   
            else{
                cy.get('.sc-AxjAm').find('li').should('have.length.greaterThan', 0).and('have.length.lessThan', 51) //spocita ci sa na poslednej stranke nachadza aspon 1 pokemon (objekt) ale maximalne 50
            }
        })
    })
})

