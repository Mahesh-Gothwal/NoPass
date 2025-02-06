import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <ul className="space-y-2 h-48 overflow-y-auto">
          {passwords.length === 0 && <span className="text-muted-foreground">No passwords added yet</span>}
          {passwords.map((pw, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center p-2 bg-secondary rounded"
            >
              <div>
                <Link href={`${pw.website}`} target="_blank">
                  <div className="font-semibold cursor-pointer text-blue-600 underline">
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
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
