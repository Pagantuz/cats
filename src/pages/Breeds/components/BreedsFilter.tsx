import { Button, Collapse, Typography, Input } from 'antd';
import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import './Filter.css';
import { useDebounce } from '../../../hooks/useDebounce';

type BreedsFilterType = {};

const BreedsFilter: React.FC<BreedsFilterType> = () => {
  const [name, setName] = React.useState<string>('');
  const [, setSearchParams] = useSearchParams();
  const debName = useDebounce(name, 300);

  React.useEffect(() => {
    setSearchParams(!debName.length ? {} : { name: debName });
  }, [debName]);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onReset = () => {
    setSearchParams({});
    setName('');
  };

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}>
      <Collapse.Panel header='Filter' key='filter'>
        <div className='breeds-search__container'>
          <div className='name-search breeds-search'>
            <Typography.Text strong>Name</Typography.Text>
            <Input value={name} onChange={onNameChange} />
          </div>
          <Button
            className='breeds-search-button'
            type='primary'
            onClick={onReset}>
            Reset
          </Button>
        </div>
      </Collapse.Panel>
    </Collapse>
  );
};

export { BreedsFilter };
