  describe('buscando', () => {
    it('Debería buscar iphone', async ()=> {
      await browser.url('/');
      const barraDeBusqueda = await $('[name="search"]');
      await barraDeBusqueda.setValue('iphone');
      assert.equal(await barraDeBusqueda.getValue(),'iphone','Error: no se mostró el texto esperado en la barra de búsqueda');
      await barraDeBusqueda.keys('Enter');            
      assert.equal(await $('h4').getText(),'iPhone','Error: no se mostró el header esperado');
     });
  });