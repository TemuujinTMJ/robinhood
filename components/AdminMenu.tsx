'use client'
import { useAppSelector } from '@/services/hooks';
import {
    ContainerOutlined,
    DesktopOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];


const AdminMenu: React.FC = () => {
  const { user } = useAppSelector((state) => state.FetchUser);

  const router = useRouter()
  const items: MenuItem[] = [
    { key: '0', icon: <PieChartOutlined />, label: 'Dashboard', onClick: () =>  router.push('/admin')},
    { key: '1', icon: <PieChartOutlined />, label: 'Website Users', onClick: () =>  router.push('/admin/users')},
    { key: '2', icon: <DesktopOutlined />, label: 'Quiz', onClick: () =>  router.push('/admin/quiz') },
    { key: '3', icon: <ContainerOutlined />, label: 'Courses', onClick: () =>  router.push('/admin/courses') },
    { key: '4', icon: <ContainerOutlined />, label: 'Back to Robinhood', onClick: () =>  router.push('/') },
  ];
  return (
    <div style={{ width: 256 }}>
      <Menu
        className='h-screen'
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
      />
      <div className='z-20 fixed bottom-0 left-0 p-4'>{user?.email}</div>
    </div>
  );
};

export default AdminMenu;