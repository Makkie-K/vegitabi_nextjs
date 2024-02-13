import React from "react";

function createData(key, value) {
  return {
    key,
    value,
  };
}

export default function IndexInfo({ address, telephone, businessHour }) {
  const rows = [
    createData("住所", address),
    createData("電話番号", telephone),
    createData("営業時間", businessHour),
  ];
  return (
    <div>
      <div>住所: {address}</div>
      <div>電話番号: {telephone}</div>
      <div>営業時間: {businessHour}</div>
    </div>
  );
}
