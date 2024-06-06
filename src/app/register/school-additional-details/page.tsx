"use client";

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/extension/multi-select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import NavigationBar from "@/components/navigationBar";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BsImages, BsPaperclip } from "react-icons/bs";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { baseUrl } from "@/app/api/status/route";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];



const form = z.object({
  // value -> club names array
  value: z.array(z.string()).nonempty("Please select at least one club"),
  no_of_students: z.coerce.number(),
  total_classes:z.coerce.number().gte(1).lte(999),
  list_of_classes:z.string().min(3).max(255),
  your_coordinator:z.string().min(3).max(255),
  // image: z
  //         .any()
  //         .refine((files) => {
  //         return files?.[0]?.size <= MAX_FILE_SIZE;
  //         }, `Max image size is 5MB.`)
  //         .refine(
  //         (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
  //         "Only .jpg, .jpeg, .png and .webp formats are supported."
  //         ),
  phoneNUmber: z.coerce.number(),
  referral_name: z.string().min(3),
});

type Form = z.infer<typeof form>;

const clubs_options = [
    { label: "NSS", value: "nss" },
    { label: "SPC", value: "spc" },
    { label: "JRC", value: "jrc" },
    { label: "Bscg", value: "bscg" },
    { label: "Hscg", value: "hscg" },
  ];


const MultiSelectZod = () => {
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const multiForm = useForm<Form>({
    resolver: zodResolver(form),
    defaultValues:
      {
        value: [clubs_options[0].label],
        // no_of_studs: 1,
      }
  });
// get group id from the url parameter
  const searchParams = useSearchParams();

  const group_id = searchParams.get("group_id");



  const onSubmit = async (data: Form) => {
    // Create a new FormData object
      const formData = new FormData();

      // Append each property to the FormData object
      formData.append('groupId', parseInt(group_id));
      formData.append('clubs', data.value.join(','));
      formData.append('list_of_classes', data.list_of_classes);
      formData.append('no_of_students', data.no_of_students);
      formData.append('phoneNUmber', data.phoneNUmber);
      // formData.append('image', selectedImage);
  
    try {
      const response = await fetch(`${baseUrl}/group/school/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
  
      if (!response.ok) {
        console.log(response);
        throw new Error("Network response was not ok");
      }
  
      const result = await response.json();
      console.log(result);
      
      // router.push("/register/promoter-additional-details?group_id=" + group_id);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-green-50">
    <NavigationBar />
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-8">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        School - Additional details</h1>
    <Form {...multiForm}>
      <form
        onSubmit={multiForm.handleSubmit(onSubmit)}
        className="space-y-3 grid gap-3 w-full"
      >
        <FormField
          control={multiForm.control}
          name="value"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>List of clubs in your school</FormLabel>
              <MultiSelector
                onValuesChange={field.onChange}
                values={field.value}
              >
                <MultiSelectorTrigger className="border border-gray-200">
                  <MultiSelectorInput placeholder="Select clubs" />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {clubs_options.map((club) => (
                      <MultiSelectorItem key={club.value} value={club.label}>
                        <div>
                          {club.label}
                        </div>
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
              </MultiSelector>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={multiForm.control}
          name="no_of_students"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Number of students this year</FormLabel>
              <FormControl>
                  <Input type="number" placeholder="" {...field} />
              </FormControl>
              <FormDescription> </FormDescription>
              <FormMessage />
              </FormItem>
          )}
          />

        <FormField
          control={multiForm.control}
          name="total_classes"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Total number of classes</FormLabel>
              <FormControl>
                  <Input type="number" placeholder="" {...field} />
              </FormControl>
              <FormDescription> </FormDescription>
              <FormMessage />
              </FormItem>
          )}
          />
        <FormField
          control={multiForm.control}
          name="list_of_classes"
          render={({ field }) => (
              <FormItem>
              <FormLabel>List of classes</FormLabel>
              <FormControl>
                  <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription> </FormDescription>
              <FormMessage />
              </FormItem>
          )}
          />
        <FormField
          control={multiForm.control}
          name="your_coordinator"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Your coordinator</FormLabel>
              <FormControl>
                  <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription> </FormDescription>
              <FormMessage />
              </FormItem>
          )}
          />

          {/* <div className={cn("flex md:flex-row w-[100%] gap-4 flex-col")}>
                      <div className="flex w-[100%] gap-2 flex-col my-4">
                        <FormLabel>Upload plant image</FormLabel>
                        <span className="text-xs text-gray-400">Maximum file size 5MB</span>
                        <div className={`flex w-[100%] gap-4 p-4 rounded border border-neutral-200 flex-col items-center md:flex-row md:justify-between md:items-center`}>
                          <div className={`flex  md:flex-[1] h-[fit-content] md:p-4 md:justify-between md:flex-row`}>
                            {selectedImage ? (
                              <div className="md:max-w-[200px]">
                                <img
                                  src={URL.createObjectURL(selectedImage)}
                                  alt="Selected"
                                />
                              </div>
                            ) : (
                              <div className="inline-flex items-center justify-between">
                                <div className="p-3 bg-slate-200  justify-center items-center flex">
                                  <BsImages size={56} />
                                </div>
                              </div>
                            )}
                          </div> 
                          
                          <FormField
                            control={multiForm.control}
                            name="image"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Button size="lg" type="button" className="bg-green-100 hover:bg-green-300 border-2 border-green-600 text-green-600">
                                    <input
                                      type="file"
                                      className="hidden"
                                      id="fileInput"
                                      accept="image/*"
                                      onBlur={field.onBlur}
                                      name={field.name}
                                      onChange={(e) => {
                                        field.onChange(e.target.files);
                                        setSelectedImage(e.target.files?.[0] || null);
                                      }}
                                      ref={field.ref}
                                    />
                                    <label
                                      htmlFor="fileInput"
                                      className="text-neutral-90  rounded-md cursor-pointer inline-flex items-center"
                                    >
                                      <BsPaperclip />
                                      <span className="whitespace-nowrap">
                                        Choose your image
                                      </span>
                                    </label>
                                  </Button>
                                </FormControl>
                                

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
          </div>         */}




        <FormField
          control={multiForm.control}
          name="phoneNUmber"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                  <Input type="number" placeholder="" {...field} />
              </FormControl>
              <FormDescription> </FormDescription>
              <FormMessage />
              </FormItem>
          )}
          />

        <FormField
          control={multiForm.control}
          name="referral_name"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Referral name</FormLabel>
              <FormControl>
                  <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription> </FormDescription>
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
    </section>
  );
};

export default MultiSelectZod;
