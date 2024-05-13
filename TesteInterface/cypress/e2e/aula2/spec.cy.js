///<reference = cypress>

describe("Testes da criação, registro e login", ()=>{
  it.skip("Teste criação de usuario com sucesso", ()=>{
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('.btn-link').click()
      cy.get('#firstName').type("visitor")
      cy.get('#Text1').type("vis")
      cy.get('#username').type("visitorr")
      cy.get('#password').type("1234")
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should("contain.text", "Registration successful")
   })

  it.skip("Teste criação de usuario com falha no botao", ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("visitor")
    cy.get('#Text1').type("vis")
    cy.get('#username').type("visitorr")
    cy.get('.btn-primary').should("be.disabled")
  })

    it.skip("Teste de login com sucesso", ()=>{
      let infos = createUser()
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('#username').type(infos[0])
      cy.get('#password').type(infos[1])
      cy.get('.btn-primary').click()
      cy.get('div.ng-scope > :nth-child(2)').should("contain.text", "You're logged in!!")
    })

    it("Teste de delete com sucesso", ()=>{
      let infos = createUser()
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('#username').type(infos[0])
      cy.get('#password').type(infos[1])
      cy.get('.btn-primary').click()
      cy.get('.ng-binding > a').click()
      cy.get('.btn').click()
      cy.get('#username').type(infos[0])
      cy.get('#password').type(infos[1])
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should("contain.text", "Username or password is incorrect")
    })
})


function createUser(){
  let hour = new Date().getHours().toString()
  let minute = new Date().getMinutes().toString()
  let second = new Date().getSeconds().toString()
  let id = hour+minute+second+"ID"
  let pass = hour+minute+second+"PASS"
  let infos = [id, pass]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(id)
  cy.get('#Text1').type(id)
  cy.get('#username').type(id)
  cy.get('#password').type(pass)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")
  return infos
}