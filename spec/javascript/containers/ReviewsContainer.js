import ReviewsContainer from '../../../app/javascript/react/containers/ReviewsContainer'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react'
import fetchMock from 'fetch-mock'

describe('ReviewsContainer', () => {
  let wrapper;
  let review;
  let user_data;

  beforeEach(() => {
    jasmineEnzyme();
    review = {
      id: 1,
      rating: 3,
      user_id: 1,
      park_id: 2,
      body: "dlkjioweroanalksdfj; booooo",
      created_at: "2018-07-24T20:32:00.080Z"
    }
    user_data = "user@user.cuser"
    fetchMock.get(`/api/v1/parks/${review.park_id}/reviews`, {
      status: 200,
      body: {
        "formatted_reviews": [
          {
            "review_data": review,
            "user_data": user_data
          }
        ]
      }
    })
    wrapper = mount(<ReviewsContainer park_id={review.park_id} />)
  });

  afterEach(fetchMock.restore)

  describe('reviews container', () => {
    it('should contain a body', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch('dlkjioweroanalksdfj; booooo')
        done()
      }, 0)
    })
    it('should contain a rating', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch("3")
        done()
      }, 0)
    })
    it('should contain a user email', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(user_data)
        done()
      }, 0)
    })
    it('should contain a created_at', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(new Date(review.created_at).toDateString())
        done()
      }, 0)
    })
  })
})
