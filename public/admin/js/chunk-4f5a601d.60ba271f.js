(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f5a601d"],{"06a9":function(e,t,c){},"0e66":function(e,t,c){"use strict";c.r(t);var i=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("draggable",{staticClass:"interface-checkboxes",class:{cols:!e.options.single},attrs:{element:"div"},model:{value:e.choices,callback:function(t){e.choices=t},expression:"choices"}},[e._l(e.choices,(function(t,i){return c("div",{key:t.id,staticClass:"choice"},[e.options.draggable?c("v-icon",{staticClass:"drag-handle",attrs:{name:"drag_indicator"}}):e._e(),t.custom?[c("button",{on:{click:function(t){e.choices[i].checked=!e.choices[i].checked}}},[c("v-icon",{attrs:{color:"blue-grey-800",name:t.checked?"check_box":"check_box_outline_blank"}})],1),c("input",{directives:[{name:"model",rawName:"v-model",value:e.choices[i].key,expression:"choices[index].key"}],attrs:{placeholder:e.$t("other")+"..."},domProps:{value:e.choices[i].key},on:{input:function(t){t.target.composing||e.$set(e.choices[i],"key",t.target.value)}}})]:c("v-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.value,expression:"choice.value"}],attrs:{id:t.id,name:"list-sorting",value:t.key,disabled:e.readonly,label:t.value,checked:t.checked},on:{change:function(t){e.choices[i].checked=!e.choices[i].checked}}})],2)})),e.options.allow_other?c("button",{on:{click:e.addCustom}},[e._v(e._s(e.$t("add_new"))+"...")]):e._e()],2)},n=[],a=(c("6762"),c("2fdb"),c("ac6a"),c("456d"),c("75fc")),o=c("8db2"),l=c.n(o),s=c("8dee"),u=c.n(s),r={name:"InterfaceCheckboxes",mixins:[l.a],data:function(){return{choices:[]}},watch:{choices:{deep:!0,handler:function(e){if(!0===this.initialized){var t=e.filter((function(e){return e.checked})).map((function(e){return e.key}));_.isEqual(this.value,t)||(this.options.wrap&&(t=[""].concat(Object(a["a"])(t),[""])),this.$emit("input",t))}}}},created:function(){this.initChoices()},methods:{initChoices:function(){var e=_.clone(this.options.choices),t=this.value?this.value:[],c=t.filter((function(e){return e})).map((function(t){return{id:u.a.generate(),key:t,value:e[t],custom:!1===e.hasOwnProperty(t),checked:!0}}));this.options.allow_other||(c=c.filter((function(e){return!0!==e.custom})));var i=Object.keys(e).filter((function(e){return!1===t.includes(e)})).map((function(t){return{id:u.a.generate(),key:t,value:e[t],custom:!1,checked:!1}}));c=[].concat(Object(a["a"])(c),Object(a["a"])(i)),this.choices=c,this.initialized=!0},addCustom:function(){this.choices=[].concat(Object(a["a"])(this.choices),[{id:u.a.generate(),key:"",custom:!0,checked:!0}])}}},d=r,h=(c("10cb"),c("2877")),f=Object(h["a"])(d,i,n,!1,null,"19aa2ca5",null);t["default"]=f.exports},"10cb":function(e,t,c){"use strict";var i=c("06a9"),n=c.n(i);n.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}}}]);
//# sourceMappingURL=chunk-4f5a601d.60ba271f.js.map