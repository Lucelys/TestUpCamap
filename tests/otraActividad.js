import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import ArticuloPage from '../pages/articulo.page';


describe('Articulo', () => {
    it('Debería buscar apple cinema y seleccionar el segundo color', async () => {
        await HomePage.abrir('/');

        const articulo = 'apple cinema';
        const resultadoB = 'Apple Cinema 30"';
        await HomePage.buscar(articulo);
        expect(await HomePage.obtenerTextoBusqueda()).to.equal(articulo);
        expect(await BusquedaPage.obtenerNombreResultado()).to.equal(resultadoB);


        await BusquedaPage.ingresarAlResultado();


        await ArticuloPage.selecionarColor();

    });
 });
