import { useContext } from "react";
import EmailsContext from "../context/emails";

function useEmailContext(){
    return useContext(EmailsContext)
}

export default useEmailContext;