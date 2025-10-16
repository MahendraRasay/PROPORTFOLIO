import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      res.json({
        success: true,
        message: "Message sent successfully",
        data: message,
      });
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to send message",
        });
      }
    }
  });

  // Get all contact messages (for admin view - optional)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({
        success: true,
        data: messages,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch messages",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
