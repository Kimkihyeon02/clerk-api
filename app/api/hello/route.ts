import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello next.js',
    contents: '안녕하세요',
  }
  return NextResponse.json(data)
}
