import { SET_ACTIVE_CHART } from "../Constants/";

const setActiveChart = function(activeChart) {
  return dispath => {
    dispath({ type: SET_ACTIVE_CHART, activeChart });
  };
};

export default setActiveChart;
