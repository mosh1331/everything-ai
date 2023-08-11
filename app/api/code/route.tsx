import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(configuration)

const instructions ={
  role:"system",
  content:"you are a code generator,You must answer only in markdown code snippets. Use code comments for explanations"
}

export async function POST (req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body

    if (!userId) {
      return new NextResponse('Unauthorised', { status: 401 })
    }

    if (!configuration.apiKey) {
      return new NextResponse('OpenAi Api key not configured', { status: 500 })
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 })
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages:[instructions,...messages]
    })

    return NextResponse.json(response.data.choices[0].message)
  } catch (error) {
    console.log(error, 'code Error')
    return new NextResponse('Internal error', { status: 500 })
  }
}
