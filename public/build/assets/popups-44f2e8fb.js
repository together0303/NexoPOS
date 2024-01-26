import{b as m,f as w}from"./components-845ec4ed.js";import{c as x}from"./npm~@vue~runtime-dom_-aa3a306b.js";import y from"./ns-alert-popup-b14f8b15.js";import{n as C,d as L,b as Q,c as k}from"./ns-prompt-popup-b097095e.js";import{n as U,a as V}from"./ns-orders-preview-popup-5537b1d6.js";import{n as O}from"./ns-procurement-quantity-7ccd9d91.js";import{_ as A,n as S}from"./currency-ab26e44d.js";import{a as q}from"./bootstrap-08ba1d91.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{ak as a,ac as n,A as c,D as e,c as d,aE as l,F as j,ai as D,z as _,y as E}from"./npm~@vue~runtime-core_-ff0546fa.js";import{U as s}from"./npm~@vue~shared_-3ce114fe.js";import{x as N}from"./npm~@vue~reactivity_-547540a3.js";import"./ns-avatar-image-c7eda85f.js";import"./npm~@dicebear~avatars_-e718895d.js";import"./npm~pure-color-7e91fe3a.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~svgson-b28014ad.js";import"./npm~deep-rename-keys-b2342f4f.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-392f1d0e.js";import"./npm~xml-reader-442daf8d.js";import"./npm~eventemitter3-3e95be7d.js";import"./npm~xml-lexer-4446ceee.js";import"./npm~@dicebear~avatars-avataaars-sprites_-c793f8f6.js";import"./npm~moment-fbc5633a.js";import"./npm~vue2-daterange-picker-ccd86bea.js";import"./npm~vuedraggable-4b4454f2.js";import"./npm~vue-4c913503.js";import"./npm~@vue~compiler-dom_-85e36bcf.js";import"./npm~@vue~compiler-core_-be14e06b.js";import"./npm~sortablejs-314556ad.js";import"./npm~vue-upload-component-6f0f62ed.js";import"./npm~lodash-9a4afe3d.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~@ckeditor~ckeditor5-vue_-be5de702.js";import"./npm~numeral-85b533a7.js";import"./npm~currency.js-57f74176.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-a179ff58.js";import"./npm~axios-28bc18a3.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-d162420d.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";const z={name:"ns-products-preview",props:["popup"],computed:{product(){return this.popup.params.product}},methods:{__:A,nsCurrency:S,changeActiveTab(t){this.active=t,this.active==="units-quantities"&&this.loadProductQuantities()},loadProductQuantities(){this.hasLoadedUnitQuantities=!1,q.get(`/api/products/${this.product.id}/units/quantities`).subscribe(t=>{this.unitQuantities=t,this.hasLoadedUnitQuantities=!0})}},data(){return{active:"units-quantities",unitQuantities:[],hasLoadedUnitQuantities:!1}},mounted(){this.loadProductQuantities()}},F={class:"shadow-lg w-6/7-screen lg:w-3/5-screen h-6/7-screen lg:h-4/5-screen ns-box overflow-hidden flex flex-col"},M={class:"p-2 border-b ns-box-header text-primary text-center font-medium flex justify-between items-center"},R={class:"flex-auto overflow-y-auto ns-box-body"},T={class:"p-2"},H={key:0,class:"table ns-table w-full"},I={class:"p-1 border"},W={width:"150",class:"text-right p-1 border"},G={width:"150",class:"text-right p-1 border"},J={width:"150",class:"text-right p-1 border"},K={class:"p-1 border text-left"},X={class:"p-1 border text-right"},Y={class:"p-1 border text-right"},Z={class:"p-1 border text-right"};function $(t,r,f,et,p,o){const b=a("ns-close-button"),P=a("ns-spinner"),v=a("ns-tabs-item"),g=a("ns-tabs");return n(),c("div",F,[e("div",M,[e("div",null,s(o.__("Previewing :"))+" "+s(o.product.name),1),e("div",null,[d(b,{onClick:r[0]||(r[0]=i=>f.popup.close())})])]),e("div",R,[e("div",T,[d(g,{active:p.active,onActive:r[1]||(r[1]=i=>o.changeActiveTab(i))},{default:l(()=>[d(v,{label:o.__("Units & Quantities"),identifier:"units-quantities"},{default:l(()=>[p.hasLoadedUnitQuantities?(n(),c("table",H,[e("thead",null,[e("tr",null,[e("th",I,s(o.__("Unit")),1),e("th",W,s(o.__("Sale Price")),1),e("th",G,s(o.__("Wholesale Price")),1),e("th",J,s(o.__("Quantity")),1)])]),e("tbody",null,[(n(!0),c(j,null,D(p.unitQuantities,i=>(n(),c("tr",{key:i.id},[e("td",K,s(i.unit.name),1),e("td",X,s(o.nsCurrency(i.sale_price)),1),e("td",Y,s(o.nsCurrency(i.wholesale_price)),1),e("td",Z,s(i.quantity),1)]))),128))])])):_("",!0),p.hasLoadedUnitQuantities?_("",!0):(n(),E(P,{key:1,size:"16",border:"4"}))]),_:1},8,["label"])]),_:1},8,["active"])])])])}const tt=B(z,[["render",$]]),h={nsOrderPreview:U,nsProductPreview:tt,nsAlertPopup:y,nsConfirmPopup:C,nsPromptPopup:L,nsMediaPopup:w,nsProcurementQuantity:O,nsOrdersRefund:V,nsSelectPopup:Q,nsPOSLoadingPopup:k};for(let t in h)window[t]=h[t];const u=x({data(){return{popups:[],defaultClass:"absolute top-0 left-0 w-full h-full items-center flex overflow-y-auto justify-center is-popup"}},mounted(){nsState.subscribe(t=>{t.popups!==void 0&&(this.popups=N(t.popups),this.$forceUpdate())})},methods:{closePopup(t,r){Object.values(r.target.classList).includes("is-popup")&&t.config!==void 0&&[void 0,!0].includes(t.config.closeOnOverlayClick)&&(r.stopPropagation(),t.close())},preventPropagation(t){t.stopImmediatePropagation()}}});for(let t in m)u.component(t,m[t]);document.addEventListener("DOMContentLoaded",()=>{u.mount("#dashboard-popups"),window.nsPopups=u});