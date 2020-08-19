
// Otestuje ci sa v modalnom okne zobrazuje obsah a ci je spravny
// na kazdej stranke klikne na nahodne vybraneho pokemona a overi ci obsah modalneho okna je spravny
describe('Check content of modal window', () => {
    it('Testing modal', () => {
        cy.visit('http://127.0.0.1:3000')


        cy.get('.sc-AxiKw > span').each(($el, index, $list) => {                            //cyklus prejde cez kazdu stranku
            cy.wrap($el).click()                                                            //klikne na nasledujucu stranku

            var index = Math.floor(Math.random() * 50)                                      //ulozim si nahodne vybrany index do premennej
            cy.get('.sc-AxjAm').find('li').eq(index).click()                                // otvori modalne okno kliknutim na pokemona (objekt)

            cy.get('.sc-AxgMl > div > h1').invoke('text').then((text1) => {
                cy.get('.sc-AxjAm').find('li').eq(index).invoke('text').should((text2) => {
                    expect(text1).to.eq(text2)                                              //porovna ci sa nadpis v modalnom okne zhoduje s textom v objekte na ktory klikol
                })                                                                          //(nazov pokemona na ktoreho klikol musi byt rovnaky ako nadpis v modalnom okne)
            })

            cy.get('.sc-AxgMl > div > img')                                                 //otestuje ci sa v modalnom okne nachadza obrazok pokemona a podnadpisy
            cy.get('.sc-AxgMl > div > h2')

            cy.get('.sc-AxmLO').click()                                                     //nakoniec zavrie modalne okno
        })                                                                                  //tieto kroky sa opakuju az kym neprejde vsetky stranky
    })
})