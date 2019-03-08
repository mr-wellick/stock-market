import uniq from "lodash.uniq";

const colors = [
    { fill: "rgb(250, 86, 209)" },
    { fill: "rgb(155, 127, 255)" },
    { fill: "rgb(0, 173, 232)" },
    { fill: "rgb(1, 184, 137)" },
    { fill: "rgb(74, 171, 1)" },
    { fill: "rgb(189, 143, 1)" },
    { fill: "rgb(247, 106, 98)" }
];

class ColorCode {
    constructor(data, variableName){
        this.data         = data;
        this.variableName = variableName;
        this.colors       = colors;
    }

    getUniqueCategories(){
        const categoriesToSubsetBy = this.data.map(item => item[this.variableName]);
        const uniqueCategories     = uniq(categoriesToSubsetBy);

        return uniqueCategories;
    }

    getColorCombo(){
        const uniqueCategories = this.getUniqueCategories();
        const colorCombos      = uniqueCategories.map((item, index) => ({
            category: item,
            fill: this.colors[index]["fill"]
        }));

        return colorCombos;
    }
}

export default ColorCode;
