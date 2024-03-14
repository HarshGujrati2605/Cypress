import {Given , When ,Then, BeforeStep, After} from "@badeball/cypress-cucumber-preprocessor"
/// <reference types="Cypress" />

import Home from '../Home';

var datalist = []
var alerttext;
var totalprice = 0.0;
const home = new Home()

before(()=>{

    cy.log('The fixyure is loaded before running the test!!!')

    cy.fixture('prdname').then(data => {

        datalist = data.Products
    })

})

Given('I open ecommerce website', () => {

    cy.visit(Cypress.env('url'))
})

When('I add products to the cart', () => {


        for (let index = 0; index < datalist.length; index++) {
            const productname = datalist[index];
            cy.AddProduct(productname)


        }

    

})

When('I valdiate the total prices', () => {

    

    home.getcartbutton().click()

    home.getPrdAddedInCart().each(($element, index, $list) => {

        cy.log("Prd added in the cart is " + $element.text())

        cy.Validatetext(datalist[index], $element.text())
    })

    home.getproductpricescart().each(($element, index, $list) => {

        let prc = $element.text()

        cy.log(prc.substring(3).trim())

        totalprice += parseFloat(prc.substring(3).trim())




    }).then(() => {
        cy.log("Final price of product is {" + totalprice + "}")
        home.getTotalPriceVisble().then((prcvisible) => {

            cy.log(prcvisible.text().substring(1).trim())
            cy.log(totalprice)
            cy.Validatetext(prcvisible.text().substring(1).trim(), totalprice)

        })

    })




})


Then('select the country and validate the success message', () => {

    home.getchekoutbutton().click()
    home.getcountrytextfield().type('India')
    home.getsuggestions().click()
    home.getpurchasebutton().click()
    home.getalert().then($alert => {
        cy.GetTextFromElement($alert).then(alttext => {

            cy.Validatetext(alttext, "Thank you! Your order will be delivered in next few weeks :-).")

        })

    })



})














