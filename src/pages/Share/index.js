import React from 'react'
import ConfirmMsg from '../../component-ui/ConfirmMsg';
import TableToCard from '../../component-ui/TableToCard';

const Share = () => {
  return (
    <div>
      <ConfirmMsg
        title="this is share confirm"
        msg="Are you confirm this action ?"
      />
      <TableToCard />
      <TableToCard />
      <TableToCard />
    </div>
  );
}

export default Share;