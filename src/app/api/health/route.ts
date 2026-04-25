import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      service: "aventura",
      status: "ok",
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  );
}
