'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import axios from 'axios'
import Header from '@/components/Header'
import { LuCode, LuMessagesSquare } from 'react-icons/lu'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { formSchema } from './constants'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import UserAvatar from '@/components/UserAvatar'
import BotAvatar from '@/components/BotAvatar'
import { cn } from '@/lib/utils'
import Empty from '@/components/Empty'
import Loader from '@/components/Loader'

const CodePage = () => {
  const [messages, setMessages] = useState<Array<any>>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ''
    }
  })

  const isLoading = form.formState.isSubmitting

  const submit = async () => {}

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const userMessage = {
      role: 'user',
      content: values.prompt
    }
    const newMessage = [...messages, userMessage]
    const response = await axios.post('/api/code', {
      messages: newMessage
    })
    form.reset()
    setMessages(prev => [...prev, userMessage, response.data])
  }

  return (
    <div className='h-full '>
      <Header
        title='Code Generator'
        description='Generate code using text'
        icon={LuCode}
        iconColor='text-green-700'
        bgColor='bg-green-700/10'
      />

      <div className='px-4 lg:px-8'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='
                rounded-lg
                    border
                    w-full
                    px-3
                    py-4
                    md:px-6
                    focus-within:shadow-sm
                    grid
                    grid-cols-12
                    gap-2
                '
          >
            <FormField
              name='prompt'
              render={({ field }) => (
                <FormItem className='col-span-12 lg:col-span-10'>
                  <FormControl className='m-0 p-0'>
                    <Input
                      placeholder='generate a toggle button component in react js'
                      className='border-0 outline-0 focus-visible:ring-0 focus-visible:ring-transparent'
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className='col-span-12  lg:col-span-2'
              onClick={() => submit()}
            >
              Submit
            </Button>
          </form>
        </Form>
        <div className='space-y-4 mt-4'>
          {messages.length === 0 && !isLoading ? <Empty label={"No conversation started"} />:null}
          {isLoading ? <Loader />:null}
          <div className='flex flex-col col-span-12  gap-y-4'>
            {messages?.map(i => {
              return (
                <div
                  key={i.content}
                  className={cn(
                    'w-full flex items-start p-8 w-full gap-x-8 ',
                    i.role === 'user'
                      ? 'bg-white border border-black/10'
                      : 'bg-muted'
                  )}
                >
                  {i.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                  <p className='text-sm'>{i.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodePage
