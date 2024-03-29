import { Table } from 'antd';
import { clsxm } from '@/common/helpers';
export default function TableComponent({data, columns, className}) {
    return (
			<div className={clsxm(className)}>
				<Table columns={columns} dataSource={data} />
			</div>
    )
}