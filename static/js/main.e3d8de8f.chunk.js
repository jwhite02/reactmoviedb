(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(59)},32:function(e,t,a){},34:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),l=a.n(c),s=(a(30),a(32),a(7)),i=a(8),o=a(10),u=a(9),m=a(11),d=(a(34),a(12)),h=a.n(d),p=a(14),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"parallax-header parallax"},r.a.createElement("div",{className:"header d-flex align-content-center"},r.a.createElement("div",{className:"header d-flex "},r.a.createElement("h1",{className:"h1-font"},"Mixed Spirits"))))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer mt-5"})}}]),t}(n.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mybody"},this.props.children)}}]),t}(n.Component),b=a(15),g=a.n(b),E=function(e){return r.a.createElement("div",{id:"",className:"mx-auto my-5",style:{width:"30rem"}},r.a.createElement("form",{onSubmit:e.getDrinks},r.a.createElement("label",{htmlFor:" "},r.a.createElement("span",{id:"",className:""}," ",r.a.createElement("h3",null,"Search for Drinks"),"  "),r.a.createElement("input",{type:"text",name:"drinkName",id:"",placeholder:"",value:e.value,size:"",onChange:e.handleChange})),r.a.createElement("button",{className:"ml-2 p-1"}," Search ")))},j=a(61),w=a(62),O=a(63),D=a(64),y=a(65),N=a(66),x=a(67),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){"drinkName"===e.target.name&&(console.log("in handChange "+e.target.value),a.setState({value:e.target.value}),console.log("My drinkname "+a.state.drinkName))},a.getDrinks=function(){var e=Object(p.a)(h.a.mark(function e(t){var n,r,c;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.drinkName.value,t.preventDefault(),r="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(n),console.log(r),e.next=6,g.a.get(r);case 6:c=e.sent,a.setState({drinksData2:c.data}),null===a.state.drinksData2.drinks&&a.setState({drinksData2:["No Match"]}),console.log(a.state.drinksData2);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=Object(p.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",e.next=3,g.a.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");case 3:t=e.sent,a.setState({drinksData:t.data}),n=a.state.drinksData,console.log(n.drinks);case 7:case"end":return e.stop()}},e,this)})),a.state={bookData:[],webBookData:[],drinksData:[],drinksData2:[],renderDrinks:[],drinkName:"",value:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t;console.log("strIngredient1");try{null!==this.state.drinksData2&&("No Match"===this.state.drinksData2[0]&&(e=[r.a.createElement("div",{className:"mx-auto"}," ",r.a.createElement("h1",null,"No Match")," ")],console.log(e)),t=this.state.drinksData2.drinks,console.log(t),e=t.map(function(e){return r.a.createElement("div",{key:e.idDrink},r.a.createElement(j.a,{className:"m-1 mb-4",style:{width:"20rem"}},r.a.createElement(w.a,{top:!0,width:"100%",src:e.strDrinkThumb,alt:"Card image cap"}),r.a.createElement(O.a,null,r.a.createElement(D.a,null,r.a.createElement("h3",null,e.strDrink)),r.a.createElement(y.a,null,e.strIngredient1),r.a.createElement(N.a,{style:{fontSize:"1.25rem"}}," Directions: ",e.strInstructions,"  "),r.a.createElement(x.a,{href:"#"},"Card Link"))))}))}catch(a){console.error("An error occurred fetching XML")}return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(E,{value:this.state.value,handleChange:this.handleChange,getDrinks:this.getDrinks}),r.a.createElement(v,null,r.a.createElement("div",{className:"d-lg-flex flex-wrap cardHolder justify-content-center"},e)),r.a.createElement(f,null))}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.e3d8de8f.chunk.js.map