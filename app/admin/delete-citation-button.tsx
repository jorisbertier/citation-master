"use client";

import { Button } from "@/src/components/ui/button";
import { useState } from "react";

export function DeleteCitationButton() {
    const [isConfirm, setIsConfirm] = useState(false);

    const onDelete = () =>{
        alert("Delete !")
    }

    return (
        <Button variant={isConfirm ? "destructive" : "outline"} onClick={() => {
            if(isConfirm) {
                onDelete()
            } else{
                setIsConfirm(true)
            }
        }}>X</Button>
    )
}