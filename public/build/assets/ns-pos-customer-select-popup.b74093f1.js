import{F as z,p as L,b as g,n as x,a as A,P}from"./bootstrap.673b86ff.js";import{_}from"./lang.2d0006f0.js";import{n as V}from"./currency.ec2e3443.js";import{v as H,w as F}from"./runtime-dom.esm-bundler.68a12c3b.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import{b8 as f,b1 as l,aA as i,aB as e,ao as o,y as u,az as d,L as v,b6 as C,ay as W,br as m,aF as w,ad as B,bt as D}from"./runtime-core.esm-bundler.aa7a54f6.js";import{a as q}from"./ns-notice.ff8c2932.js";import N from"./ns-pos-confirm-popup.c7422d7d.js";import{n as E}from"./ns-paginate.78ee5ec7.js";import{n as Q}from"./ns-orders-preview-popup.5bfb847f.js";const K={mounted(){this.closeWithOverlayClicked(),this.loadTransactionFields()},data(){return{fields:[],isSubmiting:!1,formValidation:new z}},methods:{__:_,closeWithOverlayClicked:L,proceed(){const t=this.$popupParams.customer,r=this.formValidation.extractFields(this.fields);this.isSubmiting=!0,g.post(`/api/customers/${t.id}/account-history`,r).subscribe({next:h=>{this.isSubmiting=!1,x.success(h.message).subscribe(),this.$popupParams.resolve(h),this.$popup.close()},error:h=>{this.isSubmiting=!1,x.error(h.message).subscribe(),this.$popupParams.reject(h)}})},close(){this.$popup.close(),this.$popupParams.reject(!1)},loadTransactionFields(){g.get("/api/fields/ns.customers-account").subscribe({next:t=>{this.fields=this.formValidation.createFields(t)}})}}},M={class:"w-6/7-screen md:w-5/7-screen lg:w-4/7-screen h-6/7-screen md:h-5/7-screen lg:h-5/7-screen overflow-hidden shadow-lg ns-box flex flex-col relative"},Y={class:"p-2 border-b ns-box-header flex justify-between items-center"},G={class:"font-semibold"},J={class:"flex-auto overflow-y-auto"},X={key:0,class:"h-full w-full flex items-center justify-center"},Z={key:1,class:"p-2"},$={class:"p-2 ns-box-footer justify-between border-t flex"},ee=e("div",null,null,-1),se={class:"px-1"},te={class:"-mx-2 flex flex-wrap"},oe={class:"px-1"},re={class:"px-1"},ne={key:0,class:"h-full w-full absolute flex items-center justify-center",style:{background:"rgb(0 98 171 / 45%)"}};function le(t,r,h,y,n,s){const k=f("ns-close-button"),p=f("ns-spinner"),b=f("ns-field"),T=f("ns-button");return l(),i("div",M,[e("div",Y,[e("h2",G,o(s.__("New Transaction")),1),e("div",null,[u(k,{onClick:r[0]||(r[0]=a=>s.close())})])]),e("div",J,[n.fields.length===0?(l(),i("div",X,[u(p)])):d("",!0),n.fields.length>0?(l(),i("div",Z,[(l(!0),i(v,null,C(n.fields,(a,S)=>(l(),W(b,{field:a,key:S},null,8,["field"]))),128))])):d("",!0)]),e("div",$,[ee,e("div",se,[e("div",te,[e("div",oe,[u(T,{type:"error",onClick:r[1]||(r[1]=a=>s.close())},{default:m(()=>[w(o(s.__("Close")),1)]),_:1})]),e("div",re,[u(T,{type:"info",onClick:r[2]||(r[2]=a=>s.proceed())},{default:m(()=>[w(o(s.__("Proceed")),1)]),_:1})])])])]),n.isSubmiting===0?(l(),i("div",ne,[u(p)])):d("",!0)])}var ie=O(K,[["render",le]]);const ce={name:"ns-pos-coupons-load-popup",components:{nsNotice:q},data(){return{placeHolder:_("Coupon Code"),couponCode:null,order:null,activeTab:"apply-coupon",orderSubscriber:null,coupon:null}},mounted(){this.popupCloser(),this.orderSubscriber=POS.order.subscribe(t=>{this.order=B(t),this.order.coupons.length>0&&(this.activeTab="active-coupons")}),this.$popupParams&&this.$popupParams.apply_coupon&&(this.couponCode=this.$popupParams.apply_coupon,this.getCoupon(this.couponCode).subscribe({next:t=>{this.coupon=t,this.apply()}}))},destroyed(){this.orderSubscriber.unsubscribe()},methods:{__:_,popupCloser:L,popupResolver:A,selectCustomer(){Popup.show(I)},cancel(){this.coupon=null,this.couponCode=null},removeCoupon(t){this.order.coupons.splice(t,1),POS.refreshCart()},apply(){try{if(this.coupon.valid_hours_start!==null&&!ns.date.moment.isAfter(this.coupon.valid_hours_start)&&this.coupon.valid_hours_start.length>0)return x.error(_("The coupon is out from validity date range.")).subscribe();if(this.coupon.valid_hours_end!==null&&!ns.date.moment.isBefore(this.coupon.valid_hours_end)&&this.coupon.valid_hours_end.length>0)return x.error(_("The coupon is out from validity date range.")).subscribe();const t=this.coupon.products;if(t.length>0){const y=t.map(n=>n.product_id);if(this.order.products.filter(n=>y.includes(n.product_id)).length===0)return x.error(_("This coupon requires products that aren't available on the cart at the moment.")).subscribe()}const r=this.coupon.categories;if(r.length>0){const y=r.map(n=>n.category_id);if(this.order.products.filter(n=>y.includes(n.$original().category_id)).length===0)return x.error(_("This coupon requires products that belongs to specific categories that aren't included at the moment.").replace("%s")).subscribe()}let h={customer_coupon_id:this.coupon.customer_coupon.length>0?this.coupon.customer_coupon[0].id:0,minimum_cart_value:this.coupon.minimum_cart_value,maximum_cart_value:this.coupon.maximum_cart_value,name:this.coupon.name,type:this.coupon.type,value:0,id:this.coupon.id,limit_usage:this.coupon.limit_usage,code:this.coupon.code,discount_value:this.coupon.discount_value,categories:this.coupon.categories,products:this.coupon.products};this.cancel(),POS.pushCoupon(h),this.activeTab="active-coupons",setTimeout(()=>{this.popupResolver(h)},500),x.success(_("The coupon has applied to the cart.")).subscribe()}catch(t){console.log(t)}},getCouponType(t){switch(t){case"percentage_discount":return _("Percentage");case"flat_discount":return _("Flat");default:return _("Unknown Type")}},getDiscountValue(t){switch(console.log(t),t.type){case"percentage_discount":return t.discount_value+"%";case"flat_discount":return this.$options.filters.currency(t.discount_value)}},closePopup(){this.popupResolver(!1)},setActiveTab(t){this.activeTab=t,t==="apply-coupon"&&setTimeout(()=>{document.querySelector(".coupon-field").select()},10)},getCoupon(t){return!this.order.customer_id>0?x.error(_("You must select a customer before applying a coupon.")):g.post(`/api/customers/coupons/${t}`,{customer_id:this.order.customer_id})},loadCoupon(){const t=this.couponCode;this.getCoupon(t).subscribe({next:r=>{this.coupon=r,x.success(_("The coupon has been loaded.")).subscribe()},error:r=>{x.error(r.message||_("An unexpected error occured.")).subscribe()}})}}},de={class:"shadow-lg ns-box w-95vw md:w-3/6-screen lg:w-2/6-screen"},ue={class:"border-b ns-box-header p-2 flex justify-between items-center"},ae={class:"font-bold"},_e={class:"p-1 ns-box-body"},he={class:"border-2 input-group info rounded flex"},pe=["placeholder"],me={class:"pt-2"},fe={key:0,class:"pt-2 flex"},be={key:1,class:"pt-2"},ye={class:"overflow-hidden"},xe={key:0,class:"pt-2 fade-in-entrance anim-duration-500 overflow-y-auto ns-scrollbar h-64"},ve={class:"w-full ns-table"},we={class:"p-2 w-1/2 border"},ge={class:"p-2 w-1/2 border"},Ce={class:"p-2 w-1/2 border"},ke={class:"p-2 w-1/2 border"},Te={class:"p-2 w-1/2 border"},Pe={class:"p-2 w-1/2 border"},Se={class:"p-2 w-1/2 border"},Le={class:"p-2 w-1/2 border"},Oe={class:"p-2 w-1/2 border"},je={class:"p-2 w-1/2 border"},Ae={class:"p-2 w-1/2 border"},Ne={class:"p-2 w-1/2 border"},Re={key:0},Ve={class:"p-2 w-1/2 border"},He={class:"p-2 w-1/2 border"},Fe={key:0},We={key:0},De={class:"flex-auto"},Ie={class:"font-semibold text-primary p-2 flex justify-between"},Ue={key:0,class:"flex justify-between elevation-surface border items-center p-2"},ze={key:0,class:"flex"};function Be(t,r,h,y,n,s){const k=f("ns-close-button"),p=f("ns-notice"),b=f("ns-tabs-item"),T=f("ns-tabs");return l(),i("div",de,[e("div",ue,[e("h3",ae,o(s.__("Load Coupon")),1),e("div",null,[u(k,{onClick:r[0]||(r[0]=a=>s.closePopup())})])]),e("div",_e,[u(T,{onActive:r[5]||(r[5]=a=>s.setActiveTab(a)),active:n.activeTab},{default:m(()=>[u(b,{label:s.__("Apply A Coupon"),padding:"p-2",identifier:"apply-coupon"},{default:m(()=>[e("div",he,[D(e("input",{ref:"coupon",onKeyup:r[1]||(r[1]=F(a=>s.loadCoupon(),["enter"])),"onUpdate:modelValue":r[2]||(r[2]=a=>n.couponCode=a),type:"text",class:"coupon-field w-full text-primary p-2 outline-none",placeholder:n.placeHolder},null,40,pe),[[H,n.couponCode]]),e("button",{onClick:r[3]||(r[3]=a=>s.loadCoupon()),class:"px-3 py-2"},o(s.__("Load")),1)]),e("div",me,[u(p,{color:"info"},{description:m(()=>[w(o(s.__("Input the coupon code that should apply to the POS. If a coupon is issued for a customer, that customer must be selected priorly.")),1)]),_:1})]),n.order&&n.order.customer_id===void 0?(l(),i("div",fe,[e("button",{onClick:r[4]||(r[4]=a=>s.selectCustomer()),class:"w-full border p-2 outline-none ns-numpad-key info cursor-pointer text-center"},o(s.__("Click here to choose a customer.")),1)])):d("",!0),n.order&&n.order.customer_id!==void 0?(l(),i("div",be,[u(p,{color:"success"},{description:m(()=>[w(o(s.__("Loading Coupon For : ")+`${n.order.customer.first_name} ${n.order.customer.last_name}`),1)]),_:1})])):d("",!0),e("div",ye,[n.coupon?(l(),i("div",xe,[e("table",ve,[e("tbody",null,[e("tr",null,[e("td",we,o(s.__("Coupon Name")),1),e("td",ge,o(n.coupon.name),1)]),e("tr",null,[e("td",Ce,o(s.__("Discount"))+" ("+o(s.getCouponType(n.coupon.type))+")",1),e("td",ke,o(s.getDiscountValue(n.coupon)),1)]),e("tr",null,[e("td",Te,o(s.__("Usage")),1),e("td",Pe,o((n.coupon.customer_coupon.length>0?n.coupon.customer_coupon[0].usage:0)+"/"+(n.coupon.limit_usage||s.__("Unlimited"))),1)]),e("tr",null,[e("td",Se,o(s.__("Valid From")),1),e("td",Le,o(n.coupon.valid_hours_start||s.__("N/A")),1)]),e("tr",null,[e("td",Oe,o(s.__("Valid Till")),1),e("td",je,o(n.coupon.valid_hours_end||s.__("N/A")),1)]),e("tr",null,[e("td",Ae,o(s.__("Categories")),1),e("td",Ne,[e("ul",null,[(l(!0),i(v,null,C(n.coupon.categories,a=>(l(),i("li",{class:"rounded-full px-3 py-1 border",key:a.id},o(a.category.name),1))),128)),n.coupon.categories.length===0?(l(),i("li",Re,o(s.__("Not applicable")),1)):d("",!0)])])]),e("tr",null,[e("td",Ve,o(s.__("Products")),1),e("td",He,[e("ul",null,[(l(!0),i(v,null,C(n.coupon.products,a=>(l(),i("li",{class:"rounded-full px-3 py-1 border",key:a.id},o(a.product.name),1))),128)),n.coupon.products.length===0?(l(),i("li",Fe,o(s.__("Not applicable")),1)):d("",!0)])])])])])])):d("",!0)])]),_:1},8,["label"]),u(b,{label:s.__("Active Coupons"),padding:"p-1",identifier:"active-coupons"},{default:m(()=>[n.order?(l(),i("ul",We,[(l(!0),i(v,null,C(n.order.coupons,(a,S)=>(l(),i("li",{key:S,class:"flex justify-between elevation-surface border items-center px-2 py-1"},[e("div",De,[e("h3",Ie,[e("span",null,o(a.name),1),e("span",null,o(s.getDiscountValue(a)),1)])]),e("div",null,[u(k,{onClick:j=>s.removeCoupon(S)},null,8,["onClick"])])]))),128)),n.order.coupons.length===0?(l(),i("li",Ue,o(s.__("No coupons applies to the cart.")),1)):d("",!0)])):d("",!0)]),_:1},8,["label"])]),_:1},8,["active"])]),n.coupon?(l(),i("div",ze,[e("button",{onClick:r[6]||(r[6]=a=>s.apply()),class:"w-1/2 px-3 py-2 bg-success-tertiary text-white font-bold"},o(s.__("Apply")),1),e("button",{onClick:r[7]||(r[7]=a=>s.cancel()),class:"w-1/2 px-3 py-2 bg-error-tertiary text-white font-bold"},o(s.__("Cancel")),1)])):d("",!0)])}var qe=O(ce,[["render",Be]]);const Ee={name:"ns-pos-customers",data(){return{activeTab:"create-customers",customer:null,subscription:null,orders:[],options:{},optionsSubscriber:null,selectedTab:"orders",isLoadingCoupons:!1,isLoadingRewards:!1,isLoadingHistory:!1,isLoadingOrders:!1,coupons:[],rewardsResponse:[],order:null,walletHistories:[]}},components:{nsPaginate:E},destroyed(){this.subscription.unsubscribe(),this.optionsSubscriber.unsubscribe()},mounted(){this.closeWithOverlayClicked(),this.optionsSubscriber=POS.options.subscribe(t=>{this.options=t}),this.subscription=POS.order.subscribe(t=>{this.order=t,this.$popupParams.customer!==void 0?(this.activeTab="account-payment",this.customer=this.$popupParams.customer,this.loadCustomerOrders()):t.customer!==void 0&&(this.activeTab="account-payment",this.customer=t.customer,this.loadCustomerOrders())}),this.popupCloser()},methods:{__:_,nsCurrency:V,reload(){this.loadCustomerOrders()},popupResolver:A,popupCloser:L,getWalletHistoryLabel(t){switch(t){case"add":return _("Crediting");case"deduct":return _("Removing");case"refund":return _("Refunding");case"payment":return _("Payment");default:return _("Unknow")}},getType(t){switch(t){case"percentage_discount":return _("Percentage Discount");case"flat_discount":return _("Flat Discount")}},closeWithOverlayClicked:L,async openOrderOptions(t){try{const r=await new Promise((h,y)=>{P.show(Q,{order:t,resolve:h,reject:y})});this.reload()}catch{x.error(_("An error occured while opening the order options")).subscribe()}},doChangeTab(t){this.selectedTab=t,t==="coupons"&&this.loadCoupons(),t==="rewards"&&this.loadRewards(),t==="wallet-history"&&this.loadAccounHistory(),t==="orders"&&this.loadCustomerOrders()},loadAccounHistory(){this.isLoadingHistory=!0,g.get(`/api/customers/${this.customer.id}/account-history`).subscribe({next:t=>{this.walletHistories=t.data,this.isLoadingHistory=!1},error:t=>{this.isLoadingHistory=!1}})},loadCoupons(){this.isLoadingCoupons=!0,g.get(`/api/customers/${this.customer.id}/coupons`).subscribe({next:t=>{this.coupons=t,this.isLoadingCoupons=!1},error:t=>{this.isLoadingCoupons=!1}})},loadRewards(t=`/api/customers/${this.customer.id}/rewards`){this.isLoadingRewards=!0,g.get(t).subscribe({next:r=>{this.rewardsResponse=r,this.isLoadingRewards=!1},error:r=>{this.isLoadingRewards=!1}})},prefillForm(t){this.$popupParams.name!==void 0&&(t.main.value=this.$popupParams.name)},openCustomerSelection(){this.$popup.close(),P.show(I)},loadCustomerOrders(){this.isLoadingOrders=!0,g.get(`/api/customers/${this.customer.id}/orders`).subscribe({next:t=>{this.orders=t,this.isLoadingOrders=!1},error:t=>{this.isLoadingOrders=!1}})},newTransaction(t){new Promise((h,y)=>{P.show(ie,{customer:t,resolve:h,reject:y})}).then(h=>{POS.loadCustomer(t.id).subscribe(y=>{POS.selectCustomer(y)})})},applyCoupon(t){this.order.customer===void 0?P.show(N,{title:_("Use Customer ?"),message:_("No customer is selected. Would you like to proceed with this customer ?"),onAction:r=>{r&&POS.selectCustomer(this.customer).then(h=>{this.proceedApplyingCoupon(t)})}}):this.order.customer.id===this.customer.id?this.proceedApplyingCoupon(t):this.order.customer.id!==this.customer.id&&P.show(N,{title:_("Change Customer ?"),message:_("Would you like to assign this customer to the ongoing order ?"),onAction:r=>{r&&POS.selectCustomer(this.customer).then(h=>{this.proceedApplyingCoupon(t)})}})},proceedApplyingCoupon(t){new Promise((r,h)=>{P.show(qe,{apply_coupon:t.code,resolve:r,reject:h})}).then(r=>{this.popupResolver(!1)}).catch(r=>{})},handleSavedCustomer(t){x.success(t.message).subscribe(),POS.selectCustomer(t.entry),this.$popup.close()}}},Qe={id:"ns-pos-customers",class:"shadow-lg rounded w-95vw h-95vh lg:w-3/5-screen flex flex-col overflow-hidden"},Ke={class:"ns-header p-2 flex justify-between items-center border-b"},Me={class:"font-semibold"},Ye={class:"ns-body flex-auto flex p-2 overflow-y-auto"},Ge={key:1,class:"h-full flex-col w-full flex items-center justify-center text-primary"},Je=e("i",{class:"lar la-hand-paper ns-icon text-6xl"},null,-1),Xe={class:"font-medium text-2xl"},Ze={key:0,class:"flex-auto w-full flex items-center justify-center flex-col p-4"},$e=e("i",{class:"lar la-frown text-6xl"},null,-1),es={class:"font-medium text-2xl"},ss={class:"my-2"},ts={key:1,class:"flex flex-col flex-auto"},os={class:"flex-auto p-2 flex flex-col"},rs={class:"-mx-4 flex flex-wrap ns-tab-cards"},ls={class:"px-4 mb-4 w-full"},is={class:"font-semibold"},cs={class:"px-4 mb-4 w-full md:w-1/4"},ds={class:"rounded-lg shadow bg-transparent bg-gradient-to-br from-success-secondary to-green-700 p-2 flex flex-col text-white"},us={class:"font-medium text-lg"},as={class:"w-full flex justify-end"},_s={class:"font-bold"},hs={class:"px-4 mb-4 w-full md:w-1/4"},ps={class:"rounded-lg shadow bg-transparent bg-gradient-to-br from-error-secondary to-red-700 p-2 text-white"},ms={class:"font-medium text-lg"},fs={class:"w-full flex justify-end"},bs={class:"text-2xl font-bold"},ys={class:"px-4 mb-4 w-full md:w-1/4"},xs={class:"rounded-lg shadow bg-transparent bg-gradient-to-br from-blue-500 to-blue-700 p-2 text-white"},vs={class:"font-medium text-lg"},ws={class:"w-full flex justify-end"},gs={class:"text-2xl font-bold"},Cs={class:"px-4 mb-4 w-full md:w-1/4"},ks={class:"rounded-lg shadow bg-transparent bg-gradient-to-br from-teal-500 to-teal-700 p-2 text-white"},Ts={class:"font-medium text-lg"},Ps={class:"w-full flex justify-end"},Ss={class:"text-2xl font-bold"},Ls={class:"flex flex-auto flex-col overflow-hidden"},Os={key:0,class:"flex-auto h-full justify-center flex items-center"},js={class:"py-2 w-full"},As={class:"font-semibold text-primary"},Ns={class:"flex-auto flex-col flex overflow-hidden"},Rs={class:"flex-auto overflow-y-auto"},Vs={class:"table ns-table w-full"},Hs={class:"text-primary"},Fs={colspan:"3",width:"150",class:"p-2 border font-semibold"},Ws={width:"50",class:"p-2 border font-semibold"},Ds={class:"text-primary"},Is={key:0},Us={class:"border p-2 text-center",colspan:"4"},zs={colspan:"3",class:"border p-2 text-center"},Bs={class:"flex flex-col items-start"},qs={class:"font-bold"},Es={class:"md:-mx-2 w-full flex flex-col md:flex-row"},Qs={class:"md:px-2 flex items-start w-full md:w-1/4"},Ks={class:"md:px-2 flex items-start w-full md:w-1/4"},Ms={class:"md:px-2 flex items-start w-full md:w-1/4"},Ys={class:"border p-2 text-center"},Gs=["onClick"],Js=e("i",{class:"las la-wallet"},null,-1),Xs={class:"ml-1"},Zs={key:0,class:"flex-auto h-full justify-center flex items-center"},$s={class:"py-2 w-full"},et={class:"font-semibold text-primary"},st={class:"flex-auto flex-col flex overflow-hidden"},tt={class:"flex-auto overflow-y-auto"},ot={class:"table ns-table w-full"},rt={class:"text-primary"},nt={colspan:"3",width:"150",class:"p-2 border font-semibold"},lt={class:"text-primary"},it={key:0},ct={class:"border p-2 text-center",colspan:"3"},dt={colspan:"3",class:"border p-2 text-center"},ut={class:"flex flex-col items-start"},at={class:"font-bold"},_t={class:"md:-mx-2 w-full flex flex-col md:flex-row"},ht={class:"md:px-2 flex items-start w-full md:w-1/3"},pt={class:"md:px-2 flex items-start w-full md:w-1/3"},mt={key:0,class:"flex-auto h-full justify-center flex items-center"},ft={class:"py-2 w-full"},bt={class:"font-semibold text-primary"},yt={class:"flex-auto flex-col flex overflow-hidden"},xt={class:"flex-auto overflow-y-auto"},vt={class:"table ns-table w-full"},wt={class:"text-primary"},gt={width:"150",class:"p-2 border font-semibold"},Ct={class:"p-2 border font-semibold"},kt=e("th",{class:"p-2 border font-semibold"},null,-1),Tt={class:"text-primary text-sm"},Pt={key:0},St={class:"border p-2 text-center",colspan:"4"},Lt={width:"300",class:"border p-2"},Ot={class:""},jt={class:"-mx-2 flex"},At={class:"text-xs text-primary px-2"},Nt={class:"text-xs text-primary px-2"},Rt={class:"border p-2 text-center"},Vt={key:0},Ht={key:1},Ft={class:"border p-2 text-right"},Wt={key:0,class:"flex-auto h-full justify-center flex items-center"},Dt={class:"py-2 w-full"},It={class:"font-semibold text-primary"},Ut={class:"flex-auto flex-col flex overflow-hidden"},zt={class:"flex-auto overflow-y-auto"},Bt={class:"table ns-table w-full"},qt={class:"text-primary"},Et={width:"150",class:"p-2 border font-semibold"},Qt={class:"p-2 border font-semibold"},Kt={class:"p-2 border font-semibold"},Mt={key:0,class:"text-primary text-sm"},Yt={key:0},Gt={class:"border p-2 text-center",colspan:"4"},Jt={width:"300",class:"border p-2"},Xt={class:"text-center"},Zt={width:"300",class:"border p-2"},$t={class:"text-center"},eo={width:"300",class:"border p-2"},so={class:"text-center"},to={class:"py-1 flex justify-end"},oo={class:"p-2 border-t border-box-edge flex justify-between"},ro=e("div",null,null,-1);function no(t,r,h,y,n,s){const k=f("ns-close-button"),p=f("ns-crud-form"),b=f("ns-tabs-item"),T=f("ns-button"),a=f("ns-spinner"),S=f("ns-paginate"),j=f("ns-tabs");return l(),i("div",Qe,[e("div",Ke,[e("h3",Me,o(s.__("Customers")),1),e("div",null,[u(k,{onClick:r[0]||(r[0]=c=>t.$popup.close())})])]),e("div",Ye,[u(j,{active:n.activeTab,onActive:r[7]||(r[7]=c=>n.activeTab=c)},{default:m(()=>[u(b,{identifier:"create-customers",label:"New Customer"},{default:m(()=>[n.options.ns_pos_customers_creation_enabled==="yes"?(l(),W(p,{key:0,onUpdated:r[1]||(r[1]=c=>s.prefillForm(c)),onSave:r[2]||(r[2]=c=>s.handleSavedCustomer(c)),"submit-url":"/api/crud/ns.customers",src:"/api/crud/ns.customers/form-config"},{title:m(()=>[w(o(s.__("Customer Name")),1)]),save:m(()=>[w(o(s.__("Save Customer")),1)]),_:1})):d("",!0),n.options.ns_pos_customers_creation_enabled!=="yes"?(l(),i("div",Ge,[Je,e("h3",Xe,o(s.__("Not Authorized")),1),e("p",null,o(s.__("Creating customers has been explicitly disabled from the settings.")),1)])):d("",!0)]),_:1}),u(b,{identifier:"account-payment",label:s.__("Customer Account"),class:"flex",style:{padding:"0!important"}},{default:m(()=>[n.customer===null?(l(),i("div",Ze,[$e,e("h3",es,o(s.__("No Customer Selected")),1),e("p",null,o(s.__("In order to see a customer account, you need to select one customer.")),1),e("div",ss,[u(T,{onClick:r[3]||(r[3]=c=>s.openCustomerSelection()),type:"info"},{default:m(()=>[w(o(s.__("Select Customer")),1)]),_:1})])])):d("",!0),n.customer?(l(),i("div",ts,[e("div",os,[e("div",rs,[e("div",ls,[e("h2",is,o(s.__("Summary For"))+" : "+o(n.customer.name),1)]),e("div",cs,[e("div",ds,[e("h3",us,o(s.__("Total Purchases")),1),e("div",as,[e("h2",_s,o(s.nsCurrency(t.amount)),1)])])]),e("div",hs,[e("div",ps,[e("h3",ms,o(s.__("Total Owed")),1),e("div",fs,[e("h2",bs,o(s.nsCurrency(t.amount)),1)])])]),e("div",ys,[e("div",xs,[e("h3",vs,o(s.__("Wallet Amount")),1),e("div",ws,[e("h2",gs,o(s.nsCurrency(t.amount)),1)])])]),e("div",Cs,[e("div",ks,[e("h3",Ts,o(s.__("Credit Limit")),1),e("div",Ps,[e("h2",Ss,o(s.nsCurrency(t.amount)),1)])])])]),e("div",Ls,[u(j,{active:n.selectedTab,onChangeTab:r[5]||(r[5]=c=>s.doChangeTab(c))},{default:m(()=>[u(b,{identifier:"orders",label:s.__("Orders")},{default:m(()=>[n.isLoadingOrders?(l(),i("div",Os,[u(a,{size:"36"})])):d("",!0),n.isLoadingOrders?d("",!0):(l(),i(v,{key:1},[e("div",js,[e("h2",As,o(s.__("Last Purchases")),1)]),e("div",Ns,[e("div",Rs,[e("table",Vs,[e("thead",null,[e("tr",Hs,[e("th",Fs,o(s.__("Order")),1),e("th",Ws,o(s.__("Options")),1)])]),e("tbody",Ds,[n.orders.length===0?(l(),i("tr",Is,[e("td",Us,o(s.__("No orders...")),1)])):d("",!0),(l(!0),i(v,null,C(n.orders,c=>(l(),i("tr",{key:c.id},[e("td",zs,[e("div",Bs,[e("h3",qs,o(s.__("Code"))+": "+o(c.code),1),e("div",Es,[e("div",Qs,[e("small",null,o(s.__("Total"))+": "+o(s.nsCurrency(t.total)),1)]),e("div",Ks,[e("small",null,o(s.__("Status"))+": "+o(c.human_status),1)]),e("div",Ms,[e("small",null,o(s.__("Delivery"))+": "+o(c.human_delivery_status),1)])])])]),e("td",Ys,[e("button",{onClick:U=>s.openOrderOptions(c),class:"rounded-full h-8 px-2 flex items-center justify-center border border-gray ns-inset-button success"},[Js,e("span",Xs,o(s.__("Options")),1)],8,Gs)])]))),128))])])])])],64))]),_:1},8,["label"]),u(b,{identifier:"wallet-history",label:s.__("Wallet History")},{default:m(()=>[n.isLoadingHistory?(l(),i("div",Zs,[u(a,{size:"36"})])):d("",!0),n.isLoadingHistory?d("",!0):(l(),i(v,{key:1},[e("div",$s,[e("h2",et,o(s.__("Wallet History")),1)]),e("div",st,[e("div",tt,[e("table",ot,[e("thead",null,[e("tr",rt,[e("th",nt,o(s.__("Transaction")),1)])]),e("tbody",lt,[n.walletHistories.length===0?(l(),i("tr",it,[e("td",ct,o(s.__("No History...")),1)])):d("",!0),(l(!0),i(v,null,C(n.walletHistories,c=>(l(),i("tr",{key:c.id},[e("td",dt,[e("div",ut,[e("h3",at,o(s.__("Transaction"))+": "+o(s.getWalletHistoryLabel(c.operation)),1),e("div",_t,[e("div",ht,[e("small",null,o(s.__("Amount"))+": "+o(s.nsCurrency(t.amount)),1)]),e("div",pt,[e("small",null,o(s.__("Date"))+": "+o(c.created_at),1)])])])])]))),128))])])])])],64))]),_:1},8,["label"]),u(b,{identifier:"coupons",label:s.__("Coupons")},{default:m(()=>[n.isLoadingCoupons?(l(),i("div",mt,[u(a,{size:"36"})])):d("",!0),n.isLoadingCoupons?d("",!0):(l(),i(v,{key:1},[e("div",ft,[e("h2",bt,o(s.__("Coupons")),1)]),e("div",yt,[e("div",xt,[e("table",vt,[e("thead",null,[e("tr",wt,[e("th",gt,o(s.__("Name")),1),e("th",Ct,o(s.__("Type")),1),kt])]),e("tbody",Tt,[n.coupons.length===0?(l(),i("tr",Pt,[e("td",St,o(s.__("No coupons for the selected customer...")),1)])):d("",!0),(l(!0),i(v,null,C(n.coupons,c=>(l(),i("tr",{key:c.id},[e("td",Lt,[e("h3",null,o(c.name),1),e("div",Ot,[e("ul",jt,[e("li",At,o(s.__("Usage :"))+" "+o(c.usage)+"/"+o(c.limit_usage),1),e("li",Nt,o(s.__("Code :"))+" "+o(c.code),1)])])]),e("td",Rt,[w(o(s.getType(c.coupon.type))+" ",1),c.coupon.type==="percentage_discount"?(l(),i("span",Vt," ("+o(c.coupon.discount_value)+"%) ",1)):d("",!0),c.coupon.type==="flat_discount"?(l(),i("span",Ht," ("+o(s.nsCurrency(t.value))+") ",1)):d("",!0)]),e("td",Ft,[u(T,{onClick:U=>s.applyCoupon(c),type:"info"},{default:m(()=>[w(o(s.__("Use Coupon")),1)]),_:2},1032,["onClick"])])]))),128))])])])])],64))]),_:1},8,["label"]),u(b,{identifier:"rewards",label:s.__("Rewards")},{default:m(()=>[n.isLoadingRewards?(l(),i("div",Wt,[u(a,{size:"36"})])):d("",!0),n.isLoadingRewards?d("",!0):(l(),i(v,{key:1},[e("div",Dt,[e("h2",It,o(s.__("Rewards")),1)]),e("div",Ut,[e("div",zt,[e("table",Bt,[e("thead",null,[e("tr",qt,[e("th",Et,o(s.__("Name")),1),e("th",Qt,o(s.__("Points")),1),e("th",Kt,o(s.__("Target")),1)])]),n.rewardsResponse.data?(l(),i("tbody",Mt,[n.rewardsResponse.data.length===0?(l(),i("tr",Yt,[e("td",Gt,o(s.__("No rewards available the selected customer...")),1)])):d("",!0),(l(!0),i(v,null,C(n.rewardsResponse.data,c=>(l(),i("tr",{key:c.id},[e("td",Jt,[e("h3",Xt,o(c.reward_name),1)]),e("td",Zt,[e("h3",$t,o(c.points),1)]),e("td",eo,[e("h3",so,o(c.target),1)])]))),128))])):d("",!0)])])]),e("div",to,[u(S,{pagination:n.rewardsResponse,onLoad:r[4]||(r[4]=c=>s.loadRewards(c))},null,8,["pagination"])])],64))]),_:1},8,["label"])]),_:1},8,["active"])])]),e("div",oo,[ro,e("div",null,[u(T,{onClick:r[6]||(r[6]=c=>s.newTransaction(n.customer)),type:"info"},{default:m(()=>[w(o(s.__("Account Transaction")),1)]),_:1})])])])):d("",!0)]),_:1},8,["label"])]),_:1},8,["active"])])])}var R=O(Ee,[["render",no]]);const lo={data(){return{searchCustomerValue:"",orderSubscription:null,order:{},debounceSearch:null,customers:[],isLoading:!1}},computed:{customerSelected(){return!1}},watch:{searchCustomerValue(t){clearTimeout(this.debounceSearch),this.debounceSearch=setTimeout(()=>{this.searchCustomer(t)},500)}},mounted(){this.$popup.event.subscribe(t=>{t.event==="click-overlay"&&this.resolveIfQueued(!1)}),this.orderSubscription=POS.order.subscribe(t=>{this.order=t}),this.getRecentCustomers(),this.$refs.searchField.focus()},destroyed(){this.orderSubscription.unsubscribe()},methods:{__:_,nsCurrency:V,resolveIfQueued:A,attemptToChoose(){if(this.customers.length===1)return this.selectCustomer(this.customers[0]);x.info("Too many result.").subscribe()},openCustomerHistory(t,r){r.stopImmediatePropagation(),this.$popup.close(),P.show(R,{customer:t,activeTab:"account-payment"})},selectCustomer(t){this.customers.forEach(r=>r.selected=!1),t.selected=!0,this.isLoading=!0,POS.selectCustomer(t).then(r=>{this.isLoading=!1,this.resolveIfQueued(t)}).catch(r=>{this.isLoading=!1})},searchCustomer(t){g.post("/api/customers/search",{search:t}).subscribe(r=>{r.forEach(h=>h.selected=!1),this.customers=r})},createCustomerWithMatch(t){this.resolveIfQueued(!1),P.show(R,{name:t})},getRecentCustomers(){this.isLoading=!0,g.get("/api/customers/recently-active").subscribe({next:t=>{this.isLoading=!1,t.forEach(r=>r.selected=!1),this.customers=t},error:t=>{this.isLoading=!1}})}}},io={id:"ns-pos-customer-select-popup",class:"ns-box shadow-xl w-4/5-screen md:w-2/5-screen xl:w-108"},co={id:"header",class:"border-b ns-box-header text-center font-semibold text-2xl py-2"},uo={class:"relative"},ao={class:"p-2 border-b ns-box-body items-center flex justify-between"},_o={class:"flex items-center justify-between"},ho=e("i",{class:"las la-eye"},null,-1),po=[ho],mo={class:"p-2 border-b ns-box-body flex justify-between text-primary"},fo={class:"input-group flex-auto border-2 rounded"},bo={class:"h-3/5-screen xl:h-2/5-screen overflow-y-auto ns-scrollbar"},yo={class:"ns-vertical-menu"},xo={key:0,class:"p-2 text-center text-primary"},vo={class:"border-b border-dashed border-info-primary"},wo=["onClick"],go={class:"flex items-center"},Co={key:0,class:"text-error-primary"},ko={key:1},To={class:"purchase-amount"},Po=["onClick"],So=e("i",{class:"las la-eye"},null,-1),Lo=[So],Oo={key:0,class:"z-10 top-0 absolute w-full h-full flex items-center justify-center"};function jo(t,r,h,y,n,s){const k=f("ns-spinner");return l(),i("div",io,[e("div",co,[e("h2",null,o(s.__("Select Customer")),1)]),e("div",uo,[e("div",ao,[e("span",null,o(s.__("Selected"))+" : ",1),e("div",_o,[e("span",null,o(n.order.customer?n.order.customer.name:"N/A"),1),n.order.customer?(l(),i("button",{key:0,onClick:r[0]||(r[0]=p=>s.openCustomerHistory(n.order.customer,p)),class:"mx-2 rounded-full h-8 w-8 flex items-center justify-center border ns-inset-button hover:border-transparent"},po)):d("",!0)])]),e("div",mo,[e("div",fo,[D(e("input",{ref:"searchField",onKeydown:r[1]||(r[1]=F(p=>s.attemptToChoose(),["enter"])),"onUpdate:modelValue":r[2]||(r[2]=p=>n.searchCustomerValue=p),placeholder:"Search Customer",type:"text",class:"outline-none w-full p-2"},null,544),[[H,n.searchCustomerValue]])])]),e("div",bo,[e("ul",yo,[n.customers&&n.customers.length===0?(l(),i("li",xo,o(s.__("No customer match your query...")),1)):d("",!0),n.customers&&n.customers.length===0?(l(),i("li",{key:1,onClick:r[3]||(r[3]=p=>s.createCustomerWithMatch(n.searchCustomerValue)),class:"p-2 cursor-pointer text-center text-primary"},[e("span",vo,o(s.__("Create a customer")),1)])):d("",!0),(l(!0),i(v,null,C(n.customers,p=>(l(),i("li",{onClick:b=>s.selectCustomer(p),key:p.id,class:"cursor-pointer p-2 border-b text-primary flex justify-between items-center"},[e("span",null,o(p.first_name),1),e("p",go,[p.owe_amount>0?(l(),i("span",Co,"-"+o(s.nsCurrency(p.owe_amount)),1)):d("",!0),p.owe_amount>0?(l(),i("span",ko,"/")):d("",!0),e("span",To,o(s.nsCurrency(p.purchases_amount)),1),e("button",{onClick:b=>s.openCustomerHistory(p,b),class:"mx-2 rounded-full h-8 w-8 flex items-center justify-center border ns-inset-button info"},Lo,8,Po)])],8,wo))),128))])]),n.isLoading?(l(),i("div",Oo,[u(k,{size:"24",border:"8"})])):d("",!0)])])}var I=O(lo,[["render",jo]]);export{qe as a,R as b,I as n};