import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

// POST
export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const { name, nodes, edges } = await req.json();

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const workflow = await prisma.workflow.create({
      data: {
        name,
        nodes,
        edges,
        userId, //  attach user
      },
    });

    return NextResponse.json(workflow);
  } catch (error) {
    console.error("/api/workflow POST error", error);
    const message =
      error instanceof Error ? error.message : typeof error === "string" ? error : "Unknown error";
    return new Response(message, { status: 500 });
  }
}

// GET (only user's workflows)
export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const workflows = await prisma.workflow.findMany({
      where: { userId }, // filter by user
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(workflows);
  } catch (error) {
    console.error("/api/workflow GET error", error);
    const message =
      error instanceof Error ? error.message : typeof error === "string" ? error : "Unknown error";
    return new Response(message, { status: 500 });
  }
}