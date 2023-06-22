import { useState } from "react";
import { Input } from "./Form.styled"

const Form = ({ searchName }) => {
    const [value, setValue] = useState('')

    const hendleSubmitSearchForm = (e) => {
        e.preventDefault();
        searchName({ searchInput: value })
    }

    const form =
        <form action="submit" onSubmit={hendleSubmitSearchForm}>
            <Input value={value} type="text" onChange={(e) => setValue(e.target.value)} />
        </form>
    return form
}

export default Form;