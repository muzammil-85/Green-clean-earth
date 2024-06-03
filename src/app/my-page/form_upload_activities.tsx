
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
import { cn } from "@/lib/utils";
import { BsImages, BsPaperclip } from "react-icons/bs"
import { useState } from "react"

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

const formSchema = z.object({
  "category":z.string(),
  "sub_category":z.string(),
  "name":z.string().max(255),
  "address":z.string().max(255),
  "activity_title":z.string().max(255),
  "short_desc":z.string().max(255),
  "social_link":z.string().max(255),
  adImage: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
})



export function FormUploadActivities() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
// name: "string",
// address: "string",
// activity_title: "string",
// short_desc: "string",
// social_link: "string",
},
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-2">
             
               <FormField
                       control={form.control}
                       name="category"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Category</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                             <FormControl>
                               <SelectTrigger>
                                 <SelectValue placeholder="" />
                               </SelectTrigger>
                             </FormControl>
                             <SelectContent>
                               <SelectItem value="dance">Dance</SelectItem>
                               <SelectItem value="music">Music</SelectItem>
                             </SelectContent>
                           </Select>
                           <FormDescription>
                           Choose a category
                           </FormDescription>
                           <FormMessage />
                         </FormItem>
                       )}
                     />             
               <FormField
                       control={form.control}
                       name="sub_category"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Sub Category</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                             <FormControl>
                               <SelectTrigger>
                                 <SelectValue placeholder="" />
                               </SelectTrigger>
                             </FormControl>
                             <SelectContent>
                               <SelectItem value="general">General</SelectItem>
                               <SelectItem value="other">Others</SelectItem>
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input  placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input  placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="activity_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Title</FormLabel>
                  <FormControl>
                    <Input  placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="short_desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input  placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="social_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Social Media Link</FormLabel>
                  <FormControl>
                    <Input  placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className={cn("flex md:flex-row w-[100%] gap-4 flex-col")}>
              <div className="flex w-[100%] gap-2 flex-col my-4">
              <FormLabel>Upload plant image</FormLabel>
              <span className="text-xs text-gray-400">Maximum file size 5MB</span>
              <div className={`flex w-[100%] gap-4 p-4 rounded border border-neutral-200 flex-col items-center md:flex-col md:justify-between md:items-center`}>
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
                  control={form.control}
                  name="adImage"
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
          </div>





        <Button type="submit" className="bg-green-600">Submit</Button>
      </form>
    </Form>
  )
}
