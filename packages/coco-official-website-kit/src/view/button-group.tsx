import {reactive, view} from 'coco-mvc';
import Button from "./button";

@view()
class ButtonGroup {
  props: {
    btns: string[];
    onClick?: (idx: number) => void;
  }

  @reactive()
  activeIdx: number = 0;

  clickBtn = (idx: number) => {
    this.activeIdx = idx;
    this.props.onClick?.(idx);
  }

  render() {
    return <div className={'flex flex-row'}>
      {this.props.btns.map((btn, i) => {
        return <Button onClick={() => this.clickBtn(i)} type={`${this.activeIdx === i ? 'primary-link': 'link'}`}>{btn}</Button>
      })}
    </div>
  }
}

export default ButtonGroup;