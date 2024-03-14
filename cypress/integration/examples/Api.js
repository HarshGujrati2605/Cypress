describe("API SUITE", () => {


    it("Test case 1", () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with java",
                    "isbn": "BSG",
                    "aisle": "2302"
                },
            ]


        }).as('booksdata')
        
        cy.get('.btn.btn-primary').click()
        cy.wait('@booksdata').then(({request , response})=>{

            cy.get('tbody tr').should('have.length' , response.body.length)
            cy.log(response.book_name)

        })


    })
})