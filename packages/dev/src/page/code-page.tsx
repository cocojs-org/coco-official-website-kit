import { page, route } from 'coco-mvc';
import { Code, InlineCode } from 'coco-official-website-kit';

@route("/code")
@page()
class CodePage {

  code = `
import { view, reactive } from 'coco-mvc';

@view()
class Button () {
  @reactive()
  num: number = 0;
  
  handleClick = () => {
    this.num += 1;
  } 

  render() {
    return <div>
        <button onClick={this.handleClick}>+1</button>
        {this.num}
    </div>
  }
}
  `

  render() {
    return <div>
      <Code code={this.code}></Code>
      <InlineCode>const i = 22;</InlineCode>
    </div>
  }
}

export default CodePage;