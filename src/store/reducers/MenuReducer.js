import data from "../../data/menuData.json"
const INIT_STATE = [...data]


export default (state = INIT_STATE, action) => {
    const { type } = action
    let tmp = [...state]
    switch (type) {
        case "snaks":
            tmp = INIT_STATE
            return (tmp.filter((el) => el["sub-items"][0].category_name === "Appeteasers"));
        case "sharing platters":
            tmp = INIT_STATE
            return (tmp.filter((el) => el["sub-items"][0].category_name === "Sharing platters"));
        case "desserts":
            tmp = INIT_STATE
            return (tmp.filter((el) => el["sub-items"][0].category_name === "Dessert")[0]["sub-items"]);
        case "fast Food":
            tmp = INIT_STATE
            return (tmp.filter((el) => el["sub-items"][0].cuisine_name === "Fast Food"));
        case "peri-peri chicken":
            tmp = INIT_STATE
            return (tmp.filter((el) => el["sub-items"][0].category_name === "Peri-peri chicken"));
        case "side Dishes":
            tmp = INIT_STATE
            return (tmp.filter((el) => el["sub-items"][0].category_name === "Sides"));
        case "burgers":
            tmp = INIT_STATE
            return (tmp.filter((el) => el["sub-items"][0].category_name === "Burgers, pitas, wraps"));
        case "salads":
            tmp = INIT_STATE
            return (tmp.filter((el) => el["sub-items"][0].category_name === "Salads"));

    }
    return state
}