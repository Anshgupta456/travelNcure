import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="p-30">
      <Card className="w-[70vh] block mx-auto space-y-5">
        <CardHeader className="text-lg">
          <CardTitle>Register</CardTitle>
          <CardDescription>Register Yourself</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form>
            <div className="flex flex-col gap-3">
              <div className="grid gap-1">
                <Label htmlFor="firstname">First Name</Label>
                <Input id="firstname" type="text" placeholder="First Name" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="lastname">Last Name</Label>
                <Input id="lastname" type="text" placeholder="Last Name" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="emailid">E-Mail ID</Label>
                <Input id="emailid" type="email" placeholder="patient@example.com" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="contact">Contact Number</Label>
                <Input id="contact" type="text" placeholder="Contact Number" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
