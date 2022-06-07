const AddDate = "AddDate";

const initialState = {
  dates: [],
};

const dateListReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddDate:
      let number;
      let bool = false;

      for (let i = 0; i < state.dates.length; i++) {
        if (state.dates[i]?.date === action.date) {
          number = state.dates[i]?.number + 1;
          bool = true;
        }
      }

      if (!bool) number = 1;

      return {
        ...state,
        dates: [...state.dates, { date: action.date, number: number }],
      };

    default:
      return state;
  }
};

const AddDateAC = (date) => ({ type: AddDate, date });

export const AddDateThunkCreator = (date) => (dispatch) => {
  dispatch(AddDateAC(date));
};

export default dateListReducer;
