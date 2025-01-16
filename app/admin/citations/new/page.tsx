"use client";

import { Button } from '@/src/components/ui/button';
import { useFormStatus } from 'react-dom';
import { CitationForm } from '../citation-form';
// import Form from 'next/form'

export default function Page() {

return (<CitationForm />)
}

const SubmitButton = () => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} type="submit">
            {pending ? "Loading..." : "Submit"}
        </Button>
    )
}