import { page, route } from 'coco-mvc';
import { CodePanel } from 'coco-official-website-kit';

@route("/code-panel")
@page()
class CodePanelPage {

  codes = [
    {
      name: "视图层",
      code: `
@view()  
class Button () {
  
  @autowired()
  loginControler: LoginController;
  
  @bind()
  clickLogin() {
    // 调用控制层登录接口，不关心具体实现
    const success = this.loginControler.login();
    if (success) {
      history.pushState({}, '', '/index');
    } else {
      alert("登录失败")
    }
  }
  
  render() {
    return <button onClick={this.clickLogin}>登录</button>
  }
}
      `,
    },
    {
      name: "控制层",
      code: `
@controller()  
class LoginController {
  @autowired()
  loginService: LoginService;

  @autowired()
  localStorage: LocalStorage;
  
  login() {
    try {
      // 处理多个服务层的逻辑，但不关心具体实现
      const { token } = this.loginService.login();
      this.localStorage.set('token', token);
      return true;
    } catch (e) {
      return false
    }
  }
}
      `,
    },
    {
      name: "服务层",
      code: `
@service()  
class LoginService {
  login() {
    return axios.post('/login')
  }
}
      `,
    },
  ]

  render() {
    return <div>
      <CodePanel tabs={this.codes}></CodePanel>
    </div>
  }
}

export default CodePanelPage;