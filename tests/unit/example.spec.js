import { mount, createLocalVue } from '@vue/test-utils';
import VeeValidate from 'vee-validate';
import App from '@/App.vue';
import flushPromises from "flush-promises";

const localVue = createLocalVue();
localVue.use(VeeValidate, { inject: false });

describe('App', () => {
  const wrapper = mount(App, {
    sync: false,
    localVue
  });

  it('first_name requires a value', async () => {
    await wrapper.vm.$validator.validate('first_name')
    expect(wrapper.vm.errors.has('first_name')).toBe(true);

    const input = wrapper.find("#first_name")
    input.setValue("Emmie");
    await flushPromises();

    await wrapper.vm.$validator.validate('first_name')
    expect(wrapper.vm.errors.has('first_name')).toBe(false);
  });

  it('framework requires a value', async () => {
    await wrapper.vm.$validator.validate('framework')
    expect(wrapper.vm.errors.has('framework')).toBe(true);

    const radio = wrapper.find('#vue');
    radio.setChecked(true);
    await flushPromises();

    await wrapper.vm.$validator.validate('framework')
    expect(wrapper.vm.errors.has('framework')).toBe(false);
  });
});

