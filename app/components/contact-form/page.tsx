"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "../button/page";
import SectionTitle from "../section-title/page";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { motion } from "framer-motion";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { fadeUpAnimation } from "@/app/lib/animation";

const ContactForm = () => {
  const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
  });

  type ContactFormData = z.infer<typeof contactFormSchema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso");
      reset();
    } catch {
      toast.error("Ocorreu um erro ao enviar a mensagem, tente novamente");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-34 flex items-center justify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em Contato"
          className="items-center text-center"
        />
        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("name")}
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={500}
            {...register("message")}
          />

          <Button
            className="mt-6 h-max mx-auto shadow-button"
            disabled={isSubmitting}
          >
            Enviar Mensagem <HiArrowNarrowRight size={18} />
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
