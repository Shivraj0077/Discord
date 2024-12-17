"use client";

import dynamic from "next/dynamic";

const ModalProvider = dynamic(
    () => import("@/components/providers/modal-provider"),
    {ssr : false},
)

export const ModalProviderWrapper = () => {
    return <ModalProvider />;
};