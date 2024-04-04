"use server"
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, {params}:{params:{id:string}}) {
    try {
        const data = await  request.json();
        const response = await axios.put(`http://localhost:8080/todo/${params.id}`, data);
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("error 2 - ", error);   
    }
}

