import React from 'react'
import { Layout } from '@/components/about/layout'
import { OurGraphics } from '@/components/about/_ui/our-graphics'
import { ProjectsChart } from '@/components/about/_ui/projects-chart'
import { Faqs } from '@/components/about/_ui/faqs'

export default function AboutPage() {
  const faqs = [
    {
      question: 'What services does your web studio offer?',
      answer:
        'We offer website development, UI/UX design, SEO optimization, branding creation, and ongoing website maintenance and support.',
    },
    {
      question: 'How long does it take to develop a website?',
      answer:
        "The average time to develop a website is between 4 to 12 weeks, depending on the project's complexity and client requirements.",
    },
    {
      question: 'How is the cost of website development determined?',
      answer:
        'The cost is based on the scope and complexity of the project, required features, design, and the timeline for completion.',
    },
    {
      question: 'Do you provide SEO optimization services?',
      answer:
        'Yes, we offer comprehensive SEO optimization services to help your site rank higher in search engines and attract more target users.',
    },
    {
      question: 'What technologies do you use for website development?',
      answer:
        'We use modern technologies like HTML5, CSS3, JavaScript, React, and more to build responsive and high-performance websites.',
    },
    {
      question: 'Do you offer ongoing website maintenance?',
      answer:
        'Yes, we provide ongoing maintenance and support services to ensure your website stays updated, secure, and running smoothly.',
    },
    {
      question: 'Can you redesign an existing website?',
      answer:
        'Absolutely! We can redesign your existing website to improve its look, usability, and performance, while preserving its core content.',
    },
    {
      question: 'What is your approach to web design?',
      answer:
        'We focus on creating user-centered designs that are not only visually appealing but also provide an intuitive and seamless user experience.',
    },
    {
      question: 'How do you ensure the security of the websites you develop?',
      answer:
        'We implement best practices in web security, including SSL certificates, regular updates, secure coding practices, and regular security audits.',
    },
    {
      question: 'Do you offer e-commerce website development?',
      answer:
        'Yes, we specialize in developing e-commerce websites that are secure, scalable, and optimized for conversions.',
    },
  ]

  return (
    <Layout
      projectsChart={<ProjectsChart />}
      ourGraphics={<OurGraphics />}
      faqs={<Faqs faqs={faqs} />}
    />
  )
}
