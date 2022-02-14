import { FC, ReactNode } from 'react';
import ReactGridLayout, {
  Layout,
  ReactGridLayoutProps,
} from 'react-grid-layout';

interface GridProps extends ReactGridLayoutProps {
  children: ReactNode;
  wrapperClassName?: string;
}

const Grid: FC<GridProps> = ({ wrapperClassName, children, ...props }) => {
  return (
    <div className={`h-full w-full ${wrapperClassName}`}>
      <ReactGridLayout {...props}>{children}</ReactGridLayout>
    </div>
  );
};

export default Grid;
