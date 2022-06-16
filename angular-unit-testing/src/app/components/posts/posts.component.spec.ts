import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from 'src/app/models/post.model';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let POSTS: Post[];
  let postComponent: PostsComponent;
  let mockPostService: any;

  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        body: 'body 1',
        title: 'title 1',
      },
      {
        id: 2,
        body: 'body 2',
        title: 'title 2',
      },
      {
        id: 3,
        body: 'body 3',
        title: 'title 3',
      },
    ];
    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);

    postComponent = new PostsComponent(mockPostService);
  });

  describe('delete', () => {
    beforeEach(() => {
      postComponent.posts = POSTS;
      mockPostService.deletePost.and.returnValue(of(true))
      postComponent.delete(POSTS[1]);
    });
    it('should delete the selected Post from the posts', () => {
      expect(postComponent.posts.length).toBe(2);
    });
    it('should delete the actual selected Post in Posts', () => {
      for(let post of postComponent.posts) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });
    it('should call the delete method in Post Service only once', () => {
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});
