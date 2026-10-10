"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xldnazep");

    if (state.succeeded) {
        return (
            <p className='text-ink-secondary text-center py-8'>
                Thanks for your submission!
            </p>
        );
    }

    return (
        <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name' className='field-label'>
                    Full Name
                </label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    className='field-input'
                    placeholder='Your full name'
                />
            </div>
            <div>
                <label htmlFor='email' className='field-label'>
                    Email Address
                </label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    className='field-input'
                    placeholder='your@email.com'
                />
                <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                />
            </div>
            <div>
                <label htmlFor='message' className='field-label'>
                    Project Details
                </label>
                <textarea
                    id='message'
                    name='message'
                    rows={5}
                    style={{ resize: "none" }}
                    className='field-input py-3'
                    placeholder='Tell us about your vision and requirements...'
                ></textarea>
                <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                />
            </div>
            <div className='flex flex-col gap-3'>
                <button type='submit' className='btn btn-primary w-full'>
                    Schedule Consultation
                </button>
                <ValidationError errors={state.errors} />
                <p className='text-xs text-ink-muted'>
                    We usually respond within 1-2 business days.
                </p>
            </div>
        </form>
    );
}
