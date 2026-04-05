import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, nodes, edges } = await req.json();

  const workflow = await prisma.workflow.create({
    data: {
      name,
      nodes,
      edges,
    },
  });

  return Response.json(workflow);
}