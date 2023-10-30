import React, { useState } from 'react'

const Input = ({ InitialValue, name , Placeholder }: { InitialValue?: string, name: string , Placeholder?:string }) => {
    const [value, setvalue] = useState(InitialValue ? InitialValue : "")
    return (
        <input
            name={name}
            value={value}
            onChange={(e) => setvalue(e.currentTarget.value)}
            placeholder={Placeholder}
            className='placeholder-black w-full border border-[#B8B8B8] rounded-lg md:py-4 py-3 px-3 flex outline-none xs:text-sm text-xs' type="text" />
    )
}

export default Input