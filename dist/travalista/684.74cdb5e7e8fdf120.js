"use strict";(self.webpackChunktravalista=self.webpackChunktravalista||[]).push([[684],{5684:(J,p,r)=>{r.r(p),r.d(p,{AdminModule:()=>L});var a=r(6814),g=r(5286),e=r(9468);const u=function(t){return{expand:t}};let m=(()=>{class t{constructor(){this.isExpand=!1}toggleSideBar(){this.isExpand=!this.isExpand,localStorage.setItem("isSidebarExpand",this.isExpand.toString())}ngOnInit(){const n=localStorage.getItem("isSidebarExpand");n&&(this.isExpand="true"===n)}static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-adminhome"]],decls:65,vars:3,consts:[[1,"wrapper"],["id","sidebar",3,"ngClass"],[1,"d-flex"],["type","button",1,"toggle-btn",3,"click"],[1,"fa-solid","fa-bars"],[1,"sidebar-logo"],[1,"sidebar-nav"],[1,"sidebar-item"],["routerLink","/admin/adminpage",1,"sidebar-link"],[1,"fa-solid","fa-house"],["routerLink","/admin/pendingrequest",1,"sidebar-link"],[1,"fa-solid","fa-hourglass-half"],[1,"sidebar-link"],[1,"fa-solid","fa-flag"],["data-bs-toggle","collapse","data-bs-target","#auth","aria-expanded","false","aria-controls","auth",1,"sidebar-link","collapsed","has-dropdown"],[1,"fas","fa-users"],["id","auth","data-bs-parent","#sidebar",1,"sidebar-dropdown","list-unstyled","collapse"],["routerLink","/admin/guidelist",1,"sidebar-link"],["routerLink","/admin/packagelist",1,"sidebar-link"],["routerLink","/admin/blockguide",1,"sidebar-link"],["routerLink","/admin/showblockedGuides",1,"sidebar-link"],["data-bs-toggle","collapse","data-bs-target","#user","aria-expanded","false","aria-controls","auth",1,"sidebar-link","collapsed","has-dropdown"],[1,"fa-solid","fa-user"],["id","user","data-bs-parent","#sidebar",1,"sidebar-dropdown","list-unstyled","collapse"],["routerLink","/admin/userlist",1,"sidebar-link"],["routerLink","/admin/blockuser",1,"sidebar-link"],["routerLink","/admin/showblockeduser",1,"sidebar-link"],[1,"sidebar-footer"],[1,"fas","fa-sign-out-alt"],["routerLink","/userlogin"],[1,"main","p-3"],[1,"text-center"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"aside",1)(2,"div",2)(3,"button",3),e.NdJ("click",function(){return o.toggleSideBar()}),e._UZ(4,"i",4),e.qZA(),e.TgZ(5,"div",5)(6,"a"),e._uU(7,"TRAVALISTA"),e.qZA()()(),e.TgZ(8,"ul",6)(9,"li",7)(10,"a",8),e._UZ(11,"i",9),e.TgZ(12,"span"),e._uU(13,"Home"),e.qZA()()(),e.TgZ(14,"li",7)(15,"a",10),e._UZ(16,"i",11),e.TgZ(17,"span"),e._uU(18,"Pending Requests"),e.qZA()()(),e.TgZ(19,"li",7)(20,"a",12),e._UZ(21,"i",13),e.TgZ(22,"span"),e._uU(23,"Banners"),e.qZA()()(),e.TgZ(24,"li",7)(25,"a",14),e._UZ(26,"i",15),e.TgZ(27,"span"),e._uU(28,"Guide"),e.qZA()(),e.TgZ(29,"ul",16)(30,"li",7)(31,"a",17),e._uU(32,"Guide List"),e.qZA()(),e.TgZ(33,"li",7)(34,"a",18),e._uU(35,"Packages"),e.qZA()(),e.TgZ(36,"li",7)(37,"a",19),e._uU(38,"Block Guide"),e.qZA()(),e.TgZ(39,"li",7)(40,"a",20),e._uU(41,"Blocked Guides"),e.qZA()()()(),e.TgZ(42,"li",7)(43,"a",21),e._UZ(44,"i",22),e.TgZ(45,"span"),e._uU(46,"User"),e.qZA()(),e.TgZ(47,"ul",23)(48,"li",7)(49,"a",24),e._uU(50,"User List"),e.qZA()(),e.TgZ(51,"li",7)(52,"a",25),e._uU(53,"Block User"),e.qZA()(),e.TgZ(54,"li",7)(55,"a",26),e._uU(56,"Blocked User List"),e.qZA()()()()(),e.TgZ(57,"div",27)(58,"a",12),e._UZ(59,"i",28),e.TgZ(60,"span",29),e._uU(61,"Logout"),e.qZA()()()(),e.TgZ(62,"div",30)(63,"div",31),e._UZ(64,"router-outlet"),e.qZA()()()),2&i&&(e.xp6(1),e.Q6J("ngClass",e.VKq(1,u,o.isExpand)))},dependencies:[g.lC,g.rH,a.mk],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";[_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box;margin:0;padding:0}a[_ngcontent-%COMP%]{text-decoration:none}li[_ngcontent-%COMP%]{list-style:none}h1[_ngcontent-%COMP%]{font-weight:600;font-size:1.5rem}body[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.wrapper[_ngcontent-%COMP%]{display:flex}.main[_ngcontent-%COMP%]{min-height:100vh;width:100%;overflow:hidden;transition:all .35s ease-in-out;background-color:#fafbfe}#sidebar[_ngcontent-%COMP%]{width:70px;min-width:70px;z-index:1000;transition:all .25s ease-in-out;background-color:#0e2238;display:flex;flex-direction:column}#sidebar.expand[_ngcontent-%COMP%]{width:260px;min-width:260px}.toggle-btn[_ngcontent-%COMP%]{background-color:transparent;cursor:pointer;border:0;padding:1rem 1.5rem}.toggle-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem;color:#fff}.sidebar-logo[_ngcontent-%COMP%]{margin:auto 0}.sidebar-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:1.15rem;font-weight:600}#sidebar[_ngcontent-%COMP%]:not(.expand)   .sidebar-logo[_ngcontent-%COMP%], #sidebar[_ngcontent-%COMP%]:not(.expand)   a.sidebar-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.sidebar-nav[_ngcontent-%COMP%]{padding:2rem 0;flex:1 1 auto}a.sidebar-link[_ngcontent-%COMP%]{padding:.625rem 1.625rem;color:#fff;display:block;font-size:.9rem;white-space:nowrap;border-left:3px solid transparent}.sidebar-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.1rem;margin-right:.75rem}a.sidebar-link[_ngcontent-%COMP%]:hover{background-color:#ffffff13;border-left:3px solid #3b7ddd;cursor:pointer}.sidebar-item[_ngcontent-%COMP%]{position:relative}#sidebar[_ngcontent-%COMP%]:not(.expand)   .sidebar-item[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]{position:absolute;top:0;left:70px;background-color:#0e2238;padding:0;min-width:15rem;display:none}#sidebar[_ngcontent-%COMP%]:not(.expand)   .sidebar-item[_ngcontent-%COMP%]:hover   .has-dropdown[_ngcontent-%COMP%] + .sidebar-dropdown[_ngcontent-%COMP%]{display:block;max-height:15em;width:100%;opacity:1}#sidebar.expand[_ngcontent-%COMP%]   .sidebar-link[data-bs-toggle=collapse][_ngcontent-%COMP%]:after{border:solid;border-width:0 .075rem .075rem 0;content:"";display:inline-block;padding:2px;position:absolute;right:1.5rem;top:1.4rem;transform:rotate(-135deg);transition:all .2s ease-out}#sidebar.expand[_ngcontent-%COMP%]   .sidebar-link[data-bs-toggle=collapse].collapsed[_ngcontent-%COMP%]:after{transform:rotate(45deg);transition:all .2s ease-out}']})}return t})();var x=r(6666);let b=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-pending"]],decls:2,vars:0,template:function(i,o){1&i&&(e.TgZ(0,"p"),e._uU(1,"pending works"),e.qZA())}})}return t})(),f=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-adminpage"]],decls:2,vars:0,template:function(i,o){1&i&&(e.TgZ(0,"p"),e._uU(1,"adminpage works!"),e.qZA())}})}return t})();var d=r(3502);function _(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"ul",4)(1,"li",5)(2,"div",6),e._UZ(3,"img",7),e.qZA(),e.TgZ(4,"div",8)(5,"label"),e._uU(6),e.qZA()(),e.TgZ(7,"div",9)(8,"label"),e._uU(9),e.qZA()(),e.TgZ(10,"div",10)(11,"label"),e._uU(12),e.qZA()(),e.TgZ(13,"div",11)(14,"label"),e._uU(15),e.qZA()(),e.TgZ(16,"div",12)(17,"label"),e._uU(18),e.qZA()(),e.TgZ(19,"div",13)(20,"button",14),e.NdJ("click",function(){const c=e.CHM(n).$implicit,l=e.oxw();return e.KtG(l.isAccept(c._id))}),e._uU(21,"Accept"),e.qZA(),e.TgZ(22,"button",15),e.NdJ("click",function(){const c=e.CHM(n).$implicit,l=e.oxw();return e.KtG(l.isReject(c._id))}),e._uU(23,"Reject"),e.qZA()()()()}if(2&t){const n=s.$implicit;e.xp6(3),e.s9C("src",n.files,e.LSH),e.xp6(3),e.Oqu(n.fullname),e.xp6(3),e.Oqu(n.email),e.xp6(3),e.Oqu(n.exp),e.xp6(3),e.Oqu(n.location),e.xp6(3),e.Oqu(n.isApproved)}}let Z=(()=>{class t{constructor(n){this.adminservice=n,this.pendingGuides=[]}ngOnInit(){this.adminservice.guidePendingStatus().subscribe({next:n=>{console.log(n);for(const i of n.pendingGuides)this.pendingGuides.push(i),console.log(i.fullname)},error:n=>{console.log(n)}})}isAccept(n){console.log(n),this.adminservice.adminResponseStatus(n,"accepted").subscribe({next:i=>{console.log(i)},error:i=>{console.log(i)}})}isReject(n){this.adminservice.adminResponseStatus(n,"rejected").subscribe({next:i=>{console.log(i)},error:i=>{console.log(i)}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(d.l))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-pendingrequests"]],decls:23,vars:1,consts:[[1,"container"],[1,""],[1,"icon","fa","fa-user-o"],["class","task-items",4,"ngFor","ngForOf"],[1,"task-items"],[1,"item"],[1,"user"],["alt","Image 001",1,"owner-img",3,"src"],[1,"fullname"],[1,"email"],[1,"expirence"],[1,"location"],[1,"status"],[1,"actions"],[1,"accept",3,"click"],[1,"reject",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"section",0)(1,"header")(2,"div",1),e._UZ(3,"i",2),e.qZA(),e.TgZ(4,"div",1)(5,"label"),e._uU(6," Fullname "),e.qZA()(),e.TgZ(7,"div",1)(8,"label"),e._uU(9," email "),e.qZA()(),e.TgZ(10,"div",1)(11,"label"),e._uU(12," Experience"),e.qZA()(),e.TgZ(13,"div",1)(14,"label"),e._uU(15," location "),e.qZA()(),e.TgZ(16,"div",1)(17,"label"),e._uU(18," Status "),e.qZA()(),e.TgZ(19,"div",1)(20,"label"),e._uU(21," Actions "),e.qZA()()(),e.YNc(22,_,24,6,"ul",3),e.qZA()),2&i&&(e.xp6(22),e.Q6J("ngForOf",o.pendingGuides))},dependencies:[a.sg],styles:['@import"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";@import"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";body[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;background:#eeeeee}.container[_ngcontent-%COMP%]{margin:50px auto 0;width:980px}.owner-img[_ngcontent-%COMP%]{width:40px;height:40px}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1em;font-weight:600;color:#000;padding:20px;box-sizing:border-box;-webkit-user-select:none;user-select:none;text-align:center;margin-left:42px;justify-content:space-between}.text[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap}.item[_ngcontent-%COMP%]{display:flex;align-items:center;margin:20px 0;padding:20px;background:#fff;justify-content:space-between;border-radius:5px;box-shadow:0 0 5px 2px #0000001a}.user[_ngcontent-%COMP%]{width:30px}.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.actions[_ngcontent-%COMP%]{display:flex;gap:5px}button[_ngcontent-%COMP%]{border:1px solid rgba(27,31,35,.15);border-radius:6px;box-shadow:#1b1f231a 0 1px;box-sizing:border-box;color:#fff;cursor:pointer;font-size:14px;font-weight:600;padding:6px 16px;text-align:center}.accept[_ngcontent-%COMP%]{background-color:green}.reject[_ngcontent-%COMP%]{background-color:red}']})}return t})();function h(t,s){if(1&t&&(e.TgZ(0,"ul",4)(1,"li",5)(2,"div",6),e._UZ(3,"img",7),e.qZA(),e.TgZ(4,"div",8)(5,"label"),e._uU(6),e.qZA()(),e.TgZ(7,"div",9)(8,"label"),e._uU(9),e.qZA()(),e.TgZ(10,"div",10)(11,"label"),e._uU(12),e.qZA()(),e.TgZ(13,"div",11)(14,"label"),e._uU(15),e.qZA()()()()),2&t){const n=s.$implicit;e.xp6(3),e.s9C("src",n.files,e.LSH),e.xp6(3),e.Oqu(n.fullname),e.xp6(3),e.Oqu(n.email),e.xp6(3),e.Oqu(n.exp),e.xp6(3),e.Oqu(n.location)}}let C=(()=>{class t{constructor(n){this.adminservices=n,this.guides=[]}ngOnInit(){this.adminservices.getGuides().subscribe({next:n=>{console.log(n),this.guides=n.guides,console.log(this.guides)},error:n=>{console.log(n)}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(d.l))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-guidelist"]],decls:17,vars:1,consts:[[1,"container"],[1,""],[1,"icon","fa","fa-user-o"],["class","task-items",4,"ngFor","ngForOf"],[1,"task-items"],[1,"item"],[1,"user"],["alt","Image 001",1,"owner-img",3,"src"],[1,"fullname"],[1,"email"],[1,"expirence"],[1,"location"]],template:function(i,o){1&i&&(e.TgZ(0,"section",0)(1,"header")(2,"div",1),e._UZ(3,"i",2),e.qZA(),e.TgZ(4,"div",1)(5,"label"),e._uU(6," Fullname "),e.qZA()(),e.TgZ(7,"div",1)(8,"label"),e._uU(9," email "),e.qZA()(),e.TgZ(10,"div",1)(11,"label"),e._uU(12," Experience"),e.qZA()(),e.TgZ(13,"div",1)(14,"label"),e._uU(15," location "),e.qZA()()(),e.YNc(16,h,16,5,"ul",3),e.qZA()),2&i&&(e.xp6(16),e.Q6J("ngForOf",o.guides))},dependencies:[a.sg],styles:[".container[_ngcontent-%COMP%]{margin:50px auto 0;width:980px}.owner-img[_ngcontent-%COMP%]{width:40px;height:40px}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1em;font-weight:600;color:#000;padding:20px;box-sizing:border-box;-webkit-user-select:none;user-select:none;text-align:center;margin-left:42px;justify-content:space-between}.text[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap}.item[_ngcontent-%COMP%]{display:flex;align-items:center;margin:20px 0;padding:20px;background:#fff;justify-content:space-between;border-radius:5px;box-shadow:0 0 5px 2px #0000001a;cursor:pointer;transition:box-shadow .3s ease}.task-items[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{box-shadow:0 0 10px 5px #0003}.user[_ngcontent-%COMP%]{width:30px}.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}"]})}return t})();var O=r(1378);function k(t,s){if(1&t&&(e.TgZ(0,"div",3)(1,"div",4),e._UZ(2,"img",5),e.TgZ(3,"div",6)(4,"h5",7),e._uU(5),e.qZA(),e.TgZ(6,"p",8),e._uU(7),e.qZA(),e.TgZ(8,"p",8),e._uU(9),e.qZA(),e.TgZ(10,"h5"),e._uU(11,"Package Includes:"),e.qZA(),e.TgZ(12,"li"),e._uU(13),e.qZA(),e.TgZ(14,"li"),e._uU(15),e.qZA(),e.TgZ(16,"li"),e._uU(17),e.qZA(),e.TgZ(18,"li"),e._uU(19),e.qZA(),e.TgZ(20,"li"),e._uU(21),e.qZA(),e.TgZ(22,"li"),e._uU(23),e.qZA(),e.TgZ(24,"li"),e._uU(25),e.qZA()()()()),2&t){const n=s.$implicit;e.xp6(2),e.Q6J("src",null==n?null:n.files,e.LSH),e.xp6(3),e.Oqu(null==n?null:n.packageName),e.xp6(2),e.Oqu(null==n?null:n.description),e.xp6(2),e.hij("Package Amount :",null==n?null:n.amount,""),e.xp6(4),e.hij("Accommodation: ",null!=n&&n.accomodation?"Included":"Not Included",""),e.xp6(2),e.hij("Food: ",null!=n&&n.food?"Included":"Not Included",""),e.xp6(2),e.hij("Activities: ",null!=n&&n.activities?"Included":"Not Included",""),e.xp6(2),e.hij("Transportation: ",null!=n&&n.transpotation?"Included":"Not Included",""),e.xp6(2),e.hij("Number of activities included: ",null!=n&&n.activities?n.activityCount:"No activities included",""),e.xp6(2),e.hij("Duration of the Package ",null==n?null:n.duration,""),e.xp6(2),e.hij("Guide Name : ",null==n?null:n.guideName,"")}}function q(t,s){if(1&t&&(e.TgZ(0,"ul",4)(1,"li",5)(2,"div",6),e._UZ(3,"img",7),e.qZA(),e.TgZ(4,"div",8)(5,"label"),e._uU(6),e.qZA()(),e.TgZ(7,"div",9)(8,"label"),e._uU(9),e.qZA()(),e.TgZ(10,"div",10)(11,"label"),e._uU(12),e.qZA()(),e.TgZ(13,"div",11)(14,"label"),e._uU(15),e.qZA()()()()),2&t){const n=s.$implicit;e.xp6(3),e.s9C("src",n.files,e.LSH),e.xp6(3),e.Oqu(n.fullname),e.xp6(3),e.Oqu(n.email),e.xp6(3),e.Oqu(n.exp),e.xp6(3),e.Oqu(n.location)}}function T(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"ul",4)(1,"li",5)(2,"div",6),e._UZ(3,"img",7),e.qZA(),e.TgZ(4,"div",8)(5,"label"),e._uU(6),e.qZA()(),e.TgZ(7,"div",9)(8,"label"),e._uU(9),e.qZA()(),e.TgZ(10,"div",10)(11,"label"),e._uU(12),e.qZA()(),e.TgZ(13,"div",11)(14,"label"),e._uU(15),e.qZA()(),e.TgZ(16,"div",12)(17,"label"),e._uU(18),e.qZA()(),e.TgZ(19,"div",13)(20,"button",14),e.NdJ("click",function(){const c=e.CHM(n).$implicit,l=e.oxw();return e.KtG(l.isBlock(c._id))}),e._uU(21,"Block"),e.qZA(),e.TgZ(22,"button",15),e.NdJ("click",function(){const c=e.CHM(n).$implicit,l=e.oxw();return e.KtG(l.isUnblock(c._id))}),e._uU(23,"Unblock"),e.qZA()()()()}if(2&t){const n=s.$implicit;e.xp6(3),e.s9C("src",n.files,e.LSH),e.xp6(3),e.Oqu(n.fullname),e.xp6(3),e.Oqu(n.email),e.xp6(3),e.Oqu(n.exp),e.xp6(3),e.Oqu(n.location),e.xp6(3),e.Oqu(n.isApproved)}}function U(t,s){if(1&t&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.msg,"\n")}}function P(t,s){if(1&t&&(e.TgZ(0,"li",7)(1,"div",8),e._UZ(2,"img",9),e.qZA(),e.TgZ(3,"div",10)(4,"label"),e._uU(5),e.qZA()(),e.TgZ(6,"div",11)(7,"label"),e._uU(8),e.qZA()(),e.TgZ(9,"div",12)(10,"label"),e._uU(11),e.qZA()(),e.TgZ(12,"div",13)(13,"label"),e._uU(14),e.qZA()(),e.TgZ(15,"div",14)(16,"label"),e._uU(17),e.qZA()()()),2&t){const n=s.$implicit;e.xp6(2),e.s9C("src",n.files,e.LSH),e.xp6(3),e.Oqu(n.fullname),e.xp6(3),e.Oqu(n.email),e.xp6(3),e.Oqu(n.exp),e.xp6(3),e.Oqu(n.location),e.xp6(3),e.Oqu(n.blockStatus)}}function M(t,s){if(1&t&&(e.TgZ(0,"section",2)(1,"header")(2,"div",3),e._UZ(3,"i",4),e.qZA(),e.TgZ(4,"div",3)(5,"label"),e._uU(6," Fullname "),e.qZA()(),e.TgZ(7,"div",3)(8,"label"),e._uU(9," email "),e.qZA()(),e.TgZ(10,"div",3)(11,"label"),e._uU(12," Experience"),e.qZA()(),e.TgZ(13,"div",3)(14,"label"),e._uU(15," location "),e.qZA()(),e.TgZ(16,"div",3)(17,"label"),e._uU(18," status "),e.qZA()()(),e.TgZ(19,"ul",5),e.YNc(20,P,18,6,"li",6),e.qZA()()),2&t){const n=e.oxw();e.xp6(20),e.Q6J("ngForOf",n.blockedguides)}}function S(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"ul",4)(1,"li",5)(2,"div",6),e._UZ(3,"img",7),e.qZA(),e.TgZ(4,"div",8)(5,"label"),e._uU(6),e.qZA()(),e.TgZ(7,"div",9)(8,"label"),e._uU(9),e.qZA()(),e.TgZ(10,"div",10)(11,"label"),e._uU(12),e.qZA()(),e.TgZ(13,"div",11)(14,"label"),e._uU(15),e.qZA()(),e.TgZ(16,"div",12)(17,"label"),e._uU(18),e.qZA()(),e.TgZ(19,"div",13)(20,"button",14),e.NdJ("click",function(){const c=e.CHM(n).$implicit,l=e.oxw();return e.KtG(l.isBlock(c._id))}),e._uU(21,"Block"),e.qZA(),e.TgZ(22,"button",15),e.NdJ("click",function(){const c=e.CHM(n).$implicit,l=e.oxw();return e.KtG(l.isUnblock(c._id))}),e._uU(23,"Unblock"),e.qZA()()()()}if(2&t){const n=s.$implicit;e.xp6(3),e.s9C("src",n.files,e.LSH),e.xp6(3),e.Oqu(n.fullname),e.xp6(3),e.Oqu(n.email),e.xp6(3),e.Oqu(n.mobile),e.xp6(3),e.Oqu(n.location),e.xp6(3),e.Oqu(n.isApproved)}}function z(t,s){if(1&t&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.msg," ")}}function j(t,s){if(1&t&&(e.TgZ(0,"li",7)(1,"div",8),e._UZ(2,"img",9),e.qZA(),e.TgZ(3,"div",10)(4,"label"),e._uU(5),e.qZA()(),e.TgZ(6,"div",11)(7,"label"),e._uU(8),e.qZA()(),e.TgZ(9,"div",12)(10,"label"),e._uU(11),e.qZA()(),e.TgZ(12,"div",13)(13,"label"),e._uU(14),e.qZA()(),e.TgZ(15,"div",14)(16,"label"),e._uU(17),e.qZA()()()),2&t){const n=s.$implicit;e.xp6(2),e.s9C("src",n.files,e.LSH),e.xp6(3),e.Oqu(n.fullname),e.xp6(3),e.Oqu(n.email),e.xp6(3),e.Oqu(n.exp),e.xp6(3),e.Oqu(n.location),e.xp6(3),e.Oqu(n.blockStatus)}}function B(t,s){if(1&t&&(e.TgZ(0,"section",2)(1,"header")(2,"div",3),e._UZ(3,"i",4),e.qZA(),e.TgZ(4,"div",3)(5,"label"),e._uU(6," Fullname "),e.qZA()(),e.TgZ(7,"div",3)(8,"label"),e._uU(9," email "),e.qZA()(),e.TgZ(10,"div",3)(11,"label"),e._uU(12," Experience"),e.qZA()(),e.TgZ(13,"div",3)(14,"label"),e._uU(15," location "),e.qZA()(),e.TgZ(16,"div",3)(17,"label"),e._uU(18," status "),e.qZA()()(),e.TgZ(19,"ul",5),e.YNc(20,j,18,6,"li",6),e.qZA()()),2&t){const n=e.oxw();e.xp6(20),e.Q6J("ngForOf",n.blockeduser)}}const G=[{path:"",component:m,children:[{path:"login",component:x.G},{path:"pending",component:b},{path:"pendingrequest",component:Z},{path:"adminpage",component:f},{path:"guidelist",component:C},{path:"packagelist",component:(()=>{class t{constructor(n){this.guideService=n,this.packages=[]}ngOnInit(){this.guideService.guideGetPackage(null).subscribe({next:n=>{console.log(n);for(const i of n.packages)this.packages.push(i),console.log(i.packageName),console.log(i.files)},error:n=>{console.log(n)}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(O.C))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-packageslist"]],decls:3,vars:1,consts:[[1,"container"],[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"card",2,"width","18rem","margin-top","25px"],["alt","Card image cap",1,"card-img-top",2,"width","286px","height","130px",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,k,26,11,"div",2),e.qZA()()),2&i&&(e.xp6(2),e.Q6J("ngForOf",o.packages))},dependencies:[a.sg]})}return t})()},{path:"userlist",component:(()=>{class t{constructor(n){this.admiservice=n}ngOnInit(){this.admiservice.getUsers().subscribe({next:n=>{console.log(n),this.users=n.users},error:n=>{console.log(n)}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(d.l))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-userlist"]],decls:17,vars:1,consts:[[1,"container"],[1,""],[1,"icon","fa","fa-user-o"],["class","task-items",4,"ngFor","ngForOf"],[1,"task-items"],[1,"item"],[1,"user"],["alt","Image 001",1,"owner-img",3,"src"],[1,"fullname"],[1,"email"],[1,"expirence"],[1,"location"]],template:function(i,o){1&i&&(e.TgZ(0,"section",0)(1,"header")(2,"div",1),e._UZ(3,"i",2),e.qZA(),e.TgZ(4,"div",1)(5,"label"),e._uU(6," Fullname "),e.qZA()(),e.TgZ(7,"div",1)(8,"label"),e._uU(9," email "),e.qZA()(),e.TgZ(10,"div",1)(11,"label"),e._uU(12," Experience"),e.qZA()(),e.TgZ(13,"div",1)(14,"label"),e._uU(15," location "),e.qZA()()(),e.YNc(16,q,16,5,"ul",3),e.qZA()),2&i&&(e.xp6(16),e.Q6J("ngForOf",o.users))},dependencies:[a.sg],styles:[".container[_ngcontent-%COMP%]{margin:50px auto 0;width:980px}.owner-img[_ngcontent-%COMP%]{width:40px;height:40px}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1em;font-weight:600;color:#000;padding:20px;box-sizing:border-box;-webkit-user-select:none;user-select:none;text-align:center;margin-left:42px;justify-content:space-between}.text[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap}.item[_ngcontent-%COMP%]{display:flex;align-items:center;margin:20px 0;padding:20px;background:#fff;justify-content:space-between;border-radius:5px;box-shadow:0 0 5px 2px #0000001a;cursor:pointer;transition:box-shadow .3s ease}.task-items[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{box-shadow:0 0 10px 5px #0003}.user[_ngcontent-%COMP%]{width:30px}.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}"]})}return t})()},{path:"blockguide",component:(()=>{class t{constructor(n){this.adminservices=n,this.guides=[]}ngOnInit(){this.adminservices.getGuides().subscribe({next:n=>{console.log(n),this.guides=n.guides,console.log(this.guides)},error:n=>{console.log(n)}})}isBlock(n){console.log(n),this.adminservices.blockGuide(n,"blocked").subscribe({next:i=>{console.log(i)},error:i=>{console.log(i)}})}isUnblock(n){console.log(n),this.adminservices.blockGuide(n,"unblocked").subscribe({next:i=>{console.log(i)},error:i=>{console.log(i)}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(d.l))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-block"]],decls:23,vars:1,consts:[[1,"container"],[1,""],[1,"icon","fa","fa-user-o"],["class","task-items",4,"ngFor","ngForOf"],[1,"task-items"],[1,"item"],[1,"user"],["alt","Image 001",1,"owner-img",3,"src"],[1,"fullname"],[1,"email"],[1,"expirence"],[1,"location"],[1,"status"],[1,"actions"],[1,"accept",3,"click"],[1,"reject",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"section",0)(1,"header")(2,"div",1),e._UZ(3,"i",2),e.qZA(),e.TgZ(4,"div",1)(5,"label"),e._uU(6," Fullname "),e.qZA()(),e.TgZ(7,"div",1)(8,"label"),e._uU(9," email "),e.qZA()(),e.TgZ(10,"div",1)(11,"label"),e._uU(12," Experience"),e.qZA()(),e.TgZ(13,"div",1)(14,"label"),e._uU(15," location "),e.qZA()(),e.TgZ(16,"div",1)(17,"label"),e._uU(18," Status "),e.qZA()(),e.TgZ(19,"div",1)(20,"label"),e._uU(21," Actions "),e.qZA()()(),e.YNc(22,T,24,6,"ul",3),e.qZA()),2&i&&(e.xp6(22),e.Q6J("ngForOf",o.guides))},dependencies:[a.sg],styles:['@import"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";@import"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";body[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;background:#eeeeee}.container[_ngcontent-%COMP%]{margin:50px auto 0;width:980px}.owner-img[_ngcontent-%COMP%]{width:40px;height:40px}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1em;font-weight:600;color:#000;padding:20px;box-sizing:border-box;-webkit-user-select:none;user-select:none;text-align:center;margin-left:42px;justify-content:space-between}.text[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap}.item[_ngcontent-%COMP%]{display:flex;align-items:center;margin:20px 0;padding:20px;background:#fff;justify-content:space-between;border-radius:5px;box-shadow:0 0 5px 2px #0000001a}.user[_ngcontent-%COMP%]{width:30px}.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.actions[_ngcontent-%COMP%]{display:flex;gap:5px}button[_ngcontent-%COMP%]{border:1px solid rgba(27,31,35,.15);border-radius:6px;box-shadow:#1b1f231a 0 1px;box-sizing:border-box;color:#fff;cursor:pointer;font-size:14px;font-weight:600;padding:6px 16px;text-align:center}.accept[_ngcontent-%COMP%]{background-color:green}.reject[_ngcontent-%COMP%], .accept[_ngcontent-%COMP%]{background-color:red}.reject[_ngcontent-%COMP%]{background-color:green}']})}return t})()},{path:"showblockedGuides",component:(()=>{class t{constructor(n){this.adminService=n,this.blockedguides=[]}ngOnInit(){this.adminService.getAllBlockedGuide().subscribe({next:n=>{this.blockedguides=n.blockedguides,console.log(this.blockedguides),0==this.blockedguides.length&&(this.msg=" No Blocked Guides available here")},error:n=>{console.log(n)}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(d.l))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-show-blocked-guides"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[1,""],[1,"icon","fa","fa-user-o"],[1,"task-items"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[1,"user"],["alt","Image 001",1,"owner-img",3,"src"],[1,"fullname"],[1,"email"],[1,"expirence"],[1,"location"],[1,"status"]],template:function(i,o){1&i&&(e.YNc(0,U,2,1,"div",0),e.YNc(1,M,21,1,"section",1)),2&i&&(e.Q6J("ngIf",o.msg),e.xp6(1),e.Q6J("ngIf",o.blockedguides.length>0))},dependencies:[a.sg,a.O5],styles:['@import"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";@import"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";body[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;background:#eeeeee}.container[_ngcontent-%COMP%]{margin:50px auto 0;width:980px}.owner-img[_ngcontent-%COMP%]{width:40px;height:40px}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1em;font-weight:600;color:#000;padding:20px;box-sizing:border-box;-webkit-user-select:none;user-select:none;text-align:center;margin-left:42px;justify-content:space-between}.text[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap}.item[_ngcontent-%COMP%]{display:flex;align-items:center;margin:20px 0;padding:20px;background:#fff;justify-content:space-between;border-radius:5px;box-shadow:0 0 5px 2px #0000001a}.user[_ngcontent-%COMP%]{width:30px}.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.actions[_ngcontent-%COMP%]{display:flex;gap:5px}button[_ngcontent-%COMP%]{border:1px solid rgba(27,31,35,.15);border-radius:6px;box-shadow:#1b1f231a 0 1px;box-sizing:border-box;color:#fff;cursor:pointer;font-size:14px;font-weight:600;padding:6px 16px;text-align:center}.accept[_ngcontent-%COMP%]{background-color:green}.reject[_ngcontent-%COMP%]{background-color:red}']})}return t})()},{path:"blockuser",component:(()=>{class t{constructor(n){this.adminServie=n,this.users=[]}ngOnInit(){this.adminServie.getUsers().subscribe({next:n=>{console.log(n),this.users=n.users},error:n=>{console.log(n)}})}isBlock(n){console.log(n),this.adminServie.blockUser(n,"blocked").subscribe({next:i=>{console.log(i)},error:i=>{console.log(i)}})}isUnblock(n){console.log(n),this.adminServie.blockUser(n,"unblocked").subscribe({next:i=>{console.log(i)},error:i=>{console.log(i)}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(d.l))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-userblock"]],decls:23,vars:1,consts:[[1,"container"],[1,""],[1,"icon","fa","fa-user-o"],["class","task-items",4,"ngFor","ngForOf"],[1,"task-items"],[1,"item"],[1,"user"],["alt","Image 001",1,"owner-img",3,"src"],[1,"fullname"],[1,"email"],[1,"expirence"],[1,"location"],[1,"status"],[1,"actions"],[1,"accept",3,"click"],[1,"reject",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"section",0)(1,"header")(2,"div",1),e._UZ(3,"i",2),e.qZA(),e.TgZ(4,"div",1)(5,"label"),e._uU(6," Fullname "),e.qZA()(),e.TgZ(7,"div",1)(8,"label"),e._uU(9," email "),e.qZA()(),e.TgZ(10,"div",1)(11,"label"),e._uU(12," Experience"),e.qZA()(),e.TgZ(13,"div",1)(14,"label"),e._uU(15," location "),e.qZA()(),e.TgZ(16,"div",1)(17,"label"),e._uU(18," Status "),e.qZA()(),e.TgZ(19,"div",1)(20,"label"),e._uU(21," Actions "),e.qZA()()(),e.YNc(22,S,24,6,"ul",3),e.qZA()),2&i&&(e.xp6(22),e.Q6J("ngForOf",o.users))},dependencies:[a.sg],styles:['@import"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";@import"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";body[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;background:#eeeeee}.container[_ngcontent-%COMP%]{margin:50px auto 0;width:980px}.owner-img[_ngcontent-%COMP%]{width:40px;height:40px}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1em;font-weight:600;color:#000;padding:20px;box-sizing:border-box;-webkit-user-select:none;user-select:none;text-align:center;margin-left:42px;justify-content:space-between}.text[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap}.item[_ngcontent-%COMP%]{display:flex;align-items:center;margin:20px 0;padding:20px;background:#fff;justify-content:space-between;border-radius:5px;box-shadow:0 0 5px 2px #0000001a}.user[_ngcontent-%COMP%]{width:30px}.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.actions[_ngcontent-%COMP%]{display:flex;gap:5px}button[_ngcontent-%COMP%]{border:1px solid rgba(27,31,35,.15);border-radius:6px;box-shadow:#1b1f231a 0 1px;box-sizing:border-box;color:#fff;cursor:pointer;font-size:14px;font-weight:600;padding:6px 16px;text-align:center}.accept[_ngcontent-%COMP%]{background-color:green}.reject[_ngcontent-%COMP%]{background-color:red}']})}return t})()},{path:"showblockeduser",component:(()=>{class t{constructor(n){this.adminService=n,this.blockeduser=[]}ngOnInit(){this.adminService.getAllBlockedUser().subscribe({next:n=>{this.blockeduser=n.blockeduser,console.log(this.blockeduser),0==this.blockeduser.length&&(this.msg=" No Blocked Guides available here")},error:n=>{console.log(n)}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(d.l))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-blocked-list"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[1,""],[1,"icon","fa","fa-user-o"],[1,"task-items"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[1,"user"],["alt","Image 001",1,"owner-img",3,"src"],[1,"fullname"],[1,"email"],[1,"expirence"],[1,"location"],[1,"status"]],template:function(i,o){1&i&&(e.YNc(0,z,2,1,"div",0),e.YNc(1,B,21,1,"section",1)),2&i&&(e.Q6J("ngIf",o.msg),e.xp6(1),e.Q6J("ngIf",o.blockeduser.length>0))},dependencies:[a.sg,a.O5],styles:['@import"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";@import"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";body[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;background:#eeeeee}.container[_ngcontent-%COMP%]{margin:50px auto 0;width:980px}.owner-img[_ngcontent-%COMP%]{width:40px;height:40px}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1em;font-weight:600;color:#000;padding:20px;box-sizing:border-box;-webkit-user-select:none;user-select:none;text-align:center;margin-left:42px;justify-content:space-between}.text[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap}.item[_ngcontent-%COMP%]{display:flex;align-items:center;margin:20px 0;padding:20px;background:#fff;justify-content:space-between;border-radius:5px;box-shadow:0 0 5px 2px #0000001a}.user[_ngcontent-%COMP%]{width:30px}.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.actions[_ngcontent-%COMP%]{display:flex;gap:5px}button[_ngcontent-%COMP%]{border:1px solid rgba(27,31,35,.15);border-radius:6px;box-shadow:#1b1f231a 0 1px;box-sizing:border-box;color:#fff;cursor:pointer;font-size:14px;font-weight:600;padding:6px 16px;text-align:center}.accept[_ngcontent-%COMP%]{background-color:green}.reject[_ngcontent-%COMP%]{background-color:red}']})}return t})()}]}];let N=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[a.ez,g.Bz.forChild(G),g.Bz]})}return t})(),L=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[N,a.ez]})}return t})()}}]);