'use client';
import PrimaryButton from "@/components/buttons/PrimaryButton";
const showModalCreate = () => {
  console.log(123)
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <div className="flex items-center justify-between">
        <span>Products List</span>
        <PrimaryButton
          dataTestId='next-step1'
          text='Create new Product'
          className=' h-[48px] w-full px-5 py-2 text-center text-[14px] 
        font-medium leading-[22px] tracking-normal
        text-[#FFFFFF]'
          onClick={() =>showModalCreate()}
        />
      </div>
    </main>
  );
}
