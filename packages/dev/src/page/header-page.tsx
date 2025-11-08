import { page, route } from 'coco-mvc';
import { Header1, Header2, Header3 } from 'coco-official-website-kit';

@route("/header")
@page()
class HeaderPage {

  render() {
    return <div className={'flex flex-col gap-2 p-4'}>
      <Header1>一级标题</Header1>
      <Header2>二级标题</Header2>
      <Header3>三级标题</Header3>
    </div>
  }
}

export default HeaderPage;