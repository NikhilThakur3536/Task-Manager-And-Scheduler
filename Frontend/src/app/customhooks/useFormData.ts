import { useState } from "react";

export function useFormData(initialVal: Record<string, string>) {
    const [data, setData] = useState(initialVal);

    function dataHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    return { data, dataHandler };
}
