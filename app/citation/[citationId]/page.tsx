import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import { Link } from "lucide-react";

export default async function Page(props: {
    params: Promise<{
        citationId: string
    }>
    searchParams: Promise<Record<string, string | string[]>>
}) {
    const params = await props.params;
    
    const citationId = params.citationId
    
    const searchParams = await props.searchParams;
    
    const citation = await prisma.citation.findFirst({
        where: {
            id: Number(params.citationId)
        }
        })
        
        if(!citation) {
            return (
                    <div>
                        <h1>Citation {citationId} not exist</h1>
                    </div>
                )
            }
            return (
                <div className="min-h-full flex items-center justify-center">
                    <Card className="p-4 max-w-sm m-a flex items-center">
                        <CardContent className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2 flex-1">
                                    </div>
                                    <p className="realtive pl-8 italic before:content-['«'] before:absolute after:content-['»']">{citation.text}</p>
                                    <p>-- {citation.author}</p>
                            <Link href="/admin/citations/new" className={buttonVariants({size: "lg", variant: 'outline'})}>Create citation</Link>
                        </CardContent>
                    </Card>
                </div>
            )
}
