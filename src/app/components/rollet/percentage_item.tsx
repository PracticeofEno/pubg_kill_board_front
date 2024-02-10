'use client';

import { PercentInterface } from "@/utils/interface";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect } from "react";

export function PercentItem({ data, index, handleDelete, handleItemChange }: { data: PercentInterface, index: number, handleDelete: (index: number) => void, handleItemChange: (index: number, count: number, percent: number) => void }) {
    function tmp() {
        handleDelete(index);
    }
    return (
        <div>
            <div className="flex flex-row w-full h-[30px] space-x-5">
                <IconButton size="small" onClick={tmp}>
                    <Delete color="primary" />
                </IconButton>
                <input
                    className="w-[70%] h-full border-white border rounded-md bg-[#252525] text-white"
                    type="number"
                    value={data.count}
                    onChange={(e) => {
                        handleItemChange(index, Number(e.target.value), data.percent);
                    }}
                ></input>
                <div className="flex flex-row w-[30%] h-full space-x-2">
                    <input
                        className="w-full h-full border-white border rounded-md bg-[#252525] text-white"
                        type="number"
                        value={data.percent}
                        onChange={(e) => {
                            handleItemChange(index, data.count, Number(e.target.value));
                        }}
                    ></input>
                    <p className="text-gray-400">%</p>
                </div>
            </div>
        </div>
    );
}
