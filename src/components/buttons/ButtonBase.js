import { Button, ButtonProps } from 'antd';

import { clsxm } from '@/common/helpers';

export default function ButtonBase({
  className = '',
  classNameContainer = '',
  ...rest
}) {
  return (
    <div className={clsxm('base-button-container', classNameContainer)}>
      <Button
        className={clsxm('flex items-center justify-center', className)}
        {...rest}
      />
    </div>
  );
}
