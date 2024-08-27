import { BgcGradients, Container } from '@/components'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function FullProjectPage() {
  return (
    <div className='relative isolate'>
      <BgcGradients position={'top-left'} />

      <Container className={'flex justify-between gap-6'}>
        <div></div>
        <Card className='w-[30%] bg-contain fixed text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur'>
          <CardHeader>
            <CardTitle className='pt-2 text-foreground text-2xl font-medium'>
              Information about this project
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-2 gap-7'></div>
          </CardContent>
        </Card>

        <div className='max-w-[60%]'>
          <img src='/images/about.jpeg' alt='My Image' />
        </div>
      </Container>

      <BgcGradients position={'bottom'} />
    </div>
  )
}
