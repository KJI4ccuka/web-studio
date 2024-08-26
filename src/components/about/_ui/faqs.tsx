import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type IFaq = {
  question: string
  answer: string
}

interface IProps {
  faqs: IFaq[]
  className?: string
}

export const Faqs: React.FC<IProps> = ({ faqs, className }) => {
  return (
    <Card className='pt-10 pb-3 text-foreground drop-shadow-xl rounded-2xl border-border/60 bg-[#171719d9]/30 backdrop-blur'>
      <CardContent className='mx-auto max-w-4xl'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='text-2xl mb-7 text-center font-bold leading-9 tracking-wide text-foreground xs:text-3xl sm:text-4xl sm:mt-10'>
            FAQS
          </h2>
        </div>
        <Accordion
          type='single'
          collapsible
          className='w-full text-left flex flex-col gap-3'
        >
          {faqs.map((item, index) => (
            <AccordionItem key={index} value={`${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className={'text-muted-foreground '}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
