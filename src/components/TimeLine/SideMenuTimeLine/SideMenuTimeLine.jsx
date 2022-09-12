import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        children: [
          {
            title: "leaf",
          },
          {
            title: "leaf",
          },
          {
            title: "leaf",
          },
        ],
      },
      {
        title: "parent 1-1",
        children: [
          {
            title: "leaf",
          },
        ],
      },
      {
        title: "parent 1-2",
        children: [
          {
            title: "leaf",
            children: [
              { title: "left-2" },
              { title: "left-3" },
              { title: "left-4" },
            ],
          },
          {
            title: "leaf",
          },
        ],
      },
    ],
  },
];
const onSelect = (selectedKeys, info) => {
  console.log("selected", selectedKeys, info);
};
const SideMenuTimeLine = () => {
  return (
    <Tree
      showIcon={false}
      showLine
      switcherIcon={<CaretDownOutlined />}
      defaultExpandedKeys={["0-0-0"]}
      onSelect={onSelect}
      treeData={treeData}
    />
  );
};

export default SideMenuTimeLine;
