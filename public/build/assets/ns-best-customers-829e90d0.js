import{_ as h,n as f,a as p}from"./currency-dc6217f5.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{an as d,af as e,G as t,H as s,c as u,A as i,F as b,al as y}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as r}from"./npm~@vue~shared_-951a29c4.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-beabd60a.js";const v={mounted(){this.hasLoaded=!1,this.subscription=Dashboard.bestCustomers.subscribe(l=>{this.hasLoaded=!0,this.customers=l})},methods:{__:h,nsCurrency:f,nsRawCurrency:p},data(){return{customers:[],subscription:null,hasLoaded:!1}},unmounted(){this.subscription.unsubscribe()}},w={id:"ns-best-customers",class:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},C={class:"flex-auto"},g={class:"head text-center flex justify-between items-center border-b w-full p-2"},k={class:"body flex flex-col h-64"},j={key:0,class:"w-full flex items-center justify-center"},L={key:1,class:"flex items-center justify-center flex-col"},B=s("i",{class:"las la-grin-beam-sweat text-6xl"},null,-1),V={class:"text-sm"},N={key:2,class:"table w-full"},D={class:"p-2"},F={class:"-mx-1 flex justify-start items-center"},R=s("div",{class:"px-1"},[s("div",{class:"rounded-full"},[s("i",{class:"las la-user-circle text-xl"})])],-1),z={class:"px-1 justify-center"},A={class:"font-semibold items-center"},E={class:"flex justify-end amount p-2"};function G(l,a,H,S,o,c){const _=d("ns-close-button"),m=d("ns-spinner");return e(),t("div",w,[s("div",C,[s("div",g,[s("h5",null,r(c.__("Best Customers")),1),s("div",null,[u(_,{onClick:a[0]||(a[0]=n=>l.$emit("onRemove"))})])]),s("div",k,[o.hasLoaded?i("",!0):(e(),t("div",j,[u(m,{size:"12",border:"4"})])),o.hasLoaded&&o.customers.length===0?(e(),t("div",L,[B,s("p",V,r(c.__("Well.. nothing to show for the meantime")),1)])):i("",!0),o.customers.length>0?(e(),t("table",N,[s("thead",null,[(e(!0),t(b,null,y(o.customers,n=>(e(),t("tr",{key:n.id,class:"entry border-b text-sm"},[s("th",D,[s("div",F,[R,s("div",z,[s("h3",A,r(n.first_name),1)])])]),s("th",E,r(c.nsCurrency(n.purchases_amount)),1)]))),128))])])):i("",!0)])])])}const Q=x(v,[["render",G]]);export{Q as default};
