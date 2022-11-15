import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import vueFilePond from "vue-filepond";
// Import plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";
// Import styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

//global components
import WithDashBorder from '@/Custom/Feedback/EmptyStates/WithDashBorder.vue';
import WithAccentBorder from '@/Custom/Feedback/Alert/WithAccentBorder.vue';
import WithDismiss from '@/Custom/Feedback/Alert/WithDismiss.vue';
import WithRight from '@/Custom/Feedback/Alert/WithOnRight.vue';
import Paginate from "@/Custom/Navigation/Paginate/WithPageButton.vue";
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';




const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);
const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component("QuillEditor", QuillEditor)
            .component("FilePond", FilePond)
            .component('Datepicker', Datepicker)
            .component('WithDashBorder', WithDashBorder) //empty states
            .component('WithAccentBorder', WithAccentBorder) //warning pop up
            .component('WithDismiss', WithDismiss) //successfully pop up
            .component('Paginate', Paginate) // for paginating
            .component('InnerTable', InnerTable) // for tables
            .component('WithRight', WithRight) // with blue pop up
            .mount(el);
    },
});

InertiaProgress.init({ color: "#4B5563", showSpinner: true, delay: 250 });
