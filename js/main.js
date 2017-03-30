// cookie 跨域
Vue.http.interceptors.push((request, next) => {
    request.credentials = true
    next()
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    test:''
  }
})

Vue.http.get('http://localhost:8086/contact/showunit').then((response)=> {
        app.message = response.data
})
Vue.http.get('http://localhost:8086/contact/testone').then((response)=> {
        app.test = response.data
})
var creatjob = new Vue({
	el: '#creatjob',
	data:{
		ContactUnitId:'',
		Number:'',
		name: ''
	},
	methods: {
		create: function () {
		 	var send = {
		 		'unitid': this.ContactUnitId,
		 		'number': this.Number,
		 		'name': this.name
		 	}
		 	Vue.http.get('http://localhost:8086/contact/creatjob',{params: send}).then((response)=> {
       			 if(response.data.code == 1){
       			 	alert('传剑臣不敢')
       			 	this.ContactUnitId = ''
       			 }
			})
		 }
		}
	})
