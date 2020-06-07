(this["webpackJsonpapp-covid19"]=this["webpackJsonpapp-covid19"]||[]).push([[0],{19:function(e,a,t){e.exports=t(45)},26:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(17),r=t.n(c),s=(t(24),t(25),t(26),t(2)),o=t.n(s),i=t(5),m=t(3),d=t(7),u=t.n(d),p=t(18),E=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),s=Object(m.a)(r,2),d=s[0],E=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("https://coronavirus-19-api.herokuapp.com/countries");case 2:a=e.sent,n=a.data,c.apply(void 0,Object(p.a)(t).concat([n])),E(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),E(!0)}),[]),l.a.createElement("div",{className:"table-responsive count__wrapper--tbl mt-5"},d?l.a.createElement("span",{className:"text-loading"},"Please wait..."):l.a.createElement("table",{className:"table table-bordered table-hover text-center"},l.a.createElement("thead",{className:"bg-light"},l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Total Cases"),l.a.createElement("th",null,"New Cases"),l.a.createElement("th",null,"Total Deaths"),l.a.createElement("th",null,"New Deaths"),l.a.createElement("th",null,"Total Recovered"),l.a.createElement("th",null,"Active Cases"),l.a.createElement("th",null,"Critical Cases"),l.a.createElement("th",null,"Total Cases / 1M Pop"),l.a.createElement("th",null,"Total Deaths / 1M Pop"),l.a.createElement("th",null,"Total Tests"),l.a.createElement("th",null,"Total Tests / 1M Pop"))),l.a.createElement("tbody",null,t.map((function(e,a){return l.a.createElement("tr",{key:a,className:0===e.active&&0===e.deaths?"green":""},l.a.createElement("td",null,a),l.a.createElement("td",null,e.country.toLocaleString()),l.a.createElement("td",null,e.cases.toLocaleString()),e.todayCases>0?l.a.createElement("td",{className:"new-case"},e.todayCases.toLocaleString()):l.a.createElement("td",null),e.deaths>0?l.a.createElement("td",null,e.deaths.toLocaleString()):l.a.createElement("td",null),e.todayDeaths>0?l.a.createElement("td",{className:e.todayDeaths>0?"new-death":""},e.todayDeaths.toLocaleString()):l.a.createElement("td",null),e.recovered>0?l.a.createElement("td",null,Number(e.recovered).toLocaleString()):l.a.createElement("td",null,"N/A"),e.active>0?l.a.createElement("td",null,Number(e.active).toLocaleString()):l.a.createElement("td",null,"N/A"),e.critical>0?l.a.createElement("td",null,e.critical.toLocaleString()):l.a.createElement("td",null),e.casesPerOneMillion>0?l.a.createElement("td",null,e.casesPerOneMillion.toLocaleString()):l.a.createElement("td",null),e.deathsPerOneMillion>0?l.a.createElement("td",null,e.deathsPerOneMillion.toLocaleString()):l.a.createElement("td",null),e.totalTests>0?l.a.createElement("td",null,e.totalTests.toLocaleString()):l.a.createElement("td",null),e.testsPerOneMillion>0?l.a.createElement("td",null,e.testsPerOneMillion.toLocaleString()):l.a.createElement("td",null))})))))},h=function(){var e=Object(n.useState)({cases:"",deaths:"",recovered:"",critical:"",todayCases:"",todayDeaths:"",todayActive:"",casesPerOneMillion:"",deathsPerOneMillion:"",testsPerOneMillion:"",totalTests:""}),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),s=Object(m.a)(r,2),d=s[0],p=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("https://coronavirus-19-api.herokuapp.com/countries/world");case 2:a=e.sent,t=a.data,c({cases:t.cases,deaths:t.deaths,recovered:t.recovered,critical:t.critical,todayCases:t.todayCases,todayDeaths:t.todayDeaths,todayActive:t.active,casesPerOneMillion:t.casesPerOneMillion,deathsPerOneMillion:t.deathsPerOneMillion,testsPerOneMillion:t.testsPerOneMillion,totalTests:t.totalTests}),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),p(!0)}),[]),l.a.createElement("div",{className:"container text-center",id:"dashboard"},l.a.createElement("div",{className:"count__wrapper"},l.a.createElement("h1",{className:"count__wrapper--title text-uppercase"},"Covid-19 Live Update"),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center flex-wrap"},l.a.createElement("div",{className:"card count__wrapper--case"},l.a.createElement("div",{className:"card-header"},"Total Cases"),l.a.createElement("div",{className:"card-body"},d?l.a.createElement("span",{className:"fa fa-spinner fa-spin"}):t.cases.toLocaleString())),l.a.createElement("div",{className:"card count__wrapper--death "},l.a.createElement("div",{className:"card-header"},"Total Deaths"),l.a.createElement("div",{className:"card-body"},d?l.a.createElement("span",{className:"fa fa-spinner fa-spin"}):t.deaths.toLocaleString())),l.a.createElement("div",{className:"card count__wrapper--recover"},l.a.createElement("div",{className:"card-header"},"Total Recovered"),l.a.createElement("div",{className:"card-body"},d?l.a.createElement("span",{className:"fa fa-spinner fa-spin"}):t.recovered.toLocaleString()))),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center flex-wrap mt-5"},l.a.createElement("div",{className:"card count__wrapper--active"},l.a.createElement("div",{className:"card-header"},"Active Cases"),l.a.createElement("div",{className:"card-body"},d?l.a.createElement("span",{className:"fa fa-spinner fa-spin"}):(t.cases-t.recovered-t.deaths).toLocaleString(),l.a.createElement("p",{className:"small-text"},"Currently Infected Patients"),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("div",{className:"count__wrapper--mild"},l.a.createElement("p",{className:"number mb-0"},d?l.a.createElement("span",{className:"fa fa-spinner fa-spin"}):(t.cases-t.recovered-t.deaths-t.critical).toLocaleString()),l.a.createElement("p",{className:"text"},"In Mild Condition")),l.a.createElement("div",{className:"count__wrapper--critical"},l.a.createElement("p",{className:"number mb-0"},d?l.a.createElement("span",{className:"fa fa-spinner fa-spin"}):t.critical.toLocaleString()),l.a.createElement("p",{className:"text"},"Serious or Critical"))))),l.a.createElement("div",{className:"card count__wrapper--closed"},l.a.createElement("div",{className:"card-header"},"Closed Cases"),l.a.createElement("div",{className:"card-body"},d?l.a.createElement("span",{className:"fa fa-spinner fa-spin"}):(t.recovered+t.deaths).toLocaleString(),l.a.createElement("p",{className:"small-text"},"Cases which had an outcome"),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("div",{className:"count__wrapper--discharge"},l.a.createElement("p",{className:"number mb-0"},d?l.a.createElement("span",{className:"fa fa-spinner fa-spin"}):t.recovered.toLocaleString()),l.a.createElement("p",{className:"text"},"Recovered / Discharged")),l.a.createElement("div",{className:"count__wrapper--gone"},l.a.createElement("p",{className:"number mb-0"},d?l.a.createElement("span",{className:"fa fa-spinner fa-spin"}):t.deaths.toLocaleString()),l.a.createElement("p",{className:"text"},"Deaths")))))),l.a.createElement(E,null)))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.3a9ecb81.chunk.js.map