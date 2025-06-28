import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xldnazep");

    if (state.succeeded) {
        return <p>Thanks for your submission!</p>;
    }

    return (
        <form className='space-y-8' onSubmit={handleSubmit}>
            <div>
                <label
                    htmlFor='name'
                    className='block text-base font-normal mb-3 text-warmBrown'
                >
                    Full Name
                </label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    className='w-full px-4 sm:px-6 py-4 border border-warmBrown/20 rounded-xl focus:ring-2 focus:ring-warmBrown/30 focus:border-warmBrown transition-all duration-300 bg-white/50 backdrop-blur-sm'
                    placeholder='Your full name'
                />
            </div>
            <div>
                <label
                    htmlFor='email'
                    className='block text-base font-normal mb-3 text-warmBrown'
                >
                    Email Address
                </label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    className='w-full px-4 sm:px-6 py-4 border border-warmBrown/20 rounded-xl focus:ring-2 focus:ring-warmBrown/30 focus:border-warmBrown transition-all duration-300 bg-white/50 backdrop-blur-sm'
                    placeholder='your@email.com'
                />
                <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                />
            </div>
            <div>
                <label
                    htmlFor='message'
                    className='block text-base font-normal mb-3 text-warmBrown'
                >
                    Project Details
                </label>
                <textarea
                    id='message'
                    name='message'
                    rows={6}
                    className='w-full px-4 sm:px-6 py-4 border border-warmBrown/20 rounded-xl focus:ring-2 focus:ring-warmBrown/30 focus:border-warmBrown transition-all duration-300 bg-white/50 backdrop-blur-sm'
                    placeholder='Tell us about your vision and requirements...'
                ></textarea>
                <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                />
            </div>
            <div className='text-sm text-warmBrown/70 font-normal flex flex-col gap-2'>
                <Button
                    size='lg'
                    className='luxury-button w-full text-lg py-4'
                    type='submit'
                >
                    Schedule Consultation
                </Button>
                <ValidationError errors={state.errors} />
                We usually respond within 1-2 business days.
            </div>
        </form>
    );
}
