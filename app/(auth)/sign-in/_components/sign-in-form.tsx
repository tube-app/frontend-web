"use client"

import { useTransition } from "react"
import { signIn } from "@/actions/sign-in"
import { signInSchema } from "@/schemas/index"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { PasswordInput } from "@/components/password-input"
import { Spinner } from "@/components/spinner"
import { CardWrapper } from "@/app/(auth)/_components/card-wrapper"

export function SignInForm() {
  const [isPending, startTransition] = useTransition()

  const { toast } = useToast()

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (values: z.infer<typeof signInSchema>) => {
    startTransition(async () => {
      const result = await signIn(values)

      if (!result.isSuccess) {
        toast({
          title: result.error.message,
          variant: "destructive",
        })

        return
      }

      toast({ title: result.message })
    })
  }

  return (
    <CardWrapper>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>パスワード</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="123456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending && (
              <Spinner className="mr-2 animate-spin" aria-hidden="true" />
            )}
            ログイン
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
