import{_ as i}from"./lang.2d0006f0.js";import{n as r,b as l,F as h}from"./bootstrap.673b86ff.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as a,aA as d,aB as e,ao as c,L as x,b6 as g,y as f,br as y,b8 as m,aF as F}from"./runtime-core.esm-bundler.aa7a54f6.js";import"./runtime-dom.esm-bundler.68a12c3b.js";const k={name:"ns-reset",props:["url"],methods:{__:i,submit(){if(this.fields.length===0)return r.error(i("This form is not completely loaded.")).susbcribe();if(!this.validation.validateFields(this.fields))return this.$forceUpdate(),r.error(this.$slots["error-form-invalid"]?this.$slots["error-form-invalid"][0].text:"Invalid Form").subscribe();const s=this.validation.getValue(this.fields);confirm(this.$slots["confirm-message"]?this.$slots["confirm-message"][0].text:i("Would you like to proceed ?"))&&l.post("/api/reset",s).subscribe({next:t=>{r.success(t.message).subscribe()},error:t=>{r.error(t.message).subscribe()}})},loadFields(){l.get("/api/fields/ns.reset").subscribe({next:s=>{this.fields=this.validation.createFields(s)},error:s=>{r.error(s.message).subscribe()}})}},mounted(){this.loadFields()},data(){return{validation:new h,fields:[]}}},$={id:"reset-app",class:"ns-tab"},w={id:"card-header",class:"flex flex-wrap"},B={class:"tab active cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg"},V={class:"card-body ns-tab-item rounded-br-lg rounded-bl-lg"},C={class:"shadow rounded"},N={class:"-mx-4 flex flex-wrap p-2"},L={class:"card-body ns-box-footer border-t p-2 flex"};function S(s,t,T,A,u,o){const _=m("ns-field"),p=m("ns-button");return a(),d("div",$,[e("div",w,[e("div",B,c(o.__("Reset")),1)]),e("div",V,[e("div",C,[e("div",N,[(a(!0),d(x,null,g(u.fields,(n,b)=>(a(),d("div",{class:"px-4",key:b},[f(_,{field:n},null,8,["field"])]))),128))]),e("div",L,[e("div",null,[f(p,{type:"info",onClick:t[0]||(t[0]=n=>o.submit())},{default:y(()=>[F(c(o.__("Proceed")),1)]),_:1})])])])])])}var R=v(k,[["render",S]]);export{R as default};