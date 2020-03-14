(this["webpackJsonpromania-corona-counter"]=this["webpackJsonpromania-corona-counter"]||[]).push([[0],{14:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=(a(14),a(1)),o=a(2),i=a(4),d=a(3),u=a(5),m=a(6),p=a.n(m),h=(a(20),a(21),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).callData=function(){fetch("https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=(Confirmed%20%3E%200)%20AND%20(Recovered%3C%3E0)%20AND%20(Country_Region%3D%27Romania%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Recovered%20desc%2CCountry_Region%20asc%2CProvince_State%20asc&outSR=102100&resultOffset=0&resultRecordCount=250&cacheHint=true").then((function(e){return e.json()})).then((function(e){a.setState({data:e})}))},a.state={intervalId:null,data:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=setInterval(this.callData,18e5);this.setState({intervalId:e}),this.callData()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this.state.data;return this.props.children(e)}}]),t}(n.Component)),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).data={confirmed:0,country:null,deaths:0,lastUpdate:null,recovered:0},a.setData=function(e){if(e){var t=e.features[0].attributes,n=t.Country_Region,r=t.Confirmed,c=t.Deaths,l=t.Recovered,s=t.Last_Update;a.data={country:n,confirmed:r,deaths:c,recovered:l,lastUpdate:s}}},a.preloader=function(){return r.a.createElement("div",{class:"preloader-wrapper big active"},r.a.createElement("div",{class:"spinner-layer spinner-blue-only"},r.a.createElement("div",{class:"circle-clipper left"},r.a.createElement("div",{class:"circle"})),r.a.createElement("div",{class:"gap-patch"},r.a.createElement("div",{class:"circle"})),r.a.createElement("div",{class:"circle-clipper right"},r.a.createElement("div",{class:"circle"}))))},a.renderCounter=function(e){if(!e)return a.preloader();var t=e.features[0].attributes,n=t.Country_Region,c=t.Confirmed,l=t.Deaths,s=t.Recovered,o=t.Last_Update;return r.a.createElement("div",{className:"card deep-purple darken-4 z-depth-2 own-container"},r.a.createElement("span",{className:"card-title"},r.a.createElement("h4",{className:"last-update"},n," Corona Counter")),r.a.createElement("div",{className:"card-content"},r.a.createElement("h5",{className:"inline-data"},"Confirmed",r.a.createElement(p.a,{start:a.data.confirmed,end:c,delay:0,duration:2.75},(function(t){var n=t.countUpRef;return a.setData(e),r.a.createElement("div",null,r.a.createElement("span",{ref:n}))}))),r.a.createElement("h5",{className:"inline-data"},"Deaths",r.a.createElement(p.a,{start:a.data.deaths,end:l,delay:0,duration:2.75},(function(e){var t=e.countUpRef;return r.a.createElement("div",null,r.a.createElement("span",{ref:t}))}))),r.a.createElement("h5",{className:"inline-data"},"Recovered",r.a.createElement(p.a,{start:a.data.recovered,end:s,delay:0,duration:2.75},(function(e){var t=e.countUpRef;return r.a.createElement("div",null,r.a.createElement("span",{ref:t}))})))),r.a.createElement("div",{className:"last-update"},r.a.createElement("p",{className:"text-center"},"Last update: ","".concat(new Date(o))),r.a.createElement("p",{className:"text-center"},"Data by ",r.a.createElement("a",{href:"https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"},"John Hopkins University"))),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:"https://github.com/mihaimpop/rcc/tree/master"},"Github"),r.a.createElement("a",{href:"https://staythefuckhome.com/"},"#staythefuckhome"," ",r.a.createElement("i",{class:"material-icons btn-floating btn-small pulse red"},"\u2764"))))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col s12 m12 l12"},r.a.createElement(h,null,this.renderCounter))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.027c3c4b.chunk.js.map