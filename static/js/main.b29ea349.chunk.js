(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(e,t){},255:function(e,t){},273:function(e,t){},275:function(e,t){},294:function(e,t){},295:function(e,t){},358:function(e,t){},360:function(e,t){},393:function(e,t){},395:function(e,t){},396:function(e,t){},401:function(e,t){},403:function(e,t){},409:function(e,t){},411:function(e,t){},424:function(e,t){},436:function(e,t){},439:function(e,t){},444:function(e,t){},452:function(e,t){},461:function(e,t){},463:function(e,t){},533:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var c,r,a,o,s,i,l,d,x,j,u,p,b,h,f,O,g,C=n(2),A=n(85),w=n.n(A),y=n(19),m=n.n(y),v=n(56),N=n(69),T=n(13),S=n(59),_=n(43),E=n.n(_),k=n(86),R=n.n(k),I=n(70),D=n(221),M=n(18),F={loading:!1,account:null,isTransferApproved:!1,nftCount:0,nftsInAccount:[],nftCountNew:0,nftsInAccountNew:[],smartContract:null,smartContractChanger:null,web3:null,errorMsg:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(M.a)(Object(M.a)({},F),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(M.a)(Object(M.a)({},e),{},{loading:!1,account:t.payload.account,isTransferApproved:t.payload.isTransferApproved,nftCount:t.payload.nftCount,nftsInAccount:t.payload.nftsInAccount,nftCountNew:t.payload.nftCountNew,nftsInAccountNew:t.payload.nftsInAccountNew,smartContract:t.payload.smartContract,smartContractNew:t.payload.smartContractNew,smartContractChanger:t.payload.smartContractChanger,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(M.a)(Object(M.a)({},F),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(M.a)(Object(M.a)({},e),{},{account:t.payload.account,isTransferApproved:t.payload.isTransferApproved,nftCount:t.payload.nftCount,nftsInAccount:t.payload.nftsInAccount,nftCountNew:t.payload.nftCountNew,nftsInAccountNew:t.payload.nftsInAccountNew});default:return e}},H={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(M.a)(Object(M.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(M.a)(Object(M.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(M.a)(Object(M.a)({},H),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},z=Object(I.b)({blockchain:K,data:L}),G=[D.a],W=Object(I.c)(I.a.apply(void 0,G)),U=Object(I.d)(z,W),B=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},P=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,U.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(B("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},q=function(e){return{type:"CONNECTION_FAILED",payload:e}},Q=function(e,t){return e.methods.balanceOf(t).call({to:e._address})},J=function(e,t,n){return e.methods.tokenOfOwnerByIndex(t,n).call({to:e._address})},Y=function(e,t){return e.methods.balanceOf(t).call({to:e._address})},V=function(e,t,n){return e.methods.tokenOfOwnerByIndex(t,n).call({to:e._address})},X=function(e,t,n){return e.methods.isApprovedForAll(t,n).call({to:e._address})},Z=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,c,r,a,o,s,i,l,d,x,j,u,p,b,h,f,O,g,C,A,w;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,fetch("/config/abiNew.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 6:return c=e.sent,e.next=9,fetch("/config/abiChanger.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,n.json();case 12:return a=e.sent,e.next=15,c.json();case 15:return e.sent,e.next=18,r.json();case 18:return o=e.sent,e.next=21,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 21:return s=e.sent,e.next=24,s.json();case 24:if(i=e.sent,l=window,d=l.ethereum,!(d&&d.isMetaMask)){e.next=85;break}return E.a.setProvider(d),x=new R.a(d),e.prev=30,e.next=33,d.request({method:"eth_requestAccounts"});case 33:return j=e.sent,e.next=36,d.request({method:"net_version"});case 36:if(e.sent!=i.NETWORK.ID){e.next=77;break}return u=new E.a(a,i.CONTRACT_ADDRESS),p=new E.a(a,i.CONTRACT_ADDRESS_NEW),b=new E.a(o,i.CONTRACT_CHANGER_ADDRESS),e.next=43,X(u,j[0],i.CONTRACT_CHANGER_ADDRESS).then();case 43:return h=e.sent,e.next=46,Q(u,j[0]).then();case 46:f=e.sent,O=[],g=0;case 49:if(!(g<f)){e.next=58;break}return e.t0=O,e.next=53,J(u,j[0],g).then();case 53:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 55:g++,e.next=49;break;case 58:return e.next=60,Y(p,j[0]).then();case 60:C=e.sent,A=[],w=0;case 63:if(!(w<C)){e.next=72;break}return e.t2=A,e.next=67,V(p,j[0],w).then();case 67:e.t3=e.sent,e.t2.push.call(e.t2,e.t3);case 69:w++,e.next=63;break;case 72:t({type:"CONNECTION_SUCCESS",payload:{account:j[0],isTransferApproved:h,nftCount:f,nftsInAccount:O,nftCountNew:C,nftsInAccountNew:A,smartContract:u,smartContractNew:p,smartContractChanger:b,web3:x}}),d.on("accountsChanged",(function(e){window.location.reload()})),d.on("chainChanged",(function(){window.location.reload()})),e.next=78;break;case 77:t(q("Change network to ".concat(i.NETWORK.NAME,".")));case 78:e.next=83;break;case 80:e.prev=80,e.t4=e.catch(30),t(q("Something went wrong."));case 83:e.next=86;break;case 85:t(q("Install Metamask."));case 86:case"end":return e.stop()}}),e,null,[[30,80]])})));return function(t){return e.apply(this,arguments)}}()},$=n(14),ee=$.a.div(c||(c=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),te=($.a.div(r||(r=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),$.a.div(a||(a=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"])))),ne=$.a.div(o||(o=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),ce=$.a.div(s||(s=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),re=$.a.div(i||(i=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ae=$.a.p(l||(l=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),oe=($.a.p(d||(d=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),$.a.p(x||(x=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),se=($.a.div(j||(j=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(1)),ie=function(e,t){return e.length>t?"".concat(e.substring(0,t),"..."):e},le=$.a.button(u||(u=Object(T.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),de=$.a.button(p||(p=Object(T.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #797979;\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: disabled;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),xe=($.a.button(b||(b=Object(T.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),$.a.div(h||(h=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"])))),je=$.a.img(f||(f=Object(T.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ue=($.a.img(O||(O=Object(T.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),$.a.a(g||(g=Object(T.a)(["\n  color: var(--primary-text);\n  text-decoration: none;\n"]))));var pe=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.blockchain})),n=(Object(S.c)((function(e){return e.data})),Object(C.useState)("Click buy to mint your NFT.")),c=Object(N.a)(n,2),r=(c[0],c[1]),a=Object(C.useState)("Not yet approved"),o=Object(N.a)(a,2),s=(o[0],o[1]),i=Object(C.useState)("Approve to send your NFT to new contract."),l=Object(N.a)(i,2),d=l[0],x=l[1],j=Object(C.useState)({CONTRACT_ADDRESS:"",CONTRACT_ADDRESS_NEW:"",CONTRACT_CHANGER_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},GAS_LIMIT:0,MIGRATION_COST_ETHER:"0",SHOW_BACKGROUND:!1}),u=Object(N.a)(j,2),p=u[0],b=u[1],h=function(){""!==t.account&&null!==t.smartContract&&e(P(t.account))},f=function(){var e=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.useEffect)((function(){f()}),[]),Object(C.useEffect)((function(){h()}),[t.account]),Object(se.jsx)(ee,{children:Object(se.jsxs)(re,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:p.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(se.jsx)(je,{alt:"logo",src:"/config/images/logo.png"}),Object(se.jsx)(te,{}),Object(se.jsxs)(xe,{flex:2,style:{padding:24},test:!0,children:[Object(se.jsx)(re,{flex:1,jc:"center",ai:"center"}),Object(se.jsx)(re,{flex:2,jc:"center",ai:"center",children:Object(se.jsxs)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Migration cost is ",p.MIGRATION_COST_ETHER," ",p.NETWORK.SYMBOL," per NFT."]})}),Object(se.jsx)(re,{flex:1,jc:"center",ai:"center"})]}),Object(se.jsxs)(xe,{flex:1,style:{padding:24},test:!0,children:[Object(se.jsx)(re,{flex:1,jc:"center",ai:"center"}),Object(se.jsx)(ce,{}),Object(se.jsxs)(re,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(se.jsx)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Step 1"}),Object(se.jsx)(oe,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Connect your account"}),Object(se.jsx)(ce,{}),""===t.account||null===t.smartContract?Object(se.jsxs)(re,{ai:"center",jc:"center",children:[Object(se.jsxs)(oe,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",p.NETWORK.NAME," network"]}),Object(se.jsx)(te,{}),Object(se.jsx)(le,{onClick:function(t){t.preventDefault(),e(Z()),h()},children:"CONNECT"}),""!==t.errorMsg?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(te,{}),Object(se.jsx)(oe,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)(oe,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connected to the ",p.NETWORK.NAME," network with account"," ",t.account]}),Object(se.jsx)(ne,{})]}),Object(se.jsx)(ne,{})]}),Object(se.jsx)(ce,{}),Object(se.jsxs)(re,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(se.jsx)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Step 2"}),Object(se.jsx)(te,{}),""===t.account||null===t.smartContract?Object(se.jsxs)(re,{ai:"center",jc:"center",children:[Object(se.jsx)(ce,{}),Object(se.jsx)(oe,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object(se.jsx)(ce,{})]}):Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(oe,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.isTransferApproved?"Already approved. Do step 3":d}),Object(se.jsx)(ne,{}),Object(se.jsx)(re,{ai:"center",jc:"center",fd:"row",children:t.isTransferApproved?Object(se.jsx)(se.Fragment,{children:Object(se.jsx)(de,{disabled:1,children:"Approved"})}):Object(se.jsx)(se.Fragment,{children:Object(se.jsx)(le,{onClick:function(n){console.log(t),n.preventDefault(),x("Approving... Please wait"),s("Approving"),t.smartContract.methods.setApprovalForAll(p.CONTRACT_CHANGER_ADDRESS,!0).send({gasLimit:String(p.GAS_LIMIT),to:p.CONTRACT_ADDRESS,from:t.account}).once("error",(function(e){console.log(e),x("Sorry, something went wrong please try again later."),s("Not yet approved")})).then((function(n){console.log(n),x("Approval is done. You can now send your NFTs from old contract and get the same NFT from new contract."),s("Approved"),e(Z()),e(P(t.account))})),h()},children:"Approve"})})})]}),Object(se.jsx)(ne,{})]}),Object(se.jsx)(ce,{}),Object(se.jsx)(re,{flex:1,jc:"center",ai:"center"})]}),Object(se.jsxs)(xe,{flex:1,style:{padding:24},test:!0,children:[Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsxs)(re,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(se.jsx)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Step 3 - Migration to new contract"}),Object(se.jsx)(te,{}),Object(se.jsxs)(ae,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:["Not Migrated ",Number(t.nftCount)," /"," ",Number(t.nftCount)+Number(t.nftCountNew)]}),""===t.account||null===t.smartContract?Object(se.jsx)(re,{ai:"center",jc:"center",children:""!==t.errorMsg?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(te,{}),Object(se.jsx)(oe,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null}):Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(ne,{}),Object(se.jsxs)(re,{ai:"center",jc:"center",fd:"row",children:[Object(se.jsx)(ne,{}),Object(se.jsx)(ne,{})]}),Object(se.jsx)(te,{}),Object(se.jsx)(re,{ai:"center",jc:"center",fd:"row",children:t.isTransferApproved?Object(se.jsx)(se.Fragment,{children:t.nftsInAccount.map((function(n){return Object(se.jsx)(le,{onClick:function(c){var a;a=n,r("Migrating... Please wait."),t.smartContractChanger.methods.changeContract(Number(a)).send({to:p.CONTRACT_CHANGER_ADDRESS,from:t.account,value:R.a.utils.toWei(p.MIGRATION_COST_ETHER,"ether"),gasLimit:String(p.GAS_LIMIT)}).once("error",(function(e){console.log(e),r("Sorry, something went wrong please try again later.")})).then((function(n){r("Done."),e(Z()),e(P(t.account)),console.log(n)}))},children:n},n)}))}):Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(re,{ai:"center",jc:"center",fd:"row"}),t.nftsInAccount.map((function(e){return Object(se.jsx)(de,{disabled:"1",children:e},e)}))]})})]}),Object(se.jsx)(ne,{})]}),Object(se.jsx)(ce,{}),Object(se.jsxs)(re,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(se.jsx)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:"NFTs already migrated to the new contract"}),Object(se.jsx)(te,{}),Object(se.jsxs)(ae,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:["Migrated ",Number(t.nftCountNew)," /"," ",Number(t.nftCount)+Number(t.nftCountNew)]}),""===t.account||null===t.smartContract?Object(se.jsx)(re,{ai:"center",jc:"center",children:""!==t.errorMsg?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(te,{}),Object(se.jsx)(oe,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null}):Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(ne,{}),Object(se.jsxs)(re,{ai:"center",jc:"center",fd:"row",children:[Object(se.jsx)(ne,{}),Object(se.jsx)(ne,{})]}),Object(se.jsx)(te,{}),Object(se.jsx)(re,{ai:"center",jc:"center",fd:"row",children:t.nftsInAccountNew.map((function(e){return Object(se.jsx)(de,{disabled:"1",children:e},e)}))})]}),Object(se.jsx)(ne,{})]})]}),Object(se.jsx)(ne,{}),Object(se.jsxs)(re,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(se.jsxs)(oe,{style:{textAlign:"center",color:"var(--secondary-text)"},children:["Old NFT smart contract"," ",Object(se.jsx)(ue,{target:"_blank",href:p.SCAN_LINK,children:ie(p.CONTRACT_ADDRESS,15)})]}),Object(se.jsx)(te,{}),Object(se.jsxs)(oe,{style:{textAlign:"center",color:"var(--secondary-text)"},children:["New NFT smart contract"," ",Object(se.jsx)(ue,{target:"_blank",href:p.SCAN_LINK_NEW,children:ie(p.CONTRACT_ADDRESS_NEW,15)})]}),Object(se.jsx)(te,{}),Object(se.jsxs)(oe,{style:{textAlign:"center",color:"var(--secondary-text)"},children:["Migration smart contract"," ",Object(se.jsx)(ue,{target:"_blank",href:p.SCAN_LINK_MIGRATION,children:ie(p.CONTRACT_CHANGER_ADDRESS,15)})]}),Object(se.jsx)(te,{}),Object(se.jsxs)(oe,{style:{textAlign:"center",color:"var(--secondary-text)"},children:["Astarians Plus Discord","  ",Object(se.jsx)(ue,{target:"_blank",href:"http://discord.gg/r7qTUyuzFy",children:"Join our Discord server"})]}),Object(se.jsx)(te,{})]})]})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,538)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(533);w.a.render(Object(se.jsx)(S.a,{store:U,children:Object(se.jsx)(pe,{})}),document.getElementById("root")),be()}},[[534,1,2]]]);
//# sourceMappingURL=main.b29ea349.chunk.js.map