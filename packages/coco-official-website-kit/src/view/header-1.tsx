import {view} from 'coco-mvc';

@view()
class Header1 {
  props: {
    children: string;
  }

  render() {
    return <div className={'text-5xl leading-normal'}>
      {this.props.children}
    </div>
  }
}

export default Header1;
