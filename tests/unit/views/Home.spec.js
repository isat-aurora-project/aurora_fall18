import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import HelloWorld from "@/components/HelloWorld.vue";

describe("Home.vue", () => {
  it("renders the correct welcome message", () => {
    const msg = `Welcome to ISAT 345 Aurora Project 
        To upload a light show for Dr. Benton's office, please go to the Upload tab and follow the directions.`;
    const wrapper = mount(Home);
    expect(wrapper.contains(HelloWorld)).toBe(true);
    console.log(wrapper.find(HelloWorld).attributes());
    expect(wrapper.find(HelloWorld).text()).toMatch(msg);
  });
});
