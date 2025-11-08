import { view, ref } from 'coco-mvc';
import Prism from 'prismjs';
import 'prismjs/themes/prism.min.css'

@view()
class Code {
  props: {
    code?: string;
  }

  @ref()
  ref: {current: HTMLDivElement}

  viewDidMount() {
    if (this.ref.current) {
      Prism.highlightElement(this.ref.current);
    }
  }

  viewDidUpdate() {
    if (this.ref.current) {
      Prism.highlightElement(this.ref.current);
    }
  }

  render() {
    return <pre>
      <code ref={this.ref} className={`prism-code language-js`}>
        {this.props.code?.trim()}
      </code>
    </pre>
  }
}

export default Code;