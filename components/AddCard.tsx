"use client"

import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { addCardServer } from "@/action/actions"
import { useUser } from "@clerk/nextjs"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  cardNumber: z.string()
    .min(12, { message: "Card number must be at least 12 digits" })
    .max(19, { message: "Card number cannot exceed 19 digits" })
    .regex(/^\d+$/, { message: "Card number must contain only digits" }),
  
  expiryDate: z.string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Expiry date must be in MM/YY format" })
    .refine((value) => {
      const [month, year] = value.split('/').map(Number);
      const expiry = new Date(2000 + year, month - 1);
      return expiry > new Date();
    }, { message: "Card has expired" }),
  
  cvv: z.coerce.number()
    .min(3, { message: "CVV must be at least 3 digits" })
})

export function AddCard() {
  const user = useUser()
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: 0
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    if(user.user){
      addCardServer(values.cardNumber, values.expiryDate, values.cvv, user.user.id)
      toast.success('Card Added!');
      form.reset();
      router.refresh();
    }
  }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <Input placeholder="Card Number" {...field} />
              </FormControl>
              <FormDescription>
                This is your card number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="expiryDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expiry Date</FormLabel>
              <FormControl>
                <Input placeholder="Expiry Date" {...field} />
              </FormControl>
              <FormDescription>
                This is your card expiry date.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="cvv"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CVV</FormLabel>
              <FormControl>
                <Input placeholder="CVV" {...field} />
              </FormControl>
              <FormDescription>
                This is your card CVV.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    
  )
}

