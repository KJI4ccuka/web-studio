import { BgcGradients, Container } from '@/components'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@radix-ui/react-select'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function FullProjectPage() {
  return (
    <div className='relative isolate'>
      <BgcGradients position={'top-left'} />

      <Container className={'flex justify-between gap-6'}>
        <div></div>
        <Card className='w-[30%] bg-contain fixed text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur'>
          <CardHeader className='flex p-3.5 flex-row items-center justify-between bg-[#141419] xl:p-5'>
            <CardTitle className='text-sm group inline-flex items-center xl:text-lg'>
              {'productsInfo.name'}
            </CardTitle>
          </CardHeader>
          <CardContent className='p-3 lg:p-5 text-sm'>
            <div className='grid gap-3'>
              <div className='font-semibold'>Product Details</div>
              <ul className='grid gap-3'>
                <li className='flex items-center justify-between'>
                  <span className='text-muted-foreground'>Time left:</span>
                  <span className={'text-red-500'}>{'days'} DAYS</span>
                </li>
                <li className='flex items-center justify-between'>
                  <span className='text-muted-foreground'>Status:</span>
                </li>
              </ul>
              <Separator className='my-2' />
              <Tabs defaultValue='Changelog' className='w-full'>
                <TabsList className={'bg-background-01'}>
                  <TabsTrigger
                    className={'text-xs lg:text-sm'}
                    value='Changelog'
                  >
                    Changelog:
                  </TabsTrigger>
                  <TabsTrigger
                    className={'text-xs lg:text-sm'}
                    value='Requirements'
                  >
                    Requirements:
                  </TabsTrigger>
                </TabsList>
                <TabsContent value='Changelog'>
                  <ScrollArea className='h-40 w-full border-border border rounded-lg p-2.5'>
                    <ul className='grid gap-3 mr-1.5'>
                      <li className='flex flex-col items-left justify-between'>
                        <span className='text-xs text-muted-foreground lg:text-sm'>
                          {'productsInfo.product_changelog_title'}:
                        </span>
                        <span className={'text-xs font-light lg:text-sm'}>
                          {'productsInfo.product_changelog_body'}
                        </span>
                      </li>
                    </ul>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value='Requirements'>
                  <ScrollArea className='h-40 w-full border-border border rounded-lg p-2.5'>
                    {/*<ul className='grid gap-3 mr-1.5'>*/}
                    {/*  {productsInfo.product_requirements.map((item, index) => {*/}
                    {/*    const [key, value] = Object.entries(item)[0]*/}

                    {/*    return (*/}
                    {/*      <li*/}
                    {/*        key={index}*/}
                    {/*        className='flex items-center justify-between'*/}
                    {/*      >*/}
                    {/*        <span className='text-xs text-muted-foreground font-light lg:text-sm'>*/}
                    {/*          - {key}*/}
                    {/*        </span>*/}
                    {/*        <span className={'text-xs lg:text-sm'}>*/}
                    {/*          {value.toUpperCase()}*/}
                    {/*        </span>*/}
                    {/*      </li>*/}
                    {/*    )*/}
                    {/*  })}*/}
                    {/*</ul>*/}
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
          <CardFooter>
            <div className='text-xs text-foreground/80 font-light'>
              Last update:{' '}
              <time dateTime='2023-11-23'>Last update: 08.15.2025</time>
            </div>
          </CardFooter>
        </Card>

        <div className='max-w-[60%]'>
          <img src='/images/about.jpeg' alt='My Image' />
        </div>
      </Container>

      <BgcGradients position={'bottom'} />
    </div>
  )
}
