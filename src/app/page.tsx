import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { BgcGradients } from '@/components/bgc-gradients'

export default function Home() {
  return (
    <>
      <div className='relative isolate'>
        <BgcGradients position={'top-left'} />

        <main>
          <div className='mx-auto max-w-2xl py-32 sm:py-48'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
              <div
                className='relative bg-foreground/5 rounded-full px-4 py-1 text-sm leading-6
                 text-secondary ring-[0.6px] ring-ring border-2'
              >
                Turnkey development for your business{' '}
                <Link href={'#'} className='font-semibold text-foreground'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  Start now <span aria-hidden='true'>&rarr;</span>
                </Link>
              </div>
            </div>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>
                Design your business, redesign your mind
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600 tracking-normal'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Button
                  variant='outline'
                  className='rounded-full px-20 py-8 bg-none font-medium tracking-normal text-2xl text-foreground border-solid border border-border'
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </main>

        <BgcGradients position={'bottom'} />
      </div>
    </>
  )
}
