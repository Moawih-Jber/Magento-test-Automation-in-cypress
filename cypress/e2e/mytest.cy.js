
/// <reference types= "cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})

Cypress.Commands.add('Add_item', () => {
  let randomitems = Math.floor(Math.random() * 4)
  cy.get('.product-items').find(".product-item").eq(randomitems).click()
  let randomsize = Math.floor(Math.random() * 3)
  // let randomcolor = Math.floor(Math.random() * 2)
  cy.get('.swatch-attribute-options').find(".swatch-option").eq(randomsize).click()
  cy.get(".swatch-attribute.color > .swatch-attribute-options").find('.swatch-option').eq(0).click()
  cy.get('.stock > span').invoke('text').then((text) => {
    if (text == "In stock") {
      cy.get('#product-addtocart-button').click()
    } else {
      alert("this item in not in stock")
    }
  })
})


describe.skip('add random item', () => {
  it('add random item from women category', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-4').click()
    cy.Add_item()
  })


  it('add random item from men category', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-5').click()
    cy.Add_item()
  });


  it('add random item from gear category', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-6').click()
    let randomitems = Math.floor(Math.random() * 4)
    cy.get('.product-items').find(".product-item").eq(randomitems).click()
    cy.get('.stock > span').invoke('text').then((text) => {
      if (text == "In stock") {
        cy.get('#product-addtocart-button').click()
      } else {
        alert("this item in not in stock")
      }
    })
  });
})

describe('login test', () => {

  it('login correct username and correct password ', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    cy.get('#email').type("moawihwael12345@gmail.com")
    cy.get('#pass').type("h4*7f!msRe@@@9t")
    cy.get("#send2").click()
  });
  it('login correct inusername and incorrect password', () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    cy.get('#email').type("moawihwael@gmail.com")
    cy.get('#pass').type("h4*7f!msRe@@@")
    cy.get("#send2").click()
  });
});