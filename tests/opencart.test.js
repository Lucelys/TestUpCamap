/*describe('OpenCart', () => {

  it('Debería buscar iPhone', async () => {

    browser.url('/');
  });


});*/

/*describe('OpenCart', () => {

  it('Deberia ocultar barra de búsqueda', async () => {
    await browser.url('/');
    const barraBusquedaSelector = '[name="search"]';
    await browser.execute((selector) => {
      document.querySelector(selector).style.display = 'block';
    },  barraBusquedaSelector);
    await browser.debug();
  });


});*/

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

describe('OpenCart', () => {
  it('Debería buscar iphone', async ()=> {
    await browser.url('/');
    await expect(browser).toHaveUrl('http://opencart.abstracta.us/');
    const barraDeBusqueda = await $('input[name="search"]');
    await barraDeBusqueda.setValue('iphone');
    await expect(await barraDeBusqueda).toHaveValue('iphone', { message: 'Error: no se mostró el texto esperado en la barra de búsqueda' });
    await barraDeBusqueda.keys('Enter');
    await expect(await $('h4')).toHaveText('iPhone', { message: 'Error: no se mostró el header esperado' }); 
  });

});