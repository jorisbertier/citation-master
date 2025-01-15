export default async function Page(props: {
    params: Promise<{
        citationId: string
    }>
    searchParams: Promise<Record<string, string | string[]>>
}) {
const params = await props.params;
const searchParams = await props.searchParams;

console.log(searchParams)
    return (
        <div>
            <h1>{JSON.stringify(params, null, 2)}</h1>
        </div>
    )
}