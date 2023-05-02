describe('carrito', () => {

    it('Debería buscar apple cinema y seleccionar el segundo color', async () => {
        await browser.url('/');
        const barraDeBusqueda = await $('[name="search"]');
        await barraDeBusqueda.setValue('apple cinema');
        await barraDeBusqueda.keys('Enter');
        await browser.pause(5000);
       
    });
      
    
  });