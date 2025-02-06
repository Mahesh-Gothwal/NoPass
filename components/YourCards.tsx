import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CardProps{
  cardNo: string,
  expiry: string,
  cvv: number
}

export function YourCards({cards}:{cards:CardProps[]}) {


  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Cards</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 h-48 overflow-y-auto">
          {cards.length === 0 && <span className="text-muted-foreground">No cards added yet</span>}
          {cards.map((card:CardProps)=>(
            <li key={card.cardNo} className="flex justify-between items-center p-2 bg-secondary rounded">
              <span>{card.cardNo}</span>
              <span>{card.expiry}</span>
              <span>{card.cvv}</span>
              </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

