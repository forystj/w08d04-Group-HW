const app = angular.module('blog_app', []);

app.controller('mainController', ['$http', function($http) {

  this.formdata = {};
  this.posts = [];
  this.results = [];


  //==== GET/DISPLAY BLOG POSTS ====\\
  this.getPosts = () => {
    $http({
      url: '/blog',
      method: 'GET'
    })
    .then(response => this.posts = response.data)
    .catch(err => console.error(err))
  }


  //==== ADD ==== \\
  this.processForm = () => {
    $http({
     method  : 'POST',
     url     : '/blog/',
     data    : this.formData
    }).then( response => {
         this.posts.push ( response.data );
         this.formData = {};
        } , error => {
    }).catch( err => console.error('Catch:' , err))
    }


  //==== EDIT ====\\
  this.editPost = ( id ) => {
    $http({
      method: 'PUT',
      url   : '/blog/' + id,
      data  :  this.formDataUpdate
    }).then ( response => {
      console.log( response )
      this.getPosts();
    }, error => {
      console.log(error.message);
    }).catch (err => console.log('catch:' , err))
  }

  this.findPost = ( id ) => {
    $http({
      method: 'GET',
      url   : '/blog/' + id
    }).then ( response => {
      this.results.push(response.data);
      console.log( response.data)
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

    this.getPosts();

}]); //closes mainController
