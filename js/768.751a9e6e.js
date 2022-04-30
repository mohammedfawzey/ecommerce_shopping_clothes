"use strict";(self["webpackChunkclothes_vue"]=self["webpackChunkclothes_vue"]||[]).push([[768],{6232:function(t,e,i){var s=i(3325),a=i(6210),r=i(6257);e["Z"]=(0,s.Z)(a.Z,(0,r.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},1768:function(t,e,i){i.r(e),i.d(e,{default:function(){return P}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"signup"},[i("Signup")],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{staticClass:"surface-base apply"},[i("v-main",{staticClass:"py-0"},[i("v-container",[i("v-row",[i("v-col",[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"500"}},[i("v-card-title",{staticClass:"font-weight-light grey--text"},[t._v(" Create Account ")]),i("v-card-text",{staticClass:"pb-0"},[i("v-divider")],1),i("v-card-text",[i("v-form",{ref:"form",attrs:{action:"/",id:"nativeForm"},on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[i("v-card-text",{staticClass:"pb-0"},[i("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",label:"First Name"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),i("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",label:"Last Name"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),i("v-text-field",{attrs:{rules:[t.rules.required,t.rules.email],outlined:"",label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",type:t.showPass?"text":"password","append-icon":t.showPass?"mdi-eye":"mdi-eye-off",label:"Password"},on:{"click:append":function(e){t.showPass=!t.showPass}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-card-actions",{staticClass:"px-4"},[i("v-btn",{staticClass:"py-5 white--text text-capitalize",attrs:{"x-large":"",block:"",type:"submit",loading:t.loading,color:"#16bf82"}},[i("strong",[t._v("Register")])])],1),i("v-card-text",{staticClass:"pb-0"},[i("v-checkbox",{attrs:{color:"primary",label:"Keep me up to date on news and exclusive offers"}})],1),i("div",{staticClass:"mt-3 text--primary font-weight-light",attrs:{link:""}},[i("v-card-text",[i("router-link",{attrs:{to:"/login"}},[t._v(" Already have an account? click here")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},n=[],l=i(629),o={data:()=>({loading:!1,showPass:!1,firstName:"",lastName:"",email:"",password:"",rules:{required:t=>!!t||"required",nameLength:t=>/\b\w{3,10}\b/.test(t)||"more than 3 & less than 10",email:t=>/\b\w{2,20}\b@\b\w{1,15}\b\.\b\w{1,10}\b/.test(t)||"invalid email"}}),methods:{register(){let t=document.getElementById("nativeForm");this.$refs.form.validate()&&(this.loading=!0,localStorage.setItem("snack",JSON.stringify({text:"Account Created",active:!0,color:"success"})),localStorage.setItem("user-info",JSON.stringify({firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password,id:(Math.random().toString(36)+Date.now().toString(36)).substr(2)})),localStorage.setItem("login-user-info",JSON.stringify({firstName:this.firstName,LastName:this.LastName,email:this.email,password:this.password,id:(Math.random().toString(36)+Date.now().toString(36)).substr(2)})),setTimeout((()=>{t.submit(),this.loading=!1}),1500))}},computed:{...(0,l.rn)({snack:t=>t.ecommerce.snack})}},u=o,h=i(1001),d=i(3453),c=i.n(d),p=i(7524),m=i(680),v=i(3237),f=i(7118),g=i(172),b=i(8230),w=i(9155),x=i(4419),V=i(3325);function C(t){t.preventDefault()}var k=(0,V.Z)(b.Z,w.Z,x.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=b.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:C},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:C},ref:"input"})},onBlur(){this.isFocused=!1},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}}),y=k.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...b.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(g.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),I=i(2102),S=i(9846),_=i(1418),Z=i(6232),B=i(7877),N=i(2877),$=i(314),A=(0,h.Z)(u,r,n,!1,null,"428163af",null),E=A.exports;c()(A,{VApp:p.Z,VBtn:m.Z,VCard:v.Z,VCardActions:f.h7,VCardText:f.ZB,VCardTitle:f.EB,VCheckbox:y,VCol:I.Z,VContainer:S.Z,VDivider:_.Z,VForm:Z.Z,VMain:B.Z,VRow:N.Z,VTextField:$.Z});var D={components:{Signup:E}},F=D,O=(0,h.Z)(F,s,a,!1,null,"b74ed4fe",null),P=O.exports}}]);
//# sourceMappingURL=768.751a9e6e.js.map