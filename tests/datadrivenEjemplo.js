import homePage from '../pages/home.page'; 
import busquedaPage from '../pages/busqueda.page';
import DATOS from '../datos/articulos';

describe('Búsqueda', () => {
  DATOS.forEach(({articulo}) => {
    it(`Debería buscar ${articulo}`, async ()=> {
      await homePage.abrir('/');
      await homePage.buscar(articulo);
      expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
      expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
    });
  });
});