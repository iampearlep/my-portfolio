import { getNowPlaying } from '@/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await getNowPlaying();
        return NextResponse.json(response);
      } catch (error) {
        console.error('API route error:', error);
        return NextResponse.json(
          { error: 'Failed to fetch now playing data' },
          { status: 500 }
        );
      }
}