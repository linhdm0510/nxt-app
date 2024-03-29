import ButtonBase from '@/components/buttons/ButtonBase';

import { clsxm } from '@/common/helpers';

export default function PrimaryButton({
  text,
  className,
  onClick,
  dataTestId,
}) {
  return (
    <ButtonBase
      data-testid={dataTestId}
      className={clsxm(
        '!font-primary w-full rounded-[20px] border-none ',  
        'bg-[#008DD4] font-medium leading-[22px] hover:bg-[#33A4DD] focus:bg-[#008DD4] focus:text-[#fff] active:bg-[#3ED4BA]',
        className
      )}
      onClick={onClick}
    >
      {text}
    </ButtonBase>
  );
}
