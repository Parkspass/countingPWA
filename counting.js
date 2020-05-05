/*jshint esversion: 6 */

console.log('connected');

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        page: 'login', // login, loggedin
        parks: ['Acadia', 'America Samoa', 'Arches', 'Badlands', 'Big Bend', 'Biscayne', 'Black Canyon of the Gunnison', 'Bryce Canyon', 'Canyon Lands', 'Zion National Park' ],
        parkEmpty: false,
        parkField: '',
        passEmpty: false,
        passField: '',

        todaysDate: "",
        currentPark: "",
    },
    created: function(){
        this.getTodaysDate();
    },
    methods: {
        getTodaysDate: function () {
            var date = new Date();
            var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

            var fulldate = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
            this.todaysDate = fulldate;
            console.log(this.todaysDate);
        },
        validateRequestData: function(){
            if (this.parkField == ""){
                this.parkEmpty = true;
            }else{
                this.parkEmpty = false;
            }
            if (this.passField == ""){
                this.passEmpty = true;
            }else{
                this.passEmpty = false;
            }
            if (this.parkEmpty == true || this.passEmpty == true){
                return false;
            }else{
                return true;
            }
        },
        loginClicked: function(){
            if(this.validateRequestData()){
                this.currentPark = this.parkField;
                this.page = "loggedin";
                this.parkField = "";
                this.passField = "";
            }
        },
    }




});