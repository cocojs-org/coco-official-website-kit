import {view} from 'coco-mvc';

export interface ITableProps {
  columns: {dataIndex: string; title: string;}[];
  datasource: Record<string, any>[];
}

@view()
class Table {
  props: ITableProps

  render() {
    return <table className={'border-2 border-primary w-full'}>
      <thead>
      <tr>
        {this.props.columns.map((column, i) => {
          return <th className={'border border-primary'} key={column.dataIndex} title={'id'} >{column.title}</th>;
        })}
      </tr>
      </thead>
      <tbody>
      {this.props.datasource.map((row, i) => {
        return <tr key={i}>
          {
            this.props.columns.map((column, i) => {
              return <td className={'border border-primary'} key={i}>{row[column.dataIndex]}</td>;
            })
          }
        </tr>
      })}
      </tbody>
    </table>
  }
}

export default Table;