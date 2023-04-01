describe('test burger-constructor', () => {
    const email = 'vvbabenko87@yandex.ru';
    const password = 'vvbabenko87';
    beforeEach(() => {
        cy.viewport(1440, 800);
    })

    it('should be signin and ingredient that can drag and drop and add order', () => {
        const dataTransfer = new DataTransfer();
        const ingredientsId = [
            '60d3b41abdacab0026a733c7',
            '60d3b41abdacab0026a733cd',
            '60d3b41abdacab0026a733c9',
            '60d3b41abdacab0026a733c9',
            '60d3b41abdacab0026a733c9']

        cy.visit('login');
        cy.get('[name= email]').type(`${email}{enter}`);
        cy.get('[name= password]').type(`${password}{enter}`)
        cy.get('[data-cy= 60d3b41abdacab0026a733c7]').click();
        cy.get('[data-cy= close]').click();
        cy.get('[data-cy= consrtuctor]');

        for (const id of ingredientsId) {
            cy.get(`[data-cy= ${id}]`).trigger('dragstart', { dataTransfer });
            cy.get('[data-cy= consrtuctor]').trigger('drop', { dataTransfer });
        }

        cy.get("button").click();
    });

    it('should be sign out', () => {
        cy.visit('profile');
        cy.get('[name= email]').type(`${email}{enter}`);
        cy.get('[name= password]').type(`${password}{enter}`);

        cy.get('[data-cy= signOut]').contains('Выход').click()
    });
})