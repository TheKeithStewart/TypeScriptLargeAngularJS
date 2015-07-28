((): void => {
	'use strict';
	
	angular.module('app', [
		'app.core',
		'app.layout',
		'app.services',
		'app.widget',
		'app.blocks',
		'app.blogposts',
		'app.dashboard',
		'app.sitesettings',
		'app.users',
		'app.usersettings'
	]);
})();
