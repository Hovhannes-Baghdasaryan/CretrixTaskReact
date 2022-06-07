import React from "react";
import Box from "./Box";
import { connect } from "react-redux";
import { AddDateThunkCreator } from "../../Redux/Reducers/dateListReducer";

const InputBoxContainer = ({ dates, AddDateThunkCreator }) => {
  return <Box dates={dates} addDate={AddDateThunkCreator} />;
};

const mapStateToProps = (state) => ({
  dates: state.dateList.dates,
});

export default connect(mapStateToProps, { AddDateThunkCreator })(
  InputBoxContainer
);
