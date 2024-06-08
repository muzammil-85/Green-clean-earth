"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { apiURL } from "@/app/api/status/route";

import NavigationBar from "@/components/navigationBar";
import Footer from "@/components/footer";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast";
const formSchema = z.object(
  {
    "city_name":z.string().max(255),
    "category":z.string().max(255),
    "country":z.string().max(255),
    "state":z.string().max(255),
    "district":z.string().max(255),
    "lsgdzone":z.string().max(255),
    "total_team":z.coerce.number(),
  })

export default function PromoterAdditionalDetails() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [category, setCategory] = useState([]);
  const [lsgd, setLsgd] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  
  useEffect(() => {
    async function fetchData() {
      const countryResponse = await fetch(`${apiURL}/country`);
      const countryData = await countryResponse.json();
      setCountries(countryData.country);

      const stateResponse = await fetch(`${apiURL}/state`);
      const stateData = await stateResponse.json();
      setStates(stateData.state);

      const districtResponse = await fetch(`${apiURL}/district`);
      const districtData = await districtResponse.json();
      setDistricts(districtData.district);

      const categoryResponse = await fetch(`${apiURL}/category`);
      const categoryData = await categoryResponse.json();
      setCategory(categoryData.category);
    }
    fetchData();
  }, []);

  
  useEffect(() => {
    async function fetchLsgdData() {
      if (selectedDistrict) {
        console.log(selectedDistrict);
        const lsgResponse = await fetch(`${apiURL}/lsg/${selectedDistrict}`);
        const lsgData = await lsgResponse.json();
        setLsgd(lsgData.district);
      }
    }
    fetchLsgdData();
  }, [selectedDistrict]);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })
// get group id from the url parameter
const searchParams = useSearchParams();

const group_id = searchParams.get("group_id");
const router = useRouter();
const { toast } = useToast()
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const dataWithIds = {
      cityName : values.city_name,
      countryId : countries.find((item) => item.cntry_name === values.country)?.cntry_id,
      stateId : states.find((item) => item.st_name === values.state)?.st_id,
      districtId : districts.find((item) => item.dis_name === values.district)?.dis_id,
      lsgdId : lsgd.find((item) => item.lsg_name === values.lsgdzone)?.lsg_id,
      totalNoOfMembers : values.total_team,
      categoryIdPromoting : category.find((item) => item.group_type === values.category)?.id,
      groupId: parseInt(group_id),
     
 
    };
    console.log(dataWithIds);
  
    try {
      const response = await fetch(`${apiURL}/group/promoter/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataWithIds),
      });
  
      if (!response.ok) {
        console.log(response);
        throw new Error("Network response was not ok");
      }
  
      const result = await response.json();
      if (result) {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
        })
        router.push("/login");
      }
      console.log(result);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops,Something went wrong !",
        description: "Please try again...",
      })
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-green-50 dark:bg-gray-900">
      <NavigationBar />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-8">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Promoter - Additional details</h1>
              <h1 className="text-base font-normal leading-tight tracking-tight text-gray-600 dark:text-white">
              Helping School, NGO, or Residence Association</h1>
          <Form {...form}>
            <form  noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                        control={form.control}
                        name="city_name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>City name</FormLabel>
                            <FormControl>
                            <Input   {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

<FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose a category" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                  {category.map((category) => (
                            <SelectItem key={category.id} value={category.group_type}>
                              {category.group_type}
                            </SelectItem>
                          ))}
                                  
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                                  

                    <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Country</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose a country" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                  {countries.map((country) => (
                            <SelectItem key={country.cntry_id} value={country.cntry_name}>
                              {country.cntry_name}
                            </SelectItem>
                          ))}
                                    <SelectItem value="other">Other</SelectItem>

                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />             
                    <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose state" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                  {states.map((state) => (
                            <SelectItem key={state.st_id} value={state.st_name}>
                              {state.st_name}

                            </SelectItem>
                          ))}
                          <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />  


                    <FormField
                            control={form.control}
                            name="district"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>District</FormLabel>
                                <Select onValueChange={(value) => {
                                    form.setValue("district", value);
                                    value = districts.find((item) => item.dis_name === value)?.dis_id
                                    setSelectedDistrict(value);
                                  }} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose district" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                  {districts.map((district) => (
                            <SelectItem key={district.dis_id} value={district.dis_name}>
                              {district.dis_name}
                            </SelectItem>
                          ))}
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                  
                    <FormField
                            control={form.control}
                            name="lsgdzone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>LSGD / Zone</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose Zone" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                  { lsgd && lsgd.map((lsg) => (
                                          <SelectItem key={lsg.lsg_id} value={lsg.lsg_name}>
                                            {lsg.lsg_name}
                                          </SelectItem>
                                        ))}
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                  <FormField
                    control={form.control}
                    name="total_team"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total number of team members</FormLabel>
                        <FormControl>
                          <Input  type="number" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              <Button type="submit" className="bg-green-600">Submit</Button>
            </form>
          </Form>
    </div>
      </div>
  </div>
  <Footer/>
</section>
  )
}
