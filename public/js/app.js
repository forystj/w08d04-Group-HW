const app = angular.module('blog_app', []);

app.controller('mainController', ['$http', function($http) {

  this.formdata = {};
  this.posts = [];


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
     method  : 'POST',
     url     : '/blog',
     data    : this.formData
    }).then( response => {
         this.posts.push ( response.data.post );
         this.formData = {};
        } , error => {
    }).catch( err => console.error('Catch:' , err))
    }


  //==== EDIT ====\\
  this.editPost = ( id ) => {
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
  this.deletePost = ( id ) => {
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
