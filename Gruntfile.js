module.exports = function(grunt) {
    //require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: { //删除文件/清理文件
            // all: ['build/html/**', 'build/*.*'],
            // image: 'build/html/images',
            // css: 'build/html/css',
            // html: 'build/html/**/*'
            all: 'build',
            temp:'build/js/src'
        },
        concat: { //合并JS文件
            options: {
                separator: ';', //文件连接分隔符
                stripBanners: true, //如果为true，去除代码中的块注释，默认为false
            },
            basic: {
                src: ['js/main.js'],
                dest: 'build/js/src/basic.js'
            },
            extras: {
                src: ['js/a.js', 'js/b.js'],
                dest: 'build/js/src/extras.js'
            }
        },
        react: {
            files: {
                expand: true,
                cwd: 'jsx/',
                src: ['*.js'],
                dest: 'build/js/',
                ext: '.js'
            }
        },
        uglify: {
            options: {
                mangle: true, //混淆变量名
                preserveComments: 'false', //删除注释，还可以为 all（不删除全部注释），some（保留@preserve @license @cc_on等注释）
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - Jexton: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            //按原文件结构压缩js文件夹内所有JS文件
            build: {
                files: [{
                    expand: true,
                    cwd: 'build/js/src', //src目录下
                    src: '**/*.js', //所有js文件
                    dest: 'build/js' //输出到此目录下
                }]
            }
            //分开压缩js文件
            // basic: {
            //     src: 'basic/basic.js',
            //     dest: 'build/basic.min.js'
            // },
            // build: {
            //     src: 'src/*.js',
            //     dest: 'build/<%= pkg.name %>.min.js'
            // }
        }

    });

    //加载 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    //默认被执行的任务列表。
    grunt.registerTask('default', ['clean:all', 'concat', 'react', 'uglify','clean:temp']);


};
