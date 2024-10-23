"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Faq() {
    return (
        <div className="w-full flex justify-center pt-5">
            <div className=" justify-center w-5/6">
                <Accordion type="single" collapsible className="w-full ">

                    <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl text-slate-200">Will I receive a certificate for each course?
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-slate-300">
                    Yes — each student who completes any course will receive a certificate of completion to acknowledge their proficiency. We encourage students to include these on their LinkedIn profiles and in their job applications!
                    </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl text-slate-200">Can I get source code of each course?</AccordionTrigger>
                    <AccordionContent className="text-lg text-slate-300">
                    Yes - You will get source code of all courses when you will watch the course video.
                    </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl text-slate-200">Can I ask about anything related course or if my code dosen't work?</AccordionTrigger>
                    <AccordionContent className="text-lg text-slate-300">
                    Yes, you can comment on every part of the videos in the course. We will always try to reply to your comment and fix any issues you may have.
                    </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                    <AccordionTrigger className="text-xl text-slate-200">Can I download any course videos?
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-slate-300">
                    For security reasons, course videos cannot be downloaded. However, you have lifetime access to each purchased course and can watch them anytime, anywhere with your account
                    </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
      </div>
    )
  }
  
