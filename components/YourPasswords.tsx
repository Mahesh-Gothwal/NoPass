import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";

interface Password {
  website: string;
  uesrname: string;
  password: string;
}

export function YourPasswords({ passwords }: { passwords: Password[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Passwrods</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 h-48 overflow-y-scroll">
          {passwords.map((pw, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center p-2 bg-secondary rounded"
            >
              <div>
                <Link href={pw.website} target="_blank">
                  <div className="font-semibold cursor-pointer text-blue underline">
                    {pw.website}
                  </div>
                </Link>
                <div className="text-sm text-muted-foreground">
                  {pw.uesrname}
                </div>
                <div className="text-sm text-muted-foreground">
                  {pw.password}
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
