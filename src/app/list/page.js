'use client';
import { Button } from 'antd';
import React, { useEffect, useContext } from 'react';
import { Space, Tag } from 'antd';
import { useRouter } from 'next/navigation';
import TableComponent from '../../components/tables/TableComponent';
import { LoadingContext } from '../../common/contexts/LoadingContext';
import productListService from './services';

const List = () => {
  const { setIsLoading } = useContext(LoadingContext);

  const router = useRouter();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const showModal = () => {
    // todo
    router.push('/detail/1');
  };

  useEffect(() => {
    const getProductList = async () => {
      setIsLoading(true);
      const res = await productListService.getList();
      setIsLoading(false);
      console.log(res);
    };
    getProductList();
  }, [setIsLoading]);

  return (
    <div className="flex min-h-screen flex-col  p-24">
      <div className="flex items-center justify-between">
        <span className="text-[30px] font-semibold">Products List</span>
        <Button
          className="h-[48px] w-auto px-5 py-2 text-center text-[14px]
				 font-medium tracking-normal text-[#FFFFFF]"
          onClick={() => showModal()}
        >
          Create new Product
        </Button>
      </div>
      <TableComponent data={data} columns={columns} className="mt-5" />
    </div>
  );
};

export default List;
