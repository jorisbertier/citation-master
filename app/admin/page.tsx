import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { DeleteCitationButton } from "./delete-citation-button";

export default async function Page() {
    // set Loading
    // await new Promise((r) => setTimeout(r, 1000))
    const citations = await prisma.citation.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    // set Error
    // throw new Error('Invalid pathname')
    return (
        <Card>
            <CardHeader>
                <CardTitle>URL: / admin</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {citations.map((citation) => (
                    <Card key={citation.id} className="p-8 flex items-start gap-4">
                        <div className="flex flex-col gap-2 flex-1">

                        </div>
                        <p className="realtive pl-8 italic before:content-['«'] before:absolute after:content-['»']">{citation.text}</p>
                        <p>-- {citation.author}</p>
                        <div className="flex flex-col gap-2">
                            <DeleteCitationButton id={citation.id} />
                            <Link href={`/admin/citations/${citation.id}`}
                            className={buttonVariants({size: "lg", variant: 'outline'})}>Edit
                            </Link>
                            <Link href={`/citation/${citation.id}`}
                            className={buttonVariants({size: "lg", variant: 'outline'})}>Partager
                            </Link>
                        </div>
                    </Card>
                ))}
                <Link href="/admin/citations/new" className={buttonVariants({size: "lg", variant: 'outline'})}>Create citation</Link>
            </CardContent>
        </Card>
    )
}