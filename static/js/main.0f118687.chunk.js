(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(4),s=n.n(r),i=(n(9),n(2)),a=(n(10),n(0));var l=function(t){var e=Object(c.useState)([]),n=Object(i.a)(e,2),o=n[0],r=n[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){console.log(t.country);fetch("https://api.covid19api.com/total/country/"+t.country).then((function(t){return t.json()})).then((function(t){console.log(t);var e=t.length-1;r(t[e]),console.log(e)}))},children:"Take Data"}),Object(a.jsxs)("h1",{children:["Total Cases:",o.Confirmed]}),Object(a.jsxs)("h1",{children:["Total Active:",o.Active," "]}),Object(a.jsxs)("h1",{children:["Total Deaths:",o.Deaths," "]}),Object(a.jsxs)("h1",{children:["Total Recovered:",o.Recovered," "]})]})};var u=function(t){var e=Object(c.useState)([]),n=Object(i.a)(e,2),o=n[0],r=n[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"countries",children:"Select Country:"}),Object(a.jsx)("select",{onChange:function(e){console.log(e.target.value),t.selectedCountry(e.target.value)},children:function(){fetch("https://api.covid19api.com/countries").then((function(t){return t.json()})).then((function(t){console.log(t),r(t)}));var t=[];return o.forEach((function(e){t.push(Object(a.jsx)("option",{value:e.Slug,children:e.Country},e.Slug))})),t}()})]})};var j=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],o=e[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"COVID 19 Tracker App in React"}),Object(a.jsx)(u,{selectedCountry:function(t){console.log(t),o(t)}}),Object(a.jsx)(l,{country:n})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),r(t),s(t)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),h()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.0f118687.chunk.js.map