import {
	Given,
	When,
	And,
	Then,
} from "@badeball/cypress-cucumber-preprocessor"
const searchPage = require("../../pages/searchPage")

Given('O usuario esta na pagina de busca de CEP', () => {
    cy.visit('/')
})
// Scenario: Realizar busca com o valor "69005-040"
When('O usuario digita o valor "69005-040" no campo de busca', () => {
    searchPage.typeSearchInput('69005-040')
})
Then('O usuario visualiza o resultado da busca com o CEP "69005-040"', () => {
	searchPage.typeValueCep('69005-040')
})
// Scenario: Realizar a busca com o valor “Lojas Bemol”
When('O usuario digita o valor “Lojas Bemol” no campo de busca', () => {
    searchPage.typeSearchInput('Lojas Bemol')
})
Then('O usuario visualiza o resultado da busca com o nome "Lojas Bemol"', () => {
	searchPage.typeValueName('Lojas Bemol')
    searchPage.typeValueCep('69005-040')
})

