"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { FormSchema } from "@/utils/typings";
import { Switch } from "./ui/switch";
import {
  CalendarIcon,
  Camera,
  CameraIcon,
  ChevronsUpDown,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { listOfCoins } from "@/utils/constants";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import Image from "next/image";
import { Slider } from "./ui/slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "./ui/carousel";
import { Card } from "./ui/card";
import { Label } from "@/components/ui/label";

export default function TradeUploadForm() {
  const onSubmit: SubmitHandler<FormSchema> = async (data) => {

    const res = await fetch('/api/upload-trade', {
      method: 'POST',  // Ensure this is POST
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });
  };
  const screenShotRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, control, watch, setValue } =
    useForm<FormSchema>({
      defaultValues: {
        divergence: false,
        coinSymbol: "",
        trendlineRetest: false,
        proTrendBias: false,
        fibKeyLevels: false,
        indicatorHighlight: false,
        head_Shoulders: false,
        confidenceLevel: 0,
        date: undefined,
        outcome: "",
      },
    });
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full mt-8 flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center gap-4"
      >
        {" "}
        <div className="w-full flex flex-col gap-6">
          <Controller
            control={control}
            name="coinSymbol"
            render={({}) => (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                      "w-auto relative py-4 flex rounded-xl justify-between items-center input mx-auto transition-all"
                    )}
                  >
                    <div className="flex items-center pl-3 w-full">
                      {watch("coinSymbol") ? (
                        (() => {
                          const selectedCoin = listOfCoins.find(
                            (coin) => coin.value == watch("coinSymbol")
                          );
                          return selectedCoin ? (
                            <>
                              <Image
                                src={selectedCoin.logo}
                                alt={selectedCoin.name}
                                width={35}
                                height={35}
                                className="object-cover mr-4"
                              />
                              <span className="text-center text-xl font-bold tracking-wider">
                                {selectedCoin.name}
                              </span>
                            </>
                          ) : (
                            "Select a coin..."
                          );
                        })()
                      ) : (
                        <span className="text-white/60 font-normal">
                          Select a coin...
                        </span>
                      )}
                    </div>
                    <ChevronsUpDown className="opacity-80 ml-6 mr-2" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[280px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search coin..."
                      className="h-9 placeholder:text-gray-500"
                    />
                    <CommandList>
                      <CommandEmpty>No coin found.</CommandEmpty>
                      <CommandGroup>
                        {listOfCoins.map((coin, indx) => (
                          <CommandItem
                            key={indx}
                            className="flex items-center p-2 px-4 hover:bg-white hover:text-background rounded-lg cursor-pointer transition-colors duration-100 ease-in-out font-bold tracking-wider"
                            value={coin.value} // Ensure correct value is passed
                            onSelect={() => {
                              setValue("coinSymbol", coin.value); // Update react-hook-form state
                              setOpen(false); // Close dropdown after selection
                            }}
                          >
                            <Image
                              src={coin.logo}
                              alt={coin.name}
                              width={30}
                              height={30}
                              className="object-cover mr-3"
                            />
                            {coin.name}
                            <CheckBadgeIcon
                              className={cn(
                                "ml-auto h-6",
                                watch("coinSymbol").trim().toLowerCase() ===
                                  coin.value
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
            )}
          />
          <div className="flex w-full items-center justify-center gap-4">
            <Controller
              name="session"
              control={control}
              rules={{ required: true }}
              render={({ field: { name, onChange, value } }) => (
                <Select
                  required={true}
                  name={name}
                  value={value}
                  onValueChange={onChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Session" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Trade Session || Time Window</SelectLabel>
                      <SelectItem value="londonSession">
                        3am - 12pm (London Session)
                      </SelectItem>
                      <SelectItem value="london_NewYorkSession">
                        12pm - 4pm (London || New York Session)
                      </SelectItem>
                      <SelectItem value="newYorkSession">
                        4pm - 8pm (New York Session)
                      </SelectItem>
                      <SelectItem value="asianSession">
                        8pm - 2am (Asian Session)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex w-full gap-4">
            <Controller
              name="directionBias"
              rules={{ required: true }}
              control={control}
              render={({ field: { name, onChange, value } }) => (
                <Select onValueChange={onChange} name={name} value={value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Trend (Bias)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Trade Direction</SelectLabel>
                      <SelectItem value="long">
                        Long <TrendingUp className="ml-1 h-4 w-4 inline" />
                      </SelectItem>
                      <SelectItem value="short">
                        Short <TrendingDown className="ml-1 h-4 w-4 inline" />
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <Controller
              name="timeFrame"
              control={control}
              render={({ field: { name, value, onChange } }) => (
                <Select onValueChange={onChange} value={value} name={name}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Trade Timeframe</SelectLabel>
                      <SelectItem value="1 min">1 min</SelectItem>
                      <SelectItem value="3 min">3 min</SelectItem>
                      <SelectItem value="5min">5 min</SelectItem>
                      <SelectItem value="15min">15 min</SelectItem>
                      <SelectItem value="30 min">30 min</SelectItem>
                      <SelectItem value="1 hr">1 hr</SelectItem>
                      <SelectItem value="2 hr">2 hr</SelectItem>
                      <SelectItem value="4 hr">4 hr</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="w-full justify-center flex items-center gap-4">
            <Controller
              name="date"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className={`input  py-3 flex justify-center text-center font-normal ${
                        !value ? "text-muted-foreground" : ""
                      }`}
                    >
                      <CalendarIcon className="mr-3" />
                      {watch("date") ? (
                        format(watch("date") as Date, "PPPP")
                      ) : (
                        <span>Select Date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={value}
                      required={true}
                      onSelect={onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            <Controller
              control={control}
              name="outcome"
              render={({ field: { value, onChange } }) => (
                <RadioGroup value={value} onValueChange={onChange}>
                  <div className="flex gap-6 pr-5">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="win" id="win" />
                      <Label htmlFor="win">Win</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="loss" id="loss" />
                      <Label htmlFor="option-two">Loss</Label>
                    </div>
                  </div>
                </RadioGroup>
              )}
            />
          </div>
        </div>{" "}
        <div className="w-full flex flex-col gap-6 p-2">
          {" "}
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-4">
            <div className="flex flex-col justify-items-center w-full col-span-2">
              <label className="py-1 px-3 text-sm">Entry Price</label>
              <input
                type="number"
                step="any"
                min={0}
                autoComplete="off"
                placeholder="00.00"
                {...register("entryPrice", { required: true })}
                className="input appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="w-full flex col-span-2 gap-4">
              <div className="flex flex-col justify-items-center w-full">
                <label className="text-sm p-1">Position Size</label>
                <input
                  type="number"
                  step="any"
                  min={0}
                  autoComplete="off"
                  placeholder="000"
                  {...register("positionSize", { required: true })}
                  className="input appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div className="flex flex-col justify-items-center w-full">
                <label className="text-sm p-1">Risk Amount ($)</label>
                <input
                  type="number"
                  step="any"
                  min={0}
                  autoComplete="off"
                  placeholder="10"
                  {...register("riskAmount", { required: true })}
                  className="input appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <div className="flex flex-col justify-items-center w-full col-span-2">
              <label className="py-1 px-3 text-sm">Take Profit</label>
              <input
                type="number"
                step="any"
                min={0}
                autoComplete="off"
                placeholder="00.00"
                {...register("takeProfitPrice", { required: true })}
                className="input appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex flex-col justify-items-center w-full col-span-2">
              <label className="py-1 px-3 text-sm">Stop Loss</label>
              <input
                type="number"
                step="any"
                min={0}
                autoComplete="off"
                placeholder="00.00"
                {...register("stopLossPrice", { required: true })}
                className="input appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div className="flex w-full flex-col py-3">
            <h3 className="text-lg tracking-wide font-semibold">
              Trade Strategy Metrics
            </h3>
            <div className="flex flex-wrap w-full items-center gap-6 p-5">
              <div className="flex items-center gap-4 flex-nowrap">
                <p className="font-medium whitespace-nowrap text-sm">
                  Divergence
                </p>{" "}
                <Switch
                  checked={watch("divergence")}
                  onCheckedChange={(value) => setValue("divergence", value)}
                />
              </div>
              <div className="flex items-center gap-4 flex-nowrap">
                <p className="font-medium whitespace-nowrap text-sm">
                  Trendline Retest
                </p>{" "}
                <Switch
                  checked={watch("trendlineRetest")}
                  onCheckedChange={(value) =>
                    setValue("trendlineRetest", value)
                  }
                />
              </div>
              <div className="flex items-center gap-4 flex-nowrap">
                <p className="font-medium whitespace-nowrap text-sm">
                  Head & Shoulders Pattern
                </p>{" "}
                <Switch
                  checked={watch("head_Shoulders")}
                  onCheckedChange={(value) => setValue("head_Shoulders", value)}
                />
              </div>
              <div className="flex items-center gap-4 flex-nowrap">
                <p className="font-medium whitespace-nowrap text-sm">
                  Aligns with 15 min trend bias
                </p>{" "}
                <Switch
                  checked={watch("proTrendBias")}
                  onCheckedChange={(value) => setValue("proTrendBias", value)}
                />
              </div>
              <div className="flex items-center gap-4 flex-nowrap">
                <p className="font-medium whitespace-nowrap text-sm">
                  Fib key Levels
                </p>{" "}
                <Switch
                  checked={watch("fibKeyLevels")}
                  onCheckedChange={(value) => setValue("fibKeyLevels", value)}
                />
                <div className="flex items-center gap-4 flex-nowrap">
                  <p className="font-medium whitespace-nowrap text-sm">
                    Highlight on IT Pro+ Indicator
                  </p>{" "}
                  <Switch
                    checked={watch("indicatorHighlight")}
                    onCheckedChange={(value) =>
                      setValue("indicatorHighlight", value)
                    }
                  />
                </div>
              </div>
              <div className="w-full flex items-center gap-4">
                <p className="font-medium text-sm shrink-0">Confidence:</p>{" "}
                <div className="relative w-full max-w-80 flex-1 ">
                  <Slider
                    className=""
                    onValueChange={(val) => setValue("confidenceLevel", val[0])}
                    defaultValue={[watch("confidenceLevel")]}
                    max={5}
                    step={1}
                  />
                  <span className="w-full absolute -bottom-6 text-[11px] font-normal tracking-wider text-white/80 text-center">
                    1 (Gamble) ... 5 (Very Confident)
                  </span>
                </div>
                <span className="font-bold text-base shrink-0">
                  {watch("confidenceLevel")}
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-full flex flex-col gap-6 p-2">
          <div className="flex flex-col justify-items-center w-full col-span-2">
            <label className="py-1 px-3 text-sm">Upload Picture</label>
            <input ref={screenShotRef} type="file" hidden={true} />
            <div
              onClick={() => screenShotRef?.current?.click()}
              className="w-full bg-input rounded-2xl h-40 flex items-center justify-center text-white/80 cursor-pointer hover:scale-[1.02] duration-200 transition flex-col"
            >
              <CameraIcon className="h-20 w-20 text-white/50" />
              <span
                className="text-[11px] tracking-wider -mt-1
                    "
              >
                *.jpg .png .jpeg
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-items-center w-full">
            <label className="py-1 px-3 text-sm">Trade Review</label>
            <textarea
              placeholder="What did you learn from the trade..."
              {...register("tradeReview", { required: true })}
              className="input font-light min-h-48 pl-4 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <Button
            className="bg-purple text-white hover:bg-white hover:text-background font-bold tracking-wider"
            type="submit"
            variant={"outline"}
          >
            Log Trade
          </Button>
        </div>
      </form>
      {/* <DatePickerForm /> */}
    </div>
  );
}
