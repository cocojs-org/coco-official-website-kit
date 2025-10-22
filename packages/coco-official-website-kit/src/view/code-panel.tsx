import {view, reactive} from 'coco-mvc';
import Code from './code';
import ButtonGroup from "./button-group";

@view()
class CodePanel {
  props: {
    tabs: {name: string, code: string}[];
  }

  tabNames() {
    return this.props.tabs.map((tab) => tab.name);
  }

  @reactive()
  activeIdx: number = 0;

  clickTab = (idx: number) => {
    this.activeIdx = idx;
  }

  render() {
    return <div>
      <ButtonGroup btns={this.tabNames()} onClick={this.clickTab} />
      <Code code={this.props.tabs[this.activeIdx].code}></Code>
    </div>
  }
}

export default CodePanel;