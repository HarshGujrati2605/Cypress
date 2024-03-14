const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

var i = 0

let userdata;

let name;

// before(()=>{

//     cy.log('Loaded the fixture before running the test!!')
    
//     cy.fixture('userdata').its("data").then((data) => {

//         userdata = data  
//     })

// })

Given('I open the website to fill the form' , ()=>{

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})


// When('I fill the data in the form' , (dataTable)=>{

//     cy.log('Filling the name from the random string')

//     userdata.forEach(data1 => {

       

//         i++
     
    
//         cy.RandomStringGen().then(valueoftext => {

//             cy.get("div.form-group input[name ='name']").type(valueoftext)

//             cy.get("div.form-group input[name ='name']").type('{enter}')

//             cy.get('h4 input').should('contain.value', valueoftext)

//         })

//         cy.get("div.form-group input[name ='email']").type(data1.email)

//         cy.get("#exampleInputPassword1").type(data1.pass)

//         cy.log("Value for i is" ,{i})

//         cy.get("#exampleFormControlSelect1").select(dataTable.rawTable[i][0])


//         cy.get("input[name = 'bday']").type(data1.dob)

//         cy.get(".btn.btn-success").click()

//         cy.wait(2000)

//         cy.reload()

        
        
//     })

// })


When("I fill the data in the form using examples {string},{string},{string},{string},{string}" , (name,gender,email,pass,dob)=>{

    cy.get("div.form-group input[name ='name']").type(name)

    cy.get("div.form-group input[name ='email']").type(email)

    cy.get("#exampleFormControlSelect1").select(gender)

    cy.get("#exampleInputPassword1").type(pass)

    cy.get("input[name = 'bday']").type(dob)


    cy.get(".btn.btn-success").click()

    cy.wait(2000)

    cy.reload()














    })







    


