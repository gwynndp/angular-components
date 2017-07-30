// TODO: create the blog controller
// check blog.html for hints on what the controller
// should have/do

import _ from 'lodash';


class BlogController {
  constructor() {
    this.message = 'My message to you is...';
    this.posts = _.times(9, () => {
      return {
        title: 'title',
        author: 'author'
      };
    });
  }
}

export {BlogController};