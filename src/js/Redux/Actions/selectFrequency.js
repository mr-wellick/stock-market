import { USER_SELECT_FREQUENCY } from "../Constants/";

function selectFrequency(frequency)
{
    return {
        type: USER_SELECT_FREQUENCY,
        frequency
    };
}

export default selectFrequency;
