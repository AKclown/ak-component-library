import { shallowMount } from '@vue/test-utils'
import LText from "../../src/components/LText";
import { textDefaultProps } from "../../src/defaultProps";

describe("LText.vue", () => {
  const { location } = window 
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' }
    })
  })
  afterEach(() => {
    window.location = location
  })
  it("default LText Render", () => {
    const msg = "test";
    const props = {
      ...textDefaultProps,
      text: msg,
    };
    const wrapper = shallowMount(LText, { props });
    // 1. 是否有显示正确的文本
    expect(wrapper.text()).toBe(msg);
    // 2. 标签是不是为默认的div
    expect(wrapper.element.tagName).toBe("DIV");
    // 3. 是否具有正确的css属性
    const style = wrapper.attributes().style;
    expect(style.includes("font-size")).toBeTruthy();
    // 4. 不该具有额外的prop
    expect(style.includes("actionType")).toBeFalsy();
  });
  it('LText with actionType and URL should trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      tag: 'h2'
    }
    const wrapper = shallowMount(LText, { props })
    expect(wrapper.element.tagName).toBe('H2')
    await wrapper.trigger('click')
    expect(window.location.href).toBe('http://dummy.url')
  })
  it('LText with isEditing should not trigger location change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      tag: 'h2',
      isEditing: true
    }
    const wrapper = shallowMount(LText, { props })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe('http://dummy.url')
  })
});
