import {
    DownOutlined,
    FrownFilled,
    FrownOutlined,
    MehOutlined,
    SmileOutlined,
  } from '@ant-design/icons';
  import { Tree } from 'antd';
  import React, {useState } from 'react';
  
  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      icon: <SmileOutlined />,
      children: [
        {
          title: 'leaf',
          key: '0-0-0',
          icon: <MehOutlined />,
        },
        {
          title: 'leaf',
          key: '0-0-1',
          icon: ({ selected }) => (selected ? <FrownFilled /> : <FrownOutlined />),
        },
      ],
    },
  ];


  const initTreeData = [
    {
      title: 'Expand to load',
      key: '0',
    },
    {
      title: 'Expand to load',
      key: '1',
    },
    {
      title: 'Tree Node',
      key: '2',
      isLeaf: true,
    },
  ];
  
  const updateTreeData = (list, key, children) =>
    list.map((node) => {
        if (node.key === key) {
            return { ...node, children };
        }

        if (node.children) {
            return { ...node, children: updateTreeData(node.children, key, children) };
        }

        return node;
    });


export default function AreaZtree(){
    const [treeData, setTreeData] = useState(initTreeData);

    const onLoadData = ({ key, children }) =>{
        console.log(key, children)
        return new Promise((resolve) => {
            if (children) {
                resolve();
                return;
            }

            setTimeout(() => {
                setTreeData((origin) => {
                    console.log(origin);
                    return updateTreeData(origin, key, [
                        {
                        title: 'Child Node',
                        key: `${key}-0`,
                        },
                        {
                        title: 'Child Node',
                        key: `${key}-1`,
                        },
                    ])
                });
                resolve();
            }, 1000);
        })
    };

    return (
        <Tree
        loadData={onLoadData}
        showIcon
        // defaultExpandAll
        // defaultSelectedKeys={['0-0-0']}
        treeData={treeData}
        />
    )
}