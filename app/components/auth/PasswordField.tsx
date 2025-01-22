'use client';

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const PasswordField = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                required
                className="bg-transparent border border-[currentColor] rounded-sm placeholder:text-sm placeholder:text-gray-500 px-2 py-1 focus-within:outline-[--darkerColor] w-full"
                placeholder="*******"
            />
            <div className="absolute top-2 right-1">
                {
                    showPassword
                        ? <EyeSlashIcon className="size-5 " onClick={() => setShowPassword(prev => !prev)} />
                        : <EyeIcon className="size-5 " onClick={() => setShowPassword(prev => !prev)} />
                }
            </div>

        </div>
    )
}

export default PasswordField;