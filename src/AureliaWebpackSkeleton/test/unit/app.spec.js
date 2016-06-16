import {App} from '../../src/App';


class RouterStub {
    configure(handler) {
        handler(this);
    }

    map(routes) {
        this.routes = routes;
    }
}

describe('the App module', () => {
    var sut;
    var mockedRouter;

    beforeEach(() => {
        mockedRouter = new RouterStub();
        sut = new App();
        sut.configureRouter(mockedRouter, mockedRouter);
    });

    it('contains a router property', () => {
        expect(sut.router).toBeDefined();
    });

    it('configures the router title', () => {
        expect(sut.router.title).toEqual('Bare Bone Webpack/Aurelia App');
    });

    it('should have a page 1 route', () => {
        expect(sut.router.routes).toContain({ route: ['', 'Module1'], name: 'Module1',  moduleId: './Modules/Module1/Module1', nav: true, title: 'Page 1' });
    });

    it('should have a page 2', () => {
        expect(sut.router.routes).toContain({ route: 'Module2', name: 'Module2', moduleId: './Modules/Module2/Module2', nav: true, title: 'Page 2' });
    });
});
