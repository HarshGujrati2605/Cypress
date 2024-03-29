
class Homepage{

    getprdnamelist(){

        return cy.get('h4.card-title a')
    }


    getaddbuttonlist(){


        return cy.get('.btn.btn-info')
    }

    getcartbutton(){

        return cy.get('a.nav-link.btn.btn-primary')
    }

    getchekoutbutton(){
        return cy.get('.btn.btn-success')
    }

    getcountrytextfield(){
        return cy.get('#country')
    }

    getsuggestions(){
        return cy.get('.suggestions > ul > li > a')
    }

    getpurchasebutton(){
        return cy.get("input[type = 'submit']")
    }

    getalert(){
        return cy.get('.alert')
    }

    getproductpricescart(){

        return cy.get('.table.table-hover tbody tr td:nth-child(4) strong')
    }

    getTotalPriceVisble(){
        return cy.get(".table.table-hover tbody tr td.text-right strong")
    }

    getPrdAddedInCart(){
        return cy.get('h4.media-heading a')
    }




}

export default Homepage