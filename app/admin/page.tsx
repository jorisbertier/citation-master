import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

export default async function Page() {
    await new Promise((r) => setTimeout(r, 3000))
    return (
        <Card>
            <CardHeader>
                <CardTitle>URL: / admin</CardTitle>
            </CardHeader>
        </Card>
    )
}