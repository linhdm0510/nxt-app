import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import {  useState } from 'react';

/**
 * Fix issue the antd's css is not loaded immediately on SSR
 */
export default function AntdStyleProvider({ children }) {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}
