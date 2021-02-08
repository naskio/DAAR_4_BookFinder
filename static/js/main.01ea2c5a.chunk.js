(this["webpackJsonpbook-finder"]=this["webpackJsonpbook-finder"]||[]).push([[0],{158:function(e){e.exports=JSON.parse('{"a":"book-finder"}')},192:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(13),c=n.n(i),o=(n(192),n(10)),s=n(11),l=n(15),d=n(16),u=n(34),j=n(153),b=n(38),h=(n(154),n(19)),O="SET_GLOBAL",f="RESET_GLOBAL",m="FETCH_SEARCH",p="RESET_SEARCH",g="RESET_ALL",x={global:{title:"Book Finder - Search"},search:{keyword:"",advanced:"",duration:"",res:[]}},v=Object(b.c)({global:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x.global,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(h.a)(Object(h.a)({},e),t.payload);case g:case f:return x.global;default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x.search,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(h.a)({},t.payload);case p:case g:return x.search;default:return e}}}),y=n(155),k=n(156),w=n(157),S=n.n(w),B=n(115),E=n(158),F=!1,A="http://localhost:8000",_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return e&&t?"".concat(A,"/api/").concat(e,"/").concat(t,"/"):e?"".concat(A,"/api/").concat(e,"/"):"".concat(A,"/api/")},C=function(e){return"Book Finder - ".concat(e)},T={key:"root",keyPrefix:E.a,storage:S.a},P=[y.a,k.a];var I=Object(B.a)(T,v),R=n(21),L=n(20),q=n(173),D=n(2),N=function(e){var t=e.component,n=e.layout,r=Object(q.a)(e,["component","layout"]);return Object(D.jsx)(L.a,Object(h.a)(Object(h.a)({},r),{},{render:function(e){return Object(D.jsx)(n,Object(h.a)(Object(h.a)({},e),{},{children:Object(D.jsx)(t,Object(h.a)({},e))}))}}))},W=n(26),z=n(375),U=n(353),G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.refreshing,n=e.children;return Object(D.jsx)(D.Fragment,{children:t?Object(D.jsx)(z.a,{display:"flex",top:0,right:0,left:0,position:"absolute",alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw",style:{margin:0},children:Object(D.jsx)(U.a,{color:"primary"})}):Object(D.jsx)(D.Fragment,{children:n})})}}]),n}(a.a.PureComponent);G.defaultProps={refreshing:!1};var V=G,H=n(29),Y=n.n(H),J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;return e&&e.length>t?String(e).substring(0,t-3)+"...":e},K=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e.response?e.response.data?e.response.data instanceof Object?(t=Object.entries(e.response.data).filter((function(e){var t=Object(W.a)(e,1)[0];return["detail","non_field_errors"].some((function(e){return e===t}))})).reduce((function(e,t){var n=Object(W.a)(t,2)[1];return n instanceof Array?e+(e?", ":"")+n.join(", "):e+(e?", ":"")+n}),""),r&&Object.entries(e.response.data).filter((function(e){var t=Object(W.a)(e,1)[0];return!["detail","non_field_errors"].some((function(e){return e===t}))})).forEach((function(e){var t=Object(W.a)(e,2),n=t[0],a=t[1];a instanceof Array&&(a=a.join(", ")),r(n,a)})),Y.a.isEmpty(e.response.data)||(n=JSON.stringify(e.response.data)),n||(n="Error 400: Bad Request")):t=e.response.data:(t=e.response.statusText)||(t="Error Code ".concat(e.response.status)):t=e.message||e.type||e.code?e.message||"Error ".concat(e.type||e.code):"Unknown Error",a&&a(J(t||n),{variant:"error"}),i&&(!e.response||401!==e.response.status&&403!==e.response.status||i()),J(t||n)},M=n(360),X=n(177),Q=n(361),$=n(27),Z=n.n($),ee=n.p+"static/media/logo_text.2fb3e3bc.svg",te=n(40),ne=n(356),re=n(357),ae=n(358),ie=n(359),ce=n(355),oe=Object(ce.a)((function(e){return{root:{width:e.spacing(48)},media:{objectFit:"cover",objectPosition:"top",height:e.spacing(32)}}})),se=function(e){var t={en:"English",fr:"French"};return e in t?t[e]:e},le=function(e){var t=e.book,n=oe();return Object(D.jsx)(ne.a,{className:n.root,children:Object(D.jsxs)(re.a,{component:R.b,to:"/book/".concat(t.gutenberg_id,"/"),children:[Object(D.jsx)(ae.a,{component:"img",alt:t.title,title:t.title,image:t.cover_url,className:n.media}),Object(D.jsxs)(ie.a,{children:[Object(D.jsx)(X.a,{variant:"h5",children:t.title}),Object(D.jsx)(X.a,{variant:"caption",color:"secondary",gutterBottom:!0,children:se(t.language)}),!Y.a.isEmpty(t.authors)&&Object(D.jsxs)(X.a,{variant:"subtitle1",color:"textSecondary",children:["By ",t.authors.map((function(e){return e.full_name})).join(", ")]})]})]})})},de=Object(L.g)((function(e){var t=e.setTitle,n=e.history,a=Object(te.b)().enqueueSnackbar,i=Object(L.f)().id,c=Object(r.useState)(!1),o=Object(W.a)(c,2),s=o[0],l=o[1],d=Object(r.useState)({}),u=Object(W.a)(d,2),j=u[0],b=u[1];return Object(r.useEffect)((function(){var e=!0;return t(C("Book")),l(!0),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return Z.a.get(_("books",e)).then((function(e){return e.data}))}(i).then((function(n){e&&(b(n),t(C("Book - ".concat(n.title))))})).catch((function(e){K(e,null,a),n.push("/")})).finally((function(){e&&l(!1)})),function(){e=!1}}),[i,n,t,a]),Object(D.jsx)(V,{refreshing:s,children:Object(D.jsx)(z.a,{mt:4,children:Object(D.jsxs)(M.a,{container:!0,justify:"center",direction:"column",alignItems:"center",spacing:6,children:[Object(D.jsx)(M.a,{item:!0,children:Object(D.jsx)(R.b,{to:"/",children:Object(D.jsx)(z.a,{display:"inline",children:Object(D.jsx)("img",{style:{height:180,objectFit:"contain"},src:ee,alt:"Book Finder"})})})}),Object(D.jsxs)(M.a,{item:!0,container:!0,direction:"row",spacing:6,children:[Object(D.jsx)(M.a,{item:!0,xs:4,style:{width:"100%"},children:Object(D.jsx)("img",{src:j.cover_url,alt:j.title,style:{width:"100%",objectFit:"contain"}})}),Object(D.jsxs)(M.a,{item:!0,xs:8,container:!0,direction:"column",spacing:3,children:[Object(D.jsx)(M.a,{item:!0,children:Object(D.jsx)(X.a,{gutterBottom:!0,display:"inline",variant:"h2",children:j.title})}),Object(D.jsx)(M.a,{item:!0,children:Object(D.jsxs)(X.a,{gutterBottom:!0,display:"inline",variant:"subtitle1",children:[Object(D.jsx)("strong",{children:"Language: "}),se(j.language)]})}),!Y.a.isEmpty(j.authors)&&Object(D.jsx)(M.a,{item:!0,children:Object(D.jsxs)(X.a,{gutterBottom:!0,display:"inline",variant:"subtitle1",children:[Object(D.jsx)("strong",{children:"Authors: "}),j.authors.map((function(e){return e.full_name})).join(", ")]})}),!Y.a.isEmpty(j.bookshelves)&&Object(D.jsx)(M.a,{item:!0,children:Object(D.jsxs)(X.a,{gutterBottom:!0,display:"inline",variant:"subtitle1",children:[Object(D.jsx)("strong",{children:"Bookshelves: "}),j.bookshelves.map((function(e){return e.label})).join(", ")]})}),Object(D.jsx)(M.a,{item:!0,children:Object(D.jsx)(Q.a,{variant:"contained",size:"large",color:"primary",target:"_blank",href:j.download_url,children:"Download"})})]})]}),!Y.a.isEmpty(j.similar_to)&&Object(D.jsx)(M.a,{item:!0,children:Object(D.jsx)(X.a,{variant:"h4",children:"Similar books"})}),Object(D.jsx)(M.a,{item:!0,container:!0,direction:"row",wrap:"wrap",spacing:4,children:j.similar_to&&j.similar_to.map((function(e){return Object(D.jsx)(M.a,{item:!0,children:Object(D.jsx)(le,{book:e})},e.gutenberg_id)}))})]})})})})),ue=function(e){return{type:O,payload:e}},je=function(e){return ue({title:e})},be=ue,he=Object(u.b)((function(e){return{global:e.global,search:e.search}}),(function(e){return{setTitle:function(t){return e(je(t))}}}))(de),Oe=n(362),fe=n.p+"static/media/logo_text.63403a75.png",me=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(D.jsx)(z.a,{mt:8,children:Object(D.jsx)(M.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:Object(D.jsx)(M.a,{item:!0,xs:12,sm:11,md:10,lg:9,xl:8,children:Object(D.jsxs)(z.a,{p:8,children:[Object(D.jsx)(z.a,{p:2,mb:4,children:Object(D.jsx)(M.a,{container:!0,justify:"center",children:Object(D.jsx)(R.b,{to:"/",children:Object(D.jsx)("img",{style:{height:256,objectFit:"contain"},src:fe,alt:"Book Finder"})})})}),Object(D.jsx)(X.a,{variant:"subtitle2",align:"center",paragraph:!0,children:"Book Finder 2021"}),Object(D.jsx)(X.a,{variant:"body1",align:"left",children:"is a project created at Sorbonne Universit\xe9 (DAAR course)."}),Object(D.jsxs)(z.a,{my:2,children:[Object(D.jsx)(X.a,{variant:"h6",align:"left",children:"Authors"}),Object(D.jsxs)(z.a,{ml:2,children:[Object(D.jsx)(Oe.a,{variant:"subtitle1",color:"textPrimary",target:"_blank",href:"https://www.linkedin.com/in/nask/",component:"a",children:"Mehdi Nassim KHODJA"}),Object(D.jsx)("br",{}),Object(D.jsx)(Oe.a,{variant:"subtitle1",color:"textPrimary",target:"_blank",href:"#",component:"a",children:"Qiwei XIAN"}),Object(D.jsx)("br",{}),Object(D.jsx)(Oe.a,{variant:"subtitle1",color:"textPrimary",target:"_blank",href:"#",component:"a",children:"Adel EL AMRAOUI"})]}),Object(D.jsx)("br",{}),Object(D.jsx)(X.a,{variant:"h6",align:"left",children:"Supervisors"}),Object(D.jsxs)(z.a,{ml:2,children:[Object(D.jsx)(Oe.a,{variant:"subtitle1",color:"textPrimary",target:"_blank",href:"#",component:"a",children:"Dr. Binh-Minh BUI-XUAN"}),Object(D.jsx)("br",{}),Object(D.jsx)(Oe.a,{variant:"subtitle1",color:"textPrimary",target:"_blank",href:"#",component:"a",children:"Arthur ESCRIOU"})]})]})]})})})})}}]),n}(a.a.PureComponent),pe=n(92),ge=n(374),xe=n(363),ve=n(364),ye=n(365),ke=n(366),we=n(367),Se=n(55),Be={keyword:"",advanced:!0},Ee=Se.b({keyword:Se.c("Enter a regular expression").required("Regex is required"),advanced:Se.a("Enter is advanced").required("Advanced is required")}),Fe=Object(L.g)((function(e){var t=e.setTitle,n=e.fetchSearch,a=e.resetSearch,i=e.history,c=Object(te.b)().enqueueSnackbar;Object(r.useEffect)((function(){t(C("Advanced Search")),a()}),[t,a]);var o=Object(pe.a)({initialValues:Be,validationSchema:Ee,onSubmit:function(){n(Object(h.a)({},o.values)).then((function(e){o.setSubmitting(!1),!e||Y.a.isEmpty(e)||"string"==typeof e?c("Your regex search - ".concat(o.values.keyword," - did not match any books."),{variant:"info"}):i.push("/results")})).catch((function(e){var t=K(e,null,c);o.setFieldError("keyword",t),o.setSubmitting(!1)}))}});return Object(D.jsx)("form",{noValidate:!0,children:Object(D.jsx)(z.a,{mt:4,children:Object(D.jsxs)(M.a,{container:!0,justify:"center",direction:"column",alignItems:"center",children:[Object(D.jsx)(M.a,{item:!0,style:{width:"100%"},xs:9,sm:8,md:7,lg:6,xl:5,children:Object(D.jsx)("img",{src:ee,alt:"Book Finder",style:{objectFit:"contain"}})}),Object(D.jsx)(M.a,{item:!0,style:{width:"100%"},children:Object(D.jsx)(ge.a,{variant:"outlined",fullWidth:!0,autoFocus:!0,name:"keyword",placeholder:"Search by RegEx ...",helperText:"",error:o.touched.keyword&&Boolean(o.errors.keyword),onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.keyword,InputProps:{endAdornment:Object(D.jsx)(xe.a,{position:"end",children:Object(D.jsx)(ve.a,{title:"Search",children:Object(D.jsx)("span",{children:Object(D.jsx)(ye.a,{color:"primary",onClick:o.handleSubmit,type:"submit",variant:"contained",disabled:!o.isValid||o.isSubmitting,children:o.isSubmitting?Object(D.jsx)(U.a,{size:24}):Object(D.jsx)(ke.a,{})})})})}),startAdornment:Object(D.jsx)(xe.a,{position:"start",children:Object(D.jsx)(we.a,{color:"secondary",fontSize:"large"})})}})}),Object(D.jsx)(M.a,{item:!0,children:Object(D.jsx)(z.a,{mt:10,children:Object(D.jsx)(Q.a,{component:R.b,to:"/search",color:"primary",variant:"contained",size:"large",children:"Search by Keyword"})})})]})})})})),Ae=function(e){return function(t){return Z.a.get(_("search"),{params:e}).then((function(n){var r;return t((r={keyword:e.keyword,advanced:e.advanced,duration:n.duration||null,res:n.data},{type:m,payload:r})),n.data}))}},_e=function(){return{type:p}},Ce=Object(u.b)((function(e){return{global:e.global,search:e.search}}),(function(e){return{setGlobal:function(t){return e(be(t))},setTitle:function(t){return e(je(t))},fetchSearch:function(t){return e(Ae(t))},resetSearch:function(){return e(_e())}}}))(Fe),Te=n(376),Pe={keyword:"",advanced:!1},Ie=Se.b({keyword:Se.c("Enter a keyword").required("Keyword is required"),advanced:Se.a("Enter is advanced").required("Advanced is required")}),Re=function(e){return"string"===typeof e?e||"":e&&e.description&&e.description||""},Le=Object(L.g)((function(e){var t=e.setTitle,n=e.fetchSearch,a=e.resetSearch,i=e.history,c=Object(te.b)().enqueueSnackbar,o=Object(r.useState)(""),s=Object(W.a)(o,2),l=s[0],d=s[1],u=Object(r.useState)([]),j=Object(W.a)(u,2),b=j[0],O=j[1],f=Object(r.useState)(!1),m=Object(W.a)(f,2),p=m[0],g=m[1];Object(r.useEffect)((function(){t(C("Search by Keyword")),a()}),[t,a]);var x=Object(pe.a)({initialValues:Pe,validationSchema:Ie,onSubmit:function(){d(""),n(Object(h.a)({},x.values)).then((function(e){x.setSubmitting(!1),!e||Y.a.isEmpty(e)?c("Your search - ".concat(x.values.keyword," - did not match any books."),{variant:"info"}):"string"==typeof e?(c("Your search - ".concat(x.values.keyword," - did not match any books. Search instead for: ").concat(e),{variant:"info"}),d("Search instead for: ".concat(e))):i.push("/results")})).catch((function(e){var t=K(e,null,c);x.setFieldError("keyword",t),x.setSubmitting(!1)}))}});return Object(D.jsx)("form",{noValidate:!0,children:Object(D.jsx)(z.a,{mt:4,children:Object(D.jsxs)(M.a,{container:!0,justify:"center",direction:"column",alignItems:"center",children:[Object(D.jsx)(M.a,{item:!0,style:{width:"100%"},xs:9,sm:8,md:7,lg:6,xl:5,children:Object(D.jsx)("img",{src:ee,alt:"Book Finder",style:{objectFit:"contain"}})}),Object(D.jsx)(M.a,{item:!0,style:{width:"100%"},children:Object(D.jsx)(Te.a,{freeSolo:!0,disableClearable:!0,fullWidth:!0,name:"keyword",options:b,getOptionLabel:Re,onBlur:x.handleBlur,value:x.values.keyword,loading:p,onChange:function(e,t){var n;x.setFieldValue("keyword","string"===typeof(n=t)?n||"":n&&n.value?n.value:"",!0)},onInputChange:function(e,t){var n;x.setFieldTouched("keyword",!0,!1),t?(g(!0),(n={q:t},Z.a.get(_("autocomplete"),{params:n}).then((function(e){return e.data}))).then((function(e){O(e)})).catch((function(e){var t=K(e);x.setFieldError("keyword",t),c(t,{variant:"error"})})).finally((function(){g(!1)}))):(x.setFieldValue("keyword","",!0),O([]))},renderInput:function(e){return Object(D.jsx)(ge.a,Object(h.a)(Object(h.a)({},e),{},{placeholder:"Search by keyword ...",fullWidth:!0,autoFocus:!0,variant:"outlined",error:x.touched.keyword&&Boolean(x.errors.keyword),helperText:l||"",InputProps:Object(h.a)(Object(h.a)({},e.InputProps),{},{endAdornment:Object(D.jsx)(xe.a,{position:"end",children:Object(D.jsx)(ve.a,{title:"Search",children:Object(D.jsx)("span",{children:Object(D.jsx)(ye.a,{color:"primary",onClick:x.handleSubmit,type:"submit",variant:"contained",disabled:!x.isValid||p||x.isSubmitting,children:x.isSubmitting?Object(D.jsx)(U.a,{size:24}):Object(D.jsx)(ke.a,{})})})})}),startAdornment:Object(D.jsx)(xe.a,{position:"start",children:Object(D.jsx)(we.a,{color:"secondary",fontSize:"large"})})})}))}})}),Object(D.jsx)(M.a,{item:!0,children:Object(D.jsx)(z.a,{mt:10,children:Object(D.jsx)(Q.a,{component:R.b,to:"/advanced-search",color:"primary",variant:"contained",size:"large",children:"Advanced Search"})})})]})})})})),qe=Object(u.b)((function(e){return{global:e.global,search:e.search}}),(function(e){return{setGlobal:function(t){return e(be(t))},setTitle:function(t){return e(je(t))},fetchSearch:function(t){return e(Ae(t))},resetSearch:function(){return e(_e())}}}))(Le),De=n(317),Ne=n(368),We=Object(L.g)((function(e){var t,n=e.setTitle,a=e.history,i=e.search;return Object(r.useEffect)((function(){n(C("Search results for ".concat(i.advanced?"regex":"keyword",' "').concat(i.keyword,'"')))}),[n,i]),Object(D.jsx)(z.a,{mt:4,children:Object(D.jsxs)(M.a,{container:!0,justify:"center",direction:"column",alignItems:"center",spacing:6,children:[Object(D.jsx)(M.a,{item:!0,children:Object(D.jsx)(R.b,{to:"/",children:Object(D.jsx)(z.a,{display:"inline",children:Object(D.jsx)("img",{style:{height:180,objectFit:"contain"},src:ee,alt:"Book Finder"})})})}),Object(D.jsx)(M.a,{item:!0,style:{width:"100%"},children:Object(D.jsx)(De.a,{children:Object(D.jsxs)(M.a,{container:!0,direction:"row",spacing:4,justify:"space-evenly",alignItems:"center",wrap:"nowrap",children:[Object(D.jsx)(M.a,{item:!0,children:Object(D.jsx)(ve.a,{title:"Go Back",children:Object(D.jsx)(ye.a,{onClick:function(){a.goBack()},color:"primary",children:Object(D.jsx)(Ne.a,{fontSize:"large"})})})}),Object(D.jsxs)(M.a,{item:!0,xs:11,children:[Object(D.jsx)(X.a,{variant:"h5",children:"Search results for ".concat(i.advanced?"regex":"keyword",' "').concat(i.keyword,'"')}),Object(D.jsx)(X.a,{variant:"caption",children:"in ".concat((t=i.duration/1e3,(t?t.toLocaleString():"")||"n/a")," seconds")})]})]})})}),Object(D.jsx)(M.a,{item:!0,container:!0,direction:"row",justify:"center",wrap:"wrap",spacing:4,children:i.res&&i.res.map((function(e){return Object(D.jsx)(M.a,{item:!0,children:Object(D.jsx)(le,{book:e})},e.gutenberg_id)}))})]})})})),ze=Object(u.b)((function(e){return{global:e.global,search:e.search}}),(function(e){return{setTitle:function(t){return e(je(t))}}}))(We),Ue=n(91),Ge=n(369),Ve=n(370),He=n(6),Ye="#0061BF",Je="#ffffff",Ke="#4b4b4b",Me=240,Xe=function(e){return{content:{flexGrow:1,padding:e.spacing(4),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:0},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),marginLeft:Me},appBarSpacer:Object(h.a)(Object(h.a)({},e.mixins.toolbar),{},{marginBottom:e.spacing(2)}),appBar:{zIndex:e.zIndex.drawer+1},toolbar:{paddingRight:48},flexGrow:{flexGrow:1},drawer:{width:Me,flexShrink:0},drawerPaper:{width:Me},list:{width:"100%",maxWidth:Me,backgroundColor:e.palette.background.paper},nestedItem:{paddingLeft:e.spacing(4)},pageContainer:{position:"relative",minHeight:"100vh"},contentWrap:{paddingBottom:e.spacing(8)},footer:{position:"absolute",bottom:0,width:"100%",height:e.spacing(8)},link:{margin:e.spacing(1,1.5)},avatar:{color:Je,backgroundColor:Ye},avatarLarge:{width:e.spacing(7),height:e.spacing(7)},hide:{display:"none"}}},Qe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"getYear",value:function(){return(new Date).getFullYear()}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.children;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Ge.a,{}),Object(D.jsxs)(z.a,{className:t.pageContainer,children:[Object(D.jsx)(z.a,{className:t.contentWrap,children:Object(D.jsx)("main",{className:t.content,children:Object(D.jsx)(Ve.a,{children:n})})}),Object(D.jsx)(z.a,{className:t.footer,component:"footer",children:Object(D.jsxs)(M.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[Object(D.jsx)("nav",{children:Object(D.jsx)(Oe.a,{variant:"button",color:"textPrimary",to:"/about",component:R.b,className:t.link,children:"About"},"about")}),Object(D.jsx)(z.a,{my:1,children:Object(D.jsxs)(X.a,{variant:"caption",color:"textPrimary",align:"center",children:["Book Finder \xa9 ",this.getYear()]})})]})})]})]})}}]),n}(a.a.PureComponent),$e=Object(He.a)(Xe)(Object(te.c)(Qe)),Ze=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.empty,n=e.title,r=void 0===n?"Book Finder":n;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Ue.a,{children:Object(D.jsx)("title",{children:r})}),Object(D.jsxs)(R.a,{basename:"/",children:[" ",t?Object(D.jsxs)(L.c,{children:[Object(D.jsx)(N,{exact:!0,path:"/book/:id",component:he,layout:$e}),Object(D.jsx)(N,{path:"/about",component:me,layout:$e}),Object(D.jsx)(N,{path:"/advanced-search",component:Ce,layout:$e}),Object(D.jsx)(N,{path:"*",component:qe,layout:$e})]}):Object(D.jsxs)(L.c,{children:[Object(D.jsx)(N,{exact:!0,path:"/book/:id",component:he,layout:$e}),Object(D.jsx)(N,{path:"/results",component:ze,layout:$e}),Object(D.jsx)(N,{path:"/about",component:me,layout:$e}),Object(D.jsx)(N,{path:"/advanced-search",component:Ce,layout:$e}),Object(D.jsx)(N,{path:"*",component:qe,layout:$e})]})]})]})}}]),n}(a.a.PureComponent),et=Object(u.b)((function(e){return{title:e.global.title,empty:!e.search.res||Y.a.isEmpty(e.search.res)}}))(Ze),tt=n(372),nt=n(172),rt=n(371),at=Object(nt.a)({palette:{primary:{main:Ye},secondary:{main:rt.a[500]},primaryText:{main:Ke}}}),it=n(373),ct=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e))._closeSnackbar=function(e){return function(){r.notistackRef.current.closeSnackbar(e)}},r.notistackRef=a.a.createRef(),Z.a.interceptors.request.use((function(e){return e&&(e.metadata={startTime:new Date}),e}),(function(e){return Promise.reject(e)})),Z.a.interceptors.response.use((function(e){return e&&e.config&&e.config.metadata&&(e.config.metadata.endTime=new Date,e.config.metadata.startTime&&(e.duration=e.config.metadata.endTime-e.config.metadata.startTime)),e}),(function(e){try{if(Z.a.isCancel(e))return new Promise((function(){}));e&&e.config&&e.config.metadata&&(e.config.metadata.endTime=new Date,e.config.metadata.startTime&&(e.duration=e.config.metadata.endTime-e.config.metadata.startTime))}catch(e){console.log(e)}return Promise.reject(e)})),r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e;e=12e4,Z.a.defaults.timeout=e}},{key:"render",value:function(){var e=this;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(tt.a,{theme:at,children:Object(D.jsx)(Ue.b,{children:Object(D.jsx)(te.a,{ref:this.notistackRef,maxSnack:3,preventDuplicate:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:3e3,action:function(t){return Object(D.jsx)(ye.a,{"aria-label":"close",color:"inherit",onClick:e._closeSnackbar(t),children:Object(D.jsx)(it.a,{})},"close")},children:Object(D.jsx)(et,{})})})})})}}]),n}(a.a.Component),ot=function(){var e=Object(b.d)(I,b.a.apply(void 0,P));return{store:e,persistor:Object(B.b)(e)}}(),st=ot.persistor,lt=ot.store,dt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(D.jsx)(u.a,{store:lt,children:Object(D.jsx)(j.a,{persistor:st,loading:null,children:Object(D.jsx)(ct,{})})})}}]),n}(a.a.Component),ut=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,378)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},jt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function bt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(D.jsx)(dt,{}),document.getElementById("root")),ut(),function(e){if("serviceWorker"in navigator){if(new URL("/DAAR_4_BookFinder",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/DAAR_4_BookFinder","/service-worker.js");jt?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):bt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):bt(t,e)}))}}()}},[[316,1,2]]]);
//# sourceMappingURL=main.01ea2c5a.chunk.js.map