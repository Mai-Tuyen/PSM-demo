import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import "./SideMenuTimeLine.less";
import _ from "lodash";
const SideMenuTimeLine = () => {
  const [treeData, setTreeData] = useState([
    {
      title: "parent 1",
      key: "parent1",
      children: [
        {
          title: "parent 1-0",
          key: "parent10",
          parentKey: "parent1",
          children: [
            {
              title: "leaf11",
              key: "leaf11",
              parentKey: "parent10",
            },
            {
              title: "leaf12",
              key: "leaf12",
              parentKey: "parent10",
            },
            {
              title: "leaf13",
              key: "leaf13",
              parentKey: "parent10",
            },
          ],
        },
        {
          title: "parent 1-1",
          key: "parent11",
          parentKey: "parent1",
          children: [
            {
              title: "leaf111",
              key: "leaf111",
              parentKey: "parent11",
            },
          ],
        },
        {
          title: "parent 1-2",
          key: "parent12",
          parentKey: "parent1",
          children: [
            {
              title: "leaf123",
              key: "leaf123",
              parentKey: "parent12",
              children: [
                { title: "leaf-2", key: "leaf123-0", parentKey: "leaf123" },
                { title: "leaf-3", key: "leaf123-1", parentKey: "leaf123" },
                { title: "leaf-4", key: "leaf123-2", parentKey: "leaf123" },
              ],
            },
            {
              title: "leaf124",
              key: "leaf124",
              parentKey: "parent12",
            },
          ],
        },
      ],
    },
    {
      title: "parent 2",
      key: "parent2",
      children: [
        { title: "child2-1", key: "child21", parentKey: "parent2" },
        { title: "child2-2", key: "child22", parentKey: "parent2" },
        { title: "child2-3", key: "child23", parentKey: "parent2" },
        { title: "child2-4", key: "child24", parentKey: "parent2" },
      ],
    },
  ]);
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const loop = async (data, key) => {
    let listResult;
    for (let i = 0; i < data.length; i++) {
      if (data[i].key === key) {
        return data[i]?.children;
      } else if (data[i].children) {
        listResult = await loop(data[i].children, key);
        if (listResult?.length > 0) {
          break;
        }
      }
    }
    return listResult;
  };
  const onDropTree = async (info) => {
    let listData = _.cloneDeep(treeData);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    // find parent drop
    let arrayParentDrop;
    if (info.dragNode.parentKey) {
      arrayParentDrop = await loop(listData, info.dragNode.parentKey);
    } else {
      arrayParentDrop = listData;
    }
    let dragIndex = arrayParentDrop.findIndex((x) => x.key === dragKey);
    let dragObject = arrayParentDrop.find((x) => x.key === dragKey);
    arrayParentDrop.splice(dragIndex, 1);
    let dropIndex = arrayParentDrop.findIndex((x) => x.key === dropKey);
    arrayParentDrop.splice(dropIndex + 1, 0, dragObject);
    setTreeData(listData);
  };

  const onAllowDropTree = (info) => {
    try {
      if (!info?.dragNode.parentKey) {
        return false;
      }
      let result =
        info?.dragNode?.parentKey === info?.dropNode?.parentKey ||
        info?.dragNode?.parentKey === info?.dropNode?.key;
      return result;
    } catch (error) {
      return false;
    }
  };

  const getFirstLeafKey = (listData) => {
      let listKey = [listData[0].key] ;
    while (listData[0]?.children) {
      listData = listData[0].children
      listKey.push(listData[0].key)
    }
    return listKey
  }

  return (
    <div className="side-menu-timeline">
      {treeData.map((item) => {
        let listExpandKeyDefault = getFirstLeafKey([item]);
        return (
          <>
            <div className="line-menu">
            <Tree
              showIcon={false}
              showLine
              switcherIcon={<CaretDownOutlined />}
              defaultExpandedKeys={listExpandKeyDefault}
              onSelect={onSelect}
              treeData={[item]}
              draggable
              onDrop={onDropTree}
              allowDrop={onAllowDropTree}
            />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SideMenuTimeLine;
