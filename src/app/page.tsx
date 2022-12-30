/* eslint-disable react/display-name */
import React, { forwardRef, HTMLProps, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  children?: ReactNode;
  title?: string;
} & HTMLProps<HTMLDivElement>;

const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', ...rest }, ref) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <div ref={ref as any} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

export default Page;
