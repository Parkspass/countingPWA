console.log('connected');

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        page: 'login', // login, loggedin
        parks: ['Acadia', 'America Samoa', 'Arches', 'Badlands', 'Big Bend', 'Biscayne', 'Black Canyon of the Gunnison', 'Bryce Canyon', 'Canyon Lands' ],
        passEmpty: false,
        passField: ''
    },
    methods: {
        loginClicked: function(){
            console.log('clicked');
        }
    }



});