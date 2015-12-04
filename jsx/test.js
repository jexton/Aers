

var element = <HelloMessage/>;
React.render(element, document.getElementById('testdi'));

/*

var AersLogin = React.createClass({
    getInitialState: function() {
        return {
            nameValue: "",
            passwdValue:"",
            btnSubmit:"提交"
        };
    },
    handleNameChange: function(event) {
        this.setState({nameValue:$(event.target).val()});
    },
    handlePasswdChange: function(event) {
        this.setState({passwdValue:$(event.target).val()});
    },
    handleBtnClick: function(event) {
        this.setState({btnSubmit:$(React.findDOMNode(this.refs.asname)).val()});
        
    },
    render: function() {
        var loginstate = true;
        var dsname={
            display: 'none'
        };
        var dspwd={
            display: 'none'
        };
        var values = {};
        if(isNaN(this.state.nameValue)){
            values = {
                color:'red'
            }
            dsname={
                display: 'block'
            }
            loginstate = false;
        };
        if(this.state.nameValue.length !=4){
            values = {
                color:'red'
            }
            dsname={
                display: 'block'
            }
            loginstate = false;
        };
        if(this.state.passwdValue.length <6){
            dspwd={
                display: 'block'
            }
            loginstate = false;
        };
         if(this.state.nameValue.length ==0){
            dsname={
                display: 'none'
            }
            loginstate = false;
        };
        if(this.state.passwdValue.length ==0){
            dspwd={
                display: 'none'
            }
            loginstate = false;
        };
        return ( 
            < div >
            <input type= "text" placeholder= "请输入登录名称" ref="asname" style={values} data-ref="asname"  onChange={this.handleNameChange}/> 
            <span style={dsname} className="am-text-sm am-text-warning">请输入您的4位字数字账号</span>
            <br></br>
            <input type= "password" placeholder= "请输入登录密码" onChange={this.handlePasswdChange}/> 
            <span style={dspwd} className="am-text-sm am-text-warning">请输入您的6位密码</span>
            <br></br>
            <button type="button" className="am-btn  am-btn-block" onClick={this.handleBtnClick}>{this.state.btnSubmit}</button>
           < /div >
        );
    }
});
ReactDOM.render( < AersLogin /> ,
    document.getElementById('aers-login')
);

*/