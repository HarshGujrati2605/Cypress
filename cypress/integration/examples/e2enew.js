/// <reference types="Cypress" />

import Homepage from "../Pageobjetcs/Homepage"

describe("Fixture and custom commands demo", () => {
    var datalist = []
    var alerttext;
    var totalprice = 0.0;
 


    it("Test case 1", () => {

        const home = new Homepage()

        cy.visit(Cypress.env('url'))

        cy.fixture('prdname').then(data => {
           
            datalist = data.Products

            cy.log(datalist.length)

            for (let index = 0; index < datalist.length; index++) {
                const productname = datalist[index];
                cy.AddProduct(productname)


            }

            home.getcartbutton().click()
            
            home.getPrdAddedInCart().each(($element , index, $list)=>{

                cy.log("Prd added in the cart is " +$element.text())

                cy.Validatetext(datalist[index] , $element.text())
            })

            home.getproductpricescart().each(($element , index , $list)=>{

                let prc = $element.text()

                cy.log(prc.substring(3).trim())

                totalprice += parseFloat(prc.substring(3).trim())

                

                
            }).then(()=>{
                cy.log("Final price of product is {"+totalprice+"}")
                home.getTotalPriceVisble().then((prcvisible)=>{

                    cy.log(prcvisible.text().substring(1).trim())
                    cy.log(totalprice)
                    cy.Validatetext(prcvisible.text().substring(1).trim() , totalprice)

                })

            })

             
          
            home.getchekoutbutton().click()
            
           
            home.getcountrytextfield().type('India')
            home.getsuggestions().click()
            home.getpurchasebutton().click()   
            home.getalert().then($alert=>{
               cy.GetTextFromElement($alert).then(alttext =>{

                cy.Validatetext(alttext , "Thank you! Your order will be delivered in next few weeks :-).")

               })

            })


            
       





        })





        // cy.get('h4.card-title a').each(($ele , index , $list)=>{

        //     var prdtext = $ele.text()
        //     cy.log(prdtext)
        //     if(prdtext.includes('iphone X')){

        //         cy.get('.btn.btn-info').eq(index).click()
        //     }

        // })

    })


})