import React from "react";

function CustomersTableItem(props) {
  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.email}</div>
      </td>
      <td className=" px-20 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.location}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.orders}</div>
      </td>
    </tr>
  );
}

export default CustomersTableItem;
