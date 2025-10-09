import { page, route } from 'coco-mvc';
import Button from '../view/button';

@route("/button")
@page()
class ButtonPage {

  render() {
    return <div className={'flex flex-row gap-2 p-4'}>
      <Button type={'default'}>default</Button>
      <Button type={'primary'}>primary</Button>
      <Button type={'link'}>link</Button>
      <Button type={'primary-link'}>primary link</Button>
      <Button loading>loading</Button>
    </div>
  }
}

export default ButtonPage;