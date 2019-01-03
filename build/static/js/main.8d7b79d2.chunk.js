(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),o=n.n(l),c=(n(24),n(5)),s=n(6),i=n(8),u=n(7),d=n(10),m=(n(26),n(37)),h=n(36),f=n(38),p=n(35),b=(n(28),function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}),v=(n(30),[{blueOne:0,blueTwo:1,redOne:2,redTwo:3,out:4},{blueOne:0,blueTwo:4,redOne:2,redTwo:1,out:3},{blueOne:0,blueTwo:3,redOne:4,redTwo:1,out:2},{blueOne:0,blueTwo:2,redOne:3,redTwo:4,out:1},{blueOne:2,blueTwo:4,redOne:3,redTwo:1,out:0}]),E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{className:"table centered striped is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Side A"),r.a.createElement("th",null,"Score"),r.a.createElement("th",null,"Side B"))),r.a.createElement("tbody",null,this.createFullRoundMarkup()))}},{key:"createFullRoundMarkup",value:function(){var e=this;return v.map(function(t,n){return r.a.createElement("tr",{key:n},e.createRoundMarkup(t,n))})}},{key:"createRoundMarkup",value:function(e,t){var n=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,r.a.createElement("strong",null,this.props.players[e.blueOne].name," ",this.props.players[e.blueTwo].name)),r.a.createElement("td",null,t===this.props.roundIndex&&r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("a",{onClick:function(){return n.props.addScore("BLUE")},className:"btn waves-effect"},"\u2190")),r.a.createElement("span",null,r.a.createElement("a",{onClick:function(){return n.props.addScore("TIE")},className:"btn waves-effect"},"TIE")),r.a.createElement("span",null,r.a.createElement("a",{onClick:function(){return n.props.addScore("RED")},className:"btn waves-effect"},"\u2192")))),r.a.createElement("td",null,r.a.createElement("strong",null,this.props.players[e.redOne].name," ",this.props.players[e.redTwo].name)))}}]),t}(a.Component),y=(n(32),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"header-block"},"Scoreboard:"),r.a.createElement("div",{className:"divider"}),r.a.createElement("table",{className:"table centered striped is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Score"),r.a.createElement("th",null))),r.a.createElement("tbody",null,Object(m.a)(e.players).sort(function(e,t){return t.score-e.score}).map(function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,r.a.createElement("strong",null,r.a.createElement("input",{onChange:function(n){return e.changePlayerName(t,n.currentTarget.value)},value:t.name,type:"text"}))),r.a.createElement("td",null,r.a.createElement("strong",null,t.score)),r.a.createElement("td",{style:{width:"70%"}},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"determinate",style:{width:100*t.score/21+"%"}}))))}))))}),w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){return e.resetScore()}},"Reset scores"),r.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){return e.shufflePlayers()}},"Shuffle players"),r.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){return e.revertChange()}},"Revert")))},g=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).createPlayer=function(e){return{name:e,score:0}},n.addScore=function(e){var t=Object(m.a)(n.state.players),a=n.state.scoreChangeHistory;a.push({roundIndex:n.state.roundIndex,players:Object(m.a)(n.state.players)});var r=v[n.state.roundIndex],l=n.state.roundIndex,o=4===l?0:l+1;switch(e){case"BLUE":t[r.blueOne].score+=2,t[r.blueTwo].score+=2;break;case"RED":t[r.redOne].score+=2,t[r.redTwo].score+=2;break;case"TIE":t[r.blueOne].score+=1,t[r.blueTwo].score+=1,t[r.redOne].score+=1,t[r.redTwo].score+=1}n.setState({players:t,roundIndex:o,scoreChangeHistory:a})},n.resetScore=function(){var e=n.state.players.map(function(e){return{name:e.name,score:0}});n.setState({players:e,scoreChangeHistory:[]})},n.revertChange=function(){if(n.state.scoreChangeHistory.length>=1){var e=n.state.scoreChangeHistory,t=Object(m.a)(e[e.length-1]),a=Object(h.a)(1,e);n.setState({players:t.players,scoreChangeHistory:a,roundIndex:t.roundIndex})}},n.changePlayerName=function(e,t){var a=e.name,r=n.state.players;r[Object(f.a)(Object(p.a)("name",a))(r)].name=t,n.setState({players:r})},n.shufflePlayers=function(){var e=b(n.state.players);n.setState({players:e})};var a=["Tapio","Matti","Viljo","Niko","Heikki"].map(function(e){return n.createPlayer(e)});return n.state={players:a,roundIndex:0,scoreChangeHistory:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"container",id:"FivePlayers"},r.a.createElement("h3",null,"Game chart"),r.a.createElement("div",{className:"divider"}),r.a.createElement(E,{players:this.state.players,roundIndex:this.state.roundIndex,addScore:this.addScore.bind(this)}),r.a.createElement(y,{players:this.state.players,changePlayerName:this.changePlayerName.bind(this)}),r.a.createElement(w,{resetScore:this.resetScore.bind(this),shufflePlayers:this.shufflePlayers.bind(this),revertChange:this.revertChange.bind(this)}))}}]),t}(a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))}}]),t}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");k?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):j(t,e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.8d7b79d2.chunk.js.map