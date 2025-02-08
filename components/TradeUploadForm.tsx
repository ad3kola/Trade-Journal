"use client";

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
import { CameraIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/utils/formSchema";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { ChevronsUpDown } from "lucide-react";
import { listOfCoins } from "@/utils/constants";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/lib/utils";

export function TradeUploadForm() {
  const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
  ] as const;
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const handleSubmit = () => {};

  return (
    <div className="flex w-full mt-20 flex-col items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col items-center jusitfy-center gap-3  w-full"
        >
          <FormField
            name="coinTicker"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full mx-auto flex items-center justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        role="combobox"
                        className={cn(
                          "bg-input p-4 w-56 pl-0 font-bold text-base text-center  hover:bg-neutral-900 transition ease-in-out cursor-pointer duration-400 relative",
                          !field.value &&
                            "text-white/80 tracking-wider text-sm w-60"
                        )}
                      >
                        {field.value
                          ? listOfCoins.find((coin) => coin === field.value) ||
                            "Search for Coin Symbol"
                          : "Search for Coin Symbol"}

                        <ChevronsUpDown className="absolute ml-2 right-5 h-4 w-4 shrink-0" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-60 p-0">
                    <Command>
                      <CommandInput placeholder="Search coin..." />
                      <CommandList>
                        <CommandEmpty>No coin found.</CommandEmpty>
                        <CommandGroup>
                          {listOfCoins.map((coin) => (
                            <CommandItem
                              key={coin}
                              value={coin}
                              onSelect={() => form.setValue("coinTicker", coin)}
                            >
                              <div className="flex items-center gap-3 font-semibold tracking-wider">
                                <Image
                                  className="rounded-full object-cover"
                                  src={"/assets/bitcoin.png"}
                                  height={25}
                                  width={25}
                                  alt=""
                                />{" "}
                                {coin}
                              </div>
                              <CheckBadgeIcon
                                className={cn(
                                  "ml-auto",
                                  coin === form.getValues("coinTicker")
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <div className="w-full flex items-center justify-center gap-3">
            <FormField
              name="direction"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="text-white/80 tracking-wider">
                        <SelectValue placeholder="Trade Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Long">Long</SelectItem>
                      <SelectItem value="Short">Short</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="direction"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="text-white/80 tracking-wider">
                        <SelectValue placeholder="Timeframe" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="zone1">During sessions [3am - 12pm]</SelectItem>
                      <SelectItem value="zone2">Zone 2 [12 - 4pm]</SelectItem>
                      <SelectItem value="zone3">Zone 3 [4pm - 9pm]</SelectItem>
                      <SelectItem value="zone4">Zone 4 [9pm-2am]</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
      {/* <Carousel className="w-full mx-auto max-w-xl -mt-10">
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
                    <Select>
                      <SelectTrigger className="w-[280px]">
                        <SelectValue
                          placeholder="Select a timezone"
                          className="text-red"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="est">
                            Eastern Standard Time (EST)
                          </SelectItem>
                          <SelectItem value="cst">
                            Central Standard Time (CST)
                          </SelectItem>
                          <SelectItem value="mst">
                            Mountain Standard Time (MST)
                          </SelectItem>
                          <SelectItem value="pst">
                            Pacific Standard Time (PST)
                          </SelectItem>
                          <SelectItem value="akst">
                            Alaska Standard Time (AKST)
                          </SelectItem>
                          <SelectItem value="hst">
                            Hawaii Standard Time (HST)
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                        className="md:max-w-64 max-w-60"
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
                    <Button className="bg-purple py-6 hover:bg-opacity-90">
                      Upload Trade Data
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
    </div>
  );
}
