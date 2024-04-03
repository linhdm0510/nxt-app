'use client';
import { useEffect, useContext, useState } from "react";
import {LoadingContext} from'@/common/contexts/LoadingContext'
import ProductDetailService from '@/app/detail/services'
import Image from 'next/image';

import LinearCategory from '../../../assets/icons/linearCategory2.svg';

export default function Datail({params}) {
  const { setIsLoading } = useContext(LoadingContext);

  const [dataDetail, setDataDetail] = useState({})

  useEffect(() => {
    const getProductDetail = async () => {
      setIsLoading(true);
      const res = await ProductDetailService.getDetail(params.id);
      if(res.status === 200 && res.data) {
        const detail = res.data || {}
        console.log(detail)
        setDataDetail(detail)
      } else {
        console.log(17)
      }
      setIsLoading(false);
    };
    getProductDetail();
  }, [setIsLoading, params.id]);
  return (
    <main className="flex min-h-screen flex-col p-20 bg-[#3C465B14]">
      <div className="rounded-[20px] p-10 gap-3 border-[#CCE8F6] bg-[#FFFFFF]">
        <div className="flex items-center gap-2 justify-start ">
          <Image
            src={LinearCategory}
            width={20}
            height={20}
            alt="linear"
            className="infinity-rotate"
          />
          <span className="font-medium text-[22px] text-[#101010]">Information Detail</span>
        </div>
        <div className="mt-2 rounded-[20px] p-5 flex flex-col gap-6 bg-[#F2F6F9] border-[#F2F6F9] font-medium text-[14px] min-h-[500px]">
          <div className="flex items-center justify-between">
            <div className="text-[#404040]">Name Product</div>
            <div className="text-[#101010]">{dataDetail.title || '--'}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#404040]">Brand</div>
            <div className="text-[#101010]">{dataDetail.brand || '--'}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#404040]">Brand</div>
            <div className="text-[#101010]">{dataDetail.brand || '--'}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#404040]">Category</div>
            <div className="text-[#101010]">{dataDetail.category || '--'}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#404040]">Discount Percentage</div>
            <div className="text-[#101010]">{dataDetail.discountPercentage || '--'}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#404040]">Price</div>
            <div className="text-[#101010]">{dataDetail.price || '--'}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#404040]">Rating</div>
            <div className="text-[#101010]">{dataDetail.rating || '--'}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#404040]">Stock</div>
            <div className="text-[#101010]">{dataDetail.stock || '--'}</div>
          </div>
          <div className="border-t-[1px] border-t-[#CCE8F6] pt-6">
            <div className="flex flex-row gap-5 items-center justify-center">
              {dataDetail && dataDetail.images && dataDetail.images.map((img,index) => {
                return (
                  <div key={`${img}-${index}`}>
                    <Image
                      src={img}
                      width={150}
                      height={200}
                      alt="img"
                      className="infinity-rotate"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
  