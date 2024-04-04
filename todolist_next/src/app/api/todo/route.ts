"use server"
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await axios.get('http://localhost:8080/todo');
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("error 2 - ", error);   
    }
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        await axios.post('http://localhost:8080/todo', data);
    } catch (error) {
        console.log("error 3 - ", error);   
    }
}