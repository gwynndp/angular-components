// get everything so that you can compare and test
import {blog} from './blog';
import {blogDirective} from './blog.directive';
import template from './blog.html';
import {BlogController} from './blog.controller';

describe('Blog', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(blog.name));
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = (injectables) => {
      return new BlogController(injectables);
    };
  }));

  //SAMPLE TEST CASE
  // describe('-module/directive/controller/template-', () => {
  //   it('should have a description of what you're testing for', () => {
  //     expect(expectedValue).to.equal('expectedValue');
  //   });
  // });

  describe('module', () => {
    it('should have an appropriate name', () => {
      console.log(JSON.stringify('BLOG MODULE:', blog, 2));  // the '2' means the indentation
      expect(blog.name).to.equal('blog');
    });
  });

  describe('directive', ()=> {
    // TODO: test the directive to make sure it has the
    // right DDO and template and controller
    let ddo;

    beforeEach(() => {
      ddo = blogDirective(); // assign a new blog directive object before EACH test
    });
    // the describe statement returns the result of the directive (?)
    it('should have the right template', () => {
      expect(ddo.template).to.equal(template); // you want to compare the template from the new blog directive object with the template file
    });
    it('should have the right controller', () => {
      expect(ddo.controller).to.equal(BlogController);
    });
    it('should use the controllerAs', () => {
      expect(ddo.controllerAs).to.be.a('string');
    });
    it('should have isolate scope', () => {
      expect(ddo.scope).to.be.an('object');
    });
    it('should restrict it to behave as an element', () => {
      expect(ddo.restrict).to.equal('E');
    });
  });

  describe('controller', ()=> {
    // TODO: test the controller
    it('should have blog posts', () => {
      const controller = makeController();
      expect(controller.posts).to.be.an('array');
      expect(controller.posts[0]).to.have.property('title');
      expect(controller.posts[0]).to.have.property('author');
    });
  });

  describe('template', ()=> {
    // TODO: test the template? yup
    // get creative
  });
});
