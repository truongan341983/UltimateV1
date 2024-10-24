import { Link, NavLink } from 'react-router-dom';
// import './header.css';
import { UsergroupDeleteOutlined, HomeOutlined, BookOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';


const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"} >Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/user"}>Users</Link>,
            key: 'users',
            icon: <UsergroupDeleteOutlined />,
            // cho ẩn menu này thì set 
            // disabled: true,
        },
        {
            label: <Link to={"/products"}>Products</Link>,
            key: 'products',
            icon: <BookOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting:1',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                        },
                    ],
                },
            ],
        },

    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}
export default Header;