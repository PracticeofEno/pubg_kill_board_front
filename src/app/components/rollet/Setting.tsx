'use client';
import { PercentItem } from "./percentage_item";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { getSettingData, updateSettingData } from "@/api/pubg_api";
import { PercentInterface, UserInterface } from "@/utils/interface";
import { Button, CircularProgress, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

export function Setting({ data, setStateUser }: { data: UserInterface | undefined, setStateUser: (updatedUser: UserInterface) => void }) {

  function addItem() {
    if (data) {
      setStateUser({
        id: data.id,
        apiKey: data.apiKey,
        percents: [
          ...data.percents,
          { count: 0, percent: 0 }
        ],
        randomString: data.randomString,
        currentKill: data.currentKill,
        targetKill: data.targetKill
      })
    }
    console.log(data)
  }

  function handleDelete(index: number) {
    if (data) {
      const updatedPercents = [...data.percents];
      updatedPercents.splice(index, 1); // 해당 인덱스의 아이템을 삭제합니다.

      setStateUser({
        ...data,
        percents: updatedPercents,
      });
    }
  }

  function handleItemChange(index: number, count: number, percent: number) {
    if (data) {
      const updatedPercents = [...data.percents];
      updatedPercents[index].count = count;
      updatedPercents[index].percent = percent;

      setStateUser({
        ...data,
        percents: updatedPercents,
      });
    }
  }

  async function reCreateUserData() {
    const randomString = getCookie("random_string");
    if (randomString && data) {
      const tmp = {
        ...data,
        percents: data.percents.map((item) => {
          return {
            count: item.count,
            percent: item.percent
          }
        })
      }
      console.log(tmp);
      await updateSettingData(tmp);
    }
  }

  return (
    <div className="flex flex-col w-[350px] h-full space-y-2">
      <div className="relative flex flex-row w-full justify-center border-b border-gray-400">
        <p className="text-white w-[70%] text-center">킬</p>
        <p className="text-white w-[30%] text-center">확률</p>
      </div>
      {
        data ? data.percents?.map((item, index) => (
          <PercentItem data={item} index={index} key={index} handleDelete={handleDelete} handleItemChange={handleItemChange} />
        )) : <CircularProgress />
      }
      <div className="flex flex-row w-full">
        <div className="flex w-full justify-start ">
          <div className="border border-white rounded-md bg-[#252525]">
            <IconButton size="small" onClick={addItem}>
              <Add color="primary" />
            </IconButton>
          </div>
          <div className="flex border-white border rounded-md justify-end ml-auto">
            <Button
              className="w-[20px] bg-[#252525] rounded-md"
              onClick={reCreateUserData}>
              저장
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
