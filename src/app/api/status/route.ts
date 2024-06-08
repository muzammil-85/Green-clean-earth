"use client";
import { NextRequest, NextResponse } from "next/server"


export function GET() {
    return NextResponse.json({
        status : "Good"
    })
}

export const imageURL = process.env.NEXT_PUBLIC_IMAGE_URL
export const baseURL = process.env.NEXT_PUBLIC_BASE_URL
export const apiURL = process.env.NEXT_PUBLIC_API_URL