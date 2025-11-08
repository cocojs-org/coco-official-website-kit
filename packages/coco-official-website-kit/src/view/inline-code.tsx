import { view, ref } from 'coco-mvc';
import Prism from 'prismjs';
import 'prismjs/themes/prism.min.css'

@view()
class InlineCode {
  props: {
    children: string;
  }

  @ref()
  ref: {current: HTMLDivElement}

  viewDidMount() {
    if (this.ref.current) {
      Prism.highlightElement(this.ref.current);
    }
  }

  render() {
    return <code ref={this.ref} className={`prism-code language-js`}>
      {this.props.children.trim()}
    </code>
  }
}

export default InlineCode;