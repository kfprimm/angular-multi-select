module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					livereload: 8080
				}
			}
		},

		jshint: {
			files: ['Gruntfile.js', 'src/*.js', 'specs/*.js', 'specs/**/*.js'],
			options: {
				globals: {
					jQuery: true,
					angular: true
				},
				esversion: 6,
				eqnull: true,
				bitwise: true,
				eqeqeq: true,
				noarg: true,
				nocomma: true,
				nonbsp: true,
				nonew: true,
				notypeof: true
			}
		},

		jasmine: {
			data_converter: {
				src: 'build/*.js',
				options: {
					styles: 'src/*.css',
					helpers: [
						'specs/data_converter/*.js'
					],
					specs: 'specs/data_converter.js',
					vendor: [
						'node_modules/jquery/dist/jquery.js',
						'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
						'node_modules/angular/angular.js',
						'node_modules/angular-mocks/angular-mocks.js'
					]
				}
			},
			engine: {
				src: 'build/*.js',
				options: {
					styles: 'src/*.css',
					helpers: [
						'specs/engine/*.js',
					],
					specs: 'specs/engine.js',
					vendor: [
						'node_modules/lokijs/src/lokijs.js',
						'node_modules/jquery/dist/jquery.js',
						'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
						'node_modules/angular/angular.js',
						'node_modules/angular-mocks/angular-mocks.js'
					]
				}
			},
			ams: {
				src: 'build/*.js',
				options: {
					styles: 'src/*.css',
					helpers: [
						'specs/ams/*.js',
					],
					specs: 'specs/ams.js',
					vendor: [
						'node_modules/lokijs/src/lokijs.js',
						'node_modules/jquery/dist/jquery.js',
						'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
						'node_modules/angular/angular.js',
						'node_modules/angular-mocks/angular-mocks.js',
						'build/angular-multi-select.js'
					],

					//Special hacks
					page: {
						viewportSize: {
							width: 1920,
							height: 515
						}
					}
				}
			}
		},

		watch: {
			files: ['<%= jshint.files %>', 'src/*.css', 'demo/*'],
			tasks: ['clear'],
			options: {
				debounceDelay: 1000,
				livereload: 8080
			}
		},

		concat: {
			options: {
				separator: '\n\n',
			},
			basic: {
				src: [
					'src/angular-multi-select-constants.js',
					'src/angular-multi-select-data-converter.js',
					'src/angular-multi-select-engine.js',
					'src/angular-multi-select-styles-helper.js',
					'src/angular-multi-select.js',
					'src/angular-multi-select.tpl.js'
				],
				dest: 'build/angular-multi-select.js'
			}
		},

		babel: {
			options: {
				sourceMap: true,
				presets: ['babel-preset-es2015']
			},
			dist: {
				files: {
					'build/angular-multi-select.js': 'build/angular-multi-select.js'
				}
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['build/<%= pkg.name %>.js']
				}
			}
		},

		cssmin: {
			compress: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['*.css', '!*.min.css'],
					dest: "dist/",
					ext: ".min.css",
					extDot: 'last'
				}]
			}
		},

		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'src/',
					dest: 'dist/',
					src: [
						'**/*.{css,js}'
					]
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-clear');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('tests', ['jshint', 'concat', 'babel', 'jasmine:*']);
	grunt.registerTask('server', ['jshint', 'connect', 'watch']);
	grunt.registerTask('default', ['jshint', 'concat', 'babel', 'jasmine', 'uglify', 'cssmin', 'copy:dist']);

};
