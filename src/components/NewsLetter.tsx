"use client";

import { useState } from "react";
import { toast } from "sonner";
import Container from "./Container";
import Subtitle from "./Subtitle";
import { Button, Input } from "./ui";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    toast.success("Email subscribed successfully");
  };

  return (
    <section className="mt-10 md:mt-20">
      <Container>
        <div className="py-5 max-w-xl mx-auto text-center space-y-2">
          <h2 className="font-bold text-xl md:text-2xl">Subscribe to our newsletter</h2>
          <Subtitle className="text-muted-foreground">
            Stay updated with the latest news, tips, and exclusive offers—delivered straight to your
            inbox!
          </Subtitle>

          <div className="flex gap-2">
            <Input
              className="h-11"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target?.value)}
            />
            <Button className="h-11" variant={"secondary"} onClick={handleSubmit}>
              Subscribe
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
