(this["webpackJsonpclicky-app"]=this["webpackJsonpclicky-app"]||[]).push([[0],[,,function(e,a,t){e.exports=t.p+"static/media/brand1.2c1b7a58.png"},function(e){e.exports=JSON.parse('[{"id":1,"name":"Marge1","image":"http://assets.stickpng.com/thumbs/5a0c40ca5a997e1c2cea1170.png","clicked":false},{"id":2,"name":"Homer1","image":"http://assets.stickpng.com/thumbs/5a0c40a65a997e1c2cea116c.png","clicked":false},{"id":3,"name":"Bart1","image":"http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bd1c.png","clicked":false},{"id":4,"name":"Lisa1","image":"http://assets.stickpng.com/thumbs/5a0c40b85a997e1c2cea116e.png","clicked":false},{"id":5,"name":"Bart2","image":"http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bd17.png","clicked":false},{"id":6,"name":"Homer2","image":"http://assets.stickpng.com/thumbs/5a0c409d5a997e1c2cea116b.png","clicked":false},{"id":7,"name":"Marge-Homer","image":"http://assets.stickpng.com/thumbs/5a0c408a5a997e1c2cea1169.png","clicked":false},{"id":8,"name":"Bart3","image":"http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bd18.png","clicked":false},{"id":9,"name":"Bart4","image":"http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bd1b.png","clicked":false},{"id":10,"name":"family","image":"http://assets.stickpng.com/thumbs/5a0c40db5a997e1c2cea1171.png","clicked":false},{"id":11,"name":"Maggie2","image":"http://assets.stickpng.com/thumbs/5a0c40c15a997e1c2cea116f.png","clicked":false},{"id":12,"name":"Krusty","image":"http://assets.stickpng.com/thumbs/5a0c40b05a997e1c2cea116d.png","clicked":false}]')},,,,,function(e,a,t){e.exports=t.p+"static/media/personal-use.7bb4572a.jpg"},,,function(e,a,t){e.exports=t(23)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),n=t(5),r=t.n(n);t(17);var i=function(e){return s.a.createElement("main",{className:"wrapper"},e.children)},l=(t(18),t(2)),o=t.n(l);var m=function(e){return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light justify-content-center"},s.a.createElement("div",{id:"nav-background"}),s.a.createElement("div",{className:"col-auto"},s.a.createElement("img",{id:"brand",src:o.a,alt:o.a+" Logo"})),s.a.createElement("div",{id:"titleBox",className:"col-auto simpson-yellow h2 text-center bg-secondary rounded p-3"},s.a.createElement("a",{href:"#sec-game"},"Clicky Game")))},d=t(6),u=t(7),p=t(1),f=t(10),g=t(9);t(19),t(20);var h=function(e){return s.a.createElement("img",{className:"card-imgs img-thumbnail m-2 ".concat(e.shakeClass),alt:e.name,src:e.image,"data-clicked":e.clicked,onClick:function(){return e.selectCard(e.id)}})};t(21);var b=function(e){return s.a.createElement("div",{id:"scoreboard",className:"col-12 simpson-red h2 text-center my-4 d-flex justify-content-center"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 col-md-auto px-5"},"Score: ",s.a.createElement("span",{className:"scores px-3"},e.score)),s.a.createElement("div",{className:"col-12 col-md-auto px-5"},"Top Score: ",s.a.createElement("span",{className:"scores px-3"},e.topScore))))},k=t(3),v=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(d.a)(this,t);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=a.call.apply(a,[this].concat(s))).state={characters:k,score:0,topScore:0,shakeClass:"shake"},e.shuffleCards=function(){e.state.characters.sort((function(){return Math.random()-.5})),e.setState({characters:k})},e.selectCard=function(a){e.shuffleCards(),console.log(a+" Card was selected"),e.state.characters.forEach((function(t){if(a===t.id){if(console.log(t.name+" matches: ID "+t.id),t.clicked)return e.gameOver();t.clicked=!0,e.setState({score:e.state.score+1}),console.log(t.name+" clicked value is set to "+t.clicked)}}))},e.newGame=function(){e.setState({score:0}),e.setState({shakeClass:""}),e.shuffleCards(),e.state.characters.forEach((function(e){e.clicked=!1,console.log(e.name+" click value set to "+e.clicked)}))},e.gameOver=function(){e.setState({shakeClass:"shake"}),e.state.topScore<e.state.score&&e.setState({topScore:e.state.score}),setTimeout(function(){this.newGame()}.bind(Object(p.a)(e)),1e3)},e}return Object(u.a)(t,[{key:"componentWillMount",value:function(){this.newGame()}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{id:"sec-game",className:"container"},s.a.createElement("div",{className:"row d-flex justify-content-center"},s.a.createElement(b,{score:this.state.score,topScore:this.state.topScore}),this.state.characters.map((function(a){return s.a.createElement(h,{id:a.id,key:a.id,name:a.name,image:a.image,selectCard:e.selectCard,clicked:a.clicked,shakeClass:e.state.shakeClass})}))))}}]),t}(s.a.Component),E=(t(22),t(8)),y=t.n(E);var N=function(){return s.a.createElement("footer",{id:"sec-footer",className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 d-flex justify-content-center"},s.a.createElement("img",{id:"footer-img",className:"img-fluid",src:y.a,alt:"Personal Use Only"}))))};var C=function(){return s.a.createElement(i,null,s.a.createElement(m,null),s.a.createElement(v,null),s.a.createElement(N,null))};r.a.render(s.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.44d36608.chunk.js.map