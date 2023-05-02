describe('OpenCart', () => {

  it('Debería buscar iPhone', async () => {

    browser.url('/');
  });
  it('Deberia ocultar barra de búsqueda', async () => {
    await browser.url('/');
    const barraBusquedaSelector = '[name="search"]';
    await browser.execute((selector) => {
      document.querySelector(selector).style.display = 'block';
    },  barraBusquedaSelector);
    await browser.debug();
  });
  
});
//Codigo para cambiar color
/*const dropDownColor = await $('select');
await dropDownColor.selectByIndex(2);
console.log(await dropDownColor.getValue());*/


/*describe('OpenCart', () => {
  it('Debería buscar iphone', async ()=> {
    await browser.url('/');
    const barraDeBusqueda = await $('[name="search"]');
    await barraDeBusqueda.setValue('iphone');
    assert.equal(await barraDeBusqueda.getValue(),'iphone','Error: no se mostró el texto esperado en la barra de búsqueda');
    await barraDeBusqueda.keys('Enter');            
    assert.equal(await $('h4').getText(),'iPhone','Error: no se mostró el header esperado');
   });

});*/

