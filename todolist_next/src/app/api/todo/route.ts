"use server"
import axios from 'axios'
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        console.log("Got to the next backend....")
        const response = await axios.get('http://localhost:8080/todo');
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("error 2 - ", error);   
    }
}