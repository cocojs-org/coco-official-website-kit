import { page, route } from 'coco-mvc';
import { Table } from 'coco-official-website-kit';

@route("/table")
@page()
class TablePage {

  columns = [
    {title: '姓名', dataIndex: 'name'},
    {title: '性别', dataIndex: 'gender'},
    {title: '成绩', dataIndex: 'score'},
  ]

  dataSource = [
    {'name': '张三', 'gender': '男', 'score': 100},
    {'name': '李四', 'gender': '女', 'score': 8},
    {'name': '王五', 'gender': '女', 'score': 68},
    {'name': '赵六', 'gender': '男', 'score': 22},
  ]

  render() {
    return <div>
      <Table columns={this.columns} datasource={this.dataSource} />
    </div>
  }
}

export default TablePage;