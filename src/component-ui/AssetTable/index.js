import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

const data = [{ date: "02/04/2023", dailyRevenue :"2.50",totalRevenue:"10.00"}];

const AssetTable = () => {
    const columns = useMemo(
      () => [
        {
          accessorKey: "date",
          header: "Date",
          size: 50,
        },
        {
          accessorKey: "dailyRevenue",
          header: "Daily Revenue",
          size: 40,
        },
        {
          accessorKey: "totalRevenue",
          header: "Total Revenue",
          size: 40,
        },
      ],
      []
    );

return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
    />
  );
}
export default AssetTable;
