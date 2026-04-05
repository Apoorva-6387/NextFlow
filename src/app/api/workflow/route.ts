import { prisma } from "@/lib/prisma";

// POST
export async function POST(req: Request) {
  try {
    const { name, nodes, edges } = await req.json();

    const workflow = await prisma.workflow.create({
      data: {
        name,
        nodes,
        edges,
      },
    });

    return Response.json(workflow);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "DB Error" }),
      { status: 500 }
    );
  }
}

// GET
export async function GET() {
  try {
    const workflows = await prisma.workflow.findMany({
      orderBy: { createdAt: "desc" },
    });

    return Response.json(workflows);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "DB not connected" }),
      { status: 500 }
    );
  }
}