'use client';
import { Button } from 'antd';
import React, { useEffect, useContext, useState } from 'react';
import { Space, Tag } from 'antd';
import { useRouter } from 'next/navigation';
import TableComponent from '../../components/tables/TableComponent';
import { LoadingContext } from '../../common/contexts/LoadingContext';
import productListService from './services';
import Link from 'next/link';

const List = () => {
  const { setIsLoading } = useContext(LoadingContext);

  const router = useRouter();

  const [dataList, setDataList] = useState([])

  const showModal = () => {
    // todo
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
              router.push(`/detail/${record.key}`);
          },
      };
    },
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Ratting',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Thumbnail',
      key: 'thumbnail',
      dataIndex: 'thumbnail',
      render: (_, {thumbnail}) => (
        <>
        <Link href={thumbnail} target='_blank'>thumbnail</Link>
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            className="h-[48px] w-auto px-5 py-2 text-center text-[14px]
          font-medium tracking-normal text-[#FFFFFF]"
            onClick={() => showModal()}
          >
            Edit
          </Button>
          <Button
            className="h-[48px] w-auto px-5 py-2 text-center text-[14px]
          font-medium tracking-normal text-[#FFFFFF]"
            onClick={() => showModal()}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const getProductList = async () => {
      setIsLoading(true);
      const res = await productListService.getList();
      if(res.status === 200 && res.data) {
        const data = res.data.products
        const mappingData = data.map((item) => {
          return {
            key: item.id,
            title: item?.title || '--',
            brand: item?.brand || '--',
            discountPercentage: item?.discountPercentage || '--',
            price: item?.price || '--',
            rating: item?.rating || '--',
            stock: item?.stock || '--',
            description: item?.description || '--',
            thumbnail: item?.thumbnail || '--'
          }
        })
        setDataList(mappingData)
      } 
      setIsLoading(false);
    };
    getProductList();
  }, [setIsLoading]);

  return (
    <div className="flex min-h-screen flex-col p-24 bg-[#3C465B14]">
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
      <TableComponent 
        data={dataList} 
        columns={columns} 
        className="mt-5" 
      />
    </div>
  );
};

export default List;
