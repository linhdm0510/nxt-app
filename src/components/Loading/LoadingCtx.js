import Image from 'next/image';
import { useContext } from 'react';
import { LoadingContext } from '@/common/contexts/LoadingContext';

export default function LoadingCtx() {
  const { isLoading } = useContext(LoadingContext);
  return (
    <>
      {isLoading && (
        <div className="z-loading flex h-full w-full items-center justify-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/loading.svg"
              width={58}
              height={58}
              alt="loading"
              className="infinity-rotate"
            />
          </div>
        </div>
      )}
    </>
  );
}
