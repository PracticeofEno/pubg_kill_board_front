'use client';

import { ContentCopy } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

export function CopyString({ data }: { data: string }) {
    useRouter
    return (
        <div className="flex flex-row w-full h-full items-center overflow">
            <IconButton size="small" onClick={() => {
                let textArea = document.createElement("textarea");
                textArea.value = data;
                textArea.style.display = "fixed";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy')
            }}>
                <ContentCopy color="primary" />
            </IconButton>
            <p className="text-white">{data}</p>
        </div>
    );
}
