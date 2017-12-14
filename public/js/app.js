const app = angular.module('blog_app', []);

app.controller('mainController', ['$http', function($http) {

  this.posts = [];
  this.formData = {};

  //==== GET/DISPLAY BLOG POSTS ====\\
  $http({
    url: '/blog',
    method: 'GET'
  })
  .then(response => this.posts = response.data)
  .catch(err => console.error(err))


  //==== ADD ==== \\
  this.processForm = () => {
    $http({
     url: '/blog',
     method: 'POST',
     data: this.formData
    }).then(response => {
         console.log(response)} , error => {
    }).catch( err => console.error('Catch:' , err))
    }


  //==== EDIT ====\\
  this.editHoliday = () => {
    $http({
      method: 'PUT',
      url   : '/blog/' + post._id,
      data  :  this.formData
    }).then ( response => {
      console.log( response.data.edited)
    }, error => {
      console.log(error.message);
    }).catch (err => console.log('catch:' , err))
  }


  //==== DELETE ====\\
  this.deleteHoliday = ( id ) => {
  $http({
    method: 'DELETE',
    url   : '/blog/' + id
  }).then( response => {
    const removeByIndex = this.posts.findIndex( post => post._id === id)
    this.posts.splice( removeByIndex, 1);
    } , error => { console.error( error.message )
  }).catch( err => console.error('Catch:', err))
    }

}]); //closes mainController
