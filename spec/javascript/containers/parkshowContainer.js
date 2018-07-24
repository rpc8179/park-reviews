import ParkShowContainer from '../../../app/javascript/react/containers/ParkShowContainer';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react'
import fetchMock from 'fetch-mock'

describe('ParkShowContainer', () => {
  let wrapper;
  let park;

  beforeEach(() => {
    jasmineEnzyme();
    park = {
      id: '1',
      name: "Boston Common",
      address: "167 Tremont Street",
      city: "Boston",
      state: "MA",
      zip: "02134",
      description: "Has a great grass field and lots of people yelling and running around."
    }
    fetchMock.get(`/api/v1/parks/${park.id}`, {
      status: 200,
      body: {park: park}
    })
    wrapper = mount(<ParkShowContainer params={{id: '1'}}/>)
  });

  afterEach(fetchMock.restore)

  describe('show page', () => {
    it('should contain park name', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch('Boston Common')
        expect(wrapper.text()).toMatch('167 Tremont Street')
        expect(wrapper.text()).toMatch('Boston')
        expect(wrapper.text()).toMatch('MA')
        expect(wrapper.text()).toMatch('02134')
        expect(wrapper.text()).toMatch('Has a great grass field and lots of people yelling and running around.')
        done()
      }, 0)
    })
  })

})
