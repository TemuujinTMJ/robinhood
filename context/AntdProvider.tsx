'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

const AntdProvider: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    return (
      // eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntdProvider;