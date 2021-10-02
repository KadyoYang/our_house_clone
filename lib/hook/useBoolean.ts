import { useState } from "react";



const useBoolean = (initValue: boolean) => {
    const [value, setValue] = useState<boolean>(initValue);
    const toggle = () => {setValue(!value)}

    return {value, setValue, toggle}
}

export default useBoolean;