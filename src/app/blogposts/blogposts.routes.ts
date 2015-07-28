/// <reference path="./../../../typings/angularjs/angular.d.ts" />
/// <reference path="./../../../typings/angularjs/angular-route.d.ts" />

((): void => {
	'use strict';
	
	angular.module('app.blogposts').config(config);
	
	config.$inject = ['$routeProvider'];
	function config($routeProvider: ng.route.IRouteProvider): void {
		$routeProvider.when('/admin/blogposts/newpost', {
			template: '<div>NewPost</div>',
			controller: (): void => { },
			controllerAs: 'vm'
		});
	}
})();