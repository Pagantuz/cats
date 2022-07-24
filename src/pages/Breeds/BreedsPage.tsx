import { Button, notification } from 'antd';
import Table from 'antd/lib/table';
import React from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { getBreeds } from '../../api/breeds';
import { useStoreContext } from '../../context/Store';
import { Breed, Breeds } from '../../types';
import { BreedsFilter } from './components';

const BreedsPage: React.FC = () => {
  const { breedsLoading, setBreedsLoading, setBreeds, breeds } =
    useStoreContext();
  const [isSearch, setIsSearch] = React.useState<boolean>(false);
  const [searchedBreeds, setSearchedBreeds] = React.useState<Breeds>([]);
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('name');

  React.useEffect(() => {
    if (!breeds.length) {
      setBreedsLoading(true);
      getBreeds()
        .then((res) => {
          setBreeds(res);
        })
        .catch((e) => {
          notification.error({
            message: e.message,
            description: e.response?.data.message || ''
          });
        })
        .finally(() => {
          setBreedsLoading(false);
        });
    }
  }, []);

  React.useEffect(() => {
    if (searchName?.length) {
      setIsSearch(true);
      setSearchedBreeds(
        breeds.filter(
          ({ name }) =>
            name.toLowerCase().search(searchName.toLowerCase()) !== -1
        )
      );
    } else {
      setIsSearch(false);
    }
  }, [searchParams]);

  return (
    <div className='breeds'>
      <BreedsFilter />
      <Table
        rowKey='id'
        loading={breedsLoading}
        dataSource={isSearch ? searchedBreeds : breeds}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          )
        }}>
        <Table.Column title='Name' dataIndex='name' key='name' />
        <Table.Column title='Origin' dataIndex='origin' key='origin' />
        <Table.Column title='Life Span' dataIndex='life_span' key='life_span' />
        <Table.Column
          title='Actions'
          dataIndex='actions'
          key='actions'
          render={(_: any, record: Breed) => (
            <Link to={`/breeds/${record.id}-${record.name}${location.search}`}>
              <Button type='link'>Show images</Button>
            </Link>
          )}
        />
      </Table>
      {!!breeds.length && <Outlet />}
    </div>
  );
};

export { BreedsPage };
