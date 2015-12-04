var AersHeader = React.createClass({
    render: function() {
        return ( 
            <div className="AersHeader am-g am-g-fixed" >
            <h1 className="am-topbar-brand" > 
            <span> Aers System </span> 
            </h1>
            <button className="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}" >
            <span className="am-sr-only" > 导航切换 </span>
            <span className="am-icon-bars" >
            </span>
            </button> 
            <div className="am-collapse am-topbar-collapse am-cf" id="doc-topbar-collapse" >
            <ul className="am-nav am-nav-pills am-topbar-nav am-fr" >
            <li className="am-active" > <a href = "index.html" > 首页 </a></li >
            <li> <a href="#" > 帮助 </a></li >
            <li> <a href="#" > 关于 </a></li >
            </ul> </div> </div>
        );
    }
});


ReactDOM.render( <AersHeader /> ,
    document.getElementById('aers-header')
);

var AersFooter = React.createClass({
    render: function() {
        return (
            <div className="AersFooter am-g am-g-fixed" >
                <div className="col-md-4 col-md-push-8 am-u-md-4 am-u-md-push-8" >
                    <ul className="amz-social" >
                        <li> 
                            <a href="/about/contact" >
                                <span className="am-icon-qq" ></span>
                            </a >
                        </li>
                        <li>
                            <a title="官方微信" href="#am-wechat" >
                                <span className="am-icon-wechat" > </span>
                            </a > 
                        </li>
                        <li>
                             <a className="new-issue" title="Bug 反馈" target="_blank" href="#" >
                                <span className="am-icon-paper-plane" ></span>
                             </a> 
                         </li>
                     </ul>
                 </div>
                 <div className="col-md-8 col-md-pull-4 am-u-md-8 am-u-md-pull-4" >
                    <ul className="amz-links" >
                        <a className="am-icon-heart" target="_blank" href="#" > 相关介绍 </a> | 
                        <a target="_blank" href="#">相关产品</a> | 
                        <a href="/about/v2.html ">版本：v2.0.1</a>
                    </ul>
                    <p className="amz-cp" > ©2015 JEXTON.All Rights Reserved.Developed with <a className="amz-author"> Jexton </a>.</p>
                    <p className="amz-cp" > Powered By Jexton JEX Team </p> 
                </div>
            </div>
        );
    }
});

ReactDOM.render( < AersFooter / > ,
    document.getElementById('aers-footer')
);


//通用文本框组件,默认：text类型，最小长度0，最大长度25。
//组件支持类型： text 文本字符 | number 数字 | password 密码 
var AersInput = React.createClass({
    getDefaultProps: function() {
        return {
            type:"text",
            minlength:"1",
            maxlength:"25",
            placeholder:""
        };

    },
    getInitialState: function() {
        return {
            value: ''
        };
    },
    handleChange: function(event) {
        this.setState({
            value: $(event.target).val()
        });
    },
    render: function() {
        var dpstyle={
            display: 'none'
        };
        var distate=0;
        var distyle={};
        var ditype='text';
        var errortag =this.state.value;
        var dimin=isNaN(this.props.minlength)==true?1:parseInt(this.props.minlength);
        var dimax=isNaN(this.props.maxlength)==true?25:parseInt(this.props.maxlength);
        //处理输入长度
        if(dimin<1)
            dimin=1;
        if(dimax<1)
            dimax=1;
        if(dimin>99)
            dimin=98;
        if(dimax>99)
            dimax=99;
        if(dimin==dimax){
            errortag = '请输入' + dimin + '位';
            if(this.state.value.length != dimin){
                dpstyle = {
                    display: 'block'
                }
                distyle = {
                    color: 'red'
                }
                distate=1;
            }
        }else{
            if(this.state.value.length < dimin || this.state.value.length > dimax){
                dpstyle = {
                    display: 'block'
                }
                distyle = {
                    color: 'red'
                }
                distate=1;
            }
            errortag = '请输入' + dimin + ' - ' + dimax + '位';
        }
        if(this.state.value.length == 0){
            dpstyle = {
                    display: 'none'
                }
            distyle = {
                color: 'red'
            }
            distate=1;
        }
        switch(this.props.type){
            case 'text':
                errortag += '字符';
                break;
            case 'number':
                errortag += '数字';
                if(isNaN(this.state.value)){
                    dpstyle={
                        display: 'block'
                    }
                    distyle={
                        color:'red'
                    }
                    distate=1;
                }
                break;
            case 'password':
                ditype='password';
                errortag += '密码';
                break;
        }
        //生成提示文本
        return ( 
            <div>
            <input type={ditype} data-sta={distate} style={distyle} placeholder={this.props.placeholder} onChange={this.handleChange} />  
            <span style={dpstyle} className="am-text-sm am-text-warning">{errortag}</span>
            </div>
        );
    }
});

//注册组件
ReactDOM.render( <AersInput type="text" minlength="4" maxlength="4" placeholder="请输入账户"/> ,
    document.getElementById('aers_login_name')
);
ReactDOM.render( <AersInput type="password" minlength="4"  maxlength="16" placeholder="请输入密码"/> ,
    document.getElementById('aers_login_pwd')
);
