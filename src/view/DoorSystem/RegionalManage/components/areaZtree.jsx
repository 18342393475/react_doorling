import {
    DownOutlined,
    FrownFilled,
    FrownOutlined,
    MehOutlined,
    SmileOutlined,
  } from '@ant-design/icons';
  import { Tree } from 'antd';
  import React, {useState } from 'react';
import { useEffect } from 'react';

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
  ]; // It's just a simple demo. You can use tree map to optimize update perf.
  
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
  
  const AreaZtree = () => {
    const [treeData, setTreeData] = useState(initTreeData);
    useEffect(() => {}, [])
    let a = true;
    const onLoadData = (treeNode) =>{
      let { key, children } = treeNode;
      
      return new Promise((resolve) => {
        if(!a){
          resolve();
          return;
        }
        a = false;

        console.log(key, children);
        if (children) {
          a = true;
          resolve();
          return;
        }

        setTimeout(() => {
          setTreeData((origin) =>{
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
          a = true;
          resolve();
        }, 1000);
      });
    }
    return <Tree loadData={onLoadData} treeData={treeData} />;
  };
  export default AreaZtree