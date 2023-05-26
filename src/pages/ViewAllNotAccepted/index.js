import React, { useState } from "react";
import Table from "../../component-ui/Table";
import { getAllNotAcceptedAssets } from "../../use-cases/get-all-not-accepted-assets";
import { Button } from "@mui/material";
import { AssetApprovalButton } from "../../component-ui/AssetApprovalButton";

const columns = [
  {
    accessorKey: "user.firstName",
    header: "First Name",
  },
  {
    accessorKey: "user.lastName",
    header: "Last Name",
  },
  {
    accessorKey: "user.email",
    header: "Email",
  },
  {
    accessorKey: "dateTime",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    Cell: ({ cell }) => "$ " + cell.getValue(),
  }
];

const ViewAllNotAccepted = () => {
    const [tableRefreshFlag, setTableRefreshFlag] = useState(false);

    const rowActions = (row) => {
      return <AssetApprovalButton row={row} setTableRefreshFlag={setTableRefreshFlag} />
    }

  return (
    <div>
      <Table
        fetchDataList={getAllNotAcceptedAssets}
        headers={columns}
        rowIdField={"id"}
        tableRefreshFlag={tableRefreshFlag}
        rowActions={rowActions}
      />
    </div>
  );
}

export default ViewAllNotAccepted