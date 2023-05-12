import PageOneVue from "@/components/PageOne.vue";
import PageThreeVue from "@/components/PageThree.vue";
import PageTwoVue from "@/components/PageTwo.vue";

const pagesToRender = [
    {
        title: "Page One",
        key: "one",
        component: PageOneVue,
    },
    {
        title: "Page Two",
        key: "two",
        component: PageTwoVue,
    },
    {
        title: "Page Three",
        key: "three",
        component: PageThreeVue,
    },
];

export default pagesToRender;