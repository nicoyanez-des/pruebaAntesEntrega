import { mount } from '@vue/test-utils'
import Contact from '@/pages/contact.vue'
import { testEnvironment } from '~/jest.config'

describe('Contact', () =>{
    test('is a Vue instance',() =>{
        const wrapper = mount(Contact)
        expect(wrapper.vm).toBeTruthy()
    })
})