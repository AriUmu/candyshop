import React from "react";

const TextField = ({name, onchange, onblur, error, label}) => (
    <div>
        <label>
            {label}
            <input
            type="text"
            name={name}
            onChange={onchange}
            onBlur={onblur}
            />
            {error && <div>{error}</div>}
        </label>
    </div>
)

export default TextField;