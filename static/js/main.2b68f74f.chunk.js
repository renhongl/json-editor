(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(e){e.exports={title:"JSON Editor","import from":"import from","preview as":"preview as","export as":"export as",settings:"Settings",language:"Language",theme:"Theme","auto save":"Auto Save",cancel:"cancel",documents:"documents","untitled document":"Untitled","new document":"New Dcoument","save session":"Save All",preview:"PREVIEW","full screen":"Full Screen","markdown syntax":"Format","mardkown syntax help":"Markdown Syntax Help",rename:"Rename",delete:"Delete","toggle view":"Toggle Expand",words:"WORDS",characters:"CHARACTERS"}},226:function(e){e.exports={title:"JSON \u7f16\u8f91\u5668","import from":"\u5bfc\u5165","preview as":"\u9884\u89c8","export as":"\u5bfc\u51fa",settings:"\u8bbe\u7f6e",language:"\u8bed\u8a00",theme:"\u4e3b\u9898","auto save":"\u81ea\u52a8\u4fdd\u5b58",cancel:"\u8fd4\u56de",documents:"\u6587\u6863","untitled document":"\u672a\u547d\u540d","new document":"\u65b0\u5efa\u6587\u6863","save session":"\u4fdd\u5b58\u5168\u90e8",preview:"\u9884\u89c8","full screen":"\u5168\u5c4f","markdown syntax":"\u683c\u5f0f\u5316","mardkown syntax help":"Markdown \u53e5\u6cd5\u5e2e\u52a9",rename:"\u91cd\u547d\u540d",delete:"\u5220\u9664","toggle view":"\u5207\u6362\u5c55\u5f00",words:"\u5355\u8bcd\u6570",characters:"\u5b57\u6570"}},229:function(e,t,n){e.exports=n(801)},478:function(e,t){},561:function(e,t,n){},792:function(e,t,n){},799:function(e,t,n){},801:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),i=n(121),l=n(203),c=n(19),s=n(20),u=n(22),d=n(21),m=n(23),p=n(204),h=n(119),f=n.n(h),g=n(205),v=n.n(g),y=(n(474),n(9)),w=n(120),S=n.n(w),E=n(25),b=n.n(E),x=n(45),C=n.n(x),k=new v.a({html:!0,linkify:!0,typographer:!0,highlight:function(e,t){if(t&&f.a.getLanguage(t))try{return'<pre class="hljs"><code>'+f.a.highlight(t,e,!0).value+"</code></pre>"}catch(n){}return'<pre class="hljs"><code>'+k.utils.escapeHtml(e)+"</code></pre>"}}),O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={expand:!1},n.expand=function(){n.renderJsonView(!n.state.expand),n.setState({expand:!n.state.expand})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.addStyles(),this.renderJsonView(this.state.expand)}},{key:"renderJsonView",value:function(e){var t=document.getElementById("content");if(t){t.innerHTML="";try{new S.a({container:t,data:this.props.input,theme:"light",expand:e})}catch(n){new S.a({container:t,data:'{ "infor": "It\'s not a json format" }',theme:"light",expand:e})}}}},{key:"componentDidUpdate",value:function(){this.addStyles(),this.renderJsonView(this.state.expand)}},{key:"addStyles",value:function(){var e={color:"#464646",fontFamily:"-webkit-body"},t={borderSpacing:0},n={height:"25px",background:"#fafafa",padding:"10px",borderBottom:"1px solid #e8e8e8",textAlign:"left",color:"rgba(0, 0, 0, 0.85)",fontWeight:500},a={borderBottom:"1px solid #e8e8e8",height:"25px",padding:"10px",fontSize:"14px",lineHeight:"1.5",color:"rgba(0, 0, 0, 0.65)",boxSizing:"border-b"},r={lineHeight:"30px"},o={color:"#d32f2f",textDecoration:"underline"},i={lineHeight:"30px",background:"#ececec",borderRadius:"3px"},l={background:"#ececec",padding:"5px",borderRadius:"3px"},c={borderLeft:"3px solid #616161",paddingLeft:"10px"},s=document.getElementById("content");Object.keys(e).forEach(function(t){return s.style[t]=e[t]});var u=s.querySelectorAll("blockquote p"),d=!0,m=!1,p=void 0;try{for(var h,f=function(){var e=h.value;Object.keys(c).forEach(function(t){return e.style[t]=c[t]})},g=u[Symbol.iterator]();!(d=(h=g.next()).done);d=!0)f()}catch(oe){m=!0,p=oe}finally{try{d||null==g.return||g.return()}finally{if(m)throw p}}var v=s.querySelectorAll("pre"),y=!0,w=!1,S=void 0;try{for(var E,b=function(){var e=E.value;Object.keys(i).forEach(function(t){return e.style[t]=i[t]})},x=v[Symbol.iterator]();!(y=(E=x.next()).done);y=!0)b()}catch(oe){w=!0,S=oe}finally{try{y||null==x.return||x.return()}finally{if(w)throw S}}var C=s.querySelectorAll("p code"),k=s.querySelectorAll("li code"),O=!0,N=!1,j=void 0;try{for(var I,D=function(){var e=I.value;Object.keys(l).forEach(function(t){return e.style[t]=l[t]})},L=C[Symbol.iterator]();!(O=(I=L.next()).done);O=!0)D()}catch(oe){N=!0,j=oe}finally{try{O||null==L.return||L.return()}finally{if(N)throw j}}var J=!0,F=!1,T=void 0;try{for(var M,A=function(){var e=M.value;Object.keys(l).forEach(function(t){return e.style[t]=l[t]})},P=k[Symbol.iterator]();!(J=(M=P.next()).done);J=!0)A()}catch(oe){F=!0,T=oe}finally{try{J||null==P.return||P.return()}finally{if(F)throw T}}var q=s.querySelectorAll("li"),H=!0,R=!1,z=void 0;try{for(var B,_=function(){var e=B.value;Object.keys(r).forEach(function(t){return e.style[t]=r[t]})},V=q[Symbol.iterator]();!(H=(B=V.next()).done);H=!0)_()}catch(oe){R=!0,z=oe}finally{try{H||null==V.return||V.return()}finally{if(R)throw z}}var W=s.querySelectorAll("a"),K=!0,U=!1,G=void 0;try{for(var Y,Q=function(){var e=Y.value;Object.keys(o).forEach(function(t){return e.style[t]=o[t]})},X=W[Symbol.iterator]();!(K=(Y=X.next()).done);K=!0)Q()}catch(oe){U=!0,G=oe}finally{try{K||null==X.return||X.return()}finally{if(U)throw G}}var Z=s.querySelectorAll("table"),$=!0,ee=!1,te=void 0;try{for(var ne,ae=function(){var e=ne.value;Object.keys(t).forEach(function(n){return e.style[n]=t[n]});var r=e.querySelectorAll("th"),o=!0,i=!1,l=void 0;try{for(var c,s=function(){var e=c.value;Object.keys(n).forEach(function(t){return e.style[t]=n[t]})},u=r[Symbol.iterator]();!(o=(c=u.next()).done);o=!0)s()}catch(oe){i=!0,l=oe}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}var d=e.querySelectorAll("td"),m=!0,p=!1,h=void 0;try{for(var f,g=function(){var e=f.value;Object.keys(a).forEach(function(t){return e.style[t]=a[t]})},v=d[Symbol.iterator]();!(m=(f=v.next()).done);m=!0)g()}catch(oe){p=!0,h=oe}finally{try{m||null==v.return||v.return()}finally{if(p)throw h}}},re=Z[Symbol.iterator]();!($=(ne=re.next()).done);$=!0)ae()}catch(oe){ee=!0,te=oe}finally{try{$||null==re.return||re.return()}finally{if(ee)throw te}}}},{key:"render",value:function(){return r.a.createElement("div",{className:"preview-container"},r.a.createElement("div",{className:"preview-title"},r.a.createElement("div",{className:"preview-title-left"},y.I18n.t("preview")," "),r.a.createElement("div",{className:"preview-title-right"},r.a.createElement("div",{className:"word-count"},r.a.createElement(C.a,{title:y.I18n.t("toggle view"),placement:"bottom"},r.a.createElement(b.a,{size:"small",className:"help-btn",onClick:this.expand},r.a.createElement("i",{className:"material-icons",fontSize:"small"},"chrome_reader_mode")))))),r.a.createElement("div",{className:"preview"},r.a.createElement("div",{id:"content"})))}}]),t}(r.a.Component),N=(n(559),n(561),n(31)),j=n(213),I=n.n(j),D=n(117),L=n.n(D),J=n(118),F=n.n(J),T=n(208),M=n.n(T),A=n(207),P=n.n(A),q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleAction=function(e){n.props.toggleDrawer(),n.props.switchCurrent(e),n.props.openFile(e)},n.editTitle=function(e){var t=document.getElementById(e).querySelector("div span");t.setAttribute("contentEditable",!0),t.focus(),t.style.border="1px solid grey",t.addEventListener("click",function(e){"true"===t.getAttribute("contentEditable")&&e.stopPropagation()}),t.addEventListener("keydown",function(e){return e.stopPropagation()}),t.addEventListener("blur",function(){t.setAttribute("contentEditable",!1),t.style.border="none",n.props.updateTitle(e,t.innerText)})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.fileList,o=t.deleteAction,i=t.current;return r.a.createElement(L.a,{className:n.root},a.map(function(t,n){return r.a.createElement(F.a,{id:t.id,key:t.id,index:n,selected:n===i,className:"title-list-ite",dense:!0,button:!0,onClick:function(){e.handleAction(n)}},r.a.createElement(P.a,{className:"doc-title-input",primary:t.title,title:t.title}),r.a.createElement(M.a,{className:"file-action-icon"},r.a.createElement(C.a,{title:y.I18n.t("rename"),placement:"top"},r.a.createElement(b.a,{className:"doc-action-btn",onClick:function(){return e.editTitle(t.id)}},r.a.createElement("i",{className:"material-icons"},"edit"))),r.a.createElement(C.a,{title:y.I18n.t("delete"),placement:"top"},r.a.createElement(b.a,{className:"doc-action-btn",onClick:function(){return o(t.id)}},r.a.createElement("i",{className:"material-icons"},"delete")))))}))}}]),t}(r.a.Component),H=Object(N.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},listItem:{marginTop:"10px"},button:{marginLeft:10},selectedItem:{marginTop:"10px",color:"red"}}})(q),R=n(209),z=n.n(R),B=n(210),_=n.n(B),V=n(212),W=n.n(V),K=n(44),U=n.n(K),G=n(211),Y=n.n(G);var Q=Object(N.withStyles)(function(e){return{root:{width:"100%",margin:"0 auto"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},panelDetails:{padding:0}}})(function(e){var t=e.classes,n=e.fileList,a=e.switchCurrent,o=e.toggleDrawer,i=e.addDocment,l=e.deleteAction,c=e.saveDoc,s=e.current,u=e.openFile,d=e.updateTitle;return r.a.createElement("div",{className:t.root},r.a.createElement(z.a,{defaultExpanded:!0,className:"document-list"},r.a.createElement(_.a,{expandIcon:r.a.createElement(Y.a,null)},r.a.createElement(U.a,{className:t.heading},y.I18n.t("documents"))),r.a.createElement(W.a,{className:t.panelDetails},r.a.createElement(H,{fileList:n,switchCurrent:a,toggleDrawer:o,addDocment:i,deleteAction:l,saveDoc:c,updateTitle:d,current:s,openFile:u}))))}),X=n(28),Z=n.n(X),$=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.open,a=e.toggleDrawer,o=e.fileList,i=e.switchCurrent,l=e.addDocment,c=e.deleteAction,s=e.saveDoc,u=e.current,d=e.openFile,m=e.updateTitle;return r.a.createElement("div",null,r.a.createElement(I.a,{open:n,onClose:a},r.a.createElement("div",{tabIndex:0,role:"button",className:t.list,onKeyDown:a},r.a.createElement("h4",{className:t.title},y.I18n.t("title")),r.a.createElement(Q,{fileList:o,switchCurrent:i,toggleDrawer:a,addDocment:l,deleteAction:c,saveDoc:s,updateTitle:m,current:u,openFile:d}),r.a.createElement(Z.a,{variant:"contained",color:"primary",className:t.button,onClick:l},y.I18n.t("new document")),r.a.createElement(Z.a,{variant:"outlined",color:"primary",className:t.button,onClick:s},y.I18n.t("save session")))))}}]),t}(r.a.Component),ee=Object(N.withStyles)({list:{width:250},title:{paddingLeft:"20px"},button:{display:"block",width:"90%",margin:"10px auto"}})($),te=n(221),ne=n.n(te),ae=n(222),re=n.n(ae),oe=n(223),ie=n.n(oe),le=n(37),ce=n.n(le),se=n(82),ue=n.n(se),de=n(214),me=n.n(de),pe=n(217),he=n.n(pe),fe=n(216),ge=n.n(fe),ve=n(215),ye=n.n(ve),we=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.content,a=e.open,o=e.toggleDialog,i=e.type;return r.a.createElement("div",null,r.a.createElement(me.a,{open:a,onClose:function(){return o(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(ye.a,{id:"alert-dialog-title"},t),r.a.createElement(ge.a,{className:"dialog-content"},n),r.a.createElement(he.a,null,function(e,t){return"help"===e?r.a.createElement(Z.a,{onClick:function(){return t(!1)},color:"primary"},y.I18n.t("cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{onClick:function(){return t(!1)},color:"primary"},y.I18n.t("cancel")),r.a.createElement(Z.a,{variant:"contained",onClick:function(){return t(!0)},color:"secondary",autoFocus:!0},"Yes"))}(i,o))))}}]),t}(r.a.Component),Se=n(5),Ee=n.n(Se),be=n(218),xe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={displayColorPicker:!1},n.handleClick=function(){n.setState({displayColorPicker:!n.state.displayColorPicker})},n.handleClose=function(){n.setState({displayColorPicker:!1})},n.handleChange=function(e){n.setState({color:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.onChange,a=t.color;console.log(a);var o=Ee()({default:{color:{width:"36px",height:"14px",borderRadius:"2px",background:a},swatch:{padding:"5px",background:"#fff",borderRadius:"1px",border:"1px solid #000",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2",boxShadow:"rgba(0, 0, 0, 0.1) 0 0px 10px",right:"-60px"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return r.a.createElement("div",null,r.a.createElement("div",{style:o.swatch,onClick:this.handleClick},r.a.createElement("div",{style:o.color})),this.state.displayColorPicker?r.a.createElement("div",{style:o.popover},r.a.createElement("div",{style:o.cover,onClick:this.handleClose}),r.a.createElement(be.BlockPicker,{color:a,onChange:function(t,a){var r,o=(r=(r="rgb(".concat(t.rgb.r,", ").concat(t.rgb.g,", ").concat(t.rgb.b,")")).match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===r.length?"#"+("0"+parseInt(r[1],10).toString(16)).slice(-2)+("0"+parseInt(r[2],10).toString(16)).slice(-2)+("0"+parseInt(r[3],10).toString(16)).slice(-2):"";n("primary",o,a),e.handleChange(o)}})):null)}}]),t}(r.a.Component),Ce=n(220),ke=n.n(Ce),Oe=n(219),Ne=n.n(Oe),je=function(e){return r.a.createElement("div",{style:{width:"550px",height:"380px"}},r.a.createElement("div",{className:"setting-row"},r.a.createElement("span",{className:"setting-key"},y.I18n.t("language"),":"),r.a.createElement("span",{className:"setting-value"},r.a.createElement(Ne.a,{value:e.lang,onChange:function(t){y.I18n.setLocale(t.target.value),e.handleSettingChange("lang",t.target.value,"settings")}},r.a.createElement(ce.a,{value:"en"},"English"),r.a.createElement(ce.a,{value:"zh"},"\u7b80\u4f53\u4e2d\u6587")))),r.a.createElement("div",{className:"setting-row"},r.a.createElement("span",{className:"setting-key"},y.I18n.t("theme"),":"),r.a.createElement("span",{className:"setting-value",style:{marginTop:"7px"}},r.a.createElement(xe,{onChange:e.handleSettingChange,color:e.primaryColor}))),r.a.createElement("div",{className:"setting-row"},r.a.createElement("span",{className:"setting-key"},y.I18n.t("auto save"),":"),r.a.createElement("span",{className:"setting-value"},r.a.createElement(ke.a,{checked:e.autoSave,onChange:function(t,n){return e.handleSettingChange("autoSave",n,"settings")},value:e.autoSave,color:"primary"}))))},Ie={root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},openIcon:{fontSize:"15px",color:"#bfbfbf",marginLeft:"4px"}},De=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={auth:!0,anchorEl:null,previewAnchorEl:null,importAnchorEl:null,showSettings:!1},n.handleImportClose=function(e,t){n.setState({importAnchorEl:null}),e&&"md"===e&&n.props.importMD(t),e&&"html"===e&&n.props.previewHtml()},n.handleImport=function(e){n.setState({importAnchorEl:e.currentTarget})},n.handlePreivew=function(e){n.setState({previewAnchorEl:e.currentTarget})},n.handleMenu=function(e){n.setState({anchorEl:e.currentTarget})},n.handlePreviewClose=function(e){n.setState({previewAnchorEl:null}),e&&"pdf"===e&&n.props.previewPdf(),e&&"md"===e&&n.props.previewMD(),e&&"html"===e&&n.props.previewHtml()},n.handleClose=function(e){n.setState({anchorEl:null}),e&&"pdf"===e&&n.props.exportPdf(),e&&"md"===e&&n.props.exportMD(),e&&"html"===e&&n.props.exportHtml()},n.goToGithub=function(){window.location="https://github.com/renhongl/json-editor"},n.toggleSetting=function(){n.setState({showSettings:!n.state.showSettings})},n.loginGit=function(){window.location="https://github.com/login/oauth/authorize?client_id=a3be5a8e9cc8df9b2254"},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.toggleDrawer,o=t.handleSettingChange,i=t.primaryColor,l=t.autoSave,c=t.lang,s=this.state,u=s.auth,d=s.anchorEl,m=s.previewAnchorEl,p=s.importAnchorEl,h=s.showSettings,f=Boolean(d),g=Boolean(m),v=Boolean(p);return r.a.createElement("div",{className:n.root},r.a.createElement(ne.a,{position:"static"},r.a.createElement(we,{title:y.I18n.t("settings"),content:r.a.createElement(je,{handleSettingChange:o,primaryColor:i,autoSave:l,lang:c}),toggleDialog:this.toggleSetting,type:"help",open:h}),r.a.createElement(re.a,null,r.a.createElement(b.a,{className:n.menuButton,color:"inherit","aria-label":"Menu",onClick:a},r.a.createElement(ie.a,null)),r.a.createElement(U.a,{variant:"h6",color:"inherit",className:n.grow},y.I18n.t("title")),u&&r.a.createElement("div",null,r.a.createElement(Z.a,{"aria-owns":v?"import-menu":void 0,"aria-haspopup":"true",onClick:this.handleImport,color:"inherit"},y.I18n.t("import from")," ",r.a.createElement("i",{className:"material-icons"},"arrow_drop_down")),r.a.createElement(ue.a,{id:"import-menu",anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:v,onClose:this.handleImportClose},r.a.createElement(ce.a,null,r.a.createElement("div",{className:"import-md-btn",containerelement:"label"},r.a.createElement("input",{type:"file",onChange:function(t){return e.handleImportClose("md",t)}}),"JSON"))),r.a.createElement(Z.a,{"aria-owns":g?"preview-menu":void 0,"aria-haspopup":"true",onClick:this.handlePreivew,color:"inherit"},y.I18n.t("preview as")," ",r.a.createElement("i",{className:"material-icons"},"arrow_drop_down")),r.a.createElement(ue.a,{id:"preview-menu",anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:this.handlePreviewClose},r.a.createElement(ce.a,{onClick:function(){return e.handlePreviewClose("pdf")}},"PDF"),r.a.createElement(ce.a,{onClick:function(){return e.handlePreviewClose("md")}},"JSON")),r.a.createElement(Z.a,{"aria-owns":f?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},y.I18n.t("export as")," ",r.a.createElement("i",{className:"material-icons"},"arrow_drop_down")),r.a.createElement(ue.a,{id:"menu-appbar",anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:this.handleClose},r.a.createElement(ce.a,{onClick:function(){return e.handleClose("pdf")}},"PDF"),r.a.createElement(ce.a,{onClick:function(){return e.handleClose("md")}},"JSON")),r.a.createElement(Z.a,{className:n.button,color:"inherit",onClick:this.goToGithub},"github",r.a.createElement("i",{className:"material-icons",style:Ie.openIcon},"open_in_new")),r.a.createElement(b.a,{className:"setting-icon",color:"inherit","aria-label":"Menu",onClick:this.toggleSetting},r.a.createElement("i",{className:"material-icons"},"settings"))))))}}]),t}(r.a.Component),Le=Object(N.withStyles)(Ie)(De),Je=n(60),Fe=n.n(Je),Te=n(224),Me=n.n(Te);n(785),n(786);Me()(Fe.a);var Ae=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showHelp:!1,preview:!0},n.toggleHelp=function(){n.setState({showHelp:!n.state.showHelp})},n.formatJson=function(){var e={from:n.myCodeMirror.getCursor(!0),to:n.myCodeMirror.getCursor(!1)};n.myCodeMirror.autoFormatRange(e.from,e.to)},n.openTogglePreview=function(){n.state.preview?(document.querySelector(".app-left").style.width="100%",document.querySelector(".app-right").style.width="0%",n.setState({preview:!1})):(document.querySelector(".app-left").style.width="50%",document.querySelector(".app-right").style.width="50%",n.setState({preview:!0}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){e.current!==this.props.current&&this.renderMarkdown()}},{key:"renderMarkdown",value:function(){var e=this,t=document.querySelector(".CodeMirror");t&&t.parentNode.removeChild(t);var n=this.props,a=n.value,r=n.handleValueChange;this.myCodeMirror=Fe()(document.querySelector(".markdown"),{value:a,mode:{name:"application/ld+json",highlightFormatting:!0},lineNumbers:!0,theme:"default",indentUnit:2,showCursorWhenSelecting:!0,autofocus:!0,cursorScrollMargin:5,cursorHeight:1,spellcheck:!0,activeLine:!0,autocorrect:!0,lineWrapping:!0}),this.myCodeMirror.on("change",function(t,n){r(e.myCodeMirror.getValue())}),this.props.addKeDownEvent()}},{key:"componentDidMount",value:function(){this.renderMarkdown()}},{key:"render",value:function(){var e=this.props,t=e.fileList,n=e.current,r=e.switchFileById,o=e.closeFile;return a.createElement("div",{className:"markdown-container"},a.createElement("div",{className:"markdown-title"},a.createElement("div",{className:"title-file-list"},t.filter(function(e){return e.open}).map(function(e,i){return a.createElement("div",{onClick:function(){return r(e.id)},className:e.id===t[n].id?"title-item-wrap selected":"title-item-wrap",title:e.title,key:e.id},a.createElement("div",{className:"title-item"},e.title),a.createElement("div",{className:e.save?"title-item-status":"title-item-status unsave",onClick:function(){return o(e.id)}},e.save?"\xd7":a.createElement("span",{className:"unsave-icon"})))})),a.createElement(C.a,{title:y.I18n.t("markdown syntax"),placement:"bottom"},a.createElement(b.a,{"aria-label":"help",className:"help-btn",size:"small",onClick:this.formatJson},a.createElement("i",{className:"material-icons",fontSize:"small"},"format_list_bulleted")))),a.createElement("div",{className:"markdown"}))}}]),t}(a.Component),Pe=n(83),qe=n.n(Pe),He=n(227),Re=n.n(He),ze=n(228),Be=n.n(ze),_e=n(225),Ve=n(226),We=(n(792),{container:{width:"100%",height:"100%"},fullContainer:{width:"100%",height:"calc(100% - 64px)",overflow:"hidden"},left:{width:"50%",float:"left",height:"100%",overflow:"hidden"},right:{width:"50%",float:"left",height:"100%",overflow:"hidden"}}),Ke=window.localStorage.getItem("pomeloJsonSettings"),Ue=Ke?JSON.parse(Ke):{},Ge=Ue.primary||"#555555",Ye=Ue.secondary||"#d32f2f",Qe=Ue.autoSave||!1,Xe=Ue.lang||"en";y.I18n.setTranslations({en:_e,zh:Ve}),y.I18n.setLocale(Xe);var Ze=Object(N.createMuiTheme)({palette:{primary:{main:Ge},secondary:{main:Ye}},typography:{useNextVariants:!0}}),$e=function(){var e=window.localStorage.getItem("pomeloJsonSettings");return"en"===(e?JSON.parse(e):{}).lang?'{\n  "example1": [\n      {\n          "name": "test01",\n          "age": 18,\n          "gender": 0,\n          "student": true,\n          "children": null\n      },\n      {\n          "name": "test02",\n          "age": 19,\n          "gender": 1,\n          "student": true,\n          "children": null\n      }\n  ],\n  "example2": {\n      "friuts": ["apple", "grape", "jujube", "pear"],\n      "transport": ["taxi", "bus", "metro", "plane", "train"]\n  }\n}\n\n\n\n\n':'{\n  "example1": [\n      {\n          "name": "test01",\n          "age": 18,\n          "gender": 0,\n          "student": true,\n          "children": null\n      },\n      {\n          "name": "test02",\n          "age": 19,\n          "gender": 1,\n          "student": true,\n          "children": null\n      }\n  ],\n  "example2": {\n      "friuts": ["apple", "grape", "jujube", "pear"],\n      "transport": ["taxi", "bus", "metro", "plane", "train"]\n  }\n}\n\n\n'},et=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={theme:null,primary:Ge,secondary:Ye,autoSave:Qe,lang:Xe,fullScreen:!1},n.handleValueChange=function(e){n.updateFileListText(e)},n.addKeDownEvent=function(){document.querySelector(".markdown").addEventListener("keydown",function(e){e.ctrlKey&&83===e.which&&(n.saveCurrentDoc(),e.preventDefault())})},n.handleSettingChange=function(e,t,a){n.setState(Object(l.a)({},e,t),function(){"settings"!==a&&n.updateTheme(),n.saveToLocalStorage(e,t),"autoSave"===e&&t&&n.autoSaveDoc(),"autoSave"!==e||t||clearInterval(n.saveTimer)})},n.toggleDrawer=function(){n.setState({left:!n.state.left})},n.previewPdf=function(){var e=n.state,t=e.fileList,a=e.current,r=document.getElementById("content"),o={margin:[.5,.5,.5,.5],filename:t[a].title.replace(".json",""),image:{type:"jpeg",quality:.98},pagebreak:{mode:["avoid-all"]},html2canvas:{dpi:192,letterRendering:!0,useCORS:!0,imageTimeout:0},useCORS:!0,jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};qe()().set(o).from(r).toPdf().get("pdf").then(function(e){window.open(e.output("bloburl"),"_blank")})},n.getPdf=function(e){var t=n.state,a=t.fileList,r=t.current,o=document.getElementById("content"),i={margin:[.5,.5,.5,.5],filename:a[r].title.replace(".json",""),image:{type:"jpeg",quality:.98},pagebreak:{mode:["avoid-all"]},html2canvas:{dpi:192,letterRendering:!0,useCORS:!0,imageTimeout:0},useCORS:!0,jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};qe()().set(i).from(o).toPdf().get("pdf").then(function(t){e(t.output("bloburl"),"aaa")})},n.exportPdf=function(){var e=n.state,t=e.fileList,a=e.current,r=document.getElementById("content"),o={margin:[.5,.5,.5,.5],filename:t[a].title.replace(".json",""),image:{type:"jpeg",quality:.98},pagebreak:{mode:["avoid-all"]},html2canvas:{dpi:192,letterRendering:!0,useCORS:!0,imageTimeout:0},useCORS:!0,jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};qe()().set(o).from(r).save()},n.previewHtml=function(){var e=n.state,t=e.fileList,a=e.current,r=document.querySelector(".preview"),o=window.open();o.document.open();var i="<title>".concat(t[a].title.replace(/.json/gi,".html"),"</title>").concat(r.innerHTML);o.document.write(i)},n.previewMD=function(){var e=n.state,t=e.fileList,a=e.current,r=window.open();r.document.open();var o="<title>".concat(t[a].title.replace(/.json/gi,".json"),"</title>").concat(t[a].text.replace(/\n|\r/gi,"<br/>").replace(/\t|\s/gi,"&nbsp;"));r.document.write(o)},n.exportHtml=function(){var e=n.state,t=e.fileList,a=e.current,r=document.querySelector(".preview");n.download(t[a].title.replace(".json",".html"),r.innerHTML)},n.exportMD=function(){var e=n.state,t=e.fileList,a=e.current;n.download(t[a].title,t[a].text)},n.switchFileById=function(e){var t=0;n.state.fileList.forEach(function(n,a){n.id===e&&(t=a)}),n.switchCurrent(t)},n.closeFile=function(e){var t=JSON.parse(JSON.stringify(n.state.fileList));t.forEach(function(t,n){t.id===e&&(t.open=!1)}),window.localStorage.setItem("pomeloJson",JSON.stringify(t)),n.setState({fileList:t},function(){n.switchCurrent(-1);var e=!1;t.forEach(function(t,a){t.open&&!e&&(n.switchCurrent(a),e=!0)})})},n.openFile=function(e){var t=0,a=JSON.parse(JSON.stringify(n.state.fileList));a.forEach(function(n,a){a===e&&(n.open=!0,t=n.id)}),n.setState({fileList:a});var r=window.localStorage.getItem("pomeloJson"),o=r?JSON.parse(r):[];o.forEach(function(e){e.id===t&&(e.open=!0)}),window.localStorage.setItem("pomeloJson",JSON.stringify(o))},n.switchCurrent=function(e){n.setState({current:e},function(){n.handleEvents()})},n.deleteAction=function(e){n.setState({openDialog:!0,openId:e})},n.addDocment=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"".concat(y.I18n.t("untitled document"),"-").concat(n.getIndex(),".json"),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:$e();n.setState({fileList:[].concat(Object(i.a)(n.state.fileList),[{id:Math.random(),title:t,text:a,save:!0,open:!0}])},function(){var e=n.state.fileList.length-1;n.setState({current:e},function(){n.switchCurrent(e),n.saveCurrentDoc()})})},n.saveDoc=function(){var e=JSON.parse(JSON.stringify(n.state.fileList));e.forEach(function(e){e.save=!0});var t=JSON.stringify(e);window.localStorage.setItem("pomeloJson",t),n.setState({fileList:e}),n.showMessage("Save Documents Successfully.")},n.updateTitle=function(e,t){var a=JSON.parse(JSON.stringify(n.state.fileList));a.forEach(function(n,a){e===n.id&&(n.title=t)}),n.setState({fileList:a});var r=window.localStorage.getItem("pomeloJson"),o=r?JSON.parse(r):[];o.forEach(function(n){n.id===e&&(n.title=t)}),window.localStorage.setItem("pomeloJson",JSON.stringify(o))},n.closeSnack=function(){n.setState({snackOpen:!1})},n.toggleDialog=function(e){n.setState({openDialog:!n.state.openDialog,current:-1},function(){if(e){var t=Object(i.a)(n.state.fileList),a=t.filter(function(e){return e.id===n.state.openId})[0];0===(t=t.filter(function(e){return e.id!==n.state.openId})).length&&(t[0]=a,t[0].title="".concat(y.I18n.t("untitled document"),"-").concat(n.getIndex([]),".json"),t[0].text=$e(),t[0].save=!0,t[0].open=!0);var r=0,o=!1;n.state.fileList.forEach(function(e,t){e.open&&!o&&(r=t,o=!0)}),o||n.openFile(r),n.setState({fileList:t,current:r},function(){n.switchCurrent(r),n.deleteById(n.state.openId)})}})},n.showMessage=function(e){n.setState({snackMsg:e},function(){n.setState({snackOpen:!0})})},n.openFullScreen=function(){var e=document.querySelector(".full-container");void 0===n.state.fullScreen||!1===n.state.fullScreen?(console.log("full"),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),n.setState({fullScreen:!0})):(console.log("exit"),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),n.setState({fullScreen:!1}))},n.importMD=function(e){var t=e.target.files[0];if(t){var a=new FileReader;a.onload=function(e){var a=e.target.result;n.addDocment(null,t.name,a),n.switchCurrent(n.state.fileList.length-1)},a.readAsText(t)}};var a=window.localStorage.getItem("pomeloJson");return a&&0!==JSON.parse(a).length?(a=JSON.parse(a))[0].open=!0:a=[{id:Math.random(),title:"".concat(y.I18n.t("untitled document"),"-1.json"),text:$e(),save:!0,open:!0}],n.state={current:0,left:!1,fileList:a,snackOpen:!1,snackMsg:"",openDialog:!1,openId:null},n.converter=new p.Converter({tables:!0,simplifiedAutoLink:!0}),n.saveCurrentDoc(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getIndex",value:function(e){if(e instanceof Array&&0===e.length)return 1;var t=e||this.state.fileList.map(function(e){return e.title.split(/-|\./g)[1]});return 0===(t=t.filter(function(e){return!Number.isNaN(Number(e))})).length?1:(Math.max.apply(null,t)||0)+1}},{key:"updateFileListText",value:function(e){var t=this,n=JSON.parse(JSON.stringify(this.state.fileList));n.forEach(function(n,a){a===t.state.current&&(n.text=e,n.save=!1)}),this.setState({fileList:n})}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.handleEvents()},700),this.state.autoSave&&this.autoSaveDoc(),this.addKeDownEvent()}},{key:"getUrlVars",value:function(){var e={};return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,n,a){e[n]=a}),e}},{key:"saveCurrentDoc",value:function(){var e=!1,t=this.state.current,n=this.state.fileList.filter(function(e,n){return t===n}),a=window.localStorage.getItem("pomeloJson"),r=a?JSON.parse(a):[];r.forEach(function(t){t.id===n[0].id&&(t.text=n[0].text,t.save=!0,e=!0)}),e||(n[0].save=!0,r.push(n[0])),window.localStorage.setItem("pomeloJson",JSON.stringify(r));var o=JSON.parse(JSON.stringify(this.state.fileList));o.forEach(function(e,n){n===t&&(e.save=!0)}),this.setState({fileList:o})}},{key:"autoSaveDoc",value:function(){var e=this;this.saveTimer&&clearInterval(this.saveTimer),this.saveTimer=setInterval(function(){e.saveDoc()},3e4)}},{key:"updateTheme",value:function(){var e=Object(N.createMuiTheme)({palette:{primary:{main:this.state.primary||Ge},secondary:{main:this.state.secondary||Ye}},typography:{useNextVariants:!0}});this.setState({theme:e})}},{key:"saveToLocalStorage",value:function(e,t){var n=window.localStorage.getItem("pomeloJsonSettings"),a=n?JSON.parse(n):{};a[e]=t,window.localStorage.setItem("pomeloJsonSettings",JSON.stringify(a))}},{key:"download",value:function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}},{key:"getFileObj",value:function(e){return this.state.fileList.filter(function(t){return t.id===e})[0]}},{key:"handleEvents",value:function(){var e=document.querySelector(".preview"),t=document.querySelector(".CodeMirror-scroll");if(t){var n=-1,a=null,r=function(){null!==a&&clearTimeout(a),a=setTimeout(function(){n=-1},20)};t.addEventListener("scroll",function(t){if(-1===n){n=0;var a=t.target.scrollTop/(t.target.scrollHeight-t.target.clientHeight);e.scrollTop=(e.scrollHeight-e.clientHeight)*a,r()}}),e.addEventListener("scroll",function(e){if(-1===n){n=1;var a=e.target.scrollTop/(e.target.scrollHeight-e.target.clientHeight);t.scrollTop=(t.scrollHeight-t.clientHeight)*a,r()}})}}},{key:"deleteById",value:function(e){var t=window.localStorage.getItem("pomeloJson"),n=(t?JSON.parse(t):[]).filter(function(t){return t.id!==e});window.localStorage.setItem("pomeloJson",JSON.stringify(n))}},{key:"render",value:function(){var e=this.state,t=e.fileList,n=e.left,r=e.current,o=e.snackOpen,i=e.snackMsg,l=e.openDialog,c=e.openId,s=e.theme,u=e.primary,d=e.autoSave,m=e.lang,p=e.fullScreen,h=0;t.forEach(function(e,t){e.id===c&&(h=t)});return a.createElement(N.MuiThemeProvider,{theme:s||Ze},a.createElement("div",{style:We.container},a.createElement(we,{title:"Are you sure you want to delete this document?",content:a.createElement(function(){return a.createElement("div",null,t[h].title,a.createElement("br",null),"Words Count:"," ",t[h].text.split(/\s|\t|\n/gi).filter(function(e){return""!==e.trim()}).length)},null),open:l,toggleDialog:this.toggleDialog}),a.createElement(Le,{toggleDrawer:this.toggleDrawer,exportMD:this.exportMD,exportPdf:this.exportPdf,exportHtml:this.exportHtml,previewHtml:this.previewHtml,previewPdf:this.previewPdf,previewMD:this.previewMD,importMD:this.importMD,handleSettingChange:this.handleSettingChange,primaryColor:u||Ge,autoSave:void 0===d?Qe:d,lang:m||Xe}),a.createElement(ee,{open:n,toggleDrawer:this.toggleDrawer,fileList:t,switchCurrent:this.switchCurrent,addDocment:this.addDocment,deleteAction:this.deleteAction,saveDoc:this.saveDoc,current:r,updateTitle:this.updateTitle,openFile:this.openFile}),a.createElement("div",{className:"full-container",style:We.fullContainer},a.createElement("div",{className:"app-left",style:We.left},-1!==r?a.createElement(Ae,{title:t[r].title,save:t[r].save,fileList:t,handleValueChange:this.handleValueChange,value:t[r].text,current:r,openFullScreen:this.openFullScreen,switchFileById:this.switchFileById,closeFile:this.closeFile,currentId:t[r].id,addKeDownEvent:this.addKeDownEvent,fullScreen:p}):null),a.createElement("div",{className:"app-right",style:We.right},-1!==r?a.createElement(O,{input:t[r].text,getPdf:this.getPdf}):null)),a.createElement(Re.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:o,autoHideDuration:6e3,onClose:this.closeSnack,message:a.createElement("span",{id:"message-id"},i),action:[a.createElement(b.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.closeSnack},a.createElement(Be.a,null))]})))}}]),t}(a.Component);n(799);Object(o.render)(r.a.createElement(function(){return r.a.createElement(et,null)},null),document.getElementById("root"))}},[[229,2,1]]]);
//# sourceMappingURL=main.2b68f74f.chunk.js.map