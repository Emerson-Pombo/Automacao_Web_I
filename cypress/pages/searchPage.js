class searchPage {
    elements = {
        searchInput: () => cy.get('#endereco').click(),
        valueCep: () => cy.get('#resultado-DNEC > tbody > tr > td:nth-child(4)'),
        valueName: () => cy.get('#resultado-DNEC > tbody > tr > td:nth-child(1) > a > br'),
    }

    typeSearchInput = (searchInput) => {
        this.elements.searchInput().type(searchInput).type('{enter}')
    }
    typeValueCep = (cep) => {
        this.elements.valueCep('have.text', cep)
    }
    typeValueName = (name) => {
        this.elements.valueName('have.text', name)
    }
}
module.exports = new searchPage()