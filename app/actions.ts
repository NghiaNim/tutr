"use server";

import { supabase } from "@/lib/supabase";

type InquiryData = {
  name: string;
  email: string;
  examType: string;
  subject: string;
  message: string;
};

type TutorApplicationData = {
  name: string;
  email: string;
  subjects: string[];
  background: string;
};

export async function submitInquiry(data: InquiryData) {
  const { error } = await supabase.from("student_inquiries").insert({
    name: data.name,
    email: data.email,
    exam_type: data.examType,
    subject: data.subject,
    message: data.message,
  });

  if (error) {
    console.error("Inquiry submission error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function submitTutorApplication(data: TutorApplicationData) {
  const { error } = await supabase.from("tutor_applications").insert({
    name: data.name,
    email: data.email,
    subjects: data.subjects,
    background: data.background,
  });

  if (error) {
    console.error("Tutor application error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

