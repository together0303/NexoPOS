import{h as c,b as d,a as b}from"./bootstrap-CnLEEQCx.js";import{c as x,e as f}from"./components-D4w1etK_.js";import{_ as o,n as y}from"./currency-lOMYG1Wf.js";import{s as p}from"./select-api-entities-Dz_g0XY5.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as g,o as _,c as u,a as t,f as m,t as r,F as w,b as F}from"./runtime-core.esm-bundler-RT2b-_3S.js";import"./ns-alert-popup-SVrn5Xft.js";import"./ns-avatar-image-CAD6xUGA.js";import"./index.es-Br67aBEV.js";import"./ns-prompt-popup-DKRiwYBT.js";import"./join-array-DPKtuOQJ.js";const D={name:"ns-sold-stock-report",props:["storeLogo","storeName"],data(){return{categoriesNames:"",unitsNames:"",startDateField:{type:"datetimepicker",value:c(ns.date.current).startOf("month").format("YYYY-MM-DD HH:mm:ss")},endDateField:{type:"datetimepicker",value:c(ns.date.current).endOf("month").format("YYYY-MM-DD HH:mm:ss")},categoryField:{label:o("Filter by Category"),value:[],name:"filter_by_category"},unitField:{label:o("Filter by Unit"),value:[],name:"filter_by_unit"},products:[],ns:window.ns}},components:{nsDatepicker:x,nsDateTimePicker:f},computed:{totalQuantity(){return this.products.length>0?this.products.map(s=>s.quantity).reduce((s,i)=>s+i):0},totalTaxes(){return this.products.length>0?this.products.map(s=>s.tax_value).reduce((s,i)=>s+i):0},totalPrice(){return this.products.length>0?this.products.map(s=>s.total_price).reduce((s,i)=>s+i):0}},methods:{__:o,nsCurrency:y,async selectCategories(){try{const s=await p("/api/categories",o("Limit Results By Categories"),this.categoryField.value);this.categoriesNames=s.labels,this.categoryField.value=s.values,this.loadReport()}catch{d.error(o("An error has occured while loading the categories")).subscribe()}},async selectUnits(){try{const s=await p("/api/units",o("Limit Results By Units"),this.unitField.value);this.unitsNames=s.labels,this.unitField.value=s.values,this.loadReport()}catch{d.error(o("An error has occured while loading the units")).subscribe()}},printSaleReport(){this.$htmlToPaper("report-printable")},loadReport(){if(this.startDateField.value===null||this.endDateField.value===null)return d.error(o("Unable to proceed. Select a correct time range.")).subscribe();const s=c(this.startDateField.value);if(c(this.endDateField.value).isBefore(s))return d.error(o("Unable to proceed. The current time range is not valid.")).subscribe();b.post("/api/reports/sold-stock-report",{startDate:this.startDateField.value,endDate:this.endDateField.value,categories:this.categoryField.value,units:this.unitField.value}).subscribe({next:n=>{this.products=n},error:n=>{d.error(n.message).subscribe()}})}}},k={id:"report-section",class:"px-4"},C={class:"flex -mx-2"},R={class:"px-2"},N={class:"px-2"},S={class:"px-2"},U={class:"ns-button"},B=t("i",{class:"las la-sync-alt text-xl"},null,-1),Y={class:"pl-2"},M={class:"px-2"},T={class:"ns-button"},L=t("i",{class:"las la-print text-xl"},null,-1),P={class:"pl-2"},j={class:"px-2"},A={class:"ns-button"},H=t("i",{class:"las la-filter text-xl"},null,-1),Q={class:"pl-2"},V={class:"px-2"},q={class:"ns-button"},E=t("i",{class:"las la-filter text-xl"},null,-1),O={class:"pl-2"},z={id:"report-printable",class:"anim-duration-500 fade-in-entrance"},G={class:"flex w-full"},I={class:"my-4 flex justify-between w-full"},J={class:"text-secondary"},K={class:"pb-1 border-b border-dashed"},W={class:"pb-1 border-b border-dashed"},X={class:"pb-1 border-b border-dashed"},Z=["src","alt"],$={class:"rounded my-4"},tt={class:"ns-box shadow"},et={class:"border-b ns-box-body"},st={class:"table ns-table w-full"},rt={class:""},it={class:"border p-2 text-left"},at={width:"150",class:"text-right border p-2"},ot={width:"150",class:"text-right border p-2"},lt={width:"150",class:"text-right border p-2"},nt={width:"150",class:"text-right border p-2"},dt={class:""},ct={class:"p-2 border"},_t={class:"p-2 border text-right"},ut={class:"p-2 border text-right"},ht={class:"p-2 border text-right"},pt={class:"p-2 border text-right"},mt={class:"font-semibold"},bt=t("td",{colspan:"2",class:"p-2 border"},null,-1),xt={class:"p-2 border text-right"},ft={class:"p-2 border text-right"},yt={class:"p-2 border text-right"};function vt(s,i,n,gt,l,e){const h=g("ns-field");return _(),u("div",k,[t("div",C,[t("div",R,[m(h,{field:l.startDateField},null,8,["field"])]),t("div",N,[m(h,{field:l.endDateField},null,8,["field"])]),t("div",S,[t("div",U,[t("button",{onClick:i[0]||(i[0]=a=>e.loadReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[B,t("span",Y,r(e.__("Load")),1)])])]),t("div",M,[t("div",T,[t("button",{onClick:i[1]||(i[1]=a=>e.printSaleReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[L,t("span",P,r(e.__("Print")),1)])])]),t("div",j,[t("div",A,[t("button",{onClick:i[2]||(i[2]=a=>e.selectCategories()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[H,t("span",Q,r(e.__("Categories"))+": "+r(l.categoriesNames||e.__("All Categories")),1)])])]),t("div",V,[t("div",q,[t("button",{onClick:i[3]||(i[3]=a=>e.selectUnits()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[E,t("span",O,r(e.__("Units"))+": "+r(l.unitsNames||e.__("All Units")),1)])])])]),t("div",z,[t("div",G,[t("div",I,[t("div",J,[t("ul",null,[t("li",K,r(e.__("Range : {date1} — {date2}").replace("{date1}",l.startDateField.value).replace("{date2}",l.endDateField.value)),1),t("li",W,r(e.__("Document : Sold Stock Report")),1),t("li",X,r(e.__("By : {user}").replace("{user}",l.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:n.storeLogo,alt:n.storeName},null,8,Z)])])]),t("div",$,[t("div",tt,[t("div",et,[t("table",st,[t("thead",rt,[t("tr",null,[t("th",it,r(e.__("Product")),1),t("th",at,r(e.__("Unit")),1),t("th",ot,r(e.__("Quantity")),1),t("th",lt,r(e.__("Tax Value")),1),t("th",nt,r(e.__("Total")),1)])]),t("tbody",dt,[(_(!0),u(w,null,F(l.products,a=>(_(),u("tr",{key:a.id},[t("td",ct,r(a.name),1),t("td",_t,r(a.unit_name),1),t("td",ut,r(a.quantity),1),t("td",ht,r(e.nsCurrency(a.tax_value)),1),t("td",pt,r(e.nsCurrency(a.total_price)),1)]))),128))]),t("tfoot",mt,[t("tr",null,[bt,t("td",xt,r(e.totalQuantity),1),t("td",ft,r(e.nsCurrency(e.totalTaxes)),1),t("td",yt,r(e.nsCurrency(e.totalPrice)),1)])])])])])])])])}const Mt=v(D,[["render",vt]]);export{Mt as default};
