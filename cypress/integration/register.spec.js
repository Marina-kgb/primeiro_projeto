describe('Cadastro', function (){
    it('Cadastrar um novo registro com sucesso', function (){
      cy.visit('http://demo.automationtesting.in/Register.html')
  
      cy.get('input[placeholder="First Name"]').type('Marina') // preenche o primeiro nome
      cy.get('input[placeholder="Last Name"]').type('Barbosa' )// Spreenche o último nome
      cy.get('textarea[ng-model="Adress"]').type('Rua da casa e numero da casa') // Informações de Endereço
      cy.get('input[type="email"]').type('bla@teste.com.br') // Email
      cy.get('input[type="tel"]').type('5417543010')// telefone formato USA
      cy.get('input[value="FeMale"]').click()  // preenche o gênero como feminino                                                                              
      cy.get('input[value="Cricket"]').click() // hobbies    
      cy.get('input[value="Movies"]').click() // hobbies 
      cy.get('input[value="Hockey"]').click() // hobbies
      cy.get('#msdd').click() //clique dentro do campo de línguas
      cy.get('li a').contains("Portuguese").click() //seleciona português
      cy.get('li a').contains("English").click() // seleciona inglês
      cy.get('#basicBootstrapForm > div:nth-child(7) > label').click() //clicando fora dos campos
      cy.get('select[id=Skills]').select(['APIs']) //seleciona uma skill
      cy.get('select[id="countries"]').select("Brazil")  //seleciona pais
      cy.get('select[id=yearbox]').select(['1991']) //seleciona ano
      cy.get('select[placeholder=Month]').select(['May']) //seleciona mês
      cy.get('select[id=daybox]').select(['10']) //seleciona dia
      cy.get('input[id="firstpassword"]').type('Ertar1345%') // senha
      cy.get('input[id="secondpassword"]').type('Ertar1345%') // confirmar senha
      cy.get('button[name="signup"]').click() //não consegui fazer pegar esse botão     
      cy.url().should('include', '/WebTable.html') //verifica se a nova URL tem /WebTable.html
   })
})
