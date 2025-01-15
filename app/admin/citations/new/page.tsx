import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
// import Form from 'next/form'

export default function Page() {
    return(
        <Card className="p-6">
            <CardHeader>
                <CardTitle>Create Citation</CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    action="/api/citations"
                    method="post"
                >
                    <Label>
                        Citation
                        <Input name="citation"/>
                    </Label>
                    <Label>
                        Author
                        <Input name="author"/>
                    </Label>
                    <Button type="submit">Submit</Button>
                </form>
            </CardContent>
        </Card>
    )
}