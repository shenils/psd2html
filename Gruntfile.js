module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'styles.css': 'styles.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['*.scss'],
        tasks: ['sass'],
      }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);
}