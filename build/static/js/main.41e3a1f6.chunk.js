(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,n,t){e.exports=t(364)},201:function(e,n,t){},202:function(e,n,t){},203:function(e,n,t){},204:function(e,n,t){},290:function(e,n,t){},311:function(e,n,t){},352:function(e,n,t){},353:function(e,n,t){},364:function(e,n,t){"use strict";t.r(n);var a,r=t(0),l=t.n(r),c=t(42),o=t.n(c),u=(t(201),t(32)),s=t(33),i=t(38),m=t(34),d=t(39),f=(t(202),t(44)),E=t(366),b=t(365),p=(t(203),t(52)),h=t.n(p),y=t(56),v=t.n(y),g=t(37),w=t.n(g),O=function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}return e};t(204);!function(e){e.TWO="TWO",e.THREE="THREE",e.FOUR="FOUR"}(a||(a={}));var T,k=t(24),S=t(31),C=t.n(S),j=t(21),N=t.n(j),x=t(27),I=t.n(x),R=t(7),M=t.n(R),W=t(13),z=t.n(W),P=t(367),F=[{blueOne:0,blueTwo:1,redOne:2,redTwo:3,out:4},{blueOne:0,blueTwo:4,redOne:2,redTwo:1,out:3},{blueOne:0,blueTwo:3,redOne:4,redTwo:1,out:2},{blueOne:0,blueTwo:2,redOne:3,redTwo:4,out:1},{blueOne:2,blueTwo:4,redOne:3,redTwo:1,out:0}],A=Object(P.a)(0,5).map(function(e){return F.map(function(n){var t=function(e){return function(n){return(n+e)%5}}(e);return{blueOne:t(n.blueOne),blueTwo:t(n.blueTwo),redOne:t(n.redOne),redTwo:t(n.redTwo),out:t(n.out)}})}),U=(T=[]).concat.apply(T,Object(f.a)(A)),B=function(e){return U[e%25]},H=t(23),L=t.n(H),G=function(e){return l.a.createElement("div",null,l.a.createElement(z.a,{onClick:function(){return e({blue:2,red:0})},className:"score-button",size:"small",color:"primary"},"2-0"),l.a.createElement(z.a,{onClick:function(){return e({blue:1,red:1})},className:"score-button",size:"small",color:"default"},"1-1"),l.a.createElement(z.a,{onClick:function(){return e({blue:0,red:2})},className:"score-button",size:"small",color:"secondary"},"0-2"))},J=function(e){return l.a.createElement("div",null,l.a.createElement(z.a,{onClick:function(){return e({blue:3,red:0})},className:"score-button",size:"small",color:"primary"},"3-0"),l.a.createElement(z.a,{onClick:function(){return e({blue:2,red:1})},className:"score-button",size:"small",color:"primary"},"2-1"),l.a.createElement(z.a,{onClick:function(){return e({blue:1,red:2})},className:"score-button",size:"small",color:"secondary"},"1-2"),l.a.createElement(z.a,{onClick:function(){return e({blue:0,red:3})},className:"score-button",size:"small",color:"secondary"},"0-3"))},V=function(e){return l.a.createElement("div",null,l.a.createElement(z.a,{onClick:function(){return e({blue:4,red:0})},className:"score-button",size:"small",color:"primary"},"4-0"),l.a.createElement(z.a,{onClick:function(){return e({blue:3,red:1})},className:"score-button",size:"small",color:"primary"},"3-1"),l.a.createElement(z.a,{onClick:function(){return e({blue:2,red:2})},className:"score-button",size:"small",color:"default"},"2-2"),l.a.createElement(z.a,{onClick:function(){return e({blue:1,red:3})},className:"score-button",size:"small",color:"secondary"},"1-3"),l.a.createElement(z.a,{onClick:function(){return e({blue:0,red:4})},className:"score-button",size:"small",color:"secondary"},"0-4"))},$=function(e,n){return l.a.createElement(l.a.Fragment,null,e[n.blueOne].name,l.a.createElement("br",null),e[n.blueTwo].name)},q=function(e,n){return l.a.createElement(l.a.Fragment,null,e[n.redOne].name,l.a.createElement("br",null),e[n.redTwo].name)},D=function(e,n,t,r){return l.a.createElement(N.a,null,l.a.createElement(M.a,null,$(e,n)),l.a.createElement(M.a,null,function(e,n){switch(n){case a.TWO:return G(e);case a.THREE:return J(e);case a.FOUR:return V(e)}}(t,r)),l.a.createElement(M.a,null,q(e,n)))},K=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,{align:"center",variant:"h4",id:"gameplay-header"},"Gameplay"),l.a.createElement(k.b,{id:"gameplay",className:"table centered striped is-fullwidth"},l.a.createElement(C.a,null,l.a.createElement(N.a,null,l.a.createElement(M.a,null,"Blue"),l.a.createElement(M.a,null,"Score"),l.a.createElement(M.a,null,"Red"))),l.a.createElement(I.a,null,e.roundIndex>0&&(n=e.players,t=B(e.roundIndex-1),a=e.scores[e.roundIndex-1],l.a.createElement(N.a,null,l.a.createElement(M.a,null,$(n,t)),l.a.createElement(M.a,null,a.roundResult.blue," - ",a.roundResult.red),l.a.createElement(M.a,null,q(n,t)))),D(e.players,B(e.roundIndex),e.addLineupScore,e.scoreMode),function(e,n){return l.a.createElement(N.a,null,l.a.createElement(M.a,null,$(e,n)),l.a.createElement(M.a,null,"Next round"),l.a.createElement(M.a,null,q(e,n)))}(e.players,B(e.roundIndex+1)))));var n,t,a},Q=(t(290),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,{align:"center",variant:"h4",gutterBottom:!0,id:"scoreboard-header"},"Scoreboard"),l.a.createElement(k.b,{id:"scoreboard",className:"table centered striped is-fullwidth"},l.a.createElement(I.a,null,Object(E.a)(e.players).sort(function(e,n){return n.score-e.score}).map(function(e,n){return l.a.createElement(N.a,{key:n},l.a.createElement(M.a,null,l.a.createElement("strong",null,e.name)),l.a.createElement(M.a,null,l.a.createElement("strong",null,e.score)),l.a.createElement(M.a,{style:{width:"65%"}},l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"determinate",style:{width:100*e.score/21+"%"}}))))}))))}),X=function(e,n,t){return e.map(function(e,a){return n.blueOne===a||n.blueTwo===a?e.score+=t.blue:n.redOne!==a&&n.redTwo!==a||(e.score+=t.red),e})},Y=function(e,n,t){return e.map(function(e,a){return n.blueOne===a||n.blueTwo===a?e.score-=t.blue:n.redOne!==a&&n.redTwo!==a||(e.score-=t.red),e})},Z=t(368),_=function(e){return l.a.createElement("section",{id:"scorehistory"},l.a.createElement(k.b,{className:"table centered striped is-fullwidth"},l.a.createElement(C.a,null,l.a.createElement(N.a,null,l.a.createElement(M.a,null,"Blue"),l.a.createElement(M.a,null,"Score"),l.a.createElement(M.a,null,"Red"))),l.a.createElement(I.a,null,l.a.createElement(N.a,null,l.a.createElement(M.a,null),l.a.createElement(M.a,null,l.a.createElement(z.a,{onClick:function(){return e.revertChange()},className:"score-button",size:"small",color:"primary"},l.a.createElement("i",{className:"material-icons"},"replay"))),l.a.createElement(M.a,null)),Object(Z.a)(e.scores).map(function(n,t){return l.a.createElement(N.a,{key:t},l.a.createElement(M.a,null,e.players[n.lineup.blueOne].name," ",e.players[n.lineup.blueTwo].name),l.a.createElement(M.a,null,"#",n.roundIndex+1," ",l.a.createElement("br",null)," ",n.roundResult.blue," - ",n.roundResult.red),l.a.createElement(M.a,null,e.players[n.lineup.redOne].name," ",e.players[n.lineup.redTwo].name))}))),";")},ee=t(110),ne=t.n(ee),te=t(43),ae=t.n(te),re=t(53),le=t.n(re),ce=t(54),oe=t.n(ce),ue=t(55),se=t.n(ue),ie=t(35),me=t.n(ie),de=t(36),fe=t.n(de),Ee=(t(311),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"controls"},l.a.createElement(ae.a,{variant:"contained",color:"primary",onClick:function(){return e.resetScore()},className:"controls-button"},"Reset scores"),l.a.createElement(ae.a,{variant:"contained",color:"primary",onClick:function(){return e.shufflePlayers()},className:"controls-button"},"Shuffle players"),l.a.createElement("br",null),l.a.createElement(le.a,null,l.a.createElement(oe.a,null,"Score mode"),l.a.createElement(se.a,{row:!0,name:"Scoremode","aria-label":"scoremode",value:e.scoreMode,onChange:function(n,t){return e.changeScoremode(t)}},l.a.createElement(me.a,{value:a.TWO,control:l.a.createElement(fe.a,null),label:"Two"}),l.a.createElement(me.a,{value:a.THREE,control:l.a.createElement(fe.a,null),label:"Three"}),l.a.createElement(me.a,{value:a.FOUR,control:l.a.createElement(fe.a,null),label:"Four"})))))}),be=function(e){return l.a.createElement(k.c,{component:"div",style:{padding:0}},e.children)},pe=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(l)))).state={players:t.props.players,roundIndex:0,scores:[],scoreMode:a.TWO,tab:0},t.changeTab=function(e,n){t.setState({tab:n})},t.changeTabIndex=function(e){t.setState({tab:e})},t.addScore=function(e){return function(n){var a=Object(E.a)(t.state),r=a.scores,l=a.roundIndex,c=a.players;r.push({roundIndex:t.state.roundIndex,lineup:e,roundResult:n}),X(c,e,n);var o=l+1;t.setState({players:c,roundIndex:o,scores:r})}},t.resetScore=function(){var e=t.state.players.map(function(e){return{name:e.name,score:0}});t.setState({players:e,scores:[]})},t.revertChange=function(){if(t.state.scores.length>=1){var e=t.state,n=e.scores,a=e.players,r=Object(E.a)(n[n.length-1]),l=Object(b.a)(1,n),c=Y(a,r.lineup,r.roundResult);t.setState({players:c,scores:l,roundIndex:r.roundIndex})}},t.changeScoreMode=function(e){t.setState({scoreMode:e})},t.shufflePlayers=function(){var e=O(t.state.players);t.setState({players:e})},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.state.tab;return l.a.createElement("div",null,l.a.createElement(h.a,{position:"static"},l.a.createElement(v.a,{variant:"fullWidth",value:e,onChange:this.changeTab},l.a.createElement(w.a,{label:"Gameplay"}),l.a.createElement(w.a,{label:"Scorehistory"}),l.a.createElement(w.a,{label:"Controls"}))),l.a.createElement(ne.a,{axis:"x",index:this.state.tab,onChangeIndex:this.changeTabIndex},l.a.createElement(be,null,l.a.createElement(K,{players:this.state.players,roundIndex:this.state.roundIndex,addLineupScore:this.addScore(B(this.state.roundIndex)),scoreMode:this.state.scoreMode,scores:this.state.scores}),l.a.createElement(Q,{players:this.state.players})),l.a.createElement(be,null,l.a.createElement(_,{players:this.state.players,scores:this.state.scores,revertChange:this.revertChange})),l.a.createElement(be,null,l.a.createElement(Ee,{resetScore:this.resetScore,changeScoremode:this.changeScoreMode,shufflePlayers:this.shufflePlayers,scoreMode:this.state.scoreMode}))))}}]),n}(r.Component),he=(t(352),t(353),t(58)),ye=t.n(he),ve=t(111),ge=t.n(ve),we=t(114),Oe=t.n(we),Te=t(112),ke=t.n(Te),Se=t(113),Ce=t.n(Se),je=t(57),Ne=t.n(je),xe=["Tapio","Matti","Viljo","Niko","Heikki","Mika","Markus","Taneli"].map(function(e){return function(e){return{name:e,score:0}}(e)}),Ie=function(e){return l.a.createElement("div",{id:"player-selection"},l.a.createElement(k.a,{position:"relative"},l.a.createElement(Ne.a,null,l.a.createElement(L.a,{variant:"h6",color:"inherit",noWrap:!0},"Select players"))),l.a.createElement(ye.a,{component:"section"},xe.map(function(n){return l.a.createElement(ge.a,{button:!0,selected:e.selectedPlayers.includes(n),key:n.name,onClick:function(){return e.togglePlayer(n)}},e.selectedPlayers.includes(n)&&l.a.createElement(ke.a,null,l.a.createElement(Ce.a,null)),l.a.createElement(Oe.a,{primary:n.name}))})))},Re=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={players:[]},t.togglePlayer=function(e){var n=t.state.players.includes(e)?Object(f.a)(t.state.players.filter(function(n){return n.name!==e.name})):[].concat(Object(f.a)(t.state.players),[e]);t.setState({players:n})},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return this.state.players.length<5?l.a.createElement(Ie,{selectedPlayers:this.state.players,togglePlayer:this.togglePlayer}):l.a.createElement(pe,{players:this.state.players})}}]),n}(r.Component),Me=t(59),We=t.n(Me),ze=function(e){function n(){return Object(u.a)(this,n),Object(i.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(We.a,null),l.a.createElement("div",{className:"App"},l.a.createElement(Re,null)))}}]),n}(r.Component),Pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Fe(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(ze,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");Pe?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Fe(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Fe(n,e)})}}()}},[[196,1,2]]]);
//# sourceMappingURL=main.41e3a1f6.chunk.js.map