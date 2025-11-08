import {view} from 'coco-mvc';

@view()
class Header2 {
  props: {
    children: string;
  }

  render() {
    return <div className={'text-3xl leading-normal'}>
      {this.props.children}
    </div>
  }
}

export default Header2;
