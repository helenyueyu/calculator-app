(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_helenyu_Desktop_LearningCode_MyReact_calculator_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Users_helenyu_Desktop_LearningCode_MyReact_calculator_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Users_helenyu_Desktop_LearningCode_MyReact_calculator_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_Users_helenyu_Desktop_LearningCode_MyReact_calculator_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_Users_helenyu_Desktop_LearningCode_MyReact_calculator_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(19),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_components_Result__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_components_Keypad__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),App=function(_Component){function App(){var _getPrototypeOf2,_this;Object(_Users_helenyu_Desktop_LearningCode_MyReact_calculator_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_Users_helenyu_Desktop_LearningCode_MyReact_calculator_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(_Users_helenyu_Desktop_LearningCode_MyReact_calculator_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={result:""},_this.onClick=function(key){if("C"===key)_this.setState({result:""});else if("CE"===key)_this.setState({result:_this.state.result.slice(0,-1)});else if("="===key)try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){_this.setState({result:"error"})}else _this.setState({result:_this.state.result+key})},_this.reset=function(){_this.setState({result:""})},_this}return Object(_Users_helenyu_Desktop_LearningCode_MyReact_calculator_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(_Users_helenyu_Desktop_LearningCode_MyReact_calculator_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;document.addEventListener("keypress",function(event){return["1","2","3","4","5","6","7","8","9","0","*","-","+","/"].includes(event.key)?_this2.setState({result:_this2.state.result+event.key}):"Enter"===event.key?_this2.setState({result:(eval(_this2.state.result)||"")+""}):console.log("Not a valid entry.")})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress")}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"invisible"},"Invisible text."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Result__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result,onChange:this.handleChange}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Keypad__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.onClick})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(4),s=_(3),o=_(5),c=_(0),l=_.n(c),u=(_(21),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"result"},l.a.createElement("input",{type:"text",value:this.props.result,className:"input",readOnly:!0}))}}]),t}(c.Component));t.a=u},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(4),s=_(3),o=_(5),c=_(0),l=_.n(c),u=(_(23),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"button"},l.a.createElement("button",{name:"(",onClick:function(t){return e.props.onClick(t.target.name)},className:"key"},"("),l.a.createElement("button",{name:")",onClick:function(t){return e.props.onClick(t.target.name)},className:"key"},")"),l.a.createElement("button",{name:"CE",onClick:function(t){return e.props.onClick(t.target.name)},className:"clear"},"CE"),l.a.createElement("button",{name:"C",onClick:function(t){return e.props.onClick(t.target.name)},className:"clear"},"C"),l.a.createElement("br",null),l.a.createElement("button",{name:"1",onClick:function(t){return e.props.onClick(t.target.name)},className:"num pulse"},"1"),l.a.createElement("button",{name:"2",onClick:function(t){return e.props.onClick(t.target.name)},className:"num"},"2"),l.a.createElement("button",{name:"3",onClick:function(t){return e.props.onClick(t.target.name)},className:"num"},"3"),l.a.createElement("button",{name:"+",onClick:function(t){return e.props.onClick(t.target.name)},className:"att"},"+"),l.a.createElement("br",null),l.a.createElement("button",{name:"4",onClick:function(t){return e.props.onClick(t.target.name)},className:"num"},"4"),l.a.createElement("button",{name:"5",onClick:function(t){return e.props.onClick(t.target.name)},className:"num"},"5"),l.a.createElement("button",{name:"6",onClick:function(t){return e.props.onClick(t.target.name)},className:"num"},"6"),l.a.createElement("button",{name:"-",onClick:function(t){return e.props.onClick(t.target.name)},className:"att"},"-"),l.a.createElement("br",null),l.a.createElement("button",{name:"7",onClick:function(t){return e.props.onClick(t.target.name)},className:"num"},"7"),l.a.createElement("button",{name:"8",onClick:function(t){return e.props.onClick(t.target.name)},className:"num"},"8"),l.a.createElement("button",{name:"9",onClick:function(t){return e.props.onClick(t.target.name)},className:"num"},"9"),l.a.createElement("button",{name:"*",onClick:function(t){return e.props.onClick(t.target.name)},className:"att"},"x"),l.a.createElement("br",null),l.a.createElement("button",{name:".",onClick:function(t){return e.props.onClick(t.target.name)},className:"key"},"."),l.a.createElement("button",{name:"0",onClick:function(t){return e.props.onClick(t.target.name)},className:"num"},"0"),l.a.createElement("button",{name:"=",onClick:function(t){return e.props.onClick(t.target.name)},className:"key"},"="),l.a.createElement("button",{name:"/",onClick:function(t){return e.props.onClick(t.target.name)},className:"att"},"\xf7"),l.a.createElement("br",null))}}]),t}(c.Component));t.a=u},function(e,t,_){e.exports=_(25)},,,,,,function(e,t,_){},,function(e,t,_){},,function(e,t,_){},,function(e,t,_){},,function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),r=_(7),s=_.n(r),o=(_(17),_(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(o.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.9ae64b59.chunk.js.map