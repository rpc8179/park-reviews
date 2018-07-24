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
       done()
      }, 0)
    })

    it('should contain an address', (done) => {
     setTimeout(() => {
       expect(wrapper.text()).toMatch('167 Tremont Street')
      done()
      }, 0)
    })

    it('should contain a city', (done) => {
       setTimeout(() => {
         expect(wrapper.text()).toMatch('Boston')
         done()
       }, 0)
     })


   it('should contain park state', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch('MA')
        done()
      }, 0)
    })

   it('should contain park zip', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch('02134')
        done()
      }, 0)
    })

   it('should contain park description', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch('Has a great grass field and lots of people yelling and running around.')
        done()
      }, 0)
    })
  })
})
