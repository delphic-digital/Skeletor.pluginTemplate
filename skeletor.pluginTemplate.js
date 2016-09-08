/**
 * @copyright   2016, The Skeletor Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 */

define(['jquery', 'skeletor.core'],function ($, Skeletor){

  function PluginTemplate(element, options) {
		PluginTemplate.__super__.call(this, element, options, PluginTemplate.DEFAULTS);
	}

	PluginTemplate.VERSION = '0.1.0';

	PluginTemplate.DEFAULTS = {};

	Skeletor.Plugin.create(PluginTemplate, {
		_init: function(element) {
			console.log('Init pluginTemplate')
		},
		_test: function(element) {
			console.log('Init test')
		},
		publicMethod: function(){
			console.log('Public Method Called')
		}
	});
});
