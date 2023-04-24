import homePage from '../pages/home.page'; 
import busquedaPage from '../pages/busqueda.page';
import { articulos } from '../data/articulos.json';

describe('Búsqueda',  () => {
  articulos.forEach((articulo) => {
    it(`Debería buscar ${articulo}`, async ()=> {
      await homePage.abrir('/');
      await homePage.buscar(articulo);
      expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
      expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
    });
  });
});