(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a44e"],{"X+fC":function(t,a,e){},kJzg:function(t,a,e){"use strict";e.r(a);var i=e("JM6l"),n=e.n(i),s=(e("Ef1v"),e("f0Pt"),e("qSeR")),l={name:"customer-address-statistics",data:function(){return{loading:!1,allOption:null,dealOption:null,allChart:null,dealChart:null,list:[]}},computed:{},mounted:function(){this.initAxis(),this.getDataList()},methods:{getDataList:function(){var t=this;this.loading=!0,Object(s.a)().then(function(a){t.loading=!1;for(var e=[],i=[],n=0;n<a.data.length;n++){var s=a.data[n];s.allCustomer&&e.push({name:s.address,value:s.allCustomer}),s.dealCustomer&&i.push({name:s.address,value:s.dealCustomer})}t.allOption.series[0].data=e,t.dealOption.series[0].data=i,t.allChart.setOption(t.allOption,!0),t.dealChart.setOption(t.dealOption,!0)}).catch(function(){t.loading=!1})},initAxis:function(){this.allChart=n.a.init(document.getElementById("allChart")),this.dealChart=n.a.init(document.getElementById("dealChart")),this.allOption=this.getChartOptione("全部客户"),this.dealOption=this.getChartOptione("成交客户"),this.allChart.setOption(this.allOption,!0),this.dealChart.setOption(this.dealOption,!0)},getChartOptione:function(t){return{title:{text:t,left:"center",bottom:0},tooltip:{trigger:"item",formatter:function(t){return t.name+"<br/>"+(t.value||"-")+"（个）"}},legend:{orient:"vertical",left:"left",data:["客户数"]},visualMap:{min:0,max:50,left:"left",top:"bottom",text:["多","少"],calculable:!0,inRange:{color:["lightskyblue","yellow","orangered"]}},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"",type:"map",mapType:"china",showLegendSymbol:!1,itemStyle:{normal:{label:{show:!0},borderColor:"#ccc"},emphasis:{label:{show:!0}}},data:[]}]}}}},o=(e("s3Ob"),e("ZrdR")),r=Object(o.a)(l,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"main-container"},[a("flexbox",{staticClass:"content"},[a("flexbox-item",[a("div",{staticClass:"axis-content"},[a("div",{staticClass:"axismain",attrs:{id:"allChart"}})])]),this._v(" "),a("flexbox-item",[a("div",{staticClass:"axis-content"},[a("div",{staticClass:"axismain",attrs:{id:"dealChart"}})])])],1)],1)},[],!1,null,"85b0db54",null);r.options.__file="CustomerAddressStatistics.vue";a.default=r.exports},qSeR:function(t,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s});var i=e("t3Un");function n(t){return Object(i.a)({url:"biRanking/addressAnalyse",method:"post",data:t})}function s(t){var a=t.type_analyse;return"industry"===a?Object(i.a)({url:"biRanking/portrait",method:"post",data:t}):"level"===a?Object(i.a)({url:"biRanking/portraitLevel",method:"post",data:t}):"source"===a?Object(i.a)({url:"biRanking/portraitSource",method:"post",data:t}):void 0}},s3Ob:function(t,a,e){"use strict";var i=e("X+fC");e.n(i).a}}]);