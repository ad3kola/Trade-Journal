import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "./ui/input";
import Image from "next/image";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { CameraIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";

export function TradeUploadForm() {
  return (
    <div className="flex w-full mt-20 flex-col items-center justify-center">
      <Carousel className="w-full mx-auto max-w-xl -mt-10">
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="flex flex-col items-center justify-center px-2">
                <form className="grid grid-cols-2 h-full w-full gap-x-3 gap-y-5 p-3 ">
                  <Input
                    type="text"
                    placeholder="Choose Coin"
                    className="col-span-2"
                  />
                  <Input type="text" placeholder="Direction (long / Short)" />
                  <Input type="text" placeholder="Leverage used" />
                  <Input
                    type="text "
                    placeholder="Trade Window || Time of Day"
                    className="col-span-2"
                  />
                </form>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex flex-col w-full items-center gap-5 py-10">
                <div className="flex items-center mx-auto space-x-4 justify-center w-fit py-3 border-outline_input bg-input px-6 rounded-xl">
                  <Image
                    className="rounded-full object-cover"
                    src={"/assets/profile-pic.webp"}
                    height={40}
                    width={40}
                    alt=""
                  />
                  <h3 className="text-xl tracking-wider font-semibold">
                    {"BTCUSDT"}
                  </h3>
                </div>
                <form className="grid grid-cols-2 h-full w-full gap-x-3 gap-y-5 py-3">
                  <Input type="text" placeholder="Entry Price" />
                  <Input type="text" placeholder="Position Size" />
                  <Input type="text" placeholder="Take Profit" />
                  <Input
                    type="text"
                    placeholder="Stop Loss"
                    className="place-items-end"
                  />
                </form>
                <div className="flex flex-col items-start w-full p-2 pt-0">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Trade Startegy Metrics
                  </h3>
                  <div className="flex flex-wrap w-full gap-2 mt-2">
                    <div className="flex space-x-3 items-center p-2">
                      <h4>Divergence</h4> <Switch />
                    </div>
                    <div className="flex space-x-3 items-center p-2">
                      <h4>Trendline Retest</h4> <Switch />
                    </div>
                    <div className="flex space-x-3 items-center p-2">
                      <h4>Head & Shoulders Pattern</h4> <Switch />
                    </div>
                    <div className="flex space-x-3 items-center p-2">
                      <h4>Aligns with 15min Trend Bias</h4> <Switch />
                    </div>
                    <div className="flex space-x-3 items-center p-2">
                      <h4>Fib Key Levels</h4> <Switch />
                    </div>
                    <div className="flex space-x-3 items-center p-2">
                      <h4>Highlight on IT Pro+ Indicator</h4> <Switch />
                    </div>
                  </div>
                  <div className="w-full flex-1 mt-2 p-2 pr-0 flex space-x-3 items-center">
                    <h4>Confidence: </h4>
                    <Slider
                      defaultValue={[2]}
                      max={5}
                      step={1}
                      className="md:max-w-64 "
                    />{" "}
                  </div>
                  <p className="-ml-6 w-full text-center -mt-1 text-[12px] text-white/80">
                    1 (Gamble) ... 5 (Very Confident)
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex flex-col items-center justify-center px-2">
                <form className="grid h-full w-full gap-x-3 gap-y-5 p-3">
                  <Label htmlFor="file">Upload Picture </Label>
                  <div className="flex-col bg-input/40 border-input flex items-center justify-center h-36 cursor-pointer hover:bg-input/80 hover:scale-[1.02] transition-all rounded-lg">
                    <CameraIcon className="text-white/80 h-20 w-20" />
                    <Input
                      id="file"
                      type="file"
                      className="hidden bg-transparent"
                    />
                    <span className="text-[12px] text-white/80">
                      png, jpeg or jpeg
                    </span>
                  </div>

                  <Label htmlFor="review">Trade Review (Feedback)</Label>
                  <Textarea id="review" placeholder="Choose Coin" />
                  <Button className="bg-purple py-6 hover:bg-opacity-90">Upload Trade Data</Button>
                </form>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
