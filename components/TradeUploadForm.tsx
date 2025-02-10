"use client";

import { useState } from "react";
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
  ChevronsUpDown,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { listOfCoins } from "@/utils/constants";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import Image from "next/image";
import { Slider } from "./ui/slider";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";

export default function TradeUploadForm() {
  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    console.log(data);

    // event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // console.log("Submitted data: ", formData);
    // const response = await fetch("/api/upload", {
    //   method: "POST",
    //   body: formData,
    // });
  };
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState 
  } = useForm<FormSchema>({
    defaultValues: {
      divergence: false,
      coinSymbol: "",
      trendlineRetest: false,
      proTrendBias: false,
      fibKeyLevels: false,
      indicatorHighlight: false,
      head_Shoulders: false,
      confidenceLevel: 1,
      date: undefined,
    },
  });
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full mt-10 flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-3 bg-red max-w-xl"
      >
        <Carousel>
          <CarouselContent>
            {/* Page 1 */}
            <CarouselItem>
              <Card>
                <div className="w-full flex flex-col gap-3">
                  <Controller
                    control={control}
                    name="coinSymbol"
                    render={({ field }) => (
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            role="combobox"
                            aria-expanded={open}
                            className="w-auto relative py-4 flex rounded-xl justify-between items-center input mx-auto"
                          >
                            <div className="flex items-center pl-3 w-full">
                              {watch("coinSymbol")
                                ? (() => {
                                    const selectedCoin = listOfCoins.find(
                                      (coin) =>
                                        coin.value == watch("coinSymbol")
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
                                : "Select a coin..."}
                            </div>
                            <ChevronsUpDown className="opacity-80 ml-6 mr-2" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[280px] p-0">
                          <Command>
                            <CommandInput
                              placeholder="Search coin..."
                              className="h-9"
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
                                        watch("coinSymbol")
                                          .trim()
                                          .toLowerCase() === coin.value
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
                  <div className="flex w-full items-center justify-center gap-3">
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
                            <SelectValue placeholder="Session" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>
                                Trade Session || Time Window
                              </SelectLabel>
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
                    <div className="flex w-full gap-3">
                      <Controller
                        name="directionBias"
                        rules={{ required: true }}
                        control={control}
                        render={({ field: { name, onChange, value } }) => (
                          <Select
                            onValueChange={onChange}
                            name={name}
                            value={value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Trend (Bias)" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Trade Direction</SelectLabel>
                                <SelectItem value="long">
                                  Long{" "}
                                  <TrendingUp className="ml-1 h-4 w-4 inline" />
                                </SelectItem>
                                <SelectItem value="short">
                                  Short{" "}
                                  <TrendingDown className="ml-1 h-4 w-4 inline" />
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
                          <Select
                            onValueChange={onChange}
                            value={value}
                            name={name}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Timeframe" />
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
                  </div>{" "}
                  <div className="w-full justify-center flex items-center gap-3">
                    <Controller
                      control={control}
                      rules={{ required: true }}
                      name="date"
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
                                <span>Pick a date</span>
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
                      name="outcome"
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
                            <SelectValue placeholder="Session" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Trade Outcome</SelectLabel>
                              <SelectItem value="won">Won</SelectItem>
                              <SelectItem value="lost">Lost</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>
              </Card>
            </CarouselItem>
            {/* Page 2 */}
            <Card>
              {" "}
              <CarouselItem>
                <div className="w-full flex flex-col gap-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-3">
                    <div className="flex flex-col justify-items-center w-full col-span-2">
                      <label className="px-3">Entry Price</label>
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
                    <div className="w-full flex col-span-2 gap-3">
                      <div className="flex flex-col justify-items-center w-full">
                        <label className="px-1">Position Size</label>
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
                        <label className="px-1">Risk Amount ($)</label>
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
                  <div className="w-full flex gap-3">
                    <div className="flex flex-col justify-items-center w-full col-span-2">
                      <label className="px-3">Take Profit</label>
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
                      <label className="px-3">Stop Loss</label>
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
                    <h3 className="text-xl font-semibold">
                      Trade Strategy Metrics
                    </h3>
                    <div className="flex flex-wrap w-full items-center gap-5 p-5">
                      <div className="flex items-center gap-4 flex-nowrap">
                        <p className="font-medium whitespace-nowrap">
                          Divergence
                        </p>{" "}
                        <Switch
                          checked={watch("divergence")}
                          onCheckedChange={(value) =>
                            setValue("divergence", value)
                          }
                        />
                      </div>
                      <div className="flex items-center gap-4 flex-nowrap">
                        <p className="font-medium whitespace-nowrap">
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
                        <p className="font-medium whitespace-nowrap">
                          Head & Shoulders Pattern
                        </p>{" "}
                        <Switch
                          checked={watch("head_Shoulders")}
                          onCheckedChange={(value) =>
                            setValue("head_Shoulders", value)
                          }
                        />
                      </div>
                      <div className="flex items-center gap-4 flex-nowrap">
                        <p className="font-medium whitespace-nowrap">
                          Aligns with 15 min trend bias
                        </p>{" "}
                        <Switch
                          checked={watch("proTrendBias")}
                          onCheckedChange={(value) =>
                            setValue("proTrendBias", value)
                          }
                        />
                      </div>
                      <div className="flex items-center gap-4 flex-nowrap">
                        <p className="font-medium whitespace-nowrap">
                          Fib key Levels
                        </p>{" "}
                        <Switch
                          checked={watch("fibKeyLevels")}
                          onCheckedChange={(value) =>
                            setValue("fibKeyLevels", value)
                          }
                        />
                        <div className="flex items-center gap-4 flex-nowrap">
                          <p className="font-medium whitespace-nowrap">
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
                      <div className="w-full flex items-center gap-3">
                        <p className="font-medium  shrink-0">Confidence:</p>{" "}
                        <div className="relative w-full flex-1 ">
                          <Slider
                            className=""
                            onValueChange={(val) =>
                              setValue("confidenceLevel", val[0])
                            }
                            defaultValue={[watch("confidenceLevel")]}
                            max={5}
                            step={1}
                          />
                          <span className="w-full absolute -bottom-6 text-[11px] font-normal tracking-wider text-white/80 text-center">
                            1 (Gamble) ... 5 (Very Confident)
                          </span>
                        </div>
                        <span className="font-bold text-lg shrink-0">
                          {watch("confidenceLevel")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-purple text-white hover:bg-white hover:text-background font-bold tracking-wider"
                    type="submit"
                    variant={"outline"}
                  >
                    Log Trade
                  </Button>
                </div>
              </CarouselItem>
            </Card>
          </CarouselContent>
        </Carousel>
      </form>
      {/* <DatePickerForm /> */}
    </div>
  );
}
