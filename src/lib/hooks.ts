import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export const useItemsContext = () => {
    const context = useContext(ItemsContext);
    if (context === null) {
        throw new Error(
            "useItemsContext must be used within a ItemsContextProvider"
        );
    }
    return context;
};
