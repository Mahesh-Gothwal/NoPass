import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function YourPasswords() {
  // TODO: Fetch actual password data
  const passwords = [
    { id: 1, website: "example.com", username: "johndoe" },
    { id: 2, website: "test.com", username: "janedoe" },
  ]

  return (
    <div className="space-y-4">
      {passwords.map((password) => (
        <Card key={password.id}>
          <CardHeader>
            <CardTitle>{password.website}</CardTitle>
            <CardDescription>{password.username}</CardDescription>
          </CardHeader>
          <CardContent>{/* Add password actions here (e.g., copy, reveal) */}</CardContent>
        </Card>
      ))}
    </div>
  )
}

