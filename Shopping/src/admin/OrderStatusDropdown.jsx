import React, { useState } from "react";

// const OrderStatusDropdown = ({orderId, initialStatus , onChange }) => {
//   const [selectedStatus, setSelectedStatus] = useState(initialStatus);
//   console.log("OrderId : ",orderId)
//   const statuses = [
//     { label: "Pending", color: "#FFA500" }, 
//     { label: "In Transit", color: "#1E90FF" }, 
//     { label: "Delivered", color: "#28a745" }, 
//     { label: "Canceled", color: "#dc3545" }, 
//     { label: "Returned", color: "#ffc107" }, 
//   ];

//   const handleSelect = (status) => {
//     setSelectedStatus(status);
//     if (onChange) onChange(status);
//   };

//   return (
//     <td style={{ padding: "10px 10px" }}>
//       <DropdownButton
//         id="dropdown-basic-button"
//         variant="light"
//         title={
//           <>
//             <span
//               style={{
//                 display: "inline-block",
//                 width: "10px",
//                 height: "10px",
//                 borderRadius: "50%",
//                 backgroundColor: statuses.find((s) => s.label === selectedStatus)?.color,
//                 marginRight: "10px",
//               }}
//             ></span>
//             {selectedStatus}
//           </>
//         }
//       >
//         {statuses.map((status) => (
//           <Dropdown.Item
//             key={status.label}
//             onClick={() => handleSelect(status.label)}
//             style={{ display: "flex", alignItems: "center" }}
//           >
//             <span
//               style={{
//                 display: "inline-block",
//                 width: "10px",
//                 height: "10px",
//                 borderRadius: "50%",
//                 backgroundColor: status.color,
//                 marginRight: "10px",
//               }}
//             ></span>
//             {status.label}
//           </Dropdown.Item>
//         ))}
//       </DropdownButton>
//     </td>
//   );
// };
function OrderStatusDropdown({ orderId, initialStatus, onChange }) {
  const [status, setStatus] = React.useState(initialStatus);

  const statuses = [
    { label: "Pending", color: "#FFA500" },
    { label: "Shipped", color: "#1E90FF" },
    { label: "Delivered", color: "#28a745" },
    { label: "Cancelled", color: "#dc3545" },
  ];

  const handleChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    onChange(newStatus); 
  };

  return (
    <div className="ps-2" style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      backgroundColor: '#f8f9fa'
    }}>
      <span
        style={{
          display: 'inline-block',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: statuses.find((s) => s.label === status)?.color || "#FFA500",
        }}
      ></span>
      <select
        value={status}
        onChange={handleChange}
        style={{
          padding: '8px 12px',
          border: 'none',
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        {statuses.map((s) => (
          <option key={s.label} value={s.label}>
            {s.label}
          </option>
        ))}
      </select>
    </div>
  );
}




export default OrderStatusDropdown;
