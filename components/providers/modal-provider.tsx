"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { useState, useEffect } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        console.log("ModalProvider mounting");
        setIsMounted(true);
    }, []);

    console.log("ModalProvider render state:", isMounted);

    if(!isMounted){
        return null;
    }

    return(
        <div>
            <CreateServerModal />
        </div>
    )
}

export default ModalProvider;