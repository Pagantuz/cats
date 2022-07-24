import React from 'react';
import 'antd/dist/antd.min.css';
import { Layout } from './Layout';
import { Result, Spin } from 'antd';
import { StoreContextProvider } from './context/Store';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
  React.useEffect(() => {
    document.title = 'CATS';
  }, []);

  const router = useRoutes([
    ...routes.map((route) => ({
      element: <route.element />,
      path: route.path,
      children: route.children
        ? route.children.map((children) => ({
            ...children,
            element: <children.element />
          }))
        : undefined
    })),
    {
      path: '*',
      element: (
        <Result
          status='404'
          title='404'
          subTitle='Sorry, the page you visited does not exist.'
        />
      )
    }
  ]);

  return (
    <div className='App'>
      <StoreContextProvider>
        <Layout>
          <React.Suspense
            fallback={<Spin size='large' style={{ marginTop: 30 }} />}>
            {router}
          </React.Suspense>
        </Layout>
      </StoreContextProvider>
    </div>
  );
};

export default App;
