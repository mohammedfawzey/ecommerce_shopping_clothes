"use strict";(self["webpackChunkclothes_vue"]=self["webpackChunkclothes_vue"]||[]).push([[351],{6232:function(t,e,i){var a=i(4367),r=(i(6699),i(2023),i(2479),i(7327),i(1539),i(4747),i(9826),i(3325)),n=i(6210),s=i(6257);e["Z"]=(0,r.Z)(n.Z,(0,s.J)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:(0,a.Z)({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5351:function(t,e,i){i.r(e),i.d(e,{default:function(){return S}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login"},[i("Login")],1)},r=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{staticClass:"surface-base apply"},[i("v-main",{staticClass:"py-0"},[i("v-container",[i("v-row",[i("v-col",[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"500"}},[i("v-card-title",{staticClass:"font-weight-light grey--text"},[t._v(" Create Account ")]),i("v-card-text",{staticClass:"pb-0"},[i("v-divider")],1),i("v-card-text",[i("v-form",{ref:"form",attrs:{action:"/",id:"nativeForm"},on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[i("v-card-text",{staticClass:"pb-0"},[i("v-text-field",{attrs:{rules:[t.rules.required,t.rules.email],outlined:"",label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",type:t.showPass?"text":"password","append-icon":t.showPass?"mdi-eye":"mdi-eye-off",label:"Password"},on:{"click:append":function(e){t.showPass=!t.showPass}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-card-actions",{staticClass:"px-4"},[i("v-btn",{staticClass:"py-5 white--text text-capitalize",attrs:{"x-large":"",block:"",type:"submit",loading:t.loading,color:"primary"}},[i("strong",[t._v("Log In")])])],1),i("div",{staticClass:"mt-3 text--primary font-weight-light",attrs:{link:""}},[i("v-card-text",[i("router-link",{attrs:{to:"/login"}},[t._v(" Forgotten Password")])],1),i("v-card-actions",{staticClass:"px-4"},[i("v-btn",{staticClass:"py-5 white--text text-capitalize",attrs:{"x-large":"",block:"",rouer:"",to:"/signup",color:"#16bf82"}},[i("strong",[t._v("Register")])])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},s=[],o=i(4367),l=(i(4916),i(7601),i(8862),i(1539),i(9714),i(629)),u={data:function(){return{loading:!1,showPass:!1,email:"",password:"",rules:{required:function(t){return!!t||"required"},nameLength:function(t){return/\b\w{3,10}\b/.test(t)||"more than 3 & less than 10"},email:function(t){return/\b\w{2,20}\b@\b\w{1,15}\b\.\b\w{1,10}\b/.test(t)||"invalid email"}}}},methods:{login:function(){var t=this,e=document.getElementById("nativeForm");if(this.$refs.form.validate()&&localStorage.getItem("login-user-info")){var i=JSON.parse(localStorage.getItem("login-user-info")),a=i.firstName,r=i.lastName,n=i.email,s=i.password;n==this.email&&s==this.password&&(this.loading=!0,localStorage.setItem("snack",JSON.stringify({active:!0,text:"Welcome Back",color:"indigo"})),localStorage.setItem("user-info",JSON.stringify({firstName:a,lastName:r,email:this.email,password:this.password,id:(Math.random().toString(36)+Date.now().toString(36)).substr(2)})),setTimeout((function(){e.submit(),t.loading=!1}),1500))}}},computed:(0,o.Z)({},(0,l.rn)({snack:function(t){return t.ecommerce.snack}}))},c=u,d=i(1001),f=i(3453),h=i.n(f),m=i(7524),p=i(680),v=i(3237),g=i(7118),w=i(2102),b=i(9846),x=i(1418),_=i(6232),C=i(7877),V=i(2877),y=i(314),B=(0,d.Z)(c,n,s,!1,null,"3f70bc35",null),Z=B.exports;h()(B,{VApp:m.Z,VBtn:p.Z,VCard:v.Z,VCardActions:g.h7,VCardText:g.ZB,VCardTitle:g.EB,VCol:w.Z,VContainer:b.Z,VDivider:x.Z,VForm:_.Z,VMain:C.Z,VRow:V.Z,VTextField:y.Z});var k={components:{Login:Z}},E=k,$=(0,d.Z)(E,a,r,!1,null,"0028d53a",null),S=$.exports}}]);
//# sourceMappingURL=351-legacy.491066dc.js.map