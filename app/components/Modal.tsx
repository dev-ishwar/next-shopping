'use client';

import { ComponentRef, useEffect, useRef } from "react";
import { IChildren } from "../lib/types";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

const Modal = ({ children }: IChildren) => {
    const router = useRouter();
    const dialogRef = useRef<ComponentRef<'dialog'>>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, [])

    const onDismiss = () => router.back();

    return (
        createPortal(
            <div className="absolute inset-0 bg-white/30">
                <dialog ref={dialogRef} className="p-4 bg-[--darker-color] rounded-sm min-w-[410px]" onClose={onDismiss} >
                    <button className="float-right" onClick={onDismiss}>X</button>
                    {children}
                </dialog>
            </div>,
            document.getElementById('modal-root')!
        )
    )
}

export default Modal;