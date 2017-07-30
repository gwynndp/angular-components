// TODO: create the directive for the blog component
// don't forget to include the template and styles and controller
import './blog.styl';
import {BlogController as controller} from './blog.controller';
import template from './blog.html';

// can do dependency injection here but not for services, etc.
export const blogDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
