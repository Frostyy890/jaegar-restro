import React, { useState } from "react";
import "./table.styles.scss";
import { formatCurrency } from "../../../../utils/formatCurrency";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import CustomSelect from "../../../../custom-components/styled-components/custom-select";

interface Customer {
  profilePic: string;
  name: string;
}

interface Order {
  id: number;
  customer: Customer;
  menuItems: string;
  totalPayment: number;
  status: "Pending" | "Completed" | "Preparing";
}

const DynamicTable: React.FC = () => {
  const options = ["Pending", "Completed", "Preparing"];
  const [selectedOption, setSelectedOption] = useState<string>("Filter Order");
  const columns = [
    { id: 1, name: "Customer" },
    { id: 2, name: "Menu" },
    { id: 3, name: "Total Payment" },
    { id: 4, name: "Status" },
  ];
  const data: Order[] = [
    {
      id: 1,
      customer: {
        profilePic:
          "https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042",
        name: "Eren Jaegar",
      },
      menuItems: "Spicy seasoned seafood noodles",
      totalPayment: 30,
      status: "Completed",
    },
    {
      id: 2,
      customer: {
        profilePic:
          "https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042",
        name: "Customer Name",
      },
      menuItems: "Spicy seasoned seafood noodles",
      totalPayment: 30,
      status: "Completed",
    },
    {
      id: 3,
      customer: {
        profilePic:
          "https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042",
        name: "Customer Name",
      },
      menuItems: "Spicy seasoned seafood noodles",
      totalPayment: 30,
      status: "Preparing",
    },
    {
      id: 4,
      customer: {
        profilePic:
          "https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042",
        name: "Customer Name",
      },
      menuItems: "Spicy seasoned seafood noodles",
      totalPayment: 30,
      status: "Preparing",
    },
    {
      id: 5,
      customer: {
        profilePic:
          "https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042",
        name: "Customer Name",
      },
      menuItems: "Spicy seasoned seafood noodles",
      totalPayment: 30,
      status: "Pending",
    },
    {
      id: 6,
      customer: {
        profilePic:
          "https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042",
        name: "Customer Name",
      },
      menuItems: "Spicy seasoned seafood noodles",
      totalPayment: 30,
      status: "Completed",
    },
    {
      id: 7,
      customer: {
        profilePic:
          "https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042",
        name: "Customer Name",
      },
      menuItems: "Spicy seasoned seafood noodles",
      totalPayment: 30,
      status: "Completed",
    },
    {
      id: 8,
      customer: {
        profilePic:
          "https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042",
        name: "Customer Name",
      },
      menuItems: "Spicy seasoned seafood noodles",
      totalPayment: 30,
      status: "Completed",
    },
  ];

  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header__top">
          <p className="table-name">Order Report</p>
          <CustomSelect
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={options}
            icon={
              <TuneRoundedIcon
                style={{ textAlign: "center", height: "25px" }}
              />
            }
          />
        </div>
        <div className="table-header__columns">
          <ul className="table-header__columns-list">
            {columns.map((column) => (
              <li key={column.id}>{column.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="table-body">
        {data.map((item) => (
          <ul className="table-body__row" key={item.id}>
            <li className="table-body__row-item" id="customer-col">
              <img
                className="table-item__profile-pic"
                src={item.customer.profilePic}
                alt="Profile"
              />
              {item.customer.name}
            </li>
            <li className="table-body__row-item">{item.menuItems}</li>
            <li className="table-body__row-item">
              {formatCurrency(item.totalPayment)}
            </li>
            <li className="table-body__row-item">
              <div
                id="table-item__status"
                className={`${
                  item.status === "Completed"
                    ? "table-item__status-completed"
                    : item.status === "Pending"
                    ? "table-item__status-pending"
                    : item.status === "Preparing"
                    ? "table-item__status-preparing"
                    : ""
                }`}
              >
                {item.status}
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default DynamicTable;
