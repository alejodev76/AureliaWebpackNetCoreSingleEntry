import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize-css';

import jQuery from 'jquery';
window.jQuery = jQuery;
import { bootstrap } from 'aurelia-bootstrapper-webpack';

const bootstrapper  = function(aurelia)
{
	aurelia.use
        .standardConfiguration()
        .developmentLogging();
	aurelia.start().then(() => aurelia.setRoot('App', document.body));
};

bootstrap(bootstrapper);

