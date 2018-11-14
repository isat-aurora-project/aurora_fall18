import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import HelloWorld from "@/components/HelloWorld.vue";

describe("Home.vue", () => {
  it("renders the correct welcome message", () => {
    const msg = "This is a test";
    const wrapper = mount(Home);
    expect(wrapper.contains(HelloWorld)).toBe(true);
    console.log(wrapper.find(HelloWorld).attributes());
    expect(wrapper.find(HelloWorld).text()).toMatch(msg);
  });
});
