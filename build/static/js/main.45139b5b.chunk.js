(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,n,t){e.exports=t(366)},202:function(e,n,t){},203:function(e,n,t){},204:function(e,n,t){},205:function(e,n,t){},291:function(e,n,t){},312:function(e,n,t){},354:function(e,n,t){},355:function(e,n,t){},366:function(e,n,t){"use strict";t.r(n);var a,r=t(0),l=t.n(r),o=t(42),c=t.n(o),u=(t(202),t(32)),s=t(33),i=t(38),m=t(34),d=t(39),E=(t(203),t(44)),h=t(368),f=t(367),b=(t(204),t(53)),p=t.n(b),y=t(57),g=t.n(y),v=t(37),w=t.n(v),O=function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}return e};t(205);!function(e){e.TWO="TWO",e.THREE="THREE",e.FOUR="FOUR"}(a||(a={}));var C,T=t(11),k=t(31),S=t.n(k),R=t(22),x=t.n(R),N=t(27),j=t.n(N),I=t(7),M=t.n(I),W=t(19),P=t.n(W),z=t(369),F=[{blueOne:0,blueTwo:1,redOne:2,redTwo:3,out:4},{blueOne:0,blueTwo:4,redOne:2,redTwo:1,out:3},{blueOne:0,blueTwo:3,redOne:4,redTwo:1,out:2},{blueOne:0,blueTwo:2,redOne:3,redTwo:4,out:1},{blueOne:2,blueTwo:4,redOne:3,redTwo:1,out:0}],A=Object(z.a)(0,5).map(function(e){return F.map(function(n){var t=function(e){return function(n){return(n+2*e)%5}}(e);return{blueOne:t(n.blueOne),blueTwo:t(n.blueTwo),redOne:t(n.redOne),redTwo:t(n.redTwo),out:t(n.out)}})}),H=(C=[]).concat.apply(C,Object(E.a)(A)),U=function(e){return H[e%25]},B=t(20),L=t.n(B),G=function(e){return l.a.createElement("div",null,l.a.createElement(P.a,{onClick:function(){return e({blue:2,red:0})},className:"score-button",size:"small",color:"primary"},"2-0"),l.a.createElement(P.a,{onClick:function(){return e({blue:1,red:1})},className:"score-button",size:"small",color:"default"},"1-1"),l.a.createElement(P.a,{onClick:function(){return e({blue:0,red:2})},className:"score-button",size:"small",color:"secondary"},"0-2"))},V=function(e){return l.a.createElement("div",null,l.a.createElement(P.a,{onClick:function(){return e({blue:3,red:0})},className:"score-button",size:"small",color:"primary"},"3-0"),l.a.createElement(P.a,{onClick:function(){return e({blue:2,red:1})},className:"score-button",size:"small",color:"primary"},"2-1"),l.a.createElement(P.a,{onClick:function(){return e({blue:1,red:2})},className:"score-button",size:"small",color:"secondary"},"1-2"),l.a.createElement(P.a,{onClick:function(){return e({blue:0,red:3})},className:"score-button",size:"small",color:"secondary"},"0-3"))},J=function(e){return l.a.createElement("div",null,l.a.createElement(P.a,{onClick:function(){return e({blue:4,red:0})},className:"score-button",size:"small",color:"primary"},"4-0"),l.a.createElement(P.a,{onClick:function(){return e({blue:3,red:1})},className:"score-button",size:"small",color:"primary"},"3-1"),l.a.createElement(P.a,{onClick:function(){return e({blue:2,red:2})},className:"score-button",size:"small",color:"default"},"2-2"),l.a.createElement(P.a,{onClick:function(){return e({blue:1,red:3})},className:"score-button",size:"small",color:"secondary"},"1-3"),l.a.createElement(P.a,{onClick:function(){return e({blue:0,red:4})},className:"score-button",size:"small",color:"secondary"},"0-4"))},$=function(e,n){return l.a.createElement(l.a.Fragment,null,e[n.blueOne].name,l.a.createElement("br",null),e[n.blueTwo].name)},q=function(e,n){return l.a.createElement(l.a.Fragment,null,e[n.redOne].name,l.a.createElement("br",null),e[n.redTwo].name)},D=function(e,n,t,r){return l.a.createElement(x.a,null,l.a.createElement(M.a,null,l.a.createElement(L.a,{variant:"h6"},$(e,n))),l.a.createElement(M.a,null,function(e,n){switch(n){case a.TWO:return G(e);case a.THREE:return V(e);case a.FOUR:return J(e)}}(t,r)),l.a.createElement(M.a,null,l.a.createElement(L.a,{variant:"h6"},q(e,n))))},K=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,{align:"center",variant:"h4",id:"gameplay-header"},"Gameplay"),l.a.createElement(T.b,{id:"gameplay",className:"table centered striped is-fullwidth"},l.a.createElement(S.a,null,l.a.createElement(x.a,null,l.a.createElement(M.a,null,"Blue"),l.a.createElement(M.a,null,"Score"),l.a.createElement(M.a,null,"Red"))),l.a.createElement(j.a,null,e.roundIndex>0&&(n=e.players,t=U(e.roundIndex-1),a=e.scores[e.roundIndex-1],l.a.createElement(x.a,null,l.a.createElement(M.a,null,$(n,t)),l.a.createElement(M.a,null,l.a.createElement(L.a,{variant:"title"},a.roundResult.blue," - ",a.roundResult.red)),l.a.createElement(M.a,null,q(n,t)))),D(e.players,U(e.roundIndex),e.addLineupScore,e.scoreMode),e.roundIndex<e.roundCount-1?function(e,n){return l.a.createElement(x.a,null,l.a.createElement(M.a,null,$(e,n)),l.a.createElement(M.a,null,"Next round"),l.a.createElement(M.a,null,q(e,n)))}(e.players,U(e.roundIndex+1)):l.a.createElement(x.a,null,l.a.createElement(M.a,null),l.a.createElement(M.a,null,"Last round"),l.a.createElement(M.a,null)))));var n,t,a},Q=(t(291),function(e){switch(e){case a.TWO:return 2;case a.THREE:return 3;case a.FOUR:return 4}}),X=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,{align:"center",variant:"h4",gutterBottom:!0,id:"scoreboard-header"},"Scoreboard"),l.a.createElement(T.b,{id:"scoreboard",className:"table centered striped is-fullwidth"},l.a.createElement(j.a,null,Object(h.a)(e.players).sort(function(e,n){return n.score-e.score}).map(function(n,t){return l.a.createElement(x.a,{key:t},l.a.createElement(M.a,null,l.a.createElement(L.a,{variant:"h6"},n.name)),l.a.createElement(M.a,null,l.a.createElement(L.a,{variant:"h6"},n.score)),l.a.createElement(M.a,{style:{width:"65%"}},l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"determinate",style:{width:n.score/(e.roundCount*Q(e.scoreMode)*.8)*100+"%"}}))))}))))},Y=function(e,n,t){return e.map(function(e,a){return n.blueOne===a||n.blueTwo===a?e.score+=t.blue:n.redOne!==a&&n.redTwo!==a||(e.score+=t.red),e})},Z=function(e,n,t){return e.map(function(e,a){return n.blueOne===a||n.blueTwo===a?e.score-=t.blue:n.redOne!==a&&n.redTwo!==a||(e.score-=t.red),e})},_=t(370),ee=function(e){return l.a.createElement("section",{id:"scorehistory"},l.a.createElement(T.b,{className:"table centered striped is-fullwidth"},l.a.createElement(S.a,null,l.a.createElement(x.a,null,l.a.createElement(M.a,null,"Blue"),l.a.createElement(M.a,null,"Score"),l.a.createElement(M.a,null,"Red"))),l.a.createElement(j.a,null,e.scores&&e.scores.length>0&&l.a.createElement(x.a,null,l.a.createElement(M.a,null),l.a.createElement(M.a,null,l.a.createElement(P.a,{onClick:function(){return e.revertChange()},className:"score-button",size:"small",color:"primary"},l.a.createElement("i",{className:"material-icons"},"replay"))),l.a.createElement(M.a,null)),Object(_.a)(e.scores).map(function(n,t){return l.a.createElement(x.a,{key:t},l.a.createElement(M.a,null,e.players[n.lineup.blueOne].name," ",e.players[n.lineup.blueTwo].name),l.a.createElement(M.a,null,"#",n.roundIndex+1," ",l.a.createElement("br",null)," ",n.roundResult.blue," - ",n.roundResult.red),l.a.createElement(M.a,null,e.players[n.lineup.redOne].name," ",e.players[n.lineup.redTwo].name))}))),";")},ne=t(112),te=t.n(ne),ae=t(43),re=t.n(ae),le=t(54),oe=t.n(le),ce=t(55),ue=t.n(ce),se=t(35),ie=t.n(se),me=t(36),de=t.n(me),Ee=(t(312),t(56)),he=t.n(Ee),fe=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"controls"},l.a.createElement(T.c,{variant:"h6"},"Basic controls"),l.a.createElement(re.a,{variant:"contained",color:"primary",onClick:function(){return e.resetScore()},className:"controls-button"},"Reset scores"),l.a.createElement(re.a,{variant:"contained",color:"primary",onClick:function(){return e.shufflePlayers()},className:"controls-button"},"Shuffle players"),l.a.createElement("br",null),l.a.createElement(T.c,{variant:"h6"},"Score mode"),l.a.createElement(oe.a,null,l.a.createElement(ue.a,{row:!0,name:"Scoremode","aria-label":"scoremode",value:e.scoreMode,onChange:function(n,t){return e.changeScoremode(t)}},l.a.createElement(ie.a,{value:a.TWO,control:l.a.createElement(de.a,null),label:"Two"}),l.a.createElement(ie.a,{value:a.THREE,control:l.a.createElement(de.a,null),label:"Three"}),l.a.createElement(ie.a,{value:a.FOUR,control:l.a.createElement(de.a,null),label:"Four"}))),l.a.createElement("br",null),l.a.createElement(T.c,{variant:"h6"},"Round count"),l.a.createElement(he.a,{defaultValue:5,inputProps:{"aria-label":"How many full rounds."},type:"number",onChange:function(n){var t=parseInt(n.target.value);NaN!==t&&e.changeRoundCount(5*t)}}),l.a.createElement(T.c,{variant:"h6"},"Vocabulary"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(T.c,{variant:"button",inline:!0},"Score mode"),": How many balls are played before changing teams (how many balls in a stage)"),l.a.createElement("li",null,l.a.createElement(T.c,{variant:"button",inline:!0},"Stage"),": One stage means all the balls played without changing teams. Score mode determines how many points are played during a stage"),l.a.createElement("li",null,l.a.createElement(T.c,{variant:"button",inline:!0},"Round"),": 5 Stages. Each player has played against each other once and had one break"),l.a.createElement("li",null,l.a.createElement(T.c,{variant:"button",inline:!0},"Cycle"),": 5 Rounds. After 5 rounds teams are same as in the beginning and a new cycle begins."))))},be=function(e){return l.a.createElement(T.c,{component:"div",style:{padding:0}},e.children)},pe=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(l)))).state={players:t.props.players,roundIndex:0,scores:[],scoreMode:a.TWO,tab:0,roundCount:H.length},t.changeTab=function(e,n){t.setState({tab:n})},t.changeTabIndex=function(e){t.setState({tab:e})},t.addScore=function(e){return function(n){var a=Object(h.a)(t.state),r=a.scores,l=a.roundIndex,o=a.players;r.push({roundIndex:t.state.roundIndex,lineup:e,roundResult:n}),Y(o,e,n);var c=l+1;t.setState({players:o,roundIndex:c,scores:r})}},t.resetScore=function(){var e=t.state.players.map(function(e){return{name:e.name,score:0}});t.setState({players:e,scores:[],roundIndex:0})},t.revertChange=function(){if(t.state.scores.length>=1){var e=t.state,n=e.scores,a=e.players,r=Object(h.a)(n[n.length-1]),l=Object(f.a)(1,n),o=Z(a,r.lineup,r.roundResult);t.setState({players:o,scores:l,roundIndex:r.roundIndex})}},t.changeScoreMode=function(e){t.setState({scoreMode:e})},t.shufflePlayers=function(){var e=O(t.state.players);t.setState({players:e})},t.changeRoundCount=function(e){t.setState({roundCount:e})},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.state.tab;return l.a.createElement("div",null,l.a.createElement(p.a,{position:"static"},l.a.createElement(g.a,{variant:"fullWidth",value:e,onChange:this.changeTab},l.a.createElement(w.a,{label:"Gameplay"}),l.a.createElement(w.a,{label:"Scorehistory"}),l.a.createElement(w.a,{label:"Controls"}))),l.a.createElement(te.a,{axis:"x",index:this.state.tab,onChangeIndex:this.changeTabIndex},l.a.createElement(be,null,this.state.roundCount>this.state.roundIndex?l.a.createElement(K,{players:this.state.players,roundIndex:this.state.roundIndex,addLineupScore:this.addScore(U(this.state.roundIndex)),scoreMode:this.state.scoreMode,scores:this.state.scores,roundCount:this.state.roundCount}):l.a.createElement(T.c,{align:"center",variant:"h4",id:"gameplay-header"},"Game over"),l.a.createElement(X,{players:this.state.players,scoreMode:this.state.scoreMode,roundCount:this.state.roundCount})),l.a.createElement(be,null,l.a.createElement(ee,{players:this.state.players,scores:this.state.scores,revertChange:this.revertChange})),l.a.createElement(be,null,l.a.createElement(fe,{resetScore:this.resetScore,changeScoremode:this.changeScoreMode,shufflePlayers:this.shufflePlayers,scoreMode:this.state.scoreMode,changeRoundCount:this.changeRoundCount}))))}}]),n}(r.Component),ye=(t(354),t(355),t(59)),ge=t.n(ye),ve=t(113),we=t.n(ve),Oe=t(116),Ce=t.n(Oe),Te=t(114),ke=t.n(Te),Se=t(115),Re=t.n(Se),xe=t(58),Ne=t.n(xe),je=["Tapio","Matti","Viljo","Niko","Heikki","Mika","Markus","Taneli"].map(function(e){return function(e){return{name:e,score:0}}(e)}),Ie=function(e){return l.a.createElement("div",{id:"player-selection"},l.a.createElement(T.a,{position:"relative"},l.a.createElement(Ne.a,null,l.a.createElement(L.a,{variant:"h6",color:"inherit",noWrap:!0},"Select players"))),l.a.createElement(ge.a,{component:"section"},je.map(function(n){return l.a.createElement(we.a,{button:!0,selected:e.selectedPlayers.includes(n),key:n.name,onClick:function(){return e.togglePlayer(n)}},e.selectedPlayers.includes(n)&&l.a.createElement(ke.a,null,l.a.createElement(Re.a,null)),l.a.createElement(Ce.a,{primary:n.name}))})))},Me=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={players:[]},t.togglePlayer=function(e){var n=t.state.players.includes(e)?Object(E.a)(t.state.players.filter(function(n){return n.name!==e.name})):[].concat(Object(E.a)(t.state.players),[e]);t.setState({players:n})},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return this.state.players.length<5?l.a.createElement(Ie,{selectedPlayers:this.state.players,togglePlayer:this.togglePlayer}):l.a.createElement(pe,{players:this.state.players})}}]),n}(r.Component),We=t(60),Pe=t.n(We),ze=function(e){function n(){return Object(u.a)(this,n),Object(i.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Pe.a,null),l.a.createElement("div",{className:"App"},l.a.createElement(Me,null)))}}]),n}(r.Component),Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(ze,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");Fe?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ae(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Ae(n,e)})}}()}},[[197,1,2]]]);
//# sourceMappingURL=main.45139b5b.chunk.js.map