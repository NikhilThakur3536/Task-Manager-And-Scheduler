import { useState } from "react";

export function useFormData<T extends Record<string, string>>(initialVal: T) {
    const [data, setData] = useState<T>(initialVal);

    function dataHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    return { data, dataHandler };
}