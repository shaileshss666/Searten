import { Card, Row } from "antd";
import React from "react";
import { FolderOpenOutlined } from "@ant-design/icons";
const gridStyle = {
  width: "25%",
  textAlign: "center",
};
function FolderCard() {
  return (
    <Card.Grid style={gridStyle}>
      <FolderOpenOutlined style={{ fontSize: 25 }} />
      <br />
      folder
    </Card.Grid>
  );
}

export default FolderCard;
