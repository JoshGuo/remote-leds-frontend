(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),l=n.n(o),i=(n(37),n(7)),c=n(8),s=n(10),u=n(9),m=(n(38),n(3)),d=n(17),h=n.n(d),p=(n(100),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).formSubmission=function(e){0===e?r.props.sendFormCallback(r.props.activeForm,""===r.name.current.value?"Anon":r.name.current.value):1===e&&r.props.sendFormCallback(r.props.activeForm,""===r.name.current.value?"Anon":r.name.current.value,r.color.current.value.toUpperCase())},r.renderForm=function(){switch(r.props.activeForm){case-3:return r.renderCompletedForm();case-2:return a.a.createElement("p",null);case-1:return r.renderGenericForm();case 0:return r.renderColorPickerForm();case 1:return r.renderGenericForm();case 2:return r.renderColorPickerForm();default:return a.a.createElement("p",null,"There has been an error")}},r.descriptions=["Turns off the lights","Sets the lights to the specified color","Sets the lights to a rainbow fade","Sets the lights to flash the specified color"],r.name=a.a.createRef(),r.color=a.a.createRef(),r}return Object(c.a)(n,[{key:"renderGenericForm",value:function(){var e=this,t=this.props.activeForm+1;return a.a.createElement("div",{className:"FormContents"},a.a.createElement(m.Row,null,a.a.createElement("h6",null,this.descriptions[t])),a.a.createElement(m.Row,null,"Name: ",a.a.createElement("input",{style:{margin:"0 1rem",width:"25%",color:"white"},ref:this.name,type:"text",placeholder:"Anonymous",defaultValue:""})),a.a.createElement(m.Row,null,a.a.createElement(m.Button,{style:{backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px"},waves:"green",onClick:function(){return e.formSubmission(0)}},"Submit")))}},{key:"renderColorPickerForm",value:function(){var e=this,t=this.props.activeForm+1;return a.a.createElement("div",{className:"FormContents"},a.a.createElement(m.Row,null,a.a.createElement("h6",null,this.descriptions[t])),a.a.createElement(m.Row,null,"Name: ",a.a.createElement("input",{style:{margin:"0 1rem",width:"25%",color:"white"},ref:this.name,type:"text",placeholder:"Anonymous",defaultValue:""})),a.a.createElement(m.Row,null,"Color: ",a.a.createElement("input",{style:{margin:"0 1rem"},ref:this.color,type:"color",defaultValue:"#FFFFFF"})),a.a.createElement(m.Row,null,a.a.createElement(m.Button,{style:{backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px"},waves:"green",onClick:function(){return e.formSubmission(1)}},"Submit")))}},{key:"renderCompletedForm",value:function(){var e=this;return a.a.createElement("div",{className:"FormContents"},a.a.createElement(m.Row,null,a.a.createElement("h5",null,"Form submitted!")),a.a.createElement(m.Row,null,a.a.createElement(m.Button,{style:{backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px"},waves:"green",onClick:function(){return e.props.changeFormCallback(-2)}},"OK")))}},{key:"render",value:function(){return this.props.isLoading?a.a.createElement("div",null,"Sending..."):this.renderForm()}}]),n}(a.a.Component)),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).changeForm=function(e){r.state.isLoading||r.setState({activeForm:e})},r.sendForm=function(e,t,n){r.setState({isLoading:!0}),n?h.a.post(r.apiDomain+"/enqueue/",{mode:e,name:t,color:n}).then((function(){return r.setState({isLoading:!1,activeForm:-3})})):h.a.post(r.apiDomain+"/enqueue/",{mode:e,name:t}).then((function(){return r.setState({isLoading:!1,activeForm:-3})}))},r.state={activeForm:-2,isLoading:!1},r.apiDomain="https://remote-leds.herokuapp.com",r}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t={color:"lightblue",width:"100%",height:"50px",backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"3px",borderRadius:"5px",fontSize:"16pt"},n={color:"white",width:"80%",height:"50px",backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px",borderRadius:"5px",fontSize:"14pt"};return a.a.createElement(m.Container,null,a.a.createElement(m.Row,null,a.a.createElement(m.Col,{s:3},a.a.createElement(m.Button,{style:-1===this.state.activeForm?t:n,waves:"light",onClick:function(){return e.changeForm(-1)}},"Turn Off")),a.a.createElement(m.Col,{s:3},a.a.createElement(m.Button,{style:0===this.state.activeForm?t:n,waves:"light",onClick:function(){return e.changeForm(0)}},"Set Color")),a.a.createElement(m.Col,{s:3},a.a.createElement(m.Button,{style:1===this.state.activeForm?t:n,waves:"light",onClick:function(){return e.changeForm(1)}},"Fade")),a.a.createElement(m.Col,{s:3},a.a.createElement(m.Button,{style:2===this.state.activeForm?t:n,waves:"light",onClick:function(){return e.changeForm(2)}},"Flash"))),a.a.createElement(p,{activeForm:this.state.activeForm,changeFormCallback:this.changeForm,sendFormCallback:this.sendForm,isLoading:this.state.isLoading}))}}]),n}(a.a.Component),b=(n(101),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"Footer"},"Made by ",a.a.createElement("a",{href:"https://github.com/JoshGuo"},"Joshua Guo")," | Please try not to break this <3")}}]),n}(a.a.Component)),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"Home"},a.a.createElement(m.Container,null,a.a.createElement("div",{className:"Header"},a.a.createElement("div",{style:{display:"inline-block"}},"Change my LEDs :>")),a.a.createElement("p",{style:{fontSize:"15pt"}},"Welcome!",a.a.createElement("br",null),"This has been designed with desktop in mind, but should at least be functional with mobile. Enjoy!"),a.a.createElement(f,null)),a.a.createElement(b,null))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){e.exports=n(102)},37:function(e,t,n){},38:function(e,t,n){}},[[32,1,2]]]);
//# sourceMappingURL=main.19148caa.chunk.js.map