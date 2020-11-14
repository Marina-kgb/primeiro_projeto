describe('Cadastro', function (){
    it('Agenda', function (){
      cy.visit('http://demo.automationtesting.in/Register.html')
  
      cy.get('input[placeholder="First Name"]').type('Marina')// First Nome primeiro
      cy.get('input[placeholder="Last Name"]').type('Barbosa')// Segundo nome
      cy.get('textarea[ng-model="Adress"]').type('Rua da casa e numero da casa')// Informações de Endereço
      cy.get('input[type="email"]').type('teste@teste.com.br')// Email
      cy.get('input[type="tel"]').type('9168-9645')// telefone
      cy.get('input[value="FeMale"]').click()                                         
      cy.get('input[value="Male"]').click()   // Masculino                                          
      cy.get('input[value="Cricket"]').click()   // Feminino    
      cy.get('input[value="Movies"]').click() // hobbies 
      cy.get('input[value="Hockey"]').click() // hobbies
      cy.get('select[id=Skills]').select(['APIs'])
      cy.get('select[id=countries]').select(['American Samoa'])
      //cy.get('select').select('India').should('have.value','India')
      cy.get('input[id="firstpassword"]').type('123456')// senha
      cy.get('input[id="secondpassword"]').type('123456')// confirmar senha
      cy.get('button[type="submit"]').click()//não consegui fazer pegar esse botão
      cy.get('button[type=button]').click()//só pega esse botão 
   })
   })
