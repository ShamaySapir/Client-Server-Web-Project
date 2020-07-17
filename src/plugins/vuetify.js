import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#03a9f4',
                accent: '#00bcd4',
                error: '#f44336',
                warning: '#ff5722',
                info: '#8bc34a',
                success: '#4caf50'
            },
        },
    },
    icons: {iconfont: 'md'}
});
