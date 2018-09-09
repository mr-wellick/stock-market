import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

let Table = (props) => {
    let { assetsData } = props.assetsData;

    return(
        <div className="section-data__container">
            <table className="stocks-table">
                <thead className="stocks-table__thead">
                    <tr>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

Table.propTypes = {
    assetsData: PropTypes.array
};

export default Table;
