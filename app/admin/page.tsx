import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Link from "next/link";

export default async function Page() {
    // set Loading
    // await new Promise((r) => setTimeout(r, 1000))

    // set Error
    // throw new Error('Invalid pathname')
    return (
        <Card>
            <CardHeader>
                <CardTitle>URL: / admin</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Link href="/admin/citations/1" className={buttonVariants({size: "lg", variant: 'outline'})}>Citation 1</Link>
                <Link href="/admin/citations/joris" className={buttonVariants({size: "lg", variant: 'outline'})}>Citation Joris</Link>
                <Link href="/admin/citations/new" className={buttonVariants({size: "lg", variant: 'outline'})}>Create citation</Link>
            </CardContent>
        </Card>
    )
}