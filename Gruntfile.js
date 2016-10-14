
/**
 * Grunt Configuration which have following components:
 * 1) 'babel' -> This is the main task which transforms JSX to JS. You can add any number of tasks in this.
 * 2) 'watch' -> This is task which watches the babel task for any modifications.
 * 3) 'concurrent' -> This task allows us to run all the 'watch' task concurrently.
 */
module.exports = function( grunt ) {
	require('load-grunt-tasks')(grunt)
	grunt.initConfig( {

		babel : {
			options : {
				plugins : ['transform-react-jsx'],
				presets: ['es2015', 'react']
			},
			//Commom Components which will be shared b/w client & server
			common : {
				expand : true,
				cwd : './react_demo/cartridge/scripts/jsx/common',
				src : ['*.jsx'],
				dest : './react_demo/cartridge/static/default/react/components',
				ext : '.js'
			},
			//Pure server side components. Mainly static
			server : {
				expand : true,
				cwd : './react_demo/cartridge/scripts/jsx/server',
				src : ['*.jsx'],
				dest : './react_demo/cartridge/scripts/react-js-views',
				ext : '.js'
			}
		},
		watch: {
			common: {
				files: './react_demo/cartridge/scripts/jsx/common/*.jsx',
				tasks: ['babel:common']
  			},
			server: {
				files: './react_demo/cartridge/scripts/jsx/server/*.jsx',
				tasks: ['babel:server']
			}
		},
		concurrent: {
	 		transform: {
				tasks: ['watch:common', 'watch:server'],
					options: {
						logConcurrentOutput: true
		 			}
	 		}
		}
	} );
	grunt.registerTask('default', ['concurrent:transform']);
};
