import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Linkedin, Github, MapPin, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mahendra.qrs@gmail.com",
      href: "mailto:mahendra.qrs@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/Mahendra Rasay",
      href: "https://www.linkedin.com/in/mahendra-rasay-9420b3308",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@MahendraRasay",
      href: "https://github.com/MahendraRasay",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-card"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-fade-in-up" data-testid="card-contact-form">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="pr-10"
                              data-testid="input-name"
                            />
                            {form.formState.errors.name && (
                              <X className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                            )}
                            {!form.formState.errors.name && field.value && (
                              <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-chart-2" />
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              {...field}
                              className="pr-10"
                              data-testid="input-email"
                            />
                            {form.formState.errors.email && (
                              <X className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                            )}
                            {!form.formState.errors.email && field.value && (
                              <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-chart-2" />
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Textarea
                              placeholder="Tell me about your project..."
                              className="min-h-32 resize-none"
                              {...field}
                              data-testid="input-message"
                            />
                            {form.formState.errors.message && (
                              <X className="absolute right-3 top-3 h-4 w-4 text-destructive" />
                            )}
                            {!form.formState.errors.message && field.value && (
                              <Check className="absolute right-3 top-3 h-4 w-4 text-chart-2" />
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I'm always open to
                discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card
                  key={method.label}
                  className="hover-elevate transition-all duration-300"
                  data-testid={`card-contact-${method.label.toLowerCase()}`}
                >
                  <CardContent className="p-4">
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <method.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{method.label}</p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <method.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{method.label}</p>
                          <p className="text-foreground font-medium">{method.value}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-chart-2" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-chart-2 animate-ping opacity-75" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Available for new projects</p>
                    <p className="text-sm text-muted-foreground">
                      Currently accepting freelance work
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
