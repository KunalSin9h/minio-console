"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1069],{82461:function(e,a,n){n.d(a,{Z:function(){return g}});var t=n(23430),i=n(18489),o=n(50390),s=n(38342),r=n.n(s),l=n(25594),c=n(36554),d=n(94187),u=n(95467),m=n(46529),p=n(94258),v=n(86509),x=n(4285),h=n(72462),f=n(97538),Z=n(82981),j=n(62559),g=(0,x.Z)((function(e){return(0,v.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},h.YI),h.Hr),{},{valueString:{maxWidth:350,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:2},fileInputField:{margin:"13px 0","@media (max-width: 900px)":{flexFlow:"column"}}},h.bV),{},{inputLabel:(0,i.Z)((0,i.Z)({},h.YI.inputLabel),{},{fontWeight:"normal"}),textBoxContainer:(0,i.Z)((0,i.Z)({},h.YI.textBoxContainer),{},{maxWidth:"100%",border:"1px solid #eaeaea",paddingLeft:"15px"})}))}))((function(e){var a=e.label,n=e.classes,i=e.onChange,s=e.id,v=e.name,x=e.disabled,h=void 0!==x&&x,g=e.tooltip,b=void 0===g?"":g,C=e.required,y=e.error,N=void 0===y?"":y,S=e.accept,M=void 0===S?"":S,k=e.value,F=void 0===k?"":k,w=(0,o.useState)(!1),B=(0,t.Z)(w,2),R=B[0],I=B[1];return(0,j.jsx)(o.Fragment,{children:(0,j.jsxs)(l.ZP,{item:!0,xs:12,className:"".concat(n.fileInputField," ").concat(n.fieldBottom," ").concat(n.fieldContainer," ").concat(""!==N?n.errorInField:""),children:[""!==a&&(0,j.jsxs)(c.Z,{htmlFor:s,className:"".concat(""!==N?n.fieldLabelError:""," ").concat(n.inputLabel),children:[(0,j.jsxs)("span",{children:[a,C?"*":""]}),""!==b&&(0,j.jsx)("div",{className:n.tooltipContainer,children:(0,j.jsx)(d.Z,{title:b,placement:"top-start",children:(0,j.jsx)("div",{className:n.tooltip,children:(0,j.jsx)(f.Z,{})})})})]}),R||""===F?(0,j.jsxs)("div",{className:n.textBoxContainer,children:[(0,j.jsx)("input",{type:"file",name:v,onChange:function(e){var a=r()(e,"target.files[0].name","");!function(e,a){var n=e.target.files[0],t=new FileReader;t.readAsDataURL(n),t.onload=function(){var e=t.result;if(e){var n=e.toString().split("base64,");2===n.length&&a(n[1])}}}(e,(function(e){i(e,a)}))},accept:M,required:C,disabled:h,className:n.fileInputField}),""!==F&&(0,j.jsx)(u.Z,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){I(!1)},disableRipple:!1,disableFocusRipple:!1,size:"small",children:(0,j.jsx)(p.Z,{})}),""!==N&&(0,j.jsx)(Z.Z,{errorMessage:N})]}):(0,j.jsxs)("div",{className:n.fileReselect,children:[(0,j.jsx)("div",{className:n.valueString,children:F}),(0,j.jsx)(u.Z,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){I(!0)},disableRipple:!1,disableFocusRipple:!1,size:"small",children:(0,j.jsx)(m.Z,{})})]})]})})}))},66964:function(e,a,n){var t=n(18489),i=n(50390),o=n(12066),s=n(25594),r=n(36554),l=n(94187),c=n(95467),d=n(86509),u=n(62449),m=n(4285),p=n(72462),v=n(97538),x=n(44977),h=n(62559),f=(0,u.Z)((function(e){return(0,d.Z)((0,t.Z)({},p.gM))}));function Z(e){var a=f();return(0,h.jsx)(o.Z,(0,t.Z)({InputProps:{classes:a}},e))}a.Z=(0,m.Z)((function(e){return(0,d.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},p.YI),p.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,t.Z)((0,t.Z)({},p.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var a=e.label,n=e.onChange,o=e.value,d=e.id,u=e.name,m=e.type,p=void 0===m?"text":m,f=e.autoComplete,j=void 0===f?"off":f,g=e.disabled,b=void 0!==g&&g,C=e.multiline,y=void 0!==C&&C,N=e.tooltip,S=void 0===N?"":N,M=e.index,k=void 0===M?0:M,F=e.error,w=void 0===F?"":F,B=e.required,R=void 0!==B&&B,I=e.placeholder,L=void 0===I?"":I,K=e.min,P=e.max,z=e.overlayId,A=e.overlayIcon,E=void 0===A?null:A,W=e.overlayObject,D=void 0===W?null:W,T=e.extraInputProps,V=void 0===T?{}:T,H=e.overlayAction,O=e.noLabelMinWidth,Y=void 0!==O&&O,_=e.pattern,q=void 0===_?"":_,U=e.autoFocus,$=void 0!==U&&U,G=e.classes,Q=e.className,J=void 0===Q?"":Q,X=e.onKeyPress,ee=(0,t.Z)({"data-index":k},V);return"number"===p&&K&&(ee.min=K),"number"===p&&P&&(ee.max=P),""!==q&&(ee.pattern=q),(0,h.jsx)(i.Fragment,{children:(0,h.jsxs)(s.ZP,{container:!0,className:(0,x.Z)(""!==J?J:"",""!==w?G.errorInField:G.inputBoxContainer),children:[""!==a&&(0,h.jsxs)(r.Z,{htmlFor:d,className:Y?G.noMinWidthLabel:G.inputLabel,children:[(0,h.jsxs)("span",{children:[a,R?"*":""]}),""!==S&&(0,h.jsx)("div",{className:G.tooltipContainer,children:(0,h.jsx)(l.Z,{title:S,placement:"top-start",children:(0,h.jsx)("div",{className:G.tooltip,children:(0,h.jsx)(v.Z,{})})})})]}),(0,h.jsxs)("div",{className:G.textBoxContainer,children:[(0,h.jsx)(Z,{id:d,name:u,fullWidth:!0,value:o,autoFocus:$,disabled:b,onChange:n,type:p,multiline:y,autoComplete:j,inputProps:ee,error:""!==w,helperText:w,placeholder:L,className:G.inputRebase,onKeyPress:X}),E&&(0,h.jsx)("div",{className:"".concat(G.overlayAction," ").concat(""!==a?"withLabel":""),children:(0,h.jsx)(c.Z,{onClick:H?function(){H()}:function(){return null},id:z,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:E})}),D&&(0,h.jsx)("div",{className:"".concat(G.overlayAction," ").concat(""!==a?"withLabel":""),children:D})]})]})})}))},51002:function(e,a,n){var t=n(23430),i=n(18489),o=n(50390),s=n(34424),r=n(95467),l=n(97771),c=n(84402),d=n(78426),u=n(93085),m=n(86509),p=n(4285),v=n(72462),x=n(44149),h=n(21278),f=n(45980),Z=n(62559),j=(0,s.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:x.MK});a.Z=(0,p.Z)((function(e){return(0,m.Z)((0,i.Z)((0,i.Z)({},v.Qw),{},{root:{"& .MuiPaper-root":{padding:"0 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},v.sN))}))(j((function(e){var a=e.onClose,n=e.modalOpen,s=e.title,m=e.children,p=e.classes,v=e.wideLimit,x=void 0===v||v,j=e.modalSnackMessage,g=e.noContentPadding,b=e.setModalSnackMessage,C=e.titleIcon,y=void 0===C?null:C,N=(0,o.useState)(!1),S=(0,t.Z)(N,2),M=S[0],k=S[1];(0,o.useEffect)((function(){b("")}),[b]),(0,o.useEffect)((function(){if(j){if(""===j.message)return void k(!1);"error"!==j.type&&k(!0)}}),[j]);var F=x?{classes:{paper:p.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},w="";return j&&(w=j.detailedErrorMsg,(""===j.detailedErrorMsg||j.detailedErrorMsg.length<5)&&(w=j.message)),(0,Z.jsxs)(c.Z,(0,i.Z)((0,i.Z)({open:n,classes:p},F),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&a()},className:p.root,children:[(0,Z.jsxs)(d.Z,{className:p.title,children:[(0,Z.jsxs)("div",{className:p.titleText,children:[y," ",s]}),(0,Z.jsx)("div",{className:p.closeContainer,children:(0,Z.jsx)(r.Z,{"aria-label":"close",className:p.closeButton,onClick:a,disableRipple:!0,size:"small",children:(0,Z.jsx)(h.Z,{})})})]}),(0,Z.jsx)(f.Z,{isModal:!0}),(0,Z.jsx)(l.Z,{open:M,className:p.snackBarModal,onClose:function(){k(!1),b("")},message:w,ContentProps:{className:"".concat(p.snackBar," ").concat(j&&"error"===j.type?p.errorSnackBar:"")},autoHideDuration:j&&"error"===j.type?1e4:5e3}),(0,Z.jsx)(u.Z,{className:g?"":p.content,children:m})]}))})))},81069:function(e,a,n){n.r(a);var t=n(23430),i=n(18489),o=n(50390),s=n(38342),r=n.n(s),l=n(34424),c=n(86509),d=n(4285),u=n(66946),m=n(81378),p=n(25594),v=n(72462),x=n(44149),h=n(66964),f=n(82461),Z=n(30324),j=n(51002),g=n(86362),b=n(62559),C=(0,l.$j)(null,{setModalErrorSnackMessage:x.zb});a.default=(0,d.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)({buttonContainer:{textAlign:"right"}},v.oO),v.DF))}))(C((function(e){var a=e.open,n=e.closeModalAndRefresh,i=e.classes,s=e.tierData,l=e.setModalErrorSnackMessage,c=(0,o.useState)(!1),d=(0,t.Z)(c,2),v=d[0],x=d[1],C=(0,o.useState)(""),y=(0,t.Z)(C,2),N=y[0],S=y[1],M=(0,o.useState)(""),k=(0,t.Z)(M,2),F=k[0],w=k[1],B=(0,o.useState)(""),R=(0,t.Z)(B,2),I=R[0],L=R[1],K=(0,o.useState)(""),P=(0,t.Z)(K,2),z=P[0],A=P[1],E=(0,o.useState)(""),W=(0,t.Z)(E,2),D=W[0],T=W[1],V=(0,o.useState)(""),H=(0,t.Z)(V,2),O=H[0],Y=H[1],_=(0,o.useState)(!0),q=(0,t.Z)(_,2),U=q[0],$=q[1],G=r()(s,"type",""),Q=r()(s,"".concat(G,".name"),"");(0,o.useEffect)((function(){var e=!0;"s3"===G||"azure"===G?""!==D&&""!==O||(e=!1):"gcs"===G&&""===z&&(e=!1),$(e)}),[O,D,z,G]);return(0,b.jsx)(j.Z,{modalOpen:a,titleIcon:(0,b.jsx)(g.mB,{}),onClose:function(){n(!1)},title:"Update Credentials - ".concat(G," / ").concat(Q),children:(0,b.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),x(!0),function(){var e={};"s3"===G||"azure"===G?e={access_key:D,secret_key:O}:"gcs"===G&&(e={creds:z}),""!==Q?Z.Z.invoke("PUT","/api/v1/admin/tiers/".concat(G,"/").concat(Q,"/credentials"),e).then((function(){x(!1),n(!0)})).catch((function(e){x(!1),l(e)})):l({errorMessage:"There was an error retrieving tier information",detailedError:""})}()},children:(0,b.jsxs)(p.ZP,{container:!0,children:[(0,b.jsxs)(p.ZP,{item:!0,xs:12,children:["s3"===G&&(0,b.jsxs)(o.Fragment,{children:[(0,b.jsx)("div",{className:i.formFieldRow,children:(0,b.jsx)(h.Z,{id:"accessKey",name:"accessKey",label:"Access Key",placeholder:"Enter Access Key",value:N,onChange:function(e){S(e.target.value)}})}),(0,b.jsx)("div",{className:i.formFieldRow,children:(0,b.jsx)(h.Z,{id:"secretKey",name:"secretKey",label:"Secret Key",placeholder:"Enter Secret Key",value:F,onChange:function(e){w(e.target.value)}})})]}),"gcs"===G&&(0,b.jsx)(o.Fragment,{children:(0,b.jsx)(f.Z,{accept:".json",id:"creds",label:"Credentials",name:"creds",onChange:function(e,a){A(e),L(a)},value:I})}),"azure"===G&&(0,b.jsxs)(o.Fragment,{children:[(0,b.jsx)("div",{className:i.formFieldRow,children:(0,b.jsx)(h.Z,{id:"accountName",name:"accountName",label:"Account Name",placeholder:"Enter Account Name",value:D,onChange:function(e){T(e.target.value)}})}),(0,b.jsx)("div",{className:i.formFieldRow,children:(0,b.jsx)(h.Z,{id:"accountKey",name:"accountKey",label:"Account Key",placeholder:"Enter Account Key",value:O,onChange:function(e){Y(e.target.value)}})})]})]}),(0,b.jsx)(p.ZP,{item:!0,xs:12,className:i.buttonContainer,children:(0,b.jsx)(u.Z,{type:"submit",variant:"contained",color:"primary",disabled:v||!U,children:"Save"})}),v&&(0,b.jsx)(p.ZP,{item:!0,xs:12,children:(0,b.jsx)(m.Z,{})})]})})})})))},82981:function(e,a,n){var t=n(50390),i=n(35477),o=n(86509),s=n(4285),r=n(62559);a.Z=(0,s.Z)((function(e){var a;return(0,o.Z)({errorBlock:{color:(null===(a=e.palette)||void 0===a?void 0:a.error.main)||"#C83B51"}})}))((function(e){var a=e.classes,n=e.errorMessage,o=e.withBreak,s=void 0===o||o;return(0,r.jsxs)(t.Fragment,{children:[s&&(0,r.jsx)("br",{}),(0,r.jsx)(i.Z,{component:"p",variant:"body1",className:a.errorBlock,children:n})]})}))},46529:function(e,a,n){var t=n(64119);a.Z=void 0;var i=t(n(66830)),o=n(62559),s=(0,i.default)((0,o.jsx)("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");a.Z=s},94258:function(e,a,n){var t=n(64119);a.Z=void 0;var i=t(n(66830)),o=n(62559),s=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");a.Z=s},21278:function(e,a,n){var t=n(64119);a.Z=void 0;var i=t(n(66830)),o=n(62559),s=(0,i.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");a.Z=s}}]);
//# sourceMappingURL=1069.77bb316e.chunk.js.map