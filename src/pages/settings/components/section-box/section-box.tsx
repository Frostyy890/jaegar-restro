import React, { useEffect, useState } from "react";
import "./section-box.styles.scss";
import CustomSelect from "../../../../custom-components/styled-components/custom-select";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Navbar from "../../../homepage/components/navbar/navbar";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { getMeals } from "../../../../redux/meals/meals-actions";
import addIcon from "../../../../assets/icons/Add.svg";
import editIcon from "../../../../assets/icons/Edit.svg";

const SectionBox = () => {
  const { filteredDishes, loading, error } = useAppSelector(
    (state) => state.meals
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);
  const options = [""];
  const [selectedOption, setSelectedOption] = useState("Manage Categories");

  return (
    <div className="section-box">
      <div className="section-box__header">
        <p className="section-box__title">Products Management</p>
        <CustomSelect
          icon={<TuneRoundedIcon />}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
        />
      </div>
      <div className="section-box__navbar">
        <Navbar />
      </div>
      <div className="section-box__body">
        <div className="card__add">
          <img src={addIcon} alt="" className="icon__add" />
          <p>Add new dish</p>
        </div>
        {filteredDishes.map((item) => (
          <div className="section-box__card" key={item._id}>
            <div className="section-box__card-body">
              <img
                src="https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042"
                alt=""
                className="card__image"
              />
              <p className="card__name">{item.name}</p>
              <div className="card__available-price">
                <span className="card__price">
                  {formatCurrency(item.price)}
                </span>
                <span className="card__dot">&#183;</span>
                <span className="card__available">{item.available}</span>
              </div>
            </div>
            <button type="button">
              <img src={editIcon} alt="" />
              Edit dish
            </button>
          </div>
        ))}
      </div>
      <div className="section-box__footer">
        <button className="section-box__btn" type="button">
          Discard Changes
        </button>
        <button className="section-box__btn" type="submit">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SectionBox;
