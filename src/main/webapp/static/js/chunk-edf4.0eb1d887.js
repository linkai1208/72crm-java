(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-edf4"],{BCRg:function(e,t,i){"use strict";var l=i("iKCa");i.n(l).a},BpDD:function(e,t,i){"use strict";var l=i("gXL/");i.n(l).a},"Ey+c":function(e,t,i){"use strict";var l=i("hsEA");i.n(l).a},JYMl:function(e,t,i){"use strict";i.r(t);var l=i("rerW"),s=i.n(l),o=i("t3Un");var n={components:{XhUserCell:i("8GhS").p},watch:{selectRoleList:function(e){this.selectRoles=e},selectUserList:function(e){this.selectUsers=e},dialogVisible:function(e){e&&this.role&&(this.selectRoles=[this.role.id])}},data:function(){return{selectUsers:[],selectRoles:[]}},props:{dialogTitle:String,dialogVisible:Boolean,roleList:Array,selectRoleList:Array,selectUserList:Array},mounted:function(){},methods:{handleClose:function(){this.$emit("handleClose")},employeesDetermine:function(){var e=this;0==this.selectUsers.length&&this.$message.error("请选择员工"),function(e){return Object(o.a)({url:"system/role/relatedUser",method:"post",data:e})}({userIds:this.selectUsers.map(function(e){return e.userId}).join(","),roleIds:this.selectRoles.join(",")}).then(function(t){e.$message.success("操作成功"),e.$emit("save")}).catch(function(e){})},changeCheckout:function(e){this.selectUsers=e.value},selectDelect:function(e,t){this.$refs.xhuser.cancelCheckItem(e),this.selectUsers.splice(t,1)}}},a=(i("BpDD"),i("ZrdR")),r=Object(a.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"new-dialog"},[i("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"700px","close-on-click-modal":!1,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",{staticClass:"label-input"},[i("label",{staticClass:"label-title"},[e._v("选择员工")]),e._v(" "),i("xh-user-cell",{attrs:{radio:!1,value:e.selectUsers},on:{"value-change":e.changeCheckout}})],1),e._v(" "),i("label",{staticClass:"label-title"},[e._v("员工角色配置")]),e._v(" "),i("div",{staticClass:"role-allocation"},e._l(e.roleList,function(t,l){return i("div",{key:l,staticClass:"role-label-checkout"},[i("label",[e._v(e._s(t.name))]),e._v(" "),i("el-checkbox-group",{model:{value:e.selectRoles,callback:function(t){e.selectRoles=t},expression:"selectRoles"}},e._l(t.list,function(t,l){return i("el-checkbox",{key:l,attrs:{label:t.id}},[e._v("\n            "+e._s(t.title)+"\n          ")])}))],1)})),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.employeesDetermine}},[e._v("确 定")]),e._v(" "),i("el-button",{on:{click:e.handleClose}},[e._v("取 消")])],1)])],1)},[],!1,null,"16ff1034",null);r.options.__file="newDialog.vue";var c=r.exports,d=i("KTTK"),u={name:"reminder",components:{},computed:{},data:function(){return{}},props:{content:{type:String,default:"内容"},fontSize:{type:String,default:"13"}},mounted:function(){},methods:{},destroyed:function(){}},h=(i("BCRg"),Object(a.a)(u,function(){var e=this.$createElement,t=this._self._c||e;return t("flexbox",{staticClass:"reminder-wrapper"},[t("flexbox",{staticClass:"reminder-body",attrs:{align:"stretch"}},[t("i",{staticClass:"wukong wukong-reminder reminder-icon"}),this._v(" "),t("div",{staticClass:"reminder-content",style:{"font-size":this.fontSize+"px"}},[this._v("\n      "+this._s(this.content)+"\n    ")])])],1)},[],!1,null,"13ac4df7",null));h.options.__file="reminder.vue";var v={components:{NewDialog:c,Reminder:h.exports},data:function(){return{activeIndex:"1",tableData:[],tableList:[{label:"姓名",field:"realname"},{label:"部门",field:"deptName"},{label:"职位",field:"post"},{label:"角色",field:"roleName"}],newRoleVisible:!1,role:{},roleList:[],tableHeight:document.documentElement.clientHeight-285,jurisdictionIndex:"crm",muneList:[],treeData:[],showTreeData:[],defaultProps:{children:"childMenu",label:"menuName"},radioModel:2,dialogTitle:"",newEmployeeVisible:!1,newDialogSelectUsers:[],newDialogSelectRoles:[],roleActive:null,roleRulesEdit:[],dropdownHandleRole:null,roleTitle:"",navLoading:!1,jurisdictionLoading:!1,menuLoading:!1}},computed:{},mounted:function(){var e=this;window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-285},this.getRulesList()},methods:{getRulesList:function(){var e=this;(function(e){return Object(o.a)({url:"system/menu/getAllMenuList",method:"post",data:e})})({type:"tree"}).then(function(t){for(var i=[],l={},s=0;s<t.data.length;s++)i.push({label:t.data[s].menuName,index:s,realm:t.data[s].realm}),l[t.data[s].realm]=t.data[s];e.treeData=l,e.muneList=i,e.showTreeData=[e.treeData[e.jurisdictionIndex]],e.getRoleList()})},getRoleList:function(){var e=this;this.navLoading=!0,function(e){return Object(o.a)({url:"system/role/getAllRoleList",method:"post",data:e})}().then(function(t){e.roleList=t.data;var i=!1;if(e.roleActive)for(var l=0;l<e.roleList.length;l++)for(var o=e.roleList[l],n=0;n<o.list.length;n++){var a=o.list[n];if(a.id===e.roleActive.id){e.roleActive=a,e.getRoleRulesInfo(a),i=!0;break}}if(!i){var r=!0,c=!1,d=void 0;try{for(var u,h=s()(e.roleList);!(r=(u=h.next()).done);r=!0){var v=u.value;if(0!=v.list.length){e.roleActive=v.list[0],e.getRoleRulesInfo(e.roleActive);break}}}catch(e){c=!0,d=e}finally{try{!r&&h.return&&h.return()}finally{if(c)throw d}}}e.getUserListWithRole(e.roleActive),e.getUserRulesWithRole(e.roleActive),e.navLoading=!1}).catch(function(t){e.navLoading=!1})},handleSelect:function(e,t){this.activeIndex=e},addEmployees:function(){this.newDialogSelectUsers=[],this.newDialogSelectRoles=[this.roleActive.id],this.dialogTitle="添加员工",this.newEmployeeVisible=!0},employeesSave:function(e){this.newEmployeeVisible=!1,this.getUserListWithRole(this.roleActive),this.getUserRulesWithRole(this.roleActive)},delectBtn:function(e){var t=this;this.$confirm("此操作将永久删除是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.menuLoading=!0,function(e){return Object(o.a)({url:"system/role/unbindingUser",method:"post",data:e})}({userId:e.userId,roleId:t.roleActive.id}).then(function(e){t.menuLoading=!0,t.getUserListWithRole(t.roleActive),t.$message.success("删除成功")})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},editBtn:function(e){this.newDialogSelectUsers=[e],this.newDialogSelectRoles=e.roleId.split(",").map(function(e){return+e}),this.dialogTitle="编辑员工",this.newEmployeeVisible=!0},jurisdictionSelect:function(e){var t=this;this.roleRulesEdit[this.jurisdictionIndex]=this.$refs.tree.getCheckedKeys(),this.roleRulesEdit[this.jurisdictionIndex+"_upload"]=this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys()),this.jurisdictionIndex=e,this.showTreeData=[this.treeData[this.jurisdictionIndex]],this.$nextTick(function(){t.$refs.tree&&t.$refs.tree.setCheckedKeys(t.roleRulesEdit[t.jurisdictionIndex])})},managerGroupReminderContent:function(e){return 1==e?"超级管理员不可被任何管理员删除，默认系统所有权限，也可添加其他超级管理员":2==e?"系统设置管理员拥有整个系统的“系统设置”权限":3==e?"员工与角色权限管理的管理权限，可管理公司的组织结构和员工账号的增加、停用，可创建角色并为员工分配角色授权":4==e?"审批管理员可配置、管理所有审批流程":5==e?"办公管理员可以对“办公”的所有设置进行管理":6==e?"客户管理管理员可以对“客户管理”的所有设置进行管理":7==e?"公告管理员有新建、删除、结束公告的操作":""},newRoleClose:function(){this.newRoleVisible=!1},newRoleBtn:function(){this.roleTitle="新建角色",this.newRoleVisible=!0,this.role={}},roleDropdownClick:function(e){this.dropdownHandleRole=e},roleHandleClick:function(e){"edit"==e?this.roleEditBtn(this.dropdownHandleRole):"copy"==e?this.ticketsBtn(this.dropdownHandleRole):"delete"==e&&this.roleDelect(this.dropdownHandleRole)},roleEditBtn:function(e){this.roleTitle="编辑角色",this.role={title:e.title,pid:e.pid,id:e.id},this.newRoleVisible=!0},ticketsBtn:function(e){var t=this;this.$confirm("确定此操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(function(e){return Object(o.a)({url:"system/role/copy",method:"post",data:e})})({roleId:e.id}).then(function(e){t.$message.success("复制成功"),t.getRoleList()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},roleDelect:function(e){var t=this;this.$confirm("此操作将永久删除是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(function(e){return Object(o.a)({url:"system/role/delete",method:"post",data:e})})({roleId:e.id}).then(function(e){t.getRoleList(),t.$message.success("删除成功"),t.roleList.length>0&&t.roleList[0].list.length>0&&(t.roleActive=t.roleList[0].list[0],t.getRoleRulesInfo(t.roleActive))}).catch(function(){})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},newRoleSubmit:function(){var e=this;this.role.title?this.role.pid||0==this.role.pid?"新建角色"==this.roleTitle?function(e){return Object(o.a)({url:"system/role/add",method:"post",data:e})}({roleName:this.role.title,roleType:this.role.pid}).then(function(t){e.getRoleList(),e.$message.success("添加成功"),e.newRoleClose()}):function(e){return Object(o.a)({url:"system/role/update",method:"post",data:e})}({roleName:this.role.title,roleType:this.role.pid,roleId:this.role.id}).then(function(t){e.getRoleList(),e.$message.success("编辑成功"),e.newRoleClose()}):this.$message.error("角色类型不能为空"):this.$message.error("角色名称不能为空")},roleListClick:function(e){1==e.pid&&(this.activeIndex="1"),this.roleActive=e,this.getRoleRulesInfo(e),this.getUserListWithRole(this.roleActive),this.getUserRulesWithRole(this.roleActive)},getRoleRulesInfo:function(e){this.roleRulesEdit.crm=this.getUserModuleRules(e.rules.crm,"crm"),this.roleRulesEdit.crm_upload=e.rules.crm?e.rules.crm:[],this.roleRulesEdit.bi=this.getUserModuleRules(e.rules.bi,"bi"),this.roleRulesEdit.bi_upload=e.rules.bi?e.rules.bi:[]},getUserListWithRole:function(e){var t=this;this.menuLoading=!0,Object(d.i)({roleId:e.id,pageType:0}).then(function(e){t.tableData=e.data,t.menuLoading=!1}).catch(function(e){t.menuLoading=!1})},getUserRulesWithRole:function(e){var t=this;this.$nextTick(function(){t.$refs.tree&&t.$refs.tree.setCheckedKeys(t.roleRulesEdit[t.jurisdictionIndex])}),e.type?this.radioModel=e.type:this.radioModel=""},getUserModuleRules:function(e,t){e||(e=[]);for(var i=this.treeData[t],l=!1,s=this.copyItem(e),o=0;o<i.childMenu.length;o++)for(var n=i.childMenu[o],a=0;a<e.length;a++){for(var r=e[a],c=[],d=0;d<n.childMenu.length;d++){var u=n.childMenu[d];u.id==r&&c.push(u)}c.length!=n.childMenu.length&&(l=!0,this.removeItem(s,n.id))}l&&this.removeItem(s,i.id);for(var h=[],v=0;v<s.length;v++){var m=s[v];m&&h.push(parseInt(m))}return h},copyItem:function(e){for(var t=[],i=0;i<e.length;i++)t.push(e[i]);return t},removeItem:function(e,t){for(var i=-1,l=0;l<e.length;l++)if(t==e[l]){i=l;break}i>0&&e.splice(i,1)},containItem:function(e,t){for(var i=0;i<e.length;i++)if(t==e[i])return!0;return!1},jurisdictionSubmit:function(){var e=this;this.roleRulesEdit[this.jurisdictionIndex]=this.$refs.tree.getCheckedKeys(),this.roleRulesEdit[this.jurisdictionIndex+"_upload"]=this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys()),this.jurisdictionLoading=!0,function(e){return Object(o.a)({url:"system/role/updateRoleMenu",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}({rules:this.roleRulesEdit.crm.concat(this.roleRulesEdit.bi),type:this.radioModel,id:this.roleActive.id,title:this.roleActive.title}).then(function(t){e.getRoleList(),e.$message.success("编辑成功"),e.jurisdictionLoading=!1}).catch(function(){e.jurisdictionLoading=!1})}}},m=(i("Ey+c"),Object(a.a)(v,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"role-authorization"},[i("p",{staticClass:"title"},[e._v(" 角色权限控制 ")]),e._v(" "),i("div",{staticClass:"role-box"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.navLoading,expression:"navLoading"}],staticClass:"nav"},[i("div",{staticClass:"nav-new-btn"},[i("el-button",{attrs:{size:"medium"},on:{click:e.newRoleBtn}},[e._v(" 新建角色 ")])],1),e._v(" "),i("div",{staticClass:"role-nav-box"},e._l(e.roleList,function(t,l){return i("div",{key:l,staticClass:"role-list"},[i("div",{staticClass:"item-label"},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),e._l(t.list,function(l,s){return t.list?i("div",{key:s,staticClass:"item-list",class:{"item-list-hover":l.id==e.roleActive.id},on:{click:function(t){e.roleListClick(l)}}},[e._v("\n            "+e._s(l.title)+"\n            "),1!=t.pid?i("div",{staticClass:"icon-close"},[i("el-dropdown",{attrs:{trigger:"click"},on:{command:e.roleHandleClick}},[i("i",{staticClass:"el-icon-arrow-down",on:{click:function(t){e.roleDropdownClick(l)}}}),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"copy"}},[e._v("复制")]),e._v(" "),i("el-dropdown-item",{attrs:{command:"edit"}},[e._v("编辑")]),e._v(" "),i("el-dropdown-item",{attrs:{command:"delete"}},[e._v("删除")])],1)],1)],1):e._e()]):e._e()})],2)}))]),e._v(" "),i("el-dialog",{attrs:{title:e.roleTitle,visible:e.newRoleVisible,width:"30%","before-close":e.newRoleClose},on:{"update:visible":function(t){e.newRoleVisible=t}}},[i("label",{staticClass:"label-title"},[e._v("角色名称")]),e._v(" "),i("el-input",{staticClass:"input-role",model:{value:e.role.title,callback:function(t){e.$set(e.role,"title",t)},expression:"role.title"}}),e._v(" "),i("label",{staticClass:"label-title"},[e._v("角色类型")]),e._v(" "),i("el-select",{staticClass:"input-role",attrs:{placeholder:"请选择"},model:{value:e.role.pid,callback:function(t){e.$set(e.role,"pid",t)},expression:"role.pid"}},e._l(e.roleList,function(t){return 1!=t.pid?i("el-option",{key:t.pid,attrs:{label:t.name,value:t.pid}}):e._e()})),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.newRoleSubmit}},[e._v("确 定")]),e._v(" "),i("el-button",{on:{click:e.newRoleClose}},[e._v("取 消")])],1)],1),e._v(" "),i("div",{staticClass:"content-box"},[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[i("el-menu-item",{attrs:{index:"1"}},[e._v("角色员工")]),e._v(" "),!e.roleActive||1==e.roleActive.pid&&0!=e.roleActive.pid?e._e():i("el-menu-item",{attrs:{index:"2"}},[e._v("角色权限")])],1),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.menuLoading,expression:"menuLoading"},{name:"show",rawName:"v-show",value:"1"==e.activeIndex,expression:"activeIndex == '1'"}],staticClass:"content-table"},[i("flexbox",{staticClass:"content-table-header"},[i("div",{staticClass:"content-table-header-reminder"},[this.roleActive&&1==this.roleActive.pid?i("reminder",{attrs:{content:e.managerGroupReminderContent(this.roleActive.id)}}):e._e()],1),e._v(" "),i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.addEmployees}},[e._v(" 关联员工 ")])],1),e._v(" "),i("el-table",{attrs:{data:e.tableData,height:e.tableHeight}},[e._l(e.tableList,function(t,l){return i("el-table-column",{key:l,attrs:{prop:t.field,"show-overflow-tooltip":"",label:t.label},scopedSlots:e._u([{key:"header",fn:function(t){return[i("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}),e._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"el-icon-delete content-table-span",on:{click:function(i){e.delectBtn(t.row)}}})]}}])})],2)],1),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.jurisdictionLoading,expression:"jurisdictionLoading"},{name:"show",rawName:"v-show",value:"2"==e.activeIndex,expression:"activeIndex == '2'"}],staticClass:"jurisdiction-box"},[i("div",{staticStyle:{position:"relative"}},[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.jurisdictionIndex,mode:"horizontal"},on:{select:e.jurisdictionSelect}},e._l(e.muneList,function(t,l){return i("el-menu-item",{key:t.realm,attrs:{index:t.realm}},[e._v(e._s(t.label))])})),e._v(" "),i("el-button",{staticClass:"jurisdiction-edit",attrs:{size:"medium",type:"primary"},on:{click:e.jurisdictionSubmit}},[e._v(" 保 存 ")])],1),e._v(" "),i("div",{staticClass:"jurisdiction-content"},[i("div",{staticClass:"content-left"},[i("p",{staticClass:"jurisdiction-title"},[e._v("功能权限管理")]),e._v(" "),i("div",{staticClass:"jurisdiction-content-checkbox"},[i("el-tree",{ref:"tree",attrs:{data:e.showTreeData,"show-checkbox":"","node-key":"menuId",indent:0,"empty-text":"","default-expand-all":"","expand-on-click-node":!1,props:e.defaultProps}})],1)]),e._v(" "),i("div",{staticClass:"content-right"},[i("p",{staticClass:"jurisdiction-title"},[e._v("数据权限")]),e._v(" "),i("div",{staticClass:"data-radio"},[i("el-radio-group",{model:{value:e.radioModel,callback:function(t){e.radioModel=t},expression:"radioModel"}},[i("el-radio",{attrs:{label:1}},[e._v("本人")]),e._v(" "),i("el-radio",{attrs:{label:2}},[e._v("本人及下属")]),e._v(" "),i("el-radio",{attrs:{label:3}},[e._v("本部门")]),e._v(" "),i("el-radio",{attrs:{label:4}},[e._v("本部门及下属部门")]),e._v(" "),i("el-radio",{attrs:{label:5}},[e._v("全部")])],1)],1)])])])],1)],1),e._v(" "),i("new-dialog",{attrs:{dialogVisible:e.newEmployeeVisible,roleList:e.roleList,selectRoleList:e.newDialogSelectRoles,selectUserList:e.newDialogSelectUsers,dialogTitle:e.dialogTitle},on:{handleClose:function(t){e.newEmployeeVisible=!1},save:e.employeesSave}})],1)},[],!1,null,"e3d17ea4",null));m.options.__file="RoleAuthorization.vue";t.default=m.exports},"gXL/":function(e,t,i){},hsEA:function(e,t,i){},iKCa:function(e,t,i){}}]);