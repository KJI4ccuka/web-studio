import { BgcGradients, Container } from '@/components'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@radix-ui/react-select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Breadcrumbs } from '@/components/projects/_ui/breadcrumbs'

export default function FullProjectPage() {
  return (
    <div className='relative isolate'>
      <BgcGradients position={'top-left'} />

      <Container className={'flex justify-between gap-6'}>
        <div></div>
        <Card className='w-[30%] fixed text-foreground border bg-[#171719d9]/30 backdrop-blur'>
          <CardHeader className='bg-background/0 border-b p-6'>
            <CardTitle className='text-xl group inline-flex items-center'>
              CosmoDom | capsule houses
            </CardTitle>
            <CardDescription>
              <Breadcrumbs />
            </CardDescription>
          </CardHeader>
          <CardContent className='p-3 lg:p-5 text-sm'>
            <div className='grid gap-3'>
              <div className='font-semibold'>Project Details</div>
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
              <Tabs defaultValue='Technologies' className='w-full'>
                <TabsList
                  className={
                    'bg-background/0 flex justify-around w-full border'
                  }
                >
                  <TabsTrigger
                    className={'text-xs lg:text-sm'}
                    value='Technologies'
                  >
                    Technologies:
                  </TabsTrigger>
                  <TabsTrigger
                    className={'text-xs lg:text-sm'}
                    value='Requirements'
                  >
                    Requirements:
                  </TabsTrigger>
                </TabsList>
                <TabsContent value='Technologies'>
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
                  <ScrollArea className='h-40 w-full border-border border rounded-lg p-2.5'></ScrollArea>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
          <CardFooter className={'border-t p-4'}>
            <div className='text-xs text-foreground/70 font-light'>
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
