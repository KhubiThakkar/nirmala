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
        <form className='space-y-5' onSubmit={handleSubmit}>
            <div className='field-row'>
                <div>
                    <label htmlFor='firstName' className='field-label'>
                        First Name
                    </label>
                    <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        className='field-input'
                        placeholder='First name'
                    />
                </div>
                <div>
                    <label htmlFor='lastName' className='field-label'>
                        Last Name
                    </label>
                    <input
                        id='lastName'
                        name='lastName'
                        type='text'
                        className='field-input'
                        placeholder='Last name'
                    />
                </div>
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
                    className='field-input'
                    placeholder='Tell us about your vision and requirements...'
                ></textarea>
                <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                />
            </div>
            <div className='flex flex-col gap-3 pt-1'>
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
