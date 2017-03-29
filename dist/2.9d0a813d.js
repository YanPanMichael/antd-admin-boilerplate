webpackJsonp([2,5],{210:function(e,t,o){"use strict";o(22),o(274)},274:function(e,t){},627:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _extends2=__webpack_require__(7),_extends3=_interopRequireDefault(_extends2),_typeof2=__webpack_require__(39),_typeof3=_interopRequireDefault(_typeof2),React=__webpack_require__(1),emptyFunction=function(){},currentIEID=0,IEFormGroup=[!0],xhrList=[],currentXHRID=0,PT=React.PropTypes,FileUpload=React.createClass({displayName:"FileUpload",propTypes:{options:PT.shape({baseUrl:PT.string.isRequired,param:PT.oneOfType([PT.object,PT.func]),dataType:PT.string,chooseAndUpload:PT.bool,paramAddToField:PT.oneOfType([PT.object,PT.func]),wrapperDisplay:PT.string,timeout:PT.number,accept:PT.string,multiple:PT.bool,numberLimit:PT.oneOfType([PT.number,PT.func]),fileFieldName:PT.oneOfType([PT.string,PT.func]),withCredentials:PT.bool,requestHeaders:PT.object,tag:PT.string,userAgent:PT.string,disabledIEChoose:PT.oneOfType([PT.bool,PT.func]),_withoutFileUpload:PT.bool,filesToUpload:PT.arrayOf(PT.object),textBeforeFiles:PT.bool,beforeChoose:PT.func,chooseFile:PT.func,beforeUpload:PT.func,doUpload:PT.func,uploading:PT.func,uploadSuccess:PT.func,uploadError:PT.func,uploadFail:PT.func,onabort:PT.func}).isRequired,style:PT.object,className:PT.string},_updateProps:function(e){var t=this;this.isIE=!(this.checkIE()<0||this.checkIE()>=10);var o=e.options;this.baseUrl=o.baseUrl,this.param=o.param,this.chooseAndUpload=o.chooseAndUpload||!1,this.paramAddToField=o.paramAddToField||void 0,this.dataType="json",o.dataType&&"text"==o.dataType.toLowerCase()&&(this.dataType="text"),this.wrapperDisplay=o.wrapperDisplay||"inline-block",this.timeout="number"==typeof o.timeout&&o.timeout>0?o.timeout:0,this.accept=o.accept||"",this.multiple=o.multiple||!1,this.numberLimit=o.numberLimit||!1,this.fileFieldName=o.fileFieldName||!1,this.withCredentials=o.withCredentials||!1,this.requestHeaders=o.requestHeaders||!1,this.beforeChoose=o.beforeChoose||emptyFunction,this.chooseFile=o.chooseFile||emptyFunction,this.beforeUpload=o.beforeUpload||emptyFunction,this.doUpload=o.doUpload||emptyFunction,this.uploading=o.uploading||emptyFunction,this.uploadSuccess=o.uploadSuccess||emptyFunction,this.uploadError=o.uploadError||emptyFunction,this.uploadFail=o.uploadFail||emptyFunction,this.onabort=o.onabort||emptyFunction,this.files=o.files||this.files||!1,this.disabledIEChoose=o.disabledIEChoose||!1,this._withoutFileUpload=o._withoutFileUpload||!1,this.filesToUpload=o.filesToUpload||[],this.textBeforeFiles=o.textBeforeFiles||!1,this.filesToUpload.length&&!this.isIE&&this.filesToUpload.forEach(function(e){t.files=[e],t.commonUpload()});var i=void 0,a=void 0,s=0,n=[],r=[],l=[];this.chooseAndUpload?React.Children.forEach(e.children,function(e){e&&"chooseAndUpload"==e.ref?(i=e,s++):0==s?n.push(e):1==s?r.push(e):""}):React.Children.forEach(e.children,function(e){e&&"chooseBtn"==e.ref?(i=e,s++):e&&"uploadBtn"==e.ref?(a=e,s++):0==s?n.push(e):1==s?r.push(e):l.push(e)}),this.setState({chooseBtn:i,uploadBtn:a,before:n,middle:r,after:l})},commonChooseFile:function(){var e=this.beforeChoose();1!=e&&void 0!=e||this.refs.ajax_upload_file_input.click()},commonChange:function(e){var t=void 0;e.dataTransfer?t=e.dataTransfer.files:e.target?t=e.target.files:"";var o="function"==typeof this.numberLimit?this.numberLimit():this.numberLimit;if(this.multiple&&o&&t.length>o){for(var i={},a=0;a<o;a++)i[a]=t[a];i.length=o,t=i}this.files=t,this.chooseFile(t),this.chooseAndUpload&&this.commonUpload()},commonUpload:function(){var e=this,t=this.files.length&&this.files[0].mill||(new Date).getTime(),o=this.beforeUpload(this.files,t);if(1!=o&&void 0!=o&&"object"!=("undefined"==typeof o?"undefined":(0,_typeof3.default)(o)))return void(this.refs.ajax_upload_file_input.value="");if(this.files){if(!this.baseUrl)throw new Error("baseUrl missing in options");var i={},a=new FormData;this.textBeforeFiles&&(a=this.appendFieldsToFormData(a)),this._withoutFileUpload||!function(){var t=(0,_typeof3.default)(e.fileFieldName);Object.keys(e.files).forEach(function(o){if("length"!=o)if("function"==t){var i=e.files[o],s=e.fileFieldName(i);a.append(s,i)}else if("string"==t){var n=e.files[o];a.append(e.fileFieldName,n)}else{var r=e.files[o];a.append(r.name,r)}})}(),this.textBeforeFiles||(a=this.appendFieldsToFormData(a));var s=this.baseUrl,n="function"==typeof this.param?this.param(this.files):this.param,r="";n&&!function(){var e=[];n._=t,Object.keys(n).forEach(function(t){return e.push(t+"="+n[t])}),r="?"+e.join("&")}();var l=s+r,p=new XMLHttpRequest;p.open("POST",l,!0),p.withCredentials=this.withCredentials;var u=this.requestHeaders;u&&Object.keys(u).forEach(function(e){return p.setRequestHeader(e,u[e])}),this.timeout&&(p.timeout=this.timeout,p.ontimeout=function(){e.uploadError({type:"TIMEOUTERROR",message:"timeout"}),i.isTimeout=!1},i.isTimeout=!1,setTimeout(function(){i.isTimeout=!0},this.timeout)),p.onreadystatechange=function(){try{if(4==p.readyState&&p.status>=200&&p.status<400){var t="json"==e.dataType?JSON.parse(p.responseText):p.responseText;e.uploadSuccess(t)}else if(4==p.readyState){var o="json"==e.dataType?JSON.parse(p.responseText):p.responseText;e.uploadFail(o)}}catch(t){!i.isTimeout&&e.uploadError({type:"FINISHERROR",message:t.message})}},p.onerror=function(){try{var t="json"==e.dataType?JSON.parse(p.responseText):p.responseText;e.uploadError({type:"XHRERROR",message:t})}catch(t){e.uploadError({type:"XHRERROR",message:t.message})}},p.onprogress=p.upload.onprogress=function(o){e.uploading(o,t)},this._withoutFileUpload?p.send(null):p.send(a),xhrList.push(p);var d=xhrList.length-1;currentXHRID=d,p.onabort=function(){return e.onabort(t,d)},this.doUpload(this.files,t,currentXHRID)}},appendFieldsToFormData:function(e){var t="function"==typeof this.paramAddToField?this.paramAddToField():this.paramAddToField;return t&&Object.keys(t).map(function(o){return e.append(o,t[o])}),e},IEBeforeChoose:function(e){var t=this.beforeChoose();1!=t&&void 0!=t&&e.preventDefault()},IEChooseFile:function(e){this.fileName=e.target.value.substring(e.target.value.lastIndexOf("\\")+1),this.chooseFile(this.fileName),this.chooseAndUpload&&this.IEUpload()!==!1&&document.getElementById("ajax_upload_file_form_"+this.IETag+currentIEID).submit(),e.target.blur()},IEUpload:function(e){function t(){clearInterval(m);try{s.uploadSuccess(s.IECallback(s.dataType,_))}catch(e){s.uploadError(e)}finally{var e=document.getElementById("ajax_upload_hidden_input_"+s.IETag+_);e.outerHTML=e.outerHTML}}var o=this,i=(new Date).getTime(),a=this.beforeUpload(this.fileName,i);if(!this.fileName||1!=a&&void 0!=a)return e&&e.preventDefault(),!1;var s=this,n=this.baseUrl,r="function"==typeof this.param?this.param(this.fileName):this.param,l="";if(r){var p=[];r._=i,void 0===r.ie&&(r.ie="true");for(var u in r)void 0!=r[u]&&p.push(u+"="+r[u]);l="?"+p.join("&")}var d=n+l;document.getElementById("ajax_upload_file_form_"+this.IETag+currentIEID).setAttribute("action",d);var f=this.fakeProgress(),c=0,h=0,m=setInterval(function(){c=f(c),o.uploading({loaded:c,total:100},i),++h>=150&&clearInterval(m)},200),_=currentIEID;window.attachEvent?document.getElementById("ajax_upload_file_frame_"+this.IETag+_).attachEvent("onload",t):document.getElementById("ajax_upload_file_frame_"+this.IETag+_).addEventListener("load",t),this.doUpload(this.fileName,i),IEFormGroup[currentIEID]=!1},IECallback:function IECallback(dataType,frameId){IEFormGroup[frameId]=!0;var frame=document.getElementById("ajax_upload_file_frame_"+this.IETag+frameId),resp={},content=frame.contentWindow?frame.contentWindow.document.body:frame.contentDocument.document.body;if(!content)throw new Error("Your browser does not support async upload");try{resp.responseText=content.innerHTML||"null innerHTML",resp.json=JSON?JSON.parse(resp.responseText):eval("("+resp.responseText+")")}catch(e){if(e.message&&e.message.indexOf("Unexpected token")>=0){if(resp.responseText.indexOf("{")>=0){var msg=resp.responseText.substring(resp.responseText.indexOf("{"),resp.responseText.lastIndexOf("}")+1);return JSON?JSON.parse(msg):eval("("+msg+")")}return{type:"FINISHERROR",message:e.message}}throw e}return"json"==dataType?resp.json:resp.responseText},forwardChoose:function(){return!this.isIE&&void this.commonChooseFile()},fowardRemoveFile:function(e){this.files=e(this.files)},filesToUpload:function(e){this.isIE||(this.files=e,this.commonUpload())},abort:function(e){void 0===e?xhrList[currentXHRID].abort():xhrList[e].abort()},checkIE:function(){var e=this.userAgent,t=e.indexOf("MSIE");return t<0?-1:parseFloat(e.substring(t+5,e.indexOf(";",t)))},fakeProgress:function(){var e=6,t=.3,o=98,i=.2;return function(a){var s=a;return s>=o?s:(s+=e,e-=t,e<i&&(e=i),s)}},getUserAgent:function(){var e=this.props.options&&this.props.options.userAgent,t="undefined"!=typeof navigator;if(!t&&!e)throw new Error("`options.userAgent` must be set rendering react-fileuploader in situations when `navigator` is not defined in the global namespace. (on the server, for example)");return t?navigator.userAgent:e},getInitialState:function(){return{chooseBtn:{},uploadBtn:{},before:[],middle:[],after:[]}},componentWillMount:function(){this.userAgent=this.getUserAgent(),this.isIE=!(this.checkIE()<0||this.checkIE()>=10);var e=this.props.options&&this.props.options.tag;this.IETag=e?e+"_":"",this._updateProps(this.props)},componentDidMount:function(){},componentWillReceiveProps:function(e){this._updateProps(e)},render:function(){return this._packRender()},_packRender:function(){var e="";if(this.isIE)e=this._multiIEForm();else{var t={accept:this.accept,multiple:this.multiple};e=React.createElement("div",{className:this.props.className,style:this.props.style},this.state.before,React.createElement("div",{onClick:this.commonChooseFile,style:{overflow:"hidden",postion:"relative",display:this.wrapperDisplay}},this.state.chooseBtn),this.state.middle,React.createElement("div",{onClick:this.commonUpload,style:{overflow:"hidden",postion:"relative",display:this.chooseAndUpload?"none":this.wrapperDisplay}},this.state.uploadBtn),this.state.after,React.createElement("input",(0,_extends3.default)({type:"file",name:"ajax_upload_file_input",ref:"ajax_upload_file_input",style:{display:"none"},onChange:this.commonChange},t)))}return e},_multiIEForm:function(){function e(e,t){if(!IEFormGroup[t]||!o){var a=IEFormGroup[t],s={position:"absolute",left:"-30px",top:0,zIndex:"50",fontSize:"80px",width:"200px",opacity:0,filter:"alpha(opacity=0)"},n={accept:this.accept,disabled:i},r=React.createElement("input",(0,_extends3.default)({type:"file",name:"ajax_upload_hidden_input_"+t,id:"ajax_upload_hidden_input_"+t,ref:"ajax_upload_hidden_input_"+t,onChange:this.IEChooseFile,onClick:this.IEBeforeChoose,style:s},n));t=""+this.IETag+t,e.push(React.createElement("form",{id:"ajax_upload_file_form_"+t,method:"post",target:"ajax_upload_file_frame_"+t,key:"ajax_upload_file_form_"+t,encType:"multipart/form-data",ref:"form_"+t,onSubmit:this.IEUpload,style:{display:a?"block":"none"}},this.state.before,React.createElement("div",{style:{overflow:"hidden",position:"relative",display:"inline-block"}},this.state.chooseBtn,r),this.state.middle,React.createElement("div",{style:{overflow:"hidden",position:"relative",display:this.chooseAndUpload?"none":this.wrapperDisplay}},this.state.uploadBtn,React.createElement("input",{type:"submit",style:{position:"absolute",left:0,top:0,fontSize:"50px",width:"200px",opacity:0}})),this.state.after)),e.push(React.createElement("iframe",{id:"ajax_upload_file_frame_"+t,name:"ajax_upload_file_frame_"+t,key:"ajax_upload_file_frame_"+t,className:"ajax_upload_file_frame",style:{display:"none",width:0,height:0,margin:0,border:0}}))}}for(var t=[],o=!1,i="function"==typeof this.disabledIEChoose?this.disabledIEChoose():this.disabledIEChoose,a=0;a<IEFormGroup.length;a++)e.call(this,t,a),IEFormGroup[a]&&!o&&(o=!0,currentIEID=a),a==IEFormGroup.length-1&&!o&&IEFormGroup.push(!0);return React.createElement("div",{className:this.props.className,style:this.props.style,id:"react-file-uploader"},t)}});module.exports=FileUpload},643:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=(o(210),o(209)),s=i(a),n=o(3),r=i(n),l=o(29),p=i(l),u=o(6),d=i(u),f=o(5),c=i(f),h=o(1),m=i(h),_=o(136),T=i(_),y=o(114),E=(i(y),o(627)),g=i(E),v=function(e){function t(e){(0,r.default)(this,t);var o=(0,d.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={isLoading:!1,fileName:"请选择文件",fileUrl:null,ossFile:null},o}return(0,c.default)(t,e),(0,p.default)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"handleOSSUploadChange",value:function(e){this.setState({ossFile:e})}},{key:"render",value:function(){var e=this,t={baseUrl:"http://eternalsky.me:8122/file/upload",param:{fid:0,type:"千与千寻"},chooseFile:function(t){e.setState({fileName:"string"==typeof t?t:t[0].name,fileUrl:URL.createObjectURL(t[0])})},uploadSuccess:function(e){},beforeUpload:function(){return!1},doUpload:function(){},fileFieldName:function(e){return"file"}};return m.default.createElement(T.default,{title:"upload demo",isLoading:this.state.isLoading},m.default.createElement(s.default,null,m.default.createElement(g.default,{options:t,className:"upload-demo"},m.default.createElement("button",{ref:"chooseBtn"}," ",this.state.fileName),m.default.createElement("button",{ref:"uploadBtn"},"上传"),m.default.createElement("div",{className:"thumb"},m.default.createElement("img",{src:this.state.fileUrl,alt:""})))))}}]),t}(h.Component);t.default=v,e.exports=t.default}});