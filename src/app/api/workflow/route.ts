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
        userId, // 🔥 attach user
      },
    });

    return Response.json(workflow);
  } catch (error) {
    return new Response("Error", { status: 500 });
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
      where: { userId }, // 🔥 filter by user
      orderBy: { createdAt: "desc" },
    });

    return Response.json(workflows);
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}