import {view} from 'coco-mvc';

@view()
class Header3 {
  props: {
    children: string;
  }

  render() {
    return <div className={'text-xl leading-normal'}>
      {this.props.children}
    </div>
  }
}

export default Header3;
